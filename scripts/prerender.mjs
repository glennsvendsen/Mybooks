// Static prerender for GitHub Pages. Runs after `vite build` and the SSR build (see package.json).
// For every route in src/lib/routes.ts it writes dist/<file> with the page's HTML and its own <head>
// (title, description, canonical, Open Graph, JSON-LD), so /privacy answers 200 with real
// content instead of GitHub's 404 page. It also writes 404.html, sitemap.xml and robots.txt.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssr = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const { render, ROUTES, SITE, homeFaq, switchFaq } = ssr;

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const abs = (p) => SITE.siteUrl.replace(/\/$/, "") + (p === "/" ? "/" : p);
const today = new Date().toISOString().slice(0, 10);

const org = { "@type": "Organization", name: SITE.company, url: SITE.siteUrl, email: SITE.contactEmail };
const app = {
  "@type": "MobileApplication",
  name: "Everleaf",
  alternateName: SITE.formerName,
  operatingSystem: "iOS 17.0 or later",
  applicationCategory: "LifestyleApplication",
  description: "A private book tracker and reading journal for iPhone. No account, no ads, free iCloud backup, Goodreads and StoryGraph import.",
  url: SITE.siteUrl,
  downloadUrl: SITE.appStoreUrl,
  installUrl: SITE.appStoreUrl,
  image: SITE.siteUrl + "icon-256.png",
  screenshot: SITE.siteUrl + "shots/en-02-library.jpg",
  inLanguage: ["en", "nb"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: org,
};
const faqLd = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
const crumbs = (r) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Everleaf", item: abs("/") },
    { "@type": "ListItem", position: 2, name: r.title.split(" | ")[0], item: abs(r.path) },
  ],
});
const ldFor = (r) => {
  const graph = { "/": [org, app, faqLd(homeFaq)], "/goodreads-alternative": [app, faqLd(switchFaq), crumbs(r)] }[r.path] ?? [crumbs(r)];
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
};

const head = (r, { noindex = false } = {}) => [
  `<title>${esc(r.title)}</title>`,
  `<meta name="description" content="${esc(r.description)}" />`,
  noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${abs(r.path)}" />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:site_name" content="Everleaf" />`,
  `<meta property="og:locale" content="${r.lang === "no" ? "nb_NO" : "en_US"}" />`,
  r.lang ? "" : `<meta property="og:locale:alternate" content="nb_NO" />`,
  ...(r.alt ? [r, ROUTES.find((x) => x.path === r.alt)].map((x) => `<link rel="alternate" hreflang="${x.lang === "no" ? "nb" : "en"}" href="${abs(x.path)}" />`) : []),
  `<meta property="og:title" content="${esc(r.title)}" />`,
  `<meta property="og:description" content="${esc(r.description)}" />`,
  `<meta property="og:url" content="${abs(r.path)}" />`,
  `<meta property="og:image" content="${SITE.siteUrl}og-${r.lang === "no" ? "no" : "en"}.jpg" />`,
  `<meta property="og:image:width" content="1200" />`,
  `<meta property="og:image:height" content="514" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
  `<meta name="twitter:title" content="${esc(r.title)}" />`,
  `<meta name="twitter:description" content="${esc(r.description)}" />`,
  `<meta name="twitter:image" content="${SITE.siteUrl}og-${r.lang === "no" ? "no" : "en"}.jpg" />`,
  noindex ? "" : `<script type="application/ld+json">${ldFor(r)}</script>`,
].filter(Boolean).join("\n  ");

const page = (r, url, opts) => {
  if (!template.includes("<!--app-head-->") || !template.includes('<div id="root"></div>')) {
    throw new Error("index.html is missing <!--app-head--> or <div id=\"root\"></div>");
  }
  return template
    .replace('<html lang="en">', `<html lang="${r.lang === "no" ? "nb" : "en"}">`)
    .replace("<!--app-head-->", head(r, opts))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
};

for (const r of ROUTES) {
  fs.writeFileSync(path.join(dist, r.file), page(r, r.path));
  console.log("prerendered", r.path, "->", r.file);
}
fs.writeFileSync(
  path.join(dist, "404.html"),
  page({ path: "/404", title: "Page not found | Everleaf", description: "This page does not exist." }, "/404", { noindex: true }),
);

const urls = ROUTES.map((r) => `  <url><loc>${abs(r.path)}</loc><lastmod>${today}</lastmod><priority>${r.priority.toFixed(1)}</priority></url>`);
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${abs("/sitemap.xml")}\n`);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log("wrote 404.html, sitemap.xml, robots.txt");

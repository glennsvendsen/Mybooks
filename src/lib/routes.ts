// One place for per-page SEO. Used by the client (document.title) and by scripts/prerender.mjs
// (static <head> tags per route). Keep titles under ~60 characters and descriptions under ~160.
// `lang` pins a page to one language (its own URL per language, linked with hreflang through `alt`).
export type RouteMeta = { path: string; file: string; title: string; description: string; priority: number; lang?: "en" | "no"; alt?: string };

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    file: "index.html",
    title: "Everleaf: Private Book Tracker & Reading Journal for iPhone",
    description: "Track the books you read with no account, no ads and free iCloud backup. Scan ISBN barcodes, import from Goodreads or StoryGraph, set reading goals. Free on iPhone.",
    priority: 1.0,
  },
  {
    path: "/goodreads-alternative",
    file: "goodreads-alternative.html",
    title: "A Private Goodreads Alternative for iPhone | Everleaf",
    description: "Looking for a Goodreads or StoryGraph alternative? Everleaf is a private, ad-free book tracker with no account. Import your Goodreads library in minutes, for free.",
    priority: 0.9,
  },
  {
    path: "/privacy",
    file: "privacy.html",
    title: "Privacy Policy | Everleaf",
    description: "How Everleaf handles your data: no account, no ads, no tracking. Your library stays on your iPhone and in your own iCloud.",
    priority: 0.5,
  },
  {
    path: "/support",
    file: "support.html",
    title: "Help & Support | Everleaf",
    description: "Get help with Everleaf: iCloud backup and sync, importing from Goodreads, moving to a new iPhone, Premium plans and restoring purchases.",
    priority: 0.6,
  },
  {
    path: "/whats-new",
    file: "whats-new.html",
    title: "What's New: Release Notes & Coming Soon | Everleaf",
    description: "What's new in Everleaf, the private book tracker for iPhone: release notes for every update, and what's coming next, like shelves, shared shelves and reading reminders.",
    priority: 0.7,
  },
  {
    path: "/leselyst",
    file: "leselyst.html",
    title: "Leselyst hos ungdom: hva forskningen sier | Everleaf",
    description: "Hvorfor lesing betyr noe for ungdom, hva forskningen faktisk viser, og konkrete råd til foreldre, lærere og unge lesere. Med kilder.",
    priority: 0.8,
    lang: "no",
    alt: "/reading-for-pleasure",
  },
  {
    path: "/reading-for-pleasure",
    file: "reading-for-pleasure.html",
    title: "Reading for Pleasure in Teens: What the Research Says | Everleaf",
    description: "Why reading for pleasure matters for teenagers, what the research actually shows, and practical tips for parents, teachers and young readers. With sources.",
    priority: 0.8,
    lang: "en",
    alt: "/leselyst",
  },
];

export const langForPath = (path: string) => ROUTES.find((r) => r.path === path)?.lang;

export const metaFor = (path: string) => ROUTES.find((r) => r.path === path);

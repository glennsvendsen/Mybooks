// One place for per-page SEO. Used by the client (document.title) and by scripts/prerender.mjs
// (static <head> tags per route). Keep titles under ~60 characters and descriptions under ~160.
export type RouteMeta = { path: string; file: string; title: string; description: string; priority: number };

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    file: "index.html",
    title: "MyBooks: Private Book Tracker & Reading Journal for iPhone",
    description: "Track the books you read with no account, no ads and free iCloud backup. Scan ISBN barcodes, import from Goodreads or StoryGraph, set reading goals. Free on iPhone.",
    priority: 1.0,
  },
  {
    path: "/goodreads-alternative",
    file: "goodreads-alternative.html",
    title: "A Private Goodreads Alternative for iPhone | MyBooks",
    description: "Looking for a Goodreads or StoryGraph alternative? MyBooks is a private, ad-free book tracker with no account. Import your Goodreads library in minutes, for free.",
    priority: 0.9,
  },
  {
    path: "/privacy",
    file: "privacy.html",
    title: "Privacy Policy | MyBooks",
    description: "How MyBooks handles your data: no account, no ads, no tracking. Your library stays on your iPhone and in your own iCloud.",
    priority: 0.5,
  },
  {
    path: "/support",
    file: "support.html",
    title: "Help & Support | MyBooks",
    description: "Get help with MyBooks: iCloud backup and sync, importing from Goodreads, moving to a new iPhone, Premium plans and restoring purchases.",
    priority: 0.6,
  },
];

export const metaFor = (path: string) => ROUTES.find((r) => r.path === path);

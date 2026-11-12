// Site-wide constants.
export const SITE = {
  name: "Everleaf",
  // Shown as the maker in the footer, privacy policy and structured data.
  company: "Everleaf",
  // Until 1.7 is live the App Store listing still says MyBooks. Set to false when Everleaf is live in the App Store.
  stillListedAsFormerName: true,
  formerName: "MyBooks",
  appStoreUrl: "https://apps.apple.com/no/app/mybooks-book-tracking-app/id6755761216",
  appStoreId: "6755761216",
  contactEmail: "hello@everleafapp.com",
  // Canonical public URL, used for canonical links, og:image, JSON-LD and the sitemap.
  siteUrl: "https://everleafapp.com/",
};
export const hasStoreUrl = SITE.appStoreUrl.startsWith("http");

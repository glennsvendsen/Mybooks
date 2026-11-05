// Site-wide constants. Fill the TODO values before merging to main.
export const SITE = {
  name: "MyBooks",
  company: "Arctic Labs",
  appStoreUrl: "https://apps.apple.com/no/app/mybooks-book-tracking-app/id6755761216",
  appStoreId: "6755761216",
  // Existing contact address already used on the old Privacy/Support pages. TODO: confirm it should stay public.
  contactEmail: "glennsvends1@gmail.com",
  // TODO: canonical public URL, used for og:image absolute URLs.
  siteUrl: "https://glennsvendsen.github.io/Mybooks/",
};
export const hasStoreUrl = SITE.appStoreUrl.startsWith("http");

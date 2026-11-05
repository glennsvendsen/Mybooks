// Site-wide constants. Fill the TODO values before merging to main.
export const SITE = {
  name: "MyBooks",
  company: "Arctic Labs",
  // TODO: replace with the real App Store URL (https://apps.apple.com/app/idXXXXXXXXX) once the app is live.
  appStoreUrl: "#download",
  // TODO: real App Store numeric ID, then also enable the apple-itunes-app meta tag in index.html.
  appStoreId: "TODO",
  // Existing contact address already used on the old Privacy/Support pages. TODO: confirm it should stay public.
  contactEmail: "glennsvends1@gmail.com",
  // TODO: canonical public URL, used for og:image absolute URLs.
  siteUrl: "https://glennsvendsen.github.io/Mybooks/",
};
export const hasStoreUrl = SITE.appStoreUrl.startsWith("http");

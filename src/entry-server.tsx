import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";

/** Renders one route to HTML for the static prerender (scripts/prerender.mjs). English by default. */
export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url} basename="/Mybooks">
      <AppRoutes />
    </StaticRouter>,
  );

export { ROUTES } from "./lib/routes";
export { SITE } from "./lib/site";
import { dicts } from "./lib/i18n";
import { switchDicts } from "./pages/GoodreadsAlternative";
export const homeFaq = dicts.en.faq.items;
export const switchFaq = switchDicts.en.faq;

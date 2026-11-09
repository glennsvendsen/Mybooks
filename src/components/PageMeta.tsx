import { useEffect } from "react";
import { metaFor } from "@/lib/routes";

/** Keeps the tab title right on client-side navigation. The static <head> per page comes from the prerender. */
const PageMeta = ({ path }: { path: string }) => {
  useEffect(() => {
    const m = metaFor(path);
    if (m) document.title = m.title;
  }, [path]);
  return null;
};

export default PageMeta;

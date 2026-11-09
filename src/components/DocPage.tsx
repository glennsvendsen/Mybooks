import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import PageMeta from "./PageMeta";

type Props = { path: string; eyebrow?: string; title: string; intro?: ReactNode; children: ReactNode; wide?: boolean };

/** Shared shell for text pages (privacy, support, switching guide). */
const DocPage = ({ path, eyebrow, title, intro, children, wide = false }: Props) => (
  <div className="flex min-h-screen flex-col">
    <PageMeta path={path} />
    <Nav />
    <main className="flex-1">
      <div className={`mx-auto px-5 pb-20 pt-14 sm:px-8 md:pt-20 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>}
        <h1 className="text-balance hyphens-auto text-4xl [overflow-wrap:break-word] sm:text-5xl">{title}</h1>
        {intro && <div className="mt-6 text-lg text-muted-foreground sm:text-xl">{intro}</div>}
        <div className="mt-12">{children}</div>
      </div>
    </main>
    <Footer />
  </div>
);

export const Prose = ({ children }: { children: ReactNode }) => (
  <div className="space-y-10 text-[17px] leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:text-foreground [&_li]:pl-1 [&_strong]:text-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_p+p]:mt-3">
    {children}
  </div>
);

export default DocPage;

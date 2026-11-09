import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const base = import.meta.env.BASE_URL;

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 font-serif-display text-xl font-semibold tracking-tight">
    <img src={`${base}icon-256.png`} alt="" width={32} height={32} className="h-8 w-8 rounded-[9px] shadow-soft" />
    Everleaf
  </Link>
);

export const Controls = () => {
  const { lang, setLang, t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <div role="group" aria-label={t.footer.language} className="flex rounded-full border border-border bg-card p-0.5 text-sm font-medium">
        {(["en", "no"] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            lang={l === "no" ? "nb" : "en"}
            className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {l === "en" ? "EN" : "NO"}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-label={t.footer.theme}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
      >
        <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
        <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
      </button>
    </div>
  );
};

const Nav = ({ home = false }: { home?: boolean }) => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    ["#features", t.nav.features],
    ["#icloud", t.nav.icloud],
    ["#privacy", t.nav.privacy],
    ["#premium", t.nav.premium],
    ["#faq", t.nav.faq],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        {home && (
          <nav aria-label="Main" className="hidden items-center gap-6 text-[15px] lg:flex">
            {links.map(([h, l]) => (
              <a key={h} href={h} className="text-muted-foreground transition hover:text-foreground">{l}</a>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-2">
          <Controls />
          {home && (
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card lg:hidden"
              aria-label={t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>
      {home && open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2.5 text-lg">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Nav;

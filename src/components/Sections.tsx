import { Check, Barcode, BookOpenCheck, Library, ListPlus, BarChart3, Sparkles, Archive, Moon, Smartphone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import Phone, { SHOTS } from "./Phone";
import StoreBadge from "./StoreBadge";
import { ChevronDown } from "lucide-react";

const wrap = "mx-auto max-w-6xl px-5 sm:px-8";
const h2 = "text-3xl sm:text-4xl md:text-[2.75rem]";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-secondary blur-3xl opacity-80" />
      <div className={`${wrap} relative grid items-center gap-14 pb-20 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-24`}>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{t.hero.eyebrow}</p>
          <h1 className="text-balance text-[2.6rem] sm:text-6xl lg:text-[4.25rem]">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <StoreBadge />
            <span className="text-sm text-muted-foreground">{t.hero.note}</span>
          </div>
        </div>
        <div className="relative mx-auto w-[min(62vw,16rem)] md:w-[15.5rem] lg:ml-16">
          <Phone index={1} className="absolute -left-28 top-12 z-0 hidden w-full -rotate-6 lg:block" />
          <Phone index={0} priority className="relative z-10 w-full md:rotate-2" />
        </div>
      </div>
    </section>
  );
};

export const Showcase = () => {
  const { t } = useLang();
  return (
    <section className="border-y border-border bg-card/60 py-20 md:py-28" aria-labelledby="showcase-h">
      <div className={wrap}>
        <h2 id="showcase-h" className={h2}>{t.showcase.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.showcase.sub}</p>
      </div>
      <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 sm:px-8 lg:justify-center [scrollbar-width:thin]" tabIndex={0} aria-label={t.showcase.title}>
        {SHOTS.map((s, i) => (
          <li key={s} className="w-56 shrink-0 snap-center sm:w-60">
            <Phone index={i} />
            <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{t.showcase.captions[i]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const featureIcons = [BookOpenCheck, Library, Barcode, ListPlus, BarChart3, Sparkles];
export const Features = () => {
  const { t } = useLang();
  return (
    <section id="features" className={`${wrap} py-20 md:py-28`} aria-labelledby="features-h">
      <h2 id="features-h" className={h2}>{t.features.title}</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.features.sub}</p>
      <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((f, i) => {
          const Icon = featureIcons[i];
          return (
            <article key={f.title}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="text-xl">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export const How = () => {
  const { t } = useLang();
  return (
    <section id="how" className="bg-secondary/60 py-20 md:py-28" aria-labelledby="how-h">
      <div className={wrap}>
        <h2 id="how-h" className={h2}>{t.how.title}</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="font-serif-display text-5xl font-semibold text-primary/40" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl">{t.more.title}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {t.more.items.map((m, i) => {
              const Icon = [Archive, Moon, Smartphone][i];
              return (
                <div key={m.title} className="flex gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3 className="text-lg">{m.title}</h3>
                    <p className="mt-1 text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Premium = () => {
  const { t } = useLang();
  const p = t.premium;
  return (
    <section id="premium" className={`${wrap} py-20 md:py-28`} aria-labelledby="premium-h">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{p.eyebrow}</p>
          <h2 id="premium-h" className={h2}>{p.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{p.body}</p>
          <p className="mt-6 text-sm text-muted-foreground">{p.note}</p>
        </div>
        <div className="grid gap-4">
          {[{ label: p.freeLabel, items: p.free, hl: false }, { label: p.paidLabel, items: p.paid, hl: true }].map((c) => (
            <div key={c.label} className={`rounded-3xl border p-7 shadow-soft ${c.hl ? "border-primary/40 bg-secondary" : "border-border bg-card"}`}>
              <h3 className="text-lg">{c.label}</h3>
              <ul className="mt-4 space-y-3">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Faq = () => {
  const { t } = useLang();
  return (
    <section id="faq" className="border-t border-border py-20 md:py-28" aria-labelledby="faq-h">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 id="faq-h" className={h2}>{t.faq.title}</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {t.faq.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCta = () => {
  const { t } = useLang();
  return (
    <section id="download" className={`${wrap} pb-20 md:pb-28`}>
      <div className="rounded-[2rem] bg-secondary px-6 py-16 text-center sm:px-12">
        <h2 className={h2}>{t.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">{t.cta.sub}</p>
        <div className="mt-8 flex justify-center"><StoreBadge /></div>
      </div>
    </section>
  );
};

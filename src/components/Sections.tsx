import {
  Check, Minus, Barcode, BookOpenCheck, Library, FileUp, BarChart3, Share2, RefreshCw, CalendarHeart, Sparkles,
  Star, FileDown, Moon, Smartphone, CloudUpload, Cloud, ChevronDown, UserX, EyeOff, Lock, Users, DoorOpen, HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLang, type Tier } from "@/lib/i18n";
import Phone, { SHOTS } from "./Phone";
import StoreBadge from "./StoreBadge";
import { SITE } from "@/lib/site";

const wrap = "mx-auto max-w-6xl px-5 sm:px-8";
const h2 = "text-3xl sm:text-4xl md:text-[2.75rem]";
const eyebrow = "mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary";

export const TierPill = ({ tier }: { tier: Tier }) => {
  const { t } = useLang();
  const style = tier === "premium"
    ? "bg-primary text-primary-foreground"
    : tier === "both"
      ? "border border-primary/40 text-primary"
      : "bg-secondary text-secondary-foreground";
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ${style}`}>{t.tiers[tier]}</span>;
};

export const Hero = () => {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-secondary blur-3xl opacity-80" />
      <div className={`${wrap} relative grid items-center gap-14 pb-20 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-24`}>
        <div>
          <p className={`${eyebrow} mb-5`}>{t.hero.eyebrow}</p>
          <h1 className="text-balance text-[2.6rem] sm:text-6xl lg:text-[4.25rem]">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">{t.hero.sub}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
            {t.hero.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />{p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <StoreBadge />
            <span className="text-sm text-muted-foreground">{t.hero.note}</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            {t.rename.formerly}{SITE.stillListedAsFormerName && <> {t.rename.listed}</>}
          </p>
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

const featureIcons = [BookOpenCheck, Library, Barcode, FileUp, BarChart3, Share2, RefreshCw, CalendarHeart, Sparkles];
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
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <TierPill tier={f.tier} />
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

export const ICloud = () => {
  const { t } = useLang();
  const c = t.icloud;
  const cards = [
    { ...c.backup, Icon: CloudUpload, hl: false },
    { ...c.sync, Icon: Cloud, hl: true },
  ];
  return (
    <section id="icloud" className="border-y border-border bg-card/60 py-20 md:py-28" aria-labelledby="icloud-h">
      <div className={wrap}>
        <p className={eyebrow}>{c.eyebrow}</p>
        <h2 id="icloud-h" className={h2}>{c.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{c.sub}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map(({ Icon, ...card }) => (
            <article key={card.title} className={`rounded-3xl border p-7 shadow-soft sm:p-9 ${card.hl ? "border-primary/40 bg-secondary" : "border-border bg-card"}`}>
              <div className="flex items-center justify-between gap-3">
                <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <TierPill tier={card.hl ? "premium" : "free"} />
              </div>
              <h3 className="mt-5 text-2xl">{card.title}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{card.label}</p>
              <p className="mt-3 text-muted-foreground">{card.body}</p>
              <ul className="mt-5 space-y-2.5">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{c.note}</p>
      </div>
    </section>
  );
};

const valueIcons = [UserX, EyeOff, Lock, Users, DoorOpen, HeartHandshake];
export const Values = () => {
  const { t } = useLang();
  const v = t.values;
  return (
    <section id="privacy" className={`${wrap} py-20 md:py-28`} aria-labelledby="values-h">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className={eyebrow}>{v.eyebrow}</p>
          <h2 id="values-h" className={h2}>{v.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{v.sub}</p>
          <Link to="/privacy" className="mt-6 inline-block font-semibold text-primary underline-offset-4 hover:underline">{v.link} →</Link>
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {v.items.map((it, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={it.title} className="flex gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3 className="text-lg">{it.title}</h3>
                  <p className="mt-1 text-muted-foreground">{it.body}</p>
                </div>
              </div>
            );
          })}
        </div>
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
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.more.items.map((m, i) => {
              const Icon = [Star, FileDown, Moon, Smartphone][i];
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

const Mark = ({ on, yes, no }: { on: boolean; yes: string; no: string }) =>
  on
    ? <Check className="mx-auto h-5 w-5 text-primary" aria-label={yes} />
    : <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" aria-label={no} />;

export const Compare = () => {
  const { t } = useLang();
  const c = t.compare;
  return (
    <section id="premium" className={`${wrap} py-20 md:py-28`} aria-labelledby="compare-h">
      <p className={eyebrow}>{c.eyebrow}</p>
      <h2 id="compare-h" className={h2}>{c.title}</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{c.sub}</p>
      <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        <table className="w-full border-collapse text-left text-[15px] sm:text-base">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              <th scope="col" className="px-5 py-4 font-semibold sm:px-7">{c.colFeature}</th>
              <th scope="col" className="w-20 px-2 py-4 text-center font-semibold sm:w-32">{c.colFree}</th>
              <th scope="col" className="w-24 bg-secondary px-2 py-4 text-center font-semibold text-primary sm:w-32">{c.colPremium}</th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r, i) => (
              <tr key={r.label} className={`border-b border-border/70 last:border-0 ${!r.free && c.rows[i - 1]?.free ? "border-t-2 border-t-border" : ""}`}>
                <th scope="row" className="px-5 py-3.5 font-normal sm:px-7">{r.label}</th>
                <td className="px-2 py-3.5"><Mark on={r.free} yes={c.yes} no={c.no} /></td>
                <td className="bg-secondary/50 px-2 py-3.5"><Mark on yes={c.yes} no={c.no} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export const Plans = () => {
  const { t } = useLang();
  const p = t.plans;
  return (
    <section className="bg-secondary/60 py-20 md:py-24" aria-labelledby="plans-h">
      <div className={`${wrap} grid items-start gap-12 md:grid-cols-[1fr_1.1fr]`}>
        <div>
          <p className={eyebrow}>{p.eyebrow}</p>
          <h2 id="plans-h" className={h2}>{p.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{p.body}</p>
          <p className="mt-6 text-sm text-muted-foreground">{p.note}</p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5 shrink-0" aria-hidden="true" />{p.trial}
          </div>
          {p.items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <h3 className="text-xl">{it.title}</h3>
              <p className="mt-1 text-muted-foreground">{it.body}</p>
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
    <section id="faq" className="py-20 md:py-28" aria-labelledby="faq-h">
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

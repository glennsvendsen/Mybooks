import { Library, Users, Bell, WandSparkles, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import DocPage from "@/components/DocPage";
import StoreBadge from "@/components/StoreBadge";
import { TierPill } from "@/components/Sections";
import { useLang, type Lang, type Tier } from "@/lib/i18n";

// To publish a release: move its items from `next` into a new entry at the top of `releases`,
// and set `next` to the following version (or an empty list to hide the section).
type NextItem = { icon: LucideIcon; tier: Tier; title: string; body: string };
type Release = { version: string; date: string; inReview?: boolean; title: string; items: string[] };
type Dict = {
  eyebrow: string; title: string; intro: string;
  nextEyebrow: string; nextTitle: string; nextNote: string; next: NextItem[];
  historyTitle: string; inReview: string; releases: Release[];
  ctaTitle: string;
};

const dicts: Record<Lang, Dict> = {
  en: {
    eyebrow: "What's new",
    title: "What's new in Everleaf",
    intro: "Everleaf is made by a small independent studio and gets better every few weeks. Here is what we are working on and what changed in each update.",
    nextEyebrow: "Coming in 1.7.5",
    nextTitle: "What we are working on",
    nextNote: "In progress, so details may still change. Everything still runs on your iPhone and in your own iCloud: no account, no servers of ours, no tracking.",
    next: [
      { icon: Library, tier: "both", title: "Shelves", body: "Sort books your way: favourites, book club, holiday reads. Your Goodreads and StoryGraph shelves come along. Three shelves free, unlimited with Premium." },
      { icon: Users, tier: "both", title: "Shared shelves", body: "Build a list with family or friends through iCloud, like a book club pick or holiday reads. Your own library, ratings and notes stay private. Premium to create a shelf, free to join one." },
      { icon: Bell, tier: "free", title: "Gentle reading reminders", body: "One quiet evening nudge about the book you are reading, if you want it. Off unless you turn it on, never more than once a day, and it backs off by itself." },
      { icon: WandSparkles, tier: "premium", title: "Smarter suggestions", body: "On iPhones with Apple Intelligence, recommendations get a short reason based on your ratings and notes. It runs on the device, so nothing leaves your iPhone." },
      { icon: Sparkles, tier: "free", title: "A calmer, more polished app", body: "Covers that zoom into the book page, a small moment when you finish a book, a tidier Settings screen, and gentle touch feedback throughout." },
    ],
    historyTitle: "Release notes",
    inReview: "In App Review",
    releases: [
      { version: "1.7", date: "November 2026", inReview: true, title: "MyBooks is now Everleaf", items: [
        "A new name, the same app. All your books, notes, backups and Premium stay exactly as they were.",
        "Dates and times follow your iPhone's region and 12- or 24-hour clock.",
      ] },
      { version: "1.6", date: "November 2026", title: "Goals, deeper stats and iCloud sync", items: [
        "Set a yearly reading goal and see if you are on pace.",
        "Deeper stats: pages per year, genres and languages over time, your ratings, and how long books take.",
        "Share your reading year as a card.",
        "Automatic iCloud backup for everyone, and iCloud sync between your iPhone and iPad with Premium.",
        "New plans: yearly with a free week, or Premium for life. Subscribers can change plan in Settings.",
      ] },
      { version: "1.3–1.4", date: "November 2026", title: "Import, a new look and better covers", items: [
        "Import your library from Goodreads or StoryGraph, with covers filled in automatically.",
        "Half-star ratings and a faster ISBN barcode scanner.",
        "A Reading shelf for the books you are in the middle of.",
        "A calm paper-and-ink design that feels at home on iPhone, with dark mode.",
        "Book lookups and covers from the National Library of Norway, plus sharper covers from Apple Books.",
      ] },
      { version: "1.0", date: "November 2025", title: "First release", items: [
        "A simple, private place to keep track of the books you read, want to read and have finished.",
      ] },
    ],
    ctaTitle: "Try Everleaf for free",
  },
  no: {
    eyebrow: "Nyheter",
    title: "Nytt i Everleaf",
    intro: "Everleaf lages av et lite, uavhengig studio og blir bedre med noen ukers mellomrom. Her ser du hva vi jobber med, og hva som er endret i hver oppdatering.",
    nextEyebrow: "Kommer i 1.7.5",
    nextTitle: "Dette jobber vi med",
    nextNote: "Under arbeid, så detaljer kan fortsatt endre seg. Alt kjører fortsatt på iPhonen og i din egen iCloud: ingen konto, ingen servere hos oss, ingen sporing.",
    next: [
      { icon: Library, tier: "both", title: "Hyller", body: "Sorter bøkene på din måte: favoritter, lesesirkel, ferielesing. Hyllene fra Goodreads og StoryGraph blir med. Tre hyller gratis, ubegrenset med Premium." },
      { icon: Users, tier: "both", title: "Delte hyller", body: "Lag en liste sammen med familie eller venner via iCloud, for eksempel lesesirkelens neste bok eller ferielesing. Ditt eget bibliotek, vurderinger og notater forblir private. Premium for å lage en hylle, gratis å bli med." },
      { icon: Bell, tier: "free", title: "Vennlige lesepåminnelser", body: "Ett stille dytt om kvelden om boka du leser, hvis du vil. Av til du slår det på, aldri mer enn én gang om dagen, og det trapper ned av seg selv." },
      { icon: WandSparkles, tier: "premium", title: "Smartere forslag", body: "På iPhoner med Apple Intelligence får anbefalingene en kort begrunnelse ut fra vurderingene og notatene dine. Det skjer på enheten, så ingenting forlater iPhonen." },
      { icon: Sparkles, tier: "free", title: "En roligere og mer gjennomarbeidet app", body: "Omslag som zoomer inn til boksiden, et lite øyeblikk når du leser ut en bok, en ryddigere innstillingsside og myk berøringsrespons overalt." },
    ],
    historyTitle: "Versjonsnotater",
    inReview: "Til vurdering hos Apple",
    releases: [
      { version: "1.7", date: "november 2026", inReview: true, title: "MyBooks heter nå Everleaf", items: [
        "Nytt navn, samme app. Alle bøkene, notatene, sikkerhetskopiene og Premium er akkurat som før.",
        "Datoer og klokkeslett følger regionen og 12- eller 24-timersklokken på iPhonen.",
      ] },
      { version: "1.6", date: "november 2026", title: "Lesemål, mer statistikk og iCloud-synkronisering", items: [
        "Sett et lesemål for året og se om du ligger i rute.",
        "Mer statistikk: sider per år, sjangre og språk over tid, vurderingene dine og hvor lang tid bøkene tar.",
        "Del leseåret ditt som et kort.",
        "Automatisk iCloud-sikkerhetskopi for alle, og iCloud-synkronisering mellom iPhone og iPad med Premium.",
        "Nye planer: årlig med en gratis uke, eller Premium for livet. Abonnenter kan bytte plan i Innstillinger.",
      ] },
      { version: "1.3–1.4", date: "november 2026", title: "Import, nytt utseende og bedre omslag", items: [
        "Importer biblioteket fra Goodreads eller StoryGraph, med omslag som fylles inn automatisk.",
        "Halve stjerner og en raskere ISBN-skanner.",
        "En Leser nå-hylle for bøkene du er midt i.",
        "Et rolig papir-og-blekk-design som passer på iPhone, med mørk modus.",
        "Boksøk og omslag fra Nasjonalbiblioteket, og skarpere omslag fra Apple Books.",
      ] },
      { version: "1.0", date: "november 2025", title: "Første versjon", items: [
        "Et enkelt og privat sted å holde oversikt over bøkene du leser, vil lese og har lest.",
      ] },
    ],
    ctaTitle: "Prøv Everleaf gratis",
  },
};

const WhatsNew = () => {
  const { lang } = useLang();
  const d = dicts[lang];
  return (
    <DocPage path="/whats-new" eyebrow={d.eyebrow} title={d.title} intro={d.intro}>
      {d.next.length > 0 && (
        <section aria-labelledby="next" className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{d.nextEyebrow}</p>
          <h2 id="next" className="text-2xl sm:text-3xl">{d.nextTitle}</h2>
          <p className="mt-3 text-muted-foreground">{d.nextNote}</p>
          <ul className="mt-8 space-y-7">
            {d.next.map(({ icon: Icon, tier, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg">{title}</h3>
                    <TierPill tier={tier} />
                  </div>
                  <p className="mt-1 text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <h2 className="mt-16 text-2xl sm:text-3xl">{d.historyTitle}</h2>
      <ol className="mt-8 space-y-10 border-l border-border pl-6 sm:pl-8">
        {d.releases.map((r) => (
          <li key={r.version} id={`v${r.version}`} className="relative scroll-mt-24">
            <span aria-hidden="true" className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[calc(2rem+5px)]" />
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-muted-foreground">
              <span className="text-primary">{lang === "no" ? "Versjon" : "Version"} {r.version}</span>
              <span>{r.date}</span>
              {r.inReview && <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs text-primary">{d.inReview}</span>}
            </p>
            <h3 className="mt-1 text-xl">{r.title}</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
              {r.items.map((it) => <li key={it} className="pl-1">{it}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl bg-secondary p-7 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl">{d.ctaTitle}</h2>
        <StoreBadge />
      </div>
    </DocPage>
  );
};

export default WhatsNew;

import { Link } from "react-router-dom";
import { Check, Minus, ChevronDown, UserX, EyeOff, Building2, Cloud, Barcode, Sparkles } from "lucide-react";
import DocPage from "@/components/DocPage";
import StoreBadge from "@/components/StoreBadge";
import Phone from "@/components/Phone";
import { useLang, type Lang } from "@/lib/i18n";

type Item = { title: string; body: string };
type SwitchDict = {
  eyebrow: string; title: string; intro: string; badgeNote: string;
  whyTitle: string; why: Item[];
  stepsTitle: string; stepsSub: string; steps: Item[];
  carriesTitle: string; carries: string[];
  storygraphTitle: string; storygraph: string;
  fitTitle: string; fitYes: string; fitNo: string; yes: string[]; no: string[];
  faqTitle: string; faq: { q: string; a: string }[];
  ctaTitle: string; ctaSub: string; compareLink: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const switchDicts: Record<Lang, SwitchDict> = {
  en: {
    eyebrow: "Switching from Goodreads or StoryGraph",
    title: "A private Goodreads alternative for iPhone",
    intro: "Love keeping track of your books, but not the ads, the feed, or handing your reading history to a big platform? MyBooks is a calm book tracker with no account, no ads and no social network. Bring your whole Goodreads library across in a few minutes, for free.",
    badgeNote: "Free to download · Import is free",
    whyTitle: "Why readers switch to MyBooks",
    why: [
      { title: "No account to create", body: "No email, no password, no profile. Your library is ready the moment you open the app." },
      { title: "No ads, no tracking", body: "No ad networks, no tracking across apps, and no data sold. The App Store privacy label reads Data Not Collected." },
      { title: "Independent, not big tech", body: "Goodreads has been part of Amazon since 2013. MyBooks is made by a small independent studio in Norway and paid for by readers." },
      { title: "Your data in your iCloud", body: "Free automatic iCloud backup, and iCloud sync with Premium. It lives in your own Apple Account, not on our servers." },
      { title: "Fast on iPhone", body: "Scan an ISBN barcode, get suggestions as you type, and covers fill themselves in. It feels like a real iPhone app because it is one." },
      { title: "Made for your own reading", body: "Goals, streaks, half-star ratings, notes and Reading Wrapped. No followers and no pressure, just you and your books." },
    ],
    stepsTitle: "Move your Goodreads library in a few minutes",
    stepsSub: "Your ratings, shelves and read dates come with you. You can keep using Goodreads too, and import again later. Books you already have are skipped.",
    steps: [
      { title: "Export from Goodreads", body: "On goodreads.com, open My Books, choose Import and export, and tap Export Library. Download the CSV file." },
      { title: "Save it on your iPhone", body: "Save the file in the Files app, for example in iCloud Drive or On My iPhone." },
      { title: "Import in MyBooks", body: "Open Settings, choose Import from Goodreads or StoryGraph, and pick the file. Check the preview, then tap Import." },
    ],
    carriesTitle: "What comes across",
    carries: [
      "Titles, authors and ISBNs",
      "Your Read, Currently Reading and Want to Read shelves",
      "Books you did not finish (from a dnf or abandoned shelf)",
      "Your star ratings",
      "Read dates and page counts",
      "Your reviews and private notes, saved as notes",
      "Covers, fetched automatically after the import",
    ],
    storygraphTitle: "Coming from StoryGraph?",
    storygraph: "It works the same way. On thestorygraph.com, open Manage Account, then Manage Your Data, and choose Export StoryGraph Library. MyBooks reads your read status, star ratings, last read dates, did-not-finish books and reviews.",
    fitTitle: "Is MyBooks right for you?",
    fitYes: "A great fit if you",
    fitNo: "Maybe not if you",
    yes: [
      "want a private reading log that is just for you",
      "use an iPhone and want a native, quick app",
      "like seeing your year in numbers and setting goals",
      "want to own your data and export it any time",
    ],
    no: [
      "mostly use Goodreads for friends' updates and community reviews",
      "need an Android app or a website to log books",
    ],
    faqTitle: "Questions about switching",
    faq: [
      { q: "Is MyBooks a good alternative to Goodreads?", a: "If you want a private, ad-free book tracker for iPhone, yes. MyBooks keeps your shelves, ratings, notes and reading stats without an account or a social feed, and you can import your Goodreads library from its CSV export." },
      { q: "Is importing from Goodreads free?", a: "Yes. Importing from Goodreads and StoryGraph is part of the free version, as are the barcode scanner, automatic covers and iCloud backup." },
      { q: "Will my Goodreads ratings and shelves come across?", a: "Yes. Ratings, Read, Currently Reading and Want to Read shelves, read dates, page counts, did-not-finish books, and your reviews and private notes are imported. Covers are fetched automatically." },
      { q: "Can I keep using Goodreads as well?", a: "Yes. Nothing changes on Goodreads. You can export and import again later, and books already in MyBooks are skipped." },
      { q: "Does MyBooks have a social feed or friends?", a: "No, on purpose. MyBooks is a personal reading journal. You can share a card of your reading year if you like, but there are no followers or public profiles." },
      { q: "Is there a StoryGraph import too?", a: "Yes. Export your library from StoryGraph under Manage Account, then Manage Your Data, and import the CSV file the same way." },
      { q: "Is MyBooks available on Android?", a: "Not at the moment. MyBooks is made for iPhone, with iOS 17 or later." },
    ],
    ctaTitle: "Bring your books home",
    ctaSub: "Download MyBooks for free and import your Goodreads library today.",
    compareLink: "See what is free and what Premium adds",
  },
  no: {
    eyebrow: "Bytte fra Goodreads eller StoryGraph",
    title: "Et privat alternativ til Goodreads for iPhone",
    intro: "Liker du å holde oversikt over bøkene dine, men ikke reklamen, feeden eller å gi lesehistorikken din til en stor plattform? MyBooks er en rolig boklogg uten konto, uten reklame og uten sosialt nettverk. Ta med hele Goodreads-biblioteket ditt på noen minutter, gratis.",
    badgeNote: "Gratis å laste ned · Import er gratis",
    whyTitle: "Derfor bytter lesere til MyBooks",
    why: [
      { title: "Ingen konto", body: "Ingen e-post, intet passord, ingen profil. Biblioteket er klart i det du åpner appen." },
      { title: "Ingen reklame, ingen sporing", body: "Ingen annonsenettverk, ingen sporing på tvers av apper, og ingen data selges. Personvernetiketten i App Store sier Data Not Collected." },
      { title: "Uavhengig, ikke big tech", body: "Goodreads har vært en del av Amazon siden 2013. MyBooks er laget av et lite, uavhengig studio i Norge og betalt av lesere." },
      { title: "Dataene dine i din iCloud", body: "Gratis automatisk iCloud-sikkerhetskopi, og iCloud-synkronisering med Premium. Alt ligger i din egen Apple-konto, ikke på våre servere." },
      { title: "Raskt på iPhone", body: "Skann en ISBN-strekkode, få forslag mens du skriver, og omslagene fyller seg inn selv. Det føles som en ekte iPhone-app fordi det er det." },
      { title: "Laget for din egen lesing", body: "Mål, lesestreker, halve stjerner, notater og lesesammendrag. Ingen følgere og ikke noe press, bare deg og bøkene dine." },
    ],
    stepsTitle: "Flytt Goodreads-biblioteket på noen minutter",
    stepsSub: "Vurderinger, hyller og lesedatoer blir med. Du kan fortsette å bruke Goodreads og importere igjen senere. Bøker du allerede har, hoppes over.",
    steps: [
      { title: "Eksporter fra Goodreads", body: "På goodreads.com åpner du My Books, velger Import and export og trykker Export Library. Last ned CSV-filen." },
      { title: "Lagre den på iPhonen", body: "Lagre filen i Filer-appen, for eksempel i iCloud Drive eller På min iPhone." },
      { title: "Importer i MyBooks", body: "Åpne Innstillinger, velg Importer fra Goodreads eller StoryGraph, og velg filen. Sjekk forhåndsvisningen og trykk Importer." },
    ],
    carriesTitle: "Dette blir med",
    carries: [
      "Titler, forfattere og ISBN",
      "Hyllene Read, Currently Reading og Want to Read",
      "Bøker du ikke leste ferdig (fra en dnf- eller abandoned-hylle)",
      "Stjernevurderingene dine",
      "Lesedatoer og sidetall",
      "Omtalene og de private notatene dine, lagret som notater",
      "Omslag, hentet automatisk etter importen",
    ],
    storygraphTitle: "Kommer du fra StoryGraph?",
    storygraph: "Det fungerer på samme måte. På thestorygraph.com åpner du Manage Account, deretter Manage Your Data, og velger Export StoryGraph Library. MyBooks leser lesestatus, stjernevurderinger, siste lesedato, bøker du ikke fullførte og omtaler.",
    fitTitle: "Passer MyBooks for deg?",
    fitYes: "Passer godt hvis du",
    fitNo: "Kanskje ikke hvis du",
    yes: [
      "vil ha en privat leselogg som bare er din",
      "bruker iPhone og vil ha en rask, ekte iPhone-app",
      "liker å se året ditt i tall og sette mål",
      "vil eie dataene dine og kunne eksportere dem når som helst",
    ],
    no: [
      "mest bruker Goodreads for venners oppdateringer og omtaler fra andre",
      "trenger en Android-app eller et nettsted for å logge bøker",
    ],
    faqTitle: "Spørsmål om å bytte",
    faq: [
      { q: "Er MyBooks et godt alternativ til Goodreads?", a: "Hvis du vil ha en privat boklogg uten reklame for iPhone, ja. MyBooks tar vare på hyller, vurderinger, notater og lesestatistikk uten konto eller sosial feed, og du kan importere Goodreads-biblioteket fra CSV-eksporten." },
      { q: "Er import fra Goodreads gratis?", a: "Ja. Import fra Goodreads og StoryGraph er en del av gratisversjonen, sammen med strekkodeskanneren, automatiske omslag og iCloud-sikkerhetskopi." },
      { q: "Blir vurderinger og hyller fra Goodreads med?", a: "Ja. Vurderinger, hyllene Read, Currently Reading og Want to Read, lesedatoer, sidetall, bøker du ikke fullførte, og omtaler og private notater importeres. Omslag hentes automatisk." },
      { q: "Kan jeg fortsette å bruke Goodreads?", a: "Ja. Ingenting endres på Goodreads. Du kan eksportere og importere igjen senere, og bøker som allerede er i MyBooks hoppes over." },
      { q: "Har MyBooks en sosial feed eller venner?", a: "Nei, med vilje. MyBooks er en personlig lesedagbok. Du kan dele et kort med leseåret ditt hvis du vil, men det finnes ingen følgere eller offentlige profiler." },
      { q: "Kan jeg importere fra StoryGraph også?", a: "Ja. Eksporter biblioteket fra StoryGraph under Manage Account, deretter Manage Your Data, og importer CSV-filen på samme måte." },
      { q: "Finnes MyBooks for Android?", a: "Ikke for øyeblikket. MyBooks er laget for iPhone med iOS 17 eller nyere." },
    ],
    ctaTitle: "Ta bøkene med hjem",
    ctaSub: "Last ned MyBooks gratis og importer Goodreads-biblioteket ditt i dag.",
    compareLink: "Se hva som er gratis og hva Premium gir",
  },
};

const whyIcons = [UserX, EyeOff, Building2, Cloud, Barcode, Sparkles];

const GoodreadsAlternative = () => {
  const { lang } = useLang();
  const t = switchDicts[lang];
  return (
    <DocPage path="/goodreads-alternative" eyebrow={t.eyebrow} title={t.title} wide intro={
      <>
        <p className="max-w-3xl">{t.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <StoreBadge />
          <span className="text-sm">{t.badgeNote}</span>
        </div>
      </>
    }>
      <section aria-labelledby="why-h">
        <h2 id="why-h" className="text-3xl sm:text-4xl">{t.whyTitle}</h2>
        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.map((w, i) => {
            const Icon = whyIcons[i];
            return (
              <article key={w.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="text-xl">{w.title}</h3>
                <p className="mt-2 text-muted-foreground">{w.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="steps-h" className="mt-20 rounded-[2rem] bg-secondary/70 px-6 py-12 sm:px-10">
        <h2 id="steps-h" className="text-3xl sm:text-4xl">{t.stepsTitle}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.stepsSub}</p>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {t.steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="font-serif-display text-5xl font-semibold text-primary/40" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-3xl">{t.carriesTitle}</h2>
          <ul className="mt-6 space-y-3">
            {t.carries.map((c) => (
              <li key={c} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{c}</span></li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl">{t.storygraphTitle}</h2>
          <p className="mt-3 text-muted-foreground">{t.storygraph}</p>
        </div>
        <div className="mx-auto w-[min(62vw,15rem)]"><Phone index={1} /></div>
      </section>

      <section aria-labelledby="fit-h" className="mt-20">
        <h2 id="fit-h" className="text-3xl sm:text-4xl">{t.fitTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-primary/40 bg-secondary p-7 shadow-soft">
            <h3 className="text-lg">{t.fitYes}</h3>
            <ul className="mt-4 space-y-3">
              {t.yes.map((y) => <li key={y} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{y}</span></li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <h3 className="text-lg">{t.fitNo}</h3>
            <ul className="mt-4 space-y-3">
              {t.no.map((n) => <li key={n} className="flex gap-3"><Minus className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" /><span>{n}</span></li>)}
            </ul>
          </div>
        </div>
        <Link to="/#premium" className="mt-6 inline-block font-semibold text-primary underline-offset-4 hover:underline">{t.compareLink} →</Link>
      </section>

      <section aria-labelledby="sfaq-h" className="mx-auto mt-20 max-w-3xl">
        <h2 id="sfaq-h" className="text-3xl sm:text-4xl">{t.faqTitle}</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {t.faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-secondary px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl sm:text-4xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">{t.ctaSub}</p>
        <div className="mt-8 flex justify-center"><StoreBadge /></div>
      </section>
    </DocPage>
  );
};

export default GoodreadsAlternative;

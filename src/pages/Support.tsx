import { Link } from "react-router-dom";
import { Mail, ChevronDown } from "lucide-react";
import DocPage from "@/components/DocPage";
import { useLang, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type Guide = { id: string; q: string; steps: string[]; tip?: string };

const guides: Record<Lang, Guide[]> = {
  en: [
    { id: "new-iphone", q: "Move your library to a new iPhone", steps: [
      "On your old iPhone, open MyBooks, go to Settings, and tap Back up now under iCloud.",
      "On the new iPhone, sign in with the same Apple Account and install MyBooks.",
      "After the welcome screens, MyBooks offers to restore your library. Tap Restore.",
    ], tip: "No prompt? Go to Settings, then Restore from iCloud, and pick the latest backup. Make sure iCloud Drive is on in the Settings app." },
    { id: "sync", q: "Turn on iCloud sync (Premium)", steps: [
      "Sign in to the same Apple Account on each iPhone or iPad.",
      "In MyBooks, go to Settings and turn on Sync with iCloud. Do the same on your other devices.",
      "Books on each device and in iCloud are combined. Nothing is deleted.",
    ], tip: "Changes arrive when you open the app and every few minutes while it is open. If sync says it is paused, check your iCloud storage and your Premium status." },
    { id: "restore", q: "Restore an older backup", steps: [
      "Go to Settings, then Restore from iCloud.",
      "Pick one of the recent daily backups. Your library is replaced with that copy.",
    ], tip: "You can also restore a backup file from Files with Import Backup File." },
    { id: "import", q: "Import from Goodreads or StoryGraph", steps: [
      "Goodreads: on goodreads.com, open My Books, choose Import and export, then Export Library. StoryGraph: open Manage Account, then Manage Your Data, then Export StoryGraph Library.",
      "Save the CSV file in the Files app on your iPhone.",
      "In MyBooks, go to Settings, then Import from Goodreads or StoryGraph, and choose the file.",
      "Check the preview and tap Import. Covers are filled in automatically in the background.",
    ], tip: "Ratings, shelves, read dates, page counts and your reviews come along. Books you already have are skipped." },
    { id: "export", q: "Export your library", steps: [
      "Go to Settings and choose Export to CSV for a Goodreads-format spreadsheet, or Export Backup File for a full MyBooks backup.",
      "Save it to Files, iCloud Drive or wherever you like.",
    ] },
    { id: "plan", q: "Change plan or cancel Premium", steps: [
      "In MyBooks, go to Settings and open Premium. Choose Change plan to switch, or Manage subscription to cancel.",
      "You can also go to the Settings app, tap your name, then Subscriptions, then MyBooks.",
    ], tip: "If Premium ends, your books and backups stay, and iCloud sync pauses." },
    { id: "restore-purchase", q: "Premium is missing after reinstalling", steps: [
      "Make sure you are signed in with the Apple Account you bought Premium with.",
      "Go to Settings, then Restore Purchases.",
    ] },
    { id: "not-found", q: "A book or cover cannot be found", steps: [
      "Try searching by ISBN, or by title and author separately.",
      "If there is no cover, take a photo of it or pick one from your photos on the edit screen.",
      "You can always add a book by hand.",
    ] },
  ],
  no: [
    { id: "new-iphone", q: "Flytt biblioteket til en ny iPhone", steps: [
      "På den gamle iPhonen åpner du MyBooks, går til Innstillinger og trykker Ta kopi nå under iCloud.",
      "Logg inn med samme Apple-konto på den nye iPhonen og installer MyBooks.",
      "Etter velkomstskjermene tilbyr MyBooks å gjenopprette biblioteket. Trykk Gjenopprett.",
    ], tip: "Ingen spørsmål? Gå til Innstillinger, deretter Gjenopprett fra iCloud, og velg den nyeste kopien. Sjekk at iCloud Drive er på i Innstillinger-appen." },
    { id: "sync", q: "Slå på iCloud-synkronisering (Premium)", steps: [
      "Logg inn med samme Apple-konto på hver iPhone eller iPad.",
      "I MyBooks går du til Innstillinger og slår på Synkroniser med iCloud. Gjør det samme på de andre enhetene.",
      "Bøkene på hver enhet og i iCloud slås sammen. Ingenting slettes.",
    ], tip: "Endringer kommer når du åpner appen og med noen minutters mellomrom mens den er åpen. Står det at synkroniseringen er satt på pause, sjekk iCloud-lagringen og Premium-statusen." },
    { id: "restore", q: "Gjenopprett en eldre sikkerhetskopi", steps: [
      "Gå til Innstillinger, deretter Gjenopprett fra iCloud.",
      "Velg en av de siste daglige kopiene. Biblioteket erstattes med den kopien.",
    ], tip: "Du kan også gjenopprette en sikkerhetskopifil fra Filer med Importer sikkerhetskopifil." },
    { id: "import", q: "Importer fra Goodreads eller StoryGraph", steps: [
      "Goodreads: på goodreads.com åpner du My Books, velger Import and export og deretter Export Library. StoryGraph: åpne Manage Account, deretter Manage Your Data og Export StoryGraph Library.",
      "Lagre CSV-filen i Filer-appen på iPhonen.",
      "I MyBooks går du til Innstillinger, deretter Importer fra Goodreads eller StoryGraph, og velger filen.",
      "Sjekk forhåndsvisningen og trykk Importer. Omslag fylles inn automatisk i bakgrunnen.",
    ], tip: "Vurderinger, hyller, lesedatoer, sidetall og omtalene dine blir med. Bøker du allerede har, hoppes over." },
    { id: "export", q: "Eksporter biblioteket", steps: [
      "Gå til Innstillinger og velg Eksporter til CSV for et regneark i Goodreads-format, eller Eksporter sikkerhetskopifil for en full MyBooks-kopi.",
      "Lagre den i Filer, iCloud Drive eller hvor du vil.",
    ] },
    { id: "plan", q: "Bytt plan eller si opp Premium", steps: [
      "I MyBooks går du til Innstillinger og åpner Premium. Velg Bytt plan for å bytte, eller Administrer abonnement for å si opp.",
      "Du kan også gå til Innstillinger-appen, trykke på navnet ditt, deretter Abonnementer og MyBooks.",
    ], tip: "Hvis Premium avsluttes, blir bøkene og sikkerhetskopiene værende, og iCloud-synkroniseringen settes på pause." },
    { id: "restore-purchase", q: "Premium mangler etter ny installasjon", steps: [
      "Sjekk at du er logget inn med Apple-kontoen du kjøpte Premium med.",
      "Gå til Innstillinger, deretter Gjenopprett kjøp.",
    ] },
    { id: "not-found", q: "En bok eller et omslag finnes ikke", steps: [
      "Prøv å søke på ISBN, eller på tittel og forfatter hver for seg.",
      "Mangler omslaget, ta bilde av det eller velg et fra bildene dine i redigeringsvinduet.",
      "Du kan alltid legge til en bok for hånd.",
    ] },
  ],
};

const Support = () => {
  const { lang } = useLang();
  const no = lang === "no";
  return (
    <DocPage
      path="/support"
      eyebrow={no ? "Støtte" : "Support"}
      title={no ? "Hjelp og støtte" : "Help and support"}
      intro={no ? "Korte veiledninger for det folk oftest lurer på. Finner du ikke svaret, skriv til oss." : "Short guides for the things people ask most. If you cannot find your answer, write to us."}
    >
      <div className="mb-12 flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <Mail className="mt-1 h-7 w-7 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <div>
            <h2 className="text-xl">{no ? "Send oss en e-post" : "Email us"}</h2>
            <p className="mt-1 text-muted-foreground">{no ? "En ekte person leser hver e-post, vanligvis innen en dag eller to." : "A real person reads every email, usually within a day or two."}</p>
          </div>
        </div>
        <a href={`mailto:${SITE.contactEmail}?subject=MyBooks`} className="shrink-0 rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition hover:opacity-90">
          {SITE.contactEmail}
        </a>
      </div>

      <h2 className="text-2xl sm:text-3xl">{no ? "Veiledninger" : "How-to guides"}</h2>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {guides[lang].map((g) => (
          <details key={g.id} id={g.id} className="group scroll-mt-24 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {g.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" aria-hidden="true" />
            </summary>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground marker:font-semibold marker:text-primary">
              {g.steps.map((s) => <li key={s} className="pl-1">{s}</li>)}
            </ol>
            {g.tip && <p className="mt-4 rounded-2xl bg-muted px-5 py-3 text-[15px] text-muted-foreground">{g.tip}</p>}
          </details>
        ))}
      </div>

      <p className="mt-10 text-muted-foreground">
        {no ? "Flere svar finner du under " : "More answers are in the "}
        <Link to="/#faq" className="font-semibold text-primary underline-offset-4 hover:underline">{no ? "spørsmål og svar" : "FAQ"}</Link>
        {no ? ", og om personvern i " : ", and about privacy in the "}
        <Link to="/privacy" className="font-semibold text-primary underline-offset-4 hover:underline">{no ? "personvernerklæringen" : "privacy policy"}</Link>.
      </p>
    </DocPage>
  );
};

export default Support;

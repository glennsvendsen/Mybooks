import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "no";
export type Tier = "free" | "premium" | "both";

type Item = { title: string; body: string };
type TierItem = Item & { tier: Tier };
type QA = { q: string; a: string };
type Dict = {
  nav: { features: string; icloud: string; privacy: string; premium: string; faq: string; download: string; menu: string };
  hero: { eyebrow: string; title: string; sub: string; note: string; points: string[] };
  badge: { top: string; main: string };
  showcase: { title: string; sub: string; captions: string[] };
  tiers: Record<Tier, string>;
  features: { title: string; sub: string; items: TierItem[] };
  icloud: {
    eyebrow: string; title: string; sub: string;
    backup: { label: string; title: string; body: string; points: string[] };
    sync: { label: string; title: string; body: string; points: string[] };
    note: string;
  };
  values: { eyebrow: string; title: string; sub: string; items: Item[]; link: string };
  how: { title: string; steps: Item[] };
  more: { title: string; items: Item[] };
  compare: { eyebrow: string; title: string; sub: string; colFeature: string; colFree: string; colPremium: string; yes: string; no: string; rows: { label: string; free: boolean }[] };
  plans: { eyebrow: string; title: string; body: string; trial: string; items: Item[]; note: string };
  faq: { title: string; items: QA[] };
  cta: { title: string; sub: string };
  footer: { tagline: string; privacy: string; support: string; terms: string; switching: string; contact: string; rights: string; theme: string; language: string };
  alt: { phone: string };
};

const en: Dict = {
  nav: { features: "Features", icloud: "iCloud", privacy: "Privacy", premium: "Free vs Premium", faq: "FAQ", download: "Download", menu: "Menu" },
  hero: {
    eyebrow: "A private book tracker for iPhone",
    title: "Your reading life, beautifully kept",
    sub: "Scan a barcode, keep real covers on your shelf, and look back on every book you have finished. No account, no ads, and backed up to your own iCloud.",
    note: "Free to download · Made by a small independent studio",
    points: ["Import from Goodreads and StoryGraph", "Free automatic iCloud backup", "English and Norwegian"],
  },
  badge: { top: "Download on the", main: "App Store" },
  showcase: {
    title: "A calm place for your books",
    sub: "Warm paper, clear type, and the covers you know. Light and dark, built to feel at home on iPhone.",
    captions: ["Reading now", "Your library", "Book details", "Statistics", "Recommendations", "Add a book", "Finish a book"],
  },
  tiers: { free: "Free", premium: "Premium", both: "Free · more with Premium" },
  features: {
    title: "Everything a reader actually needs",
    sub: "Simple on purpose. Each part of MyBooks does one thing well, and the essentials are free.",
    items: [
      { tier: "free", title: "See what you are reading", body: "The Reading tab keeps your current books front and centre. When you reach the last page, tap Finish to add a rating and date. Tapped too soon? Undo." },
      { tier: "free", title: "A shelf of real covers", body: "Your Library is a grid of the actual covers, with half-star ratings, your own notes, how many days each book took, and the books you put down." },
      { tier: "free", title: "Add a book in seconds", body: "Scan the ISBN barcode, start typing for suggestions, or photograph the cover. Covers and details are filled in automatically, and Norwegian books are found through the National Library of Norway." },
      { tier: "free", title: "Bring your library with you", body: "Import your books from Goodreads or StoryGraph with their CSV export. Read, reading and want-to-read shelves come across, and duplicates are skipped." },
      { tier: "both", title: "Goals and statistics", body: "Set a yearly book goal and see books per month and your reading streak for free. Premium adds goal pace, page goals, genres, languages, ratings and milestones." },
      { tier: "both", title: "Share cards", body: "Share your reading year as a card in your story or chat. One yearly card is free. Premium adds stats and goal cards in more styles." },
      { tier: "premium", title: "Sync across your devices", body: "Turn on iCloud sync and your library stays the same on all your iPhones and iPads, privately in your own iCloud." },
      { tier: "premium", title: "Reading Wrapped", body: "Monthly and yearly highlights: your most-read author, best month, top-rated book and your year at a glance." },
      { tier: "premium", title: "Recommendations that make sense", body: "Find your next book from the authors and series you already love. Not interested? Dismiss it and move on." },
    ],
  },
  icloud: {
    eyebrow: "iCloud backup and sync",
    title: "Your books are safe, and only yours",
    sub: "MyBooks has no account and no server of its own. Your library lives on your iPhone and in your own iCloud, where only you can see it.",
    backup: {
      label: "Free for everyone",
      title: "Automatic iCloud backup",
      body: "MyBooks quietly saves your whole library to iCloud Drive, so a lost or new phone does not mean a lost bookshelf.",
      points: [
        "Saved automatically, with a copy kept for each day",
        "Offers to restore your library when you reinstall or get a new iPhone",
        "Pick an older backup from Settings at any time",
        "Also export a backup file or a CSV to Files whenever you like",
      ],
    },
    sync: {
      label: "Premium",
      title: "iCloud sync",
      body: "Keep the same library on all your iPhones and iPads. Add a book on one, rate it on another, and everything stays up to date.",
      points: [
        "Uses Apple's CloudKit in your private iCloud database",
        "Ratings, notes, deletions and your own cover photos follow along",
        "Edits made offline on two devices are merged, and notes are never lost",
        "If Premium ends, sync pauses. Nothing is deleted",
      ],
    },
    note: "Both use the Apple Account you are signed in with. Requires iOS 17 or later.",
  },
  values: {
    eyebrow: "Private and independent",
    title: "Your reading is nobody's business",
    sub: "MyBooks is made by Arctic Labs, a small independent studio in Norway, not a big tech company. We are paid by readers who choose Premium, not by advertisers, so there is nothing to gain from watching what you read.",
    items: [
      { title: "No account", body: "No email, no password, no profile. Open the app and start." },
      { title: "No ads, no tracking", body: "No ad networks, no tracking across apps, and your data is never sold or shared for marketing." },
      { title: "Your iCloud, not our servers", body: "Backups and sync live in your own iCloud. We cannot see your library." },
      { title: "No feed, no pressure", body: "No followers, no public profile, no algorithm. Just you and your books." },
      { title: "Never locked in", body: "Export everything to CSV in Goodreads format or a full backup file, any time." },
      { title: "Paid by readers", body: "Premium keeps MyBooks running. No investors to please and no data to sell." },
    ],
    link: "Read the privacy policy",
  },
  how: {
    title: "How it works",
    steps: [
      { title: "Add", body: "Scan the barcode, search, snap the cover, or import your Goodreads or StoryGraph library." },
      { title: "Read", body: "Your current books wait in the Reading tab." },
      { title: "Finish", body: "One tap, an optional rating and date, and it is on your shelf and in your stats." },
    ],
  },
  more: {
    title: "The details that matter",
    items: [
      { title: "Half-star ratings", body: "Because some books are a four and a half." },
      { title: "Your data, portable", body: "Export to CSV in Goodreads format, or a full backup file, any time." },
      { title: "Light and dark", body: "A warm paper look by day and an easy dark mode at night." },
      { title: "Made for iPhone", body: "A native feel, in English and Norwegian." },
    ],
  },
  compare: {
    eyebrow: "Free vs Premium",
    title: "What is free, and what Premium adds",
    sub: "The free version is a complete book tracker, not a demo. Premium is for readers who want sync, deeper stats and the extras.",
    colFeature: "Feature",
    colFree: "Free",
    colPremium: "Premium",
    yes: "Included",
    no: "Not included",
    rows: [
      { label: "Reading, Library and Want to Read lists", free: true },
      { label: "ISBN barcode scanner, autocomplete and automatic covers", free: true },
      { label: "Half-star ratings, notes and days to read", free: true },
      { label: "Import from Goodreads and StoryGraph", free: true },
      { label: "Automatic iCloud backup and restore", free: true },
      { label: "Backup file and CSV export", free: true },
      { label: "Books per month, totals and reading streak", free: true },
      { label: "Yearly book goal", free: true },
      { label: "Yearly share card", free: true },
      { label: "iCloud sync across iPhone and iPad", free: false },
      { label: "Goal pace and page goals", free: false },
      { label: "Deeper stats: pages per year, genres, languages, ratings, top authors", free: false },
      { label: "Milestones", free: false },
      { label: "More share cards and styles", free: false },
      { label: "Reading Wrapped: monthly and yearly highlights", free: false },
      { label: "Personal book recommendations", free: false },
    ],
  },
  plans: {
    eyebrow: "MyBooks Premium",
    title: "Try it all, then choose",
    body: "Every new install includes 10 days of Premium for free. Nothing to sign up for and nothing to cancel. After that, everything in the free column stays yours, and Premium is optional.",
    trial: "10 days of Premium, free, on every new install",
    items: [
      { title: "Monthly", body: "Billed every month. Cancel any time." },
      { title: "Yearly", body: "The best value per month, with a free trial on the App Store." },
      { title: "Lifetime", body: "Pay once and keep Premium for good." },
    ],
    note: "Prices are shown in the app and on the App Store in your local currency. Switch plan or cancel any time in the app's Settings or in your Apple ID settings.",
  },
  faq: {
    title: "Questions, answered",
    items: [
      { q: "Is MyBooks free?", a: "Yes. MyBooks is free to download, with no ads and no account. The core book tracker, the barcode scanner, Goodreads and StoryGraph import and automatic iCloud backup are free for good. New installs also get 10 days of Premium for free. After that, Premium is an optional monthly, yearly or lifetime purchase." },
      { q: "What is the difference between iCloud backup and iCloud sync?", a: "iCloud backup is free. It saves a copy of your library to your iCloud Drive and can restore it on a new phone. iCloud sync is part of Premium. It keeps the same library up to date on all your iPhones and iPads at the same time." },
      { q: "Is MyBooks a good alternative to Goodreads?", a: "If you want a private, ad-free book tracker for iPhone, yes. MyBooks has no social feed and needs no account. You can import your Goodreads library from its CSV export in a minute and keep your ratings, shelves and read dates." },
      { q: "How do I import from Goodreads or StoryGraph?", a: "Export your library as a CSV file from Goodreads (My Books, then Import and export) or StoryGraph (Manage Account, then Manage Your Data). Save the file in Files, then open Settings in MyBooks, choose Import from Goodreads or StoryGraph, and pick the file. You see a preview before anything is added." },
      { q: "Where is my data stored?", a: "On your iPhone and, if you use backup or sync, in your own iCloud. We have no server and cannot see your library. See the privacy policy for the details." },
      { q: "Who makes MyBooks?", a: "Arctic Labs, a small independent studio in Norway. MyBooks is paid for by readers who choose Premium, not by advertising or data." },
      { q: "Can I take my books out again?", a: "Yes. Export a CSV file in Goodreads format, or a full MyBooks backup file, from Settings at any time." },
      { q: "What happens if Premium ends?", a: "Your books, notes, ratings and backups all stay. Premium features lock again, and iCloud sync pauses. Nothing is deleted." },
      { q: "How do I change plan or cancel?", a: "In MyBooks, open Settings, then Premium, and choose Change plan or Manage subscription. You can also cancel in your Apple ID settings under Subscriptions." },
      { q: "Does it work for Norwegian books?", a: "Yes. Search and the barcode scanner include the National Library of Norway, and the app is available in Norwegian and English." },
      { q: "What do I need?", a: "An iPhone with iOS 17 or later. iCloud backup and sync use the Apple Account you are signed in with." },
    ],
  },
  cta: { title: "Give your books a proper home", sub: "Download MyBooks for free and start your shelf today." },
  footer: { tagline: "A private book tracker and reading journal for iPhone, made in Norway by Arctic Labs.", privacy: "Privacy policy", support: "Support", terms: "Terms of use", switching: "Switching from Goodreads", contact: "Contact", rights: "All rights reserved.", theme: "Toggle dark mode", language: "Language" },
  alt: { phone: "MyBooks app screen:" },
};

const no: Dict = {
  nav: { features: "Funksjoner", icloud: "iCloud", privacy: "Personvern", premium: "Gratis og Premium", faq: "Spørsmål", download: "Last ned", menu: "Meny" },
  hero: {
    eyebrow: "En privat boklogg for iPhone",
    title: "Leselivet ditt, vakkert ivaretatt",
    sub: "Skann en strekkode, ha ekte omslag i hyllen og se tilbake på hver eneste bok du har lest ferdig. Ingen konto, ingen reklame, og sikkerhetskopiert til din egen iCloud.",
    note: "Gratis å laste ned · Laget av et lite, uavhengig studio",
    points: ["Importer fra Goodreads og StoryGraph", "Gratis automatisk iCloud-sikkerhetskopi", "Norsk og engelsk"],
  },
  badge: { top: "Last ned på", main: "App Store" },
  showcase: {
    title: "Et rolig sted for bøkene dine",
    sub: "Varmt papir, tydelig skrift og omslagene du kjenner igjen. Lyst og mørkt utseende, laget for å føles hjemme på iPhone.",
    captions: ["Leser nå", "Biblioteket ditt", "Bokdetaljer", "Statistikk", "Anbefalinger", "Legg til en bok", "Fullfør en bok"],
  },
  tiers: { free: "Gratis", premium: "Premium", both: "Gratis · mer med Premium" },
  features: {
    title: "Alt en leser faktisk trenger",
    sub: "Enkelt med vilje. Hver del av MyBooks gjør én ting godt, og det viktigste er gratis.",
    items: [
      { tier: "free", title: "Se hva du leser", body: "Fanen Leser holder bøkene du leser nå i sentrum. Når du er ferdig, trykker du Ferdig og legger til vurdering og dato. Trykket for tidlig? Angre." },
      { tier: "free", title: "En hylle med ekte omslag", body: "Biblioteket er et rutenett med de faktiske omslagene, med halve stjerner, egne notater, hvor mange dager hver bok tok, og bøkene du la fra deg." },
      { tier: "free", title: "Legg til en bok på sekunder", body: "Skann ISBN-strekkoden, begynn å skrive for forslag, eller ta bilde av omslaget. Omslag og detaljer fylles inn automatisk, og norske bøker finnes via Nasjonalbiblioteket." },
      { tier: "free", title: "Ta med deg biblioteket", body: "Importer bøkene dine fra Goodreads eller StoryGraph med CSV-eksporten deres. Lest, leser og vil lese blir med, og duplikater hoppes over." },
      { tier: "both", title: "Mål og statistikk", body: "Sett et årlig bokmål og se bøker per måned og lesestreken din gratis. Premium gir tempo for målet, sidemål, sjangre, språk, vurderinger og milepæler." },
      { tier: "both", title: "Delekort", body: "Del leseåret ditt som et kort i story eller chat. Ett årskort er gratis. Premium gir statistikk- og målkort i flere stiler." },
      { tier: "premium", title: "Synkroniser mellom enhetene", body: "Slå på iCloud-synkronisering, så er biblioteket likt på alle iPhoner og iPader, privat i din egen iCloud." },
      { tier: "premium", title: "Lesesammendrag", body: "Månedlige og årlige høydepunkter: mest leste forfatter, beste måned, høyest vurderte bok og året ditt på et blikk." },
      { tier: "premium", title: "Anbefalinger som gir mening", body: "Finn neste bok fra forfatterne og seriene du allerede er glad i. Ikke interessert? Avvis og gå videre." },
    ],
  },
  icloud: {
    eyebrow: "iCloud-sikkerhetskopi og synkronisering",
    title: "Bøkene dine er trygge, og bare dine",
    sub: "MyBooks har ingen konto og ingen egen server. Biblioteket ligger på iPhonen din og i din egen iCloud, der bare du kan se det.",
    backup: {
      label: "Gratis for alle",
      title: "Automatisk iCloud-sikkerhetskopi",
      body: "MyBooks lagrer hele biblioteket ditt i iCloud Drive i bakgrunnen, så en mistet eller ny telefon ikke betyr en tapt bokhylle.",
      points: [
        "Lagres automatisk, med en kopi for hver dag",
        "Tilbyr å gjenopprette biblioteket når du installerer på nytt eller får ny iPhone",
        "Velg en eldre sikkerhetskopi i Innstillinger når som helst",
        "Eksporter også en sikkerhetskopifil eller CSV til Filer når du vil",
      ],
    },
    sync: {
      label: "Premium",
      title: "iCloud-synkronisering",
      body: "Ha det samme biblioteket på alle iPhoner og iPader. Legg til en bok på én, vurder den på en annen, og alt holdes oppdatert.",
      points: [
        "Bruker Apples CloudKit i din private iCloud-database",
        "Vurderinger, notater, slettinger og egne omslagsbilder blir med",
        "Endringer gjort uten nett på to enheter flettes, og notater går aldri tapt",
        "Hvis Premium avsluttes, settes synkroniseringen på pause. Ingenting slettes",
      ],
    },
    note: "Begge bruker Apple-kontoen du er logget inn med. Krever iOS 17 eller nyere.",
  },
  values: {
    eyebrow: "Privat og uavhengig",
    title: "Lesingen din angår ingen andre",
    sub: "MyBooks er laget av Arctic Labs, et lite, uavhengig studio i Norge, ikke et stort teknologiselskap. Vi får betalt av lesere som velger Premium, ikke av annonsører, så vi har ingenting å tjene på å følge med på hva du leser.",
    items: [
      { title: "Ingen konto", body: "Ingen e-post, intet passord, ingen profil. Åpne appen og begynn." },
      { title: "Ingen reklame, ingen sporing", body: "Ingen annonsenettverk, ingen sporing på tvers av apper, og dataene dine selges eller deles aldri til markedsføring." },
      { title: "Din iCloud, ikke våre servere", body: "Sikkerhetskopier og synkronisering ligger i din egen iCloud. Vi kan ikke se biblioteket ditt." },
      { title: "Ingen feed, ingen press", body: "Ingen følgere, ingen offentlig profil, ingen algoritme. Bare deg og bøkene dine." },
      { title: "Aldri innelåst", body: "Eksporter alt til CSV i Goodreads-format eller en full sikkerhetskopifil når som helst." },
      { title: "Betalt av lesere", body: "Premium holder MyBooks i gang. Ingen investorer å tilfredsstille og ingen data å selge." },
    ],
    link: "Les personvernerklæringen",
  },
  how: {
    title: "Slik fungerer det",
    steps: [
      { title: "Legg til", body: "Skann strekkoden, søk, ta bilde av omslaget, eller importer biblioteket fra Goodreads eller StoryGraph." },
      { title: "Les", body: "Bøkene du leser venter i fanen Leser." },
      { title: "Fullfør", body: "Ett trykk, valgfri vurdering og dato, og boka står i hyllen og i statistikken." },
    ],
  },
  more: {
    title: "Detaljene som teller",
    items: [
      { title: "Halve stjerner", body: "For noen bøker er en firer og en halv." },
      { title: "Dataene dine kan flyttes", body: "Eksporter til CSV i Goodreads-format, eller en full sikkerhetskopifil, når som helst." },
      { title: "Lyst og mørkt", body: "Et varmt papirutseende om dagen og en rolig mørk modus om kvelden." },
      { title: "Laget for iPhone", body: "Følelsen av en ekte iPhone-app, på norsk og engelsk." },
    ],
  },
  compare: {
    eyebrow: "Gratis og Premium",
    title: "Hva som er gratis, og hva Premium gir",
    sub: "Gratisversjonen er en komplett boklogg, ikke en demo. Premium er for lesere som vil ha synkronisering, mer statistikk og ekstrafunksjonene.",
    colFeature: "Funksjon",
    colFree: "Gratis",
    colPremium: "Premium",
    yes: "Inkludert",
    no: "Ikke inkludert",
    rows: [
      { label: "Listene Leser, Bibliotek og Vil lese", free: true },
      { label: "ISBN-skanner, autoutfylling og automatiske omslag", free: true },
      { label: "Halve stjerner, notater og dager brukt", free: true },
      { label: "Import fra Goodreads og StoryGraph", free: true },
      { label: "Automatisk iCloud-sikkerhetskopi og gjenoppretting", free: true },
      { label: "Sikkerhetskopifil og CSV-eksport", free: true },
      { label: "Bøker per måned, totaler og lesestrek", free: true },
      { label: "Årlig bokmål", free: true },
      { label: "Årskort til deling", free: true },
      { label: "iCloud-synkronisering mellom iPhone og iPad", free: false },
      { label: "Tempo for målet og sidemål", free: false },
      { label: "Mer statistikk: sider per år, sjangre, språk, vurderinger, toppforfattere", free: false },
      { label: "Milepæler", free: false },
      { label: "Flere delekort og stiler", free: false },
      { label: "Lesesammendrag: månedlige og årlige høydepunkter", free: false },
      { label: "Personlige bokanbefalinger", free: false },
    ],
  },
  plans: {
    eyebrow: "MyBooks Premium",
    title: "Prøv alt, og velg etterpå",
    body: "Hver nye installasjon får 10 dager med Premium gratis. Ingenting å registrere og ingenting å si opp. Etterpå er alt i gratiskolonnen ditt, og Premium er valgfritt.",
    trial: "10 dager med Premium gratis på hver nye installasjon",
    items: [
      { title: "Månedlig", body: "Belastes hver måned. Si opp når som helst." },
      { title: "Årlig", body: "Lavest pris per måned, med gratis prøveperiode i App Store." },
      { title: "Livstid", body: "Betal én gang og behold Premium for alltid." },
    ],
    note: "Prisene vises i appen og i App Store i din lokale valuta. Bytt plan eller si opp når som helst i appens Innstillinger eller i Apple ID-innstillingene.",
  },
  faq: {
    title: "Spørsmål og svar",
    items: [
      { q: "Er MyBooks gratis?", a: "Ja. MyBooks er gratis å laste ned, uten reklame og uten konto. Selve bokloggen, strekkodeskanneren, import fra Goodreads og StoryGraph og automatisk iCloud-sikkerhetskopi er gratis for alltid. Nye installasjoner får også 10 dager med Premium gratis. Etterpå er Premium et valgfritt kjøp: månedlig, årlig eller livstid." },
      { q: "Hva er forskjellen på iCloud-sikkerhetskopi og iCloud-synkronisering?", a: "iCloud-sikkerhetskopi er gratis. Den lagrer en kopi av biblioteket i iCloud Drive og kan gjenopprette det på en ny telefon. iCloud-synkronisering er en del av Premium. Den holder det samme biblioteket oppdatert på alle iPhoner og iPader samtidig." },
      { q: "Er MyBooks et godt alternativ til Goodreads?", a: "Hvis du vil ha en privat boklogg uten reklame for iPhone, ja. MyBooks har ingen sosial feed og trenger ingen konto. Du kan importere Goodreads-biblioteket fra CSV-eksporten på et minutt og beholde vurderinger, hyller og lesedatoer." },
      { q: "Hvordan importerer jeg fra Goodreads eller StoryGraph?", a: "Eksporter biblioteket som en CSV-fil fra Goodreads (My Books, deretter Import and export) eller StoryGraph (Manage Account, deretter Manage Your Data). Lagre filen i Filer, åpne Innstillinger i MyBooks, velg Importer fra Goodreads eller StoryGraph og velg filen. Du ser en forhåndsvisning før noe legges til." },
      { q: "Hvor lagres dataene mine?", a: "På iPhonen din og, hvis du bruker sikkerhetskopi eller synkronisering, i din egen iCloud. Vi har ingen server og kan ikke se biblioteket ditt. Se personvernerklæringen for detaljer." },
      { q: "Hvem lager MyBooks?", a: "Arctic Labs, et lite, uavhengig studio i Norge. MyBooks er finansiert av lesere som velger Premium, ikke av reklame eller data." },
      { q: "Kan jeg ta med meg bøkene ut igjen?", a: "Ja. Eksporter en CSV-fil i Goodreads-format, eller en full MyBooks-sikkerhetskopi, fra Innstillinger når som helst." },
      { q: "Hva skjer hvis Premium avsluttes?", a: "Bøkene, notatene, vurderingene og sikkerhetskopiene blir værende. Premium-funksjonene låses igjen, og iCloud-synkroniseringen settes på pause. Ingenting slettes." },
      { q: "Hvordan bytter jeg plan eller sier opp?", a: "Åpne Innstillinger i MyBooks, deretter Premium, og velg Bytt plan eller Administrer abonnement. Du kan også si opp i Apple ID-innstillingene under Abonnementer." },
      { q: "Fungerer det for norske bøker?", a: "Ja. Søket og strekkodeskanneren inkluderer Nasjonalbiblioteket, og appen finnes på norsk og engelsk." },
      { q: "Hva trenger jeg?", a: "En iPhone med iOS 17 eller nyere. iCloud-sikkerhetskopi og synkronisering bruker Apple-kontoen du er logget inn med." },
    ],
  },
  cta: { title: "Gi bøkene dine et ordentlig hjem", sub: "Last ned MyBooks gratis og begynn hyllen din i dag." },
  footer: { tagline: "En privat boklogg og lesedagbok for iPhone, laget i Norge av Arctic Labs.", privacy: "Personvernerklæring", support: "Støtte", terms: "Bruksvilkår", switching: "Bytte fra Goodreads", contact: "Kontakt", rights: "Alle rettigheter forbeholdt.", theme: "Bytt mørk modus", language: "Språk" },
  alt: { phone: "Skjermbilde fra MyBooks:" },
};

// eslint-disable-next-line react-refresh/only-export-components
export const dicts: Record<Lang, Dict> = { en, no };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

const detect = (): Lang => {
  if (typeof window === "undefined") return "en"; // prerender
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "en" || q === "no") return q;
    const saved = localStorage.getItem("mybooks-lang");
    if (saved === "en" || saved === "no") return saved;
  } catch { /* ignore */ }
  return /^(nb|nn|no)\b/i.test(navigator.language) ? "no" : "en";
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detect);
  useEffect(() => { document.documentElement.lang = lang === "no" ? "nb" : "en"; }, [lang]);
  const value = useMemo<Ctx>(() => ({
    lang,
    t: dicts[lang],
    setLang: (l) => { setLangState(l); try { localStorage.setItem("mybooks-lang", l); } catch { /* ignore */ } },
  }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLang outside LangProvider");
  return c;
};

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "no";

type Item = { title: string; body: string };
type Dict = {
  nav: { features: string; how: string; premium: string; faq: string; download: string; menu: string };
  hero: { eyebrow: string; title: string; sub: string; note: string };
  badge: { top: string; main: string };
  showcase: { title: string; sub: string; captions: string[] };
  features: { title: string; sub: string; items: Item[] };
  how: { title: string; steps: Item[] };
  more: { title: string; items: Item[] };
  premium: { eyebrow: string; title: string; body: string; free: string[]; paid: string[]; freeLabel: string; paidLabel: string; note: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; sub: string };
  footer: { tagline: string; privacy: string; support: string; contact: string; rights: string; theme: string; language: string };
  alt: { phone: string };
};

const en: Dict = {
  nav: { features: "Features", how: "How it works", premium: "Premium", faq: "FAQ", download: "Download", menu: "Menu" },
  hero: {
    eyebrow: "A reading journal for iPhone",
    title: "Your reading life, beautifully kept",
    sub: "Scan a barcode, keep real covers on your shelf, and look back on every book you have finished.",
    note: "Free to download · English and Norwegian",
  },
  badge: { top: "Download on the", main: "App Store" },
  showcase: {
    title: "A calm place for your books",
    sub: "Warm paper, clear type, and the covers you know. Light and dark, built to feel at home on iPhone.",
    captions: ["Reading now", "Your library", "Book details", "Statistics", "Recommendations", "Add a book", "Finish a book"],
  },
  features: {
    title: "Everything a reader actually needs",
    sub: "Simple on purpose. Each part of MyBooks does one thing well.",
    items: [
      { title: "See what you are reading", body: "The Reading tab keeps your current books front and centre. When you reach the last page, one tap on Finish adds an optional rating and date. Tapped too soon? Undo." },
      { title: "A shelf of real covers", body: "Your Library is a grid of the actual covers, with star ratings, your own notes and how many days each book took you to read." },
      { title: "Add a book in seconds", body: "Scan the ISBN barcode, search by title or author, or take a photo of the cover. Norwegian books are found too, thanks to the National Library of Norway." },
      { title: "Remember what you want to read next", body: "Keep a Want to Read list and start reading straight from it when the time comes." },
      { title: "Your year in numbers", body: "A monthly chart, reading streaks and milestones show how your reading adds up over time. (Premium)" },
      { title: "Recommendations that make sense", body: "Discover new books based on the authors and series you already love. Not interested? Dismiss it and move on. (Premium)" },
    ],
  },
  how: {
    title: "How it works",
    steps: [
      { title: "Add", body: "Scan the barcode, search, or snap the cover." },
      { title: "Read", body: "Your current books wait in the Reading tab." },
      { title: "Finish", body: "One tap, an optional rating and date, and it is on your shelf." },
    ],
  },
  more: {
    title: "The details that matter",
    items: [
      { title: "Back up and restore", body: "Save your library and restore it when you move to a new phone." },
      { title: "Light and dark", body: "A warm paper look by day and an easy dark mode at night." },
      { title: "Made for iPhone", body: "A native feel, in English and Norwegian." },
    ],
  },
  premium: {
    eyebrow: "MyBooks Premium",
    title: "Go further, only if you want to",
    body: "Start with a 10-day free trial that includes everything. After that, the essentials stay with you, and Premium is an optional subscription for the extras.",
    freeLabel: "Always included",
    paidLabel: "With Premium",
    free: ["Reading, Library and Want to Read", "Barcode, search and cover photo", "Ratings, notes and days to read", "Backup and restore"],
    paid: ["Statistics, streaks and milestones", "Book recommendations"],
    note: "Pricing is shown in the app and on the App Store. Manage or cancel any time in your Apple ID settings.",
  },
  faq: {
    title: "Questions, answered",
    items: [
      { q: "Is MyBooks free?", a: "You can download it for free and try everything for 10 days. After the trial, the core of the app stays free. Statistics and recommendations are part of the optional MyBooks Premium subscription. There are no ads." },
      { q: "Where is my data stored?", a: "Your library lives on your iPhone. You can back it up and restore it from a backup file, for example when switching phones." },
      { q: "How do I add a book?", a: "Tap add, then scan the ISBN barcode, search by title or author, or take a photo of the cover." },
      { q: "Does it work for Norwegian books?", a: "Yes. Search includes the National Library of Norway, and the app is available in English and Norwegian." },
      { q: "What if a cover is missing?", a: "Take a photo of the cover with your camera or pick one from your photos." },
      { q: "Does it sync between devices?", a: "Not yet. Use backup and restore to move your library to another iPhone." },
    ],
  },
  cta: { title: "Give your books a proper home", sub: "Download MyBooks and start your shelf today." },
  footer: { tagline: "A reading journal for iPhone, by Arctic Labs.", privacy: "Privacy policy", support: "Support", contact: "Contact", rights: "All rights reserved.", theme: "Toggle dark mode", language: "Language" },
  alt: { phone: "MyBooks app screen:" },
};

const no: Dict = {
  nav: { features: "Funksjoner", how: "Slik fungerer det", premium: "Premium", faq: "Spørsmål", download: "Last ned", menu: "Meny" },
  hero: {
    eyebrow: "En lesedagbok for iPhone",
    title: "Leselivet ditt, vakkert ivaretatt",
    sub: "Skann en strekkode, ha ekte omslag i hyllen og se tilbake på hver eneste bok du har lest ferdig.",
    note: "Gratis å laste ned · Norsk og engelsk",
  },
  badge: { top: "Last ned på", main: "App Store" },
  showcase: {
    title: "Et rolig sted for bøkene dine",
    sub: "Varmt papir, tydelig skrift og omslagene du kjenner igjen. Lyst og mørkt utseende, laget for å føles hjemme på iPhone.",
    captions: ["Leser nå", "Biblioteket ditt", "Bokdetaljer", "Statistikk", "Anbefalinger", "Legg til en bok", "Fullfør en bok"],
  },
  features: {
    title: "Alt en leser faktisk trenger",
    sub: "Enkelt med vilje. Hver del av MyBooks gjør én ting godt.",
    items: [
      { title: "Se hva du leser", body: "Fanen Leser holder bøkene du leser nå i sentrum. Når du er ferdig, legger ett trykk på Ferdig til en valgfri vurdering og dato. Trykket for tidlig? Angre." },
      { title: "En hylle med ekte omslag", body: "Biblioteket er et rutenett med de faktiske omslagene, med stjernevurdering, egne notater og hvor mange dager hver bok tok deg." },
      { title: "Legg til en bok på sekunder", body: "Skann ISBN-strekkoden, søk på tittel eller forfatter, eller ta bilde av omslaget. Norske bøker finnes også, takket være Nasjonalbiblioteket." },
      { title: "Husk hva du vil lese neste", body: "Hold en Vil lese-liste og begynn å lese rett fra den når tiden er inne." },
      { title: "Leseåret ditt i tall", body: "Et månedlig diagram, lesestreker og milepæler viser hvordan lesingen din bygger seg opp over tid. (Premium)" },
      { title: "Anbefalinger som gir mening", body: "Oppdag nye bøker basert på forfatterne og seriene du allerede er glad i. Ikke interessert? Avvis og gå videre. (Premium)" },
    ],
  },
  how: {
    title: "Slik fungerer det",
    steps: [
      { title: "Legg til", body: "Skann strekkoden, søk eller ta bilde av omslaget." },
      { title: "Les", body: "Bøkene du leser venter i fanen Leser." },
      { title: "Fullfør", body: "Ett trykk, valgfri vurdering og dato, og boka står i hyllen." },
    ],
  },
  more: {
    title: "Detaljene som teller",
    items: [
      { title: "Sikkerhetskopi og gjenoppretting", body: "Lagre biblioteket ditt og gjenopprett det når du bytter telefon." },
      { title: "Lyst og mørkt", body: "Et varmt papirutseende om dagen og en rolig mørk modus om kvelden." },
      { title: "Laget for iPhone", body: "Følelsen av en ekte iPhone-app, på norsk og engelsk." },
    ],
  },
  premium: {
    eyebrow: "MyBooks Premium",
    title: "Gå lenger, bare hvis du vil",
    body: "Start med 10 dagers gratis prøveperiode med alt inkludert. Etterpå beholder du det grunnleggende, og Premium er et valgfritt abonnement for ekstra funksjoner.",
    freeLabel: "Alltid inkludert",
    paidLabel: "Med Premium",
    free: ["Leser, Bibliotek og Vil lese", "Strekkode, søk og omslagsbilde", "Vurderinger, notater og dager brukt", "Sikkerhetskopi og gjenoppretting"],
    paid: ["Statistikk, lesestreker og milepæler", "Bokanbefalinger"],
    note: "Pris vises i appen og i App Store. Administrer eller avslutt når som helst i Apple ID-innstillingene.",
  },
  faq: {
    title: "Spørsmål og svar",
    items: [
      { q: "Er MyBooks gratis?", a: "Du kan laste den ned gratis og prøve alt i 10 dager. Etter prøveperioden er kjernen i appen fortsatt gratis. Statistikk og anbefalinger er en del av det valgfrie abonnementet MyBooks Premium. Det er ingen reklame." },
      { q: "Hvor lagres dataene mine?", a: "Biblioteket ditt ligger på iPhonen din. Du kan sikkerhetskopiere det og gjenopprette fra en sikkerhetskopi, for eksempel når du bytter telefon." },
      { q: "Hvordan legger jeg til en bok?", a: "Trykk på legg til, og skann ISBN-strekkoden, søk på tittel eller forfatter, eller ta bilde av omslaget." },
      { q: "Fungerer det for norske bøker?", a: "Ja. Søket inkluderer Nasjonalbiblioteket, og appen finnes på norsk og engelsk." },
      { q: "Hva om et omslag mangler?", a: "Ta bilde av omslaget med kameraet, eller velg et fra bildene dine." },
      { q: "Synkroniseres det mellom enheter?", a: "Ikke ennå. Bruk sikkerhetskopi og gjenoppretting for å flytte biblioteket til en annen iPhone." },
    ],
  },
  cta: { title: "Gi bøkene dine et ordentlig hjem", sub: "Last ned MyBooks og begynn hyllen din i dag." },
  footer: { tagline: "En lesedagbok for iPhone, fra Arctic Labs.", privacy: "Personvernerklæring", support: "Støtte", contact: "Kontakt", rights: "Alle rettigheter forbeholdt.", theme: "Bytt mørk modus", language: "Språk" },
  alt: { phone: "Skjermbilde fra MyBooks:" },
};

const dicts: Record<Lang, Dict> = { en, no };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

const detect = (): Lang => {
  try {
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

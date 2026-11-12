import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Brain, HeartHandshake, Moon, Monitor, Repeat, Hand, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import DocPage from "@/components/DocPage";
import StoreBadge from "@/components/StoreBadge";
import { useLang, type Lang } from "@/lib/i18n";

// One page, two URLs: /leselyst (Norwegian) and /reading-for-pleasure (English).
// Every claim links to its source in `sources`. Keep it that way: no figure without a source.

type Strength = "strong" | "moderate" | "early";
type Finding = { icon: LucideIcon; title: string; body: string; strength: Strength; src: string[] };
type Stat = { value: string; label: string; src: string };
type Source = { id: string; text: string; url: string };
type Dict = {
  path: string; alt: string;
  eyebrow: string; title: string; intro: string;
  nowTitle: string; nowSub: string; stats: Stat[];
  findingsTitle: string; findingsSub: string; strength: Record<Strength, string>; findings: Finding[];
  mythTitle: string; myth: string;
  parentsTitle: string; parents: { title: string; body: string }[];
  teensTitle: string; teens: string[];
  appTitle: string; app: string; appLink: string;
  sourcesTitle: string; sourcesNote: string; sources: Source[];
};

const SOURCES_EN: Source[] = [
  { id: "pisa", text: "Udir (2026). PISA 2025: Norwegian students' skills in science, reading and mathematics.", url: "https://www.udir.no/tall-og-forskning/finn-forskning/rapporter/2026/pisa-2025-kompetanse-naturfag-lesing-matematikk/" },
  { id: "ssb", text: "Statistics Norway (SSB). Share reading paper books on an average day, by age (Norsk mediebarometer).", url: "https://www.ssb.no/kultur-og-fritid/kultur/kulturstatistikk/boker/tabeller/tabell-11-andel-papirboklesere-og-antall-minutter-som-brukes-til-slik-lesing-en-gjennomsnittsdag-etter-kjonn-alder-og-utdanning" },
  { id: "nlt", text: "National Literacy Trust (2024). Children and young people's reading in 2024.", url: "https://literacytrust.org.uk/research-services/research-reports/children-and-young-peoples-reading-in-2024/" },
  { id: "sullivan", text: "Sullivan, A. & Brown, M. (2015). Reading for pleasure and progress in vocabulary and mathematics. British Educational Research Journal, 41(6).", url: "https://doi.org/10.1002/berj.3180" },
  { id: "molbus", text: "Mol, S. E. & Bus, A. G. (2011). To read or not to read: A meta-analysis of print exposure from infancy to early adulthood. Psychological Bulletin, 137(2).", url: "https://doi.org/10.1037/a0021890" },
  { id: "sun", text: "Sun, Y.-J. et al. (2023). Early-initiated childhood reading for pleasure: associations with better cognitive performance, mental well-being and brain structure in young adolescence. Psychological Medicine.", url: "https://doi.org/10.1017/S0033291723001381" },
  { id: "wimmer", text: "Wimmer, L. et al. (2024). Cognitive effects and correlates of reading fiction: Two preregistered multilevel meta-analyses. Journal of Experimental Psychology: General, 153(6).", url: "https://doi.org/10.1037/xge0001583" },
  { id: "delgado", text: "Delgado, P. et al. (2018). Don't throw away your printed books: A meta-analysis on the effects of reading media on reading comprehension. Educational Research Review, 25.", url: "https://doi.org/10.1016/j.edurev.2018.09.003" },
  { id: "chang", text: "Chang, A.-M. et al. (2015). Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS, 112(4).", url: "https://doi.org/10.1073/pnas.1418490112" },
  { id: "patall", text: "Patall, E. A., Cooper, H. & Robinson, J. C. (2008). The effects of choice on intrinsic motivation and related outcomes: A meta-analysis. Psychological Bulletin, 134(2).", url: "https://doi.org/10.1037/0033-2909.134.2.270" },
];
const SOURCES_NO: Source[] = SOURCES_EN.map((s) => ({
  ...s,
  text: {
    pisa: "Udir (2026). PISA 2025: Norske elevers kompetanse i naturfag, lesing og matematikk.",
    ssb: "SSB. Andel papirboklesere en gjennomsnittsdag, etter alder (Norsk mediebarometer).",
  }[s.id] ?? s.text,
}));

const dicts: Record<Lang, Dict> = {
  no: {
    path: "/leselyst", alt: "/reading-for-pleasure",
    eyebrow: "Leselyst",
    title: "Leselyst hos ungdom: hva forskningen faktisk sier",
    intro: "Mange foreldre og lærere merker det: når barna blir tenåringer, legges bøkene bort. Her har vi samlet det forskningen sier om hvorfor lesing på fritiden betyr noe, hva vi ikke vet, og hva som faktisk hjelper. Hver påstand har en kilde nederst på siden.",
    nowTitle: "Slik står det til",
    nowSub: "Tallene er ikke hyggelige, men de viser hvorfor leselyst er verdt å bry seg om.",
    stats: [
      { value: "453", label: "poeng i lesing for norske 15-åringer i PISA 2025, under OECD-snittet på 461. Det er 60 poeng lavere enn i 2015.", src: "pisa" },
      { value: "34 %", label: "av norske 15-åringer leser under nivået som regnes som nødvendig for videre utdanning og arbeid. I 2015 var det 15 %.", src: "pisa" },
      { value: "33 % → 18 %", label: "leser i papirbok på fritiden en vanlig dag: 33 % av 9–15-åringene, men bare 18 % av 16–24-åringene (2025).", src: "ssb" },
      { value: "1 av 3", label: "britiske barn og unge (8–18 år) sa i 2024 at de liker å lese på fritiden. Det laveste siden målingene startet i 2005.", src: "nlt" },
    ],
    findingsTitle: "Hva forskningen sier",
    findingsSub: "Mye av forskningen viser sammenhenger, ikke årsak og virkning. Vi har merket hvor solid hvert funn er.",
    strength: { strong: "Solid kunnskap", moderate: "Lovende", early: "Tidlige funn" },
    findings: [
      { icon: BookOpen, strength: "strong", src: ["sullivan"], title: "Ordforråd, og mer enn det", body: "En britisk studie fulgte over 3 500 personer fra barndommen. De som leste for moro skyld mellom 10 og 16 år, gjorde større fremgang i ordforråd og også i matematikk, enn de som ikke gjorde det. Sammenhengen var sterkere enn foreldrenes utdanning. Lesing på fritiden ser altså ut til å kunne utjevne forskjeller hjemmefra." },
      { icon: Repeat, strength: "strong", src: ["molbus"], title: "Lesing gir mer lesing", body: "En stor metaanalyse av 99 studier fant at hvor mye man leser på fritiden, henger tydelig sammen med leseforståelse, staving og ordforråd fra barnehagealder til voksen alder. Det går begge veier: de som leser godt, leser mer, og de som leser mer, blir bedre. Også svake lesere hadde nytte av å lese på egen hånd." },
      { icon: Brain, strength: "moderate", src: ["sun"], title: "Hjerne og trivsel", body: "En studie av over 10 000 amerikanske barn fant at de som begynte å lese for moro skyld tidlig, gjorde det bedre på tester av språk og hukommelse i tidlig tenårsalder, hadde færre psykiske plager, sov mer og brukte mindre tid på skjerm. Forskerne fant også forskjeller i hjernestruktur. Studien er stor, men viser i hovedsak sammenhenger." },
      { icon: HeartHandshake, strength: "moderate", src: ["wimmer"], title: "Empati og forståelse av andre", body: "To store metaanalyser fra 2024 fant at skjønnlitteratur henger sammen med litt bedre språklige evner og litt bedre evne til å forstå andre mennesker. Effektene er små, størst for språk, og forskerne understreker at vi ennå ikke vet sikkert om det er lesingen som gir effekten." },
      { icon: Monitor, strength: "strong", src: ["delgado"], title: "Papir eller skjerm?", body: "En metaanalyse av 54 studier med over 170 000 deltakere fant at folk forstår fagtekster litt bedre på papir enn på skjerm, særlig når de har dårlig tid. For fortellinger, altså romaner og noveller, fant forskerne ingen forskjell. Til lystlesing er lesebrett og e-bok altså helt fint." },
      { icon: Moon, strength: "early", src: ["chang"], title: "Lesing før leggetid", body: "I et lite søvnlaboratorieforsøk sovnet voksne som leste på nettbrett om kvelden, rundt ti minutter senere og var mindre opplagte neste morgen enn når de leste i en papirbok. Forsøket var lite, men det støtter et enkelt råd: en papirbok på kvelden er et bedre valg enn mobilen." },
      { icon: Hand, strength: "strong", src: ["patall"], title: "Å få velge selv", body: "En metaanalyse av 41 studier fant at det å få velge selv øker indre motivasjon, innsats og prestasjon, og at effekten var større hos barn enn hos voksne. Dette gjelder ikke bare lesing, men det passer godt med det lærere og bibliotekarer ser: ungdom leser mer når de får velge bøkene selv." },
    ],
    mythTitle: "En myte vi lar ligge",
    myth: "Du har kanskje lest at «seks minutter med lesing reduserer stress med 68 prosent». Tallet deles overalt, men det kommer fra en oppdragsundersøkelse fra 2009 som aldri ble publisert i et fagfellevurdert tidsskrift. Vi tar det derfor ikke med. Lesing kan godt være avslappende, men akkurat det tallet holder ikke.",
    parentsTitle: "Råd til foreldre og lærere",
    parents: [
      { title: "La dem velge selv", body: "Også det du ikke ville valgt. Fantasy, manga, tegneserier, sportsbiografier og BookTok-favoritter teller. Motivasjonen kommer av å eie valget." },
      { title: "Alle formater teller", body: "Lydbok på bussen, e-bok på lesebrett, tegneserieroman. For romaner og andre fortellinger fant en stor metaanalyse ingen forskjell i forståelse mellom papir og skjerm." },
      { title: "Vær en voksen som leser", body: "Ungdom gjør mer som du gjør enn som du sier. La dem se deg lese, og snakk om hva du leser, ikke bare om hva de burde lese." },
      { title: "Lag rom, ikke regler", body: "En fast stund uten mobil før leggetid, en bok på nattbordet og et bibliotekkort gjør mer enn leselogger med minutter som skal kvitteres ut." },
      { title: "Lov å gi opp en bok", body: "Å legge bort en kjedelig bok er ikke å gi opp lesing. Det er sånn man finner ut hva man liker." },
      { title: "Snakk om bøker, ikke forhør", body: "«Hvem i boka likte du best?» åpner mer enn «Hva handlet den om?». Og ikke bruk lesing som straff." },
    ],
    teensTitle: "Til deg som er 13 eller eldre",
    teens: [
      "Det finnes ingen feil bøker. Les det du synes er gøy, også om det er manga, fantasy eller en bok fra BookTok.",
      "Ti sider før du sovner er nok. Det viktigste er at det blir en vane, ikke hvor mye du leser.",
      "Kjedelig bok? Legg den bort og prøv en annen. Du skylder ingen å lese ferdig.",
      "Likte du en bok? Se etter flere av samme forfatter eller i samme sjanger. Spør bibliotekaren, de er eksperter på akkurat dette.",
      "Hold oversikt over det du leser. Det er gøy å se tilbake på, og du finner ut hva du faktisk liker.",
      "Ikke sammenlign deg med andre. Lesing er ikke en konkurranse.",
    ],
    appTitle: "Der Everleaf kommer inn",
    app: "Everleaf er en privat leselogg for iPhone. Du kan skanne bøkene du leser, sette et lesemål og se året ditt i lesing, uten konto, uten reklame, uten følgere og uten at noe deles med andre. Det gjør den til et trygt sted å holde oversikt, også for unge lesere.",
    appLink: "Les om personvern i Everleaf",
    sourcesTitle: "Kilder",
    sourcesNote: "Sist sjekket november 2026.",
    sources: SOURCES_NO,
  },
  en: {
    path: "/reading-for-pleasure", alt: "/leselyst",
    eyebrow: "Reading for pleasure",
    title: "Reading for pleasure in teens: what the research actually says",
    intro: "Many parents and teachers notice it: when children become teenagers, the books get put away. Here is what research says about why reading for fun matters, what we do not know, and what actually helps. Every claim links to a source at the bottom of the page.",
    nowTitle: "Where things stand",
    nowSub: "The numbers are not cheerful, but they show why reading for pleasure is worth caring about.",
    stats: [
      { value: "453", label: "points in reading for 15-year-olds in Norway in PISA 2025, below the OECD average of 461 and 60 points lower than in 2015.", src: "pisa" },
      { value: "34%", label: "of 15-year-olds in Norway read below the level considered necessary for further education and work, up from 15% in 2015.", src: "pisa" },
      { value: "33% → 18%", label: "read a paper book in their free time on an average day in Norway: 33% of 9–15-year-olds, but only 18% of 16–24-year-olds (2025).", src: "ssb" },
      { value: "1 in 3", label: "UK children and young people (8–18) said in 2024 that they enjoy reading in their free time, the lowest level since 2005.", src: "nlt" },
    ],
    findingsTitle: "What the research says",
    findingsSub: "Much of this research shows links, not cause and effect. We have marked how solid each finding is.",
    strength: { strong: "Well established", moderate: "Promising", early: "Early findings" },
    findings: [
      { icon: BookOpen, strength: "strong", src: ["sullivan"], title: "Vocabulary, and more", body: "A British study followed over 3,500 people from childhood. Those who read for pleasure between 10 and 16 made more progress in vocabulary, and in maths too, than those who did not. The link was stronger than their parents' education, which suggests reading for fun can help close gaps that start at home." },
      { icon: Repeat, strength: "strong", src: ["molbus"], title: "Reading leads to more reading", body: "A large meta-analysis of 99 studies found that how much people read in their free time is clearly linked to reading comprehension, spelling and vocabulary, from preschool to adulthood. It works both ways: good readers read more, and people who read more get better. Weaker readers benefited from reading on their own too." },
      { icon: Brain, strength: "moderate", src: ["sun"], title: "Brain and wellbeing", body: "A study of over 10,000 American children found that those who started reading for pleasure early did better on language and memory tests in early adolescence, had fewer mental health problems, slept more and spent less time on screens. The researchers also found differences in brain structure. The study is large, but it mostly shows associations." },
      { icon: HeartHandshake, strength: "moderate", src: ["wimmer"], title: "Empathy and understanding others", body: "Two large meta-analyses from 2024 found that reading fiction is linked to slightly better verbal skills and a slightly better ability to understand other people. The effects are small, largest for language, and the researchers stress that we do not yet know for sure that reading causes them." },
      { icon: Monitor, strength: "strong", src: ["delgado"], title: "Paper or screen?", body: "A meta-analysis of 54 studies with over 170,000 participants found that people understand informational texts a little better on paper than on screens, especially under time pressure. For stories such as novels, there was no difference. For reading for pleasure, e-readers and ebooks are fine." },
      { icon: Moon, strength: "early", src: ["chang"], title: "Reading before bed", body: "In a small sleep-lab study, adults who read on a tablet in the evening took about ten minutes longer to fall asleep and were less alert the next morning than when they read a printed book. The study was small, but it backs a simple tip: a paper book at bedtime beats the phone." },
      { icon: Hand, strength: "strong", src: ["patall"], title: "Getting to choose", body: "A meta-analysis of 41 studies found that having a choice increases intrinsic motivation, effort and performance, and that the effect was larger for children than for adults. It is not specific to reading, but it fits what teachers and librarians see: teenagers read more when they pick their own books." },
    ],
    mythTitle: "A myth we leave out",
    myth: "You may have read that \"six minutes of reading reduces stress by 68 percent\". The figure is shared everywhere, but it comes from a commissioned 2009 survey that was never published in a peer-reviewed journal. So we leave it out. Reading may well be relaxing, but that particular number does not hold up.",
    parentsTitle: "Tips for parents and teachers",
    parents: [
      { title: "Let them choose", body: "Even what you would not pick. Fantasy, manga, comics, sports biographies and BookTok favourites all count. Motivation comes from owning the choice." },
      { title: "Every format counts", body: "An audiobook on the bus, an ebook on an e-reader, a graphic novel. For novels and other stories, a large meta-analysis found no difference in comprehension between paper and screens." },
      { title: "Be a reading adult", body: "Teenagers do more of what you do than what you say. Let them see you read, and talk about what you are reading, not just what they should read." },
      { title: "Make room, not rules", body: "A regular phone-free time before bed, a book on the nightstand and a library card do more than reading logs with minutes to sign off." },
      { title: "It is fine to quit a book", body: "Putting down a boring book is not giving up on reading. It is how you find out what you like." },
      { title: "Talk about books, do not quiz", body: "\"Who did you like most?\" opens more doors than \"What was it about?\". And never use reading as a punishment." },
    ],
    teensTitle: "If you are 13 or older",
    teens: [
      "There are no wrong books. Read what you enjoy, even if it is manga, fantasy or something from BookTok.",
      "Ten pages before you fall asleep is enough. Making it a habit matters more than how much you read.",
      "Boring book? Put it down and try another. You do not owe anyone a finished book.",
      "Liked a book? Look for more by the same author or in the same genre. Ask a librarian, this is exactly what they are good at.",
      "Keep track of what you read. It is fun to look back on, and you find out what you really like.",
      "Do not compare yourself with others. Reading is not a competition.",
    ],
    appTitle: "Where Everleaf fits in",
    app: "Everleaf is a private reading log for iPhone. Scan the books you read, set a reading goal and see your year in reading, with no account, no ads, no followers and nothing shared with anyone. That makes it a safe place to keep track, for young readers too.",
    appLink: "Read about privacy in Everleaf",
    sourcesTitle: "Sources",
    sourcesNote: "Last checked November 2026.",
    sources: SOURCES_EN,
  },
};

const ReadingForPleasure = ({ lang: pageLang }: { lang: Lang }) => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const d = dicts[pageLang];
  // The language switch moves to the other language's URL
  useEffect(() => {
    if (lang !== pageLang) navigate(d.alt, { replace: true });
  }, [lang, pageLang, d.alt, navigate]);

  const num = (id: string) => d.sources.findIndex((s) => s.id === id) + 1;
  const Cite = ({ ids }: { ids: string[] }) => (
    <sup className="ml-0.5 text-xs font-semibold">
      {ids.map((id, i) => <span key={id}>{i > 0 && ","}<a href={`#src-${id}`} className="text-primary hover:underline">{num(id)}</a></span>)}
    </sup>
  );

  return (
    <DocPage path={d.path} eyebrow={d.eyebrow} title={d.title} intro={d.intro} wide>
      <section aria-labelledby="now">
        <h2 id="now" className="text-2xl sm:text-3xl">{d.nowTitle}</h2>
        <p className="mt-2 text-muted-foreground">{d.nowSub}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {d.stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-serif-display text-4xl font-semibold text-primary">{s.value}</p>
              <p className="mt-2 text-muted-foreground">{s.label}<Cite ids={[s.src]} /></p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="findings" className="mt-20">
        <h2 id="findings" className="text-2xl sm:text-3xl">{d.findingsTitle}</h2>
        <p className="mt-2 text-muted-foreground">{d.findingsSub}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {d.findings.map(({ icon: Icon, title, body, strength, src }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${strength === "strong" ? "bg-primary text-primary-foreground" : strength === "moderate" ? "border border-primary/40 text-primary" : "bg-secondary text-secondary-foreground"}`}>
                  {d.strength[strength]}
                </span>
              </div>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}<Cite ids={src} /></p>
            </article>
          ))}
        </div>
        <aside className="mt-8 rounded-3xl bg-muted p-6">
          <h3 className="text-lg">{d.mythTitle}</h3>
          <p className="mt-2 text-muted-foreground">{d.myth}</p>
        </aside>
      </section>

      <section aria-labelledby="parents" className="mt-20">
        <h2 id="parents" className="text-2xl sm:text-3xl">{d.parentsTitle}</h2>
        <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {d.parents.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-1 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="teens" className="mt-20 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9">
        <h2 id="teens" className="text-2xl sm:text-3xl">{d.teensTitle}</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground marker:text-primary">
          {d.teens.map((t) => <li key={t} className="pl-1">{t}</li>)}
        </ul>
      </section>

      <section aria-labelledby="app" className="mt-20 flex flex-col gap-6 rounded-3xl bg-secondary p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 id="app" className="text-2xl">{d.appTitle}</h2>
          <p className="mt-2 text-secondary-foreground/90">{d.app}</p>
          <Link to="/privacy" className="mt-3 inline-block font-semibold text-primary underline-offset-4 hover:underline">{d.appLink}</Link>
        </div>
        <StoreBadge />
      </section>

      <section aria-labelledby="sources" className="mt-20">
        <h2 id="sources" className="text-2xl">{d.sourcesTitle}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{d.sourcesNote}</p>
        <ol className="mt-6 list-decimal space-y-3 pl-6 text-[15px] text-muted-foreground marker:font-semibold marker:text-primary">
          {d.sources.map((s) => (
            <li key={s.id} id={`src-${s.id}`} className="scroll-mt-24 pl-1">
              {s.text}{" "}
              <a href={s.url} rel="noopener" className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline">
                {new URL(s.url).hostname.replace(/^www\./, "")}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </section>
    </DocPage>
  );
};

export default ReadingForPleasure;

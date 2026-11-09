import { Check } from "lucide-react";
import DocPage, { Prose } from "@/components/DocPage";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const UPDATED = { en: "9 November 2026", no: "9. november 2026" };

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const Mail = () => <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>;

const summary = {
  en: ["No account, no sign-up", "No ads and no tracking across apps", "We never sell or share your data", "Your library stays on your iPhone and in your own iCloud", "App Store privacy label: Data Not Collected"],
  no: ["Ingen konto, ingen registrering", "Ingen reklame og ingen sporing på tvers av apper", "Vi selger eller deler aldri dataene dine", "Biblioteket ligger på iPhonen din og i din egen iCloud", "Personvernetikett i App Store: Data Not Collected"],
};

const En = () => (
  <Prose>
    <section>
      <h2>Who we are</h2>
      <p>Everleaf is a small independent studio in Norway. Everleaf was called MyBooks until 2026; only the name has changed. This policy explains what happens to your information when you use the Everleaf app for iPhone and this website. If anything is unclear, email <Mail />.</p>
    </section>
    <section>
      <h2>Your library stays with you</h2>
      <p>Everything you put into Everleaf is stored on your iPhone: your books, ratings, notes, reading dates, goals, lists and the cover photos you take. We do not run a server for your library and we cannot see it. Your library is also included in your iPhone's normal iCloud or computer backups.</p>
    </section>
    <section>
      <h2>iCloud backup and iCloud sync</h2>
      <p><strong>iCloud backup (free)</strong> saves a copy of your library as a file in your own iCloud Drive, in a Everleaf folder. <strong>iCloud sync (Premium, opt-in)</strong> keeps your library up to date across your devices using Apple's CloudKit, in the private database of your own Apple Account.</p>
      <p>In both cases the data is stored by Apple under your Apple Account, and only you can access it. {SITE.company} has no access to it. Apple's handling of iCloud data is covered by the <a href="https://www.apple.com/legal/privacy/" {...ext}>Apple Privacy Policy</a>.</p>
      <p>To delete this data, open the Settings app on your iPhone, tap your name, then iCloud, then Manage Storage (or Storage), and choose Everleaf.</p>
    </section>
    <section>
      <h2>Looking up books and covers</h2>
      <p>To find books, fill in details and covers, and suggest recommendations, the app sends what is needed for the lookup, such as the text you type, a scanned ISBN, or a book's title and author, directly from your iPhone to these public book services:</p>
      <ul>
        <li><a href="https://openlibrary.org" {...ext}>Open Library</a> (Internet Archive)</li>
        <li><a href="https://books.google.com" {...ext}>Google Books</a></li>
        <li><a href="https://www.nb.no" {...ext}>National Library of Norway</a> (Nasjonalbiblioteket)</li>
        <li>Apple's iTunes Search service, for sharper cover artwork</li>
      </ul>
      <p>These requests do not include your name, email or any identifier from us. As with any internet request, the service receives your IP address. Their own privacy policies apply.</p>
    </section>
    <section>
      <h2>Purchases and Premium</h2>
      <p>Payments are handled entirely by Apple. We never see your name, email or payment details.</p>
      <p>We use <a href="https://adapty.io/privacy" {...ext}>Adapty</a> to show the available plans and to check whether you have Premium. For this, Adapty receives a random ID created by the app, your purchase and subscription information from Apple, and basic technical details such as device model, iOS version, app version, language and country. This is used only to provide your purchase (the legal basis is performing our agreement with you). It is not used for advertising or to track you across apps or websites.</p>
      <p>The 10-day free Premium period on new installs is tracked on your iPhone only.</p>
    </section>
    <section>
      <h2>Camera and photos</h2>
      <p>Everleaf asks for the camera only to scan ISBN barcodes and to take cover photos, and for your photo library only when you pick a cover. Barcodes are read on your iPhone. Photos stay on your device, and in your own iCloud if you use sync.</p>
    </section>
    <section>
      <h2>Importing and exporting</h2>
      <p>Goodreads and StoryGraph CSV files are read on your iPhone. Backup files and CSV exports are saved only where you choose to save or share them.</p>
    </section>
    <section>
      <h2>What we do not do</h2>
      <ul>
        <li>No account, email or password is ever required</li>
        <li>No advertising, no ad networks and no third-party analytics or tracking tools</li>
        <li>No tracking across other companies' apps and websites</li>
        <li>No selling, renting or sharing of your data for marketing</li>
        <li>No cookies or analytics on this website. It only remembers your language choice and light or dark mode in your own browser. The site is hosted on GitHub Pages, which may log visitors' IP addresses for security (<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub's privacy statement</a>).</li>
      </ul>
    </section>
    <section>
      <h2>Your rights and how to delete your data</h2>
      <p>Because your library is stored on your device and in your own iCloud, you are in control of it. To delete it, use Settings, then Clear All Data in Everleaf, delete the app, and remove Everleaf from your iCloud storage as described above.</p>
      <p>Under the GDPR you can ask for access to, correction of or deletion of personal data. For the purchase data held by Adapty, email <Mail /> and we will have it deleted. You can also complain to the Norwegian Data Protection Authority, <a href="https://www.datatilsynet.no" {...ext}>Datatilsynet</a>.</p>
    </section>
    <section>
      <h2>Children</h2>
      <p>Everleaf is not directed at children under 13, and we do not knowingly collect personal information from anyone.</p>
    </section>
    <section>
      <h2>Changes to this policy</h2>
      <p>If we change how Everleaf handles data, we will update this page and the date below before the change takes effect.</p>
    </section>
    <section>
      <h2>Contact</h2>
      <p>{SITE.company}, Norway · <Mail /></p>
    </section>
  </Prose>
);

const No = () => (
  <Prose>
    <section>
      <h2>Hvem vi er</h2>
      <p>Everleaf er et lite, uavhengig studio i Norge. Everleaf het MyBooks fram til 2026; bare navnet er endret. Denne erklæringen forklarer hva som skjer med opplysningene dine når du bruker Everleaf-appen for iPhone og dette nettstedet. Er noe uklart, send e-post til <Mail />.</p>
    </section>
    <section>
      <h2>Biblioteket ditt blir hos deg</h2>
      <p>Alt du legger inn i Everleaf lagres på iPhonen din: bøker, vurderinger, notater, lesedatoer, mål, lister og omslagsbildene du tar. Vi har ingen server for biblioteket ditt og kan ikke se det. Biblioteket er også med i iPhonens vanlige sikkerhetskopier til iCloud eller datamaskin.</p>
    </section>
    <section>
      <h2>iCloud-sikkerhetskopi og iCloud-synkronisering</h2>
      <p><strong>iCloud-sikkerhetskopi (gratis)</strong> lagrer en kopi av biblioteket som en fil i din egen iCloud Drive, i en Everleaf-mappe. <strong>iCloud-synkronisering (Premium, valgfritt)</strong> holder biblioteket oppdatert mellom enhetene dine med Apples CloudKit, i den private databasen til din egen Apple-konto.</p>
      <p>I begge tilfeller lagres dataene hos Apple under Apple-kontoen din, og bare du har tilgang. {SITE.company} har ikke tilgang. Apples behandling av iCloud-data dekkes av <a href="https://www.apple.com/no/legal/privacy/" {...ext}>Apples personvernerklæring</a>.</p>
      <p>For å slette disse dataene, åpne Innstillinger-appen på iPhonen, trykk på navnet ditt, deretter iCloud, Administrer lagring (eller Lagring), og velg Everleaf.</p>
    </section>
    <section>
      <h2>Oppslag av bøker og omslag</h2>
      <p>For å finne bøker, fylle inn detaljer og omslag og foreslå anbefalinger, sender appen det som trengs for oppslaget, som teksten du skriver, et skannet ISBN eller en boks tittel og forfatter, direkte fra iPhonen til disse åpne boktjenestene:</p>
      <ul>
        <li><a href="https://openlibrary.org" {...ext}>Open Library</a> (Internet Archive)</li>
        <li><a href="https://books.google.com" {...ext}>Google Books</a></li>
        <li><a href="https://www.nb.no" {...ext}>Nasjonalbiblioteket</a></li>
        <li>Apples iTunes Search-tjeneste, for skarpere omslag</li>
      </ul>
      <p>Disse forespørslene inneholder ikke navn, e-post eller noen identifikator fra oss. Som ved alle forespørsler på internett mottar tjenesten IP-adressen din. Deres egne personvernerklæringer gjelder.</p>
    </section>
    <section>
      <h2>Kjøp og Premium</h2>
      <p>Betaling håndteres i sin helhet av Apple. Vi ser aldri navnet ditt, e-postadressen din eller betalingsopplysningene dine.</p>
      <p>Vi bruker <a href="https://adapty.io/privacy" {...ext}>Adapty</a> til å vise tilgjengelige planer og sjekke om du har Premium. Til dette mottar Adapty en tilfeldig ID laget av appen, kjøps- og abonnementsinformasjon fra Apple og enkle tekniske detaljer som enhetsmodell, iOS-versjon, appversjon, språk og land. Dette brukes bare til å levere kjøpet ditt (behandlingsgrunnlaget er avtalen med deg). Det brukes ikke til reklame eller til å spore deg på tvers av apper eller nettsteder.</p>
      <p>Den gratis Premium-perioden på 10 dager for nye installasjoner holdes kun rede på på iPhonen din.</p>
    </section>
    <section>
      <h2>Kamera og bilder</h2>
      <p>Everleaf ber om kameraet bare for å skanne ISBN-strekkoder og ta bilder av omslag, og om bildebiblioteket bare når du velger et omslag. Strekkoder leses på iPhonen. Bildene blir på enheten, og i din egen iCloud hvis du bruker synkronisering.</p>
    </section>
    <section>
      <h2>Import og eksport</h2>
      <p>CSV-filer fra Goodreads og StoryGraph leses på iPhonen. Sikkerhetskopifiler og CSV-eksporter lagres bare der du selv velger å lagre eller dele dem.</p>
    </section>
    <section>
      <h2>Dette gjør vi ikke</h2>
      <ul>
        <li>Ingen konto, e-post eller passord kreves, noen gang</li>
        <li>Ingen reklame, ingen annonsenettverk og ingen analyse- eller sporingsverktøy fra tredjeparter</li>
        <li>Ingen sporing på tvers av andre selskapers apper og nettsteder</li>
        <li>Ingen salg, utleie eller deling av dataene dine til markedsføring</li>
        <li>Ingen informasjonskapsler eller analyse på dette nettstedet. Det husker bare språkvalget og lyst eller mørkt utseende i din egen nettleser. Nettstedet ligger på GitHub Pages, som kan logge besøkendes IP-adresser av sikkerhetshensyn (<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHubs personvernerklæring</a>).</li>
      </ul>
    </section>
    <section>
      <h2>Dine rettigheter og sletting</h2>
      <p>Siden biblioteket lagres på enheten din og i din egen iCloud, har du selv kontrollen. For å slette det, bruk Innstillinger og Slett alle data i Everleaf, slett appen, og fjern Everleaf fra iCloud-lagringen som beskrevet over.</p>
      <p>Etter personvernforordningen (GDPR) kan du be om innsyn i, retting av eller sletting av personopplysninger. For kjøpsdata hos Adapty, send e-post til <Mail />, så sørger vi for at de slettes. Du kan også klage til <a href="https://www.datatilsynet.no" {...ext}>Datatilsynet</a>.</p>
    </section>
    <section>
      <h2>Barn</h2>
      <p>Everleaf er ikke rettet mot barn under 13 år, og vi samler ikke bevisst inn personopplysninger fra noen.</p>
    </section>
    <section>
      <h2>Endringer</h2>
      <p>Hvis vi endrer hvordan Everleaf behandler data, oppdaterer vi denne siden og datoen nedenfor før endringen trer i kraft.</p>
    </section>
    <section>
      <h2>Kontakt</h2>
      <p>{SITE.company}, Norge · <Mail /></p>
    </section>
  </Prose>
);

const Privacy = () => {
  const { lang } = useLang();
  const no = lang === "no";
  return (
    <DocPage
      path="/privacy"
      eyebrow={no ? "Personvern" : "Privacy"}
      title={no ? "Personvernerklæring" : "Privacy policy"}
      intro={no ? "Kort fortalt: Lesingen din er din. Everleaf er laget for å fungere uten å vite hvem du er." : "In short: your reading is yours. Everleaf is built to work without knowing who you are."}
    >
      <div className="mb-12 rounded-3xl border border-primary/30 bg-secondary p-7 shadow-soft">
        <ul className="space-y-3">
          {summary[lang].map((s) => (
            <li key={s} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{s}</span></li>
          ))}
        </ul>
      </div>
      {no ? <No /> : <En />}
      <p className="mt-12 text-sm text-muted-foreground">{no ? "Sist oppdatert" : "Last updated"}: {UPDATED[lang]}</p>
    </DocPage>
  );
};

export default Privacy;

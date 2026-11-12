import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Logo } from "./Nav";

const TERMS_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-[15px] text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 text-[15px] sm:flex sm:flex-wrap sm:gap-x-8">
          <Link to="/goodreads-alternative" className="hover:text-primary">{t.footer.switching}</Link>
          <Link to="/whats-new" className="hover:text-primary">{t.footer.whatsNew}</Link>
          <Link to="/support" className="hover:text-primary">{t.footer.support}</Link>
          <Link to="/privacy" className="hover:text-primary">{t.footer.privacy}</Link>
          <a href={TERMS_URL} className="hover:text-primary" rel="noopener">{t.footer.terms}</a>
          <a href={`mailto:${SITE.contactEmail}`} className="hover:text-primary">{t.footer.contact}</a>
        </nav>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE.company}. {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;

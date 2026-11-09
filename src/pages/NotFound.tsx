import { Link } from "react-router-dom";
import DocPage from "@/components/DocPage";
import { useLang } from "@/lib/i18n";

const NotFound = () => {
  const { lang } = useLang();
  const no = lang === "no";
  return (
    <DocPage path="/404" title={no ? "Denne siden finnes ikke" : "This page does not exist"} intro={no ? "Kanskje den er flyttet, eller lenken er feil." : "It may have moved, or the link is wrong."}>
      <Link to="/" className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">{no ? "Til forsiden" : "Go to the home page"}</Link>
    </DocPage>
  );
};

export default NotFound;

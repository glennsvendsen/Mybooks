import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import GoodreadsAlternative from "./pages/GoodreadsAlternative";
import WhatsNew from "./pages/WhatsNew";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <LangProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/goodreads-alternative" element={<GoodreadsAlternative />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LangProvider>
  </ThemeProvider>
);

export default AppRoutes;

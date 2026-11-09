import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { Hero, Showcase, Features, ICloud, Values, How, Compare, Plans, Faq, FinalCta } from "@/components/Sections";

const Index = () => (
  <div className="min-h-screen">
    <PageMeta path="/" />
    <Nav home />
    <main>
      <Hero />
      <Showcase />
      <Features />
      <ICloud />
      <Values />
      <How />
      <Compare />
      <Plans />
      <Faq />
      <FinalCta />
    </main>
    <Footer />
  </div>
);

export default Index;

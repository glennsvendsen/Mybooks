import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Hero, Showcase, Features, How, Premium, Faq, FinalCta } from "@/components/Sections";

const Index = () => (
  <div className="min-h-screen">
    <Nav home />
    <main>
      <Hero />
      <Showcase />
      <Features />
      <How />
      <Premium />
      <Faq />
      <FinalCta />
    </main>
    <Footer />
  </div>
);

export default Index;

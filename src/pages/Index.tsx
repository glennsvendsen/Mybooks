import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="text-xl font-bold">MyBooks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <AppShowcase />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

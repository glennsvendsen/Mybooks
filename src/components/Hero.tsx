import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 md:py-32">
      <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
      
      <div className="container relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
            ✨ Free to Use · Premium Features Available
          </Badge>
          
          <div className="mb-8 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-75">
            <BookOpen className="h-12 w-12 text-primary" strokeWidth={1.5} />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              MyBooks
            </h1>
          </div>
          
          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-foreground max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Your Personal Reading Companion
          </h2>
          
          <p className="mb-10 text-lg md:text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Track your reading journey, discover new books, and celebrate your literary milestones. 
            Simple, elegant, and free to get started.
          </p>
          
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="https://apps.apple.com/no/app/mybooks-book-tracking-app/id6755761216" target="_blank" rel="noopener noreferrer">
                Download on App Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

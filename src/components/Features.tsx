import { BookMarked, ScanBarcode, Image, Star, TrendingUp, Moon, ArrowDownUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookMarked,
    title: "Track & Wishlist",
    description: "Keep a record of books you've read and create a wishlist for your next literary adventure",
  },
  {
    icon: ScanBarcode,
    title: "ISBN Scanning",
    description: "Simply scan a book's barcode to automagically add it to your collection",
  },
  {
    icon: Image,
    title: "Auto Book Covers",
    description: "Beautiful book covers fetched automatically to bring your library to life",
  },
  {
    icon: Star,
    title: "Rate & Remember",
    description: "Rate your books and record when you read them for future reference",
  },
  {
    icon: TrendingUp,
    title: "Reading Statistics",
    description: "Track your reading habits, milestones, and celebrate your achievements",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Easy on the eyes with full dark mode support for comfortable reading in any lighting",
  },
  {
    icon: ArrowDownUp,
    title: "Export & Import",
    description: "Backup your library and easily transfer your reading data between devices",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A powerful yet simple app designed for book lovers who want to track and celebrate their reading journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] animate-in fade-in slide-in-from-bottom-4"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: "var(--card-shadow)"
              }}
            >
              <CardContent className="pt-8 pb-6">
                <feature.icon className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

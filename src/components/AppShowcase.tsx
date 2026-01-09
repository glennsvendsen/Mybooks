import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshot1 from "@/assets/app-screenshot-1.png";
import screenshot2 from "@/assets/app-screenshot-2.png";
import screenshot3 from "@/assets/app-screenshot-3.png";
import screenshot4 from "@/assets/app-screenshot-4.png";

const screenshots = [
  { src: screenshot1, alt: "MyBooks library view showing book collection" },
  { src: screenshot2, alt: "MyBooks wishlist feature" },
  { src: screenshot3, alt: "MyBooks reading statistics" },
  { src: screenshot4, alt: "MyBooks milestones and achievements" },
];

const AppShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Beautiful & Intuitive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clean, distraction-free interface that puts your books front and center
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/50 rounded-3xl p-8 md:p-16">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 md:px-4"
                  >
                    <div className={`transition-all duration-300 ${
                      selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    }`}>
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-2xl mx-auto"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedIndex === index 
                        ? "bg-primary w-8" 
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;

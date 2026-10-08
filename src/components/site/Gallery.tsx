import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import hero from "@/assets/hero.jpg";
import swing from "@/assets/swing.jpg";
import place from "@/assets/place.jpg";
import complete from "@/assets/j-complete.jpg";
import freestyle from "@/assets/freestyle.jpg";
import cafe from "@/assets/cafe.jpg";
import adventure from "@/assets/adventure.jpg";
import leap from "@/assets/j-leap.jpg";
import { Eyebrow, Section } from "./ui";
import { cn } from "@/lib/utils";

const IMGS = [
  { src: leap, alt: "Looking down on a bungee jumper falling toward a turquoise river", cls: "col-span-2 row-span-2" },
  { src: place, alt: "Himalayan valley and snow peaks at sunrise", cls: "row-span-2" },
  { src: freestyle, alt: "Freestyle bungee jumper upside down above a forested gorge", cls: "row-span-2" },
  { src: complete, alt: "Visitors celebrating with a high-five at sunset", cls: "col-span-2" },
  { src: cafe, alt: "Coffee and pastries at the café", cls: "" },
  { src: adventure, alt: "Group crossing a rope bridge in the pines", cls: "" },
  { src: hero, alt: "Jumper leaving the platform at dusk", cls: "col-span-2" },
  { src: swing, alt: "Giant swing across the river canyon", cls: "col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % IMGS.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + IMGS.length) % IMGS.length));
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", on);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section id="gallery" className="section-y bg-background" aria-labelledby="gal-title">
      <div className="container-site">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Gallery</Eyebrow>
            <h2 id="gal-title" className="display mt-5 text-4xl sm:text-5xl lg:text-7xl">Capture the moment</h2>
          </div>
          <p className="max-w-xs text-muted-foreground">Leaps, views, people and plates — a glimpse of a day here.</p>
        </div>
        <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4 lg:mt-16 lg:auto-rows-[200px] lg:gap-4">
          {IMGS.map((im, i) => (
            <button
              key={im.alt}
              type="button"
              onClick={() => setOpen(i)}
              className={cn("group relative overflow-hidden bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", im.cls)}
              aria-label={`View image: ${im.alt}`}
            >
              <img src={im.src} alt={im.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40">
                <Expand className="h-6 w-6 scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" aria-hidden />
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 animate-in fade-in" onClick={() => setOpen(null)}>
          <img src={IMGS[open]?.src} alt={IMGS[open]?.alt ?? ""} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button type="button" className="absolute right-4 top-4 grid h-12 w-12 place-items-center hover:text-primary" aria-label="Close" onClick={() => setOpen(null)} autoFocus>
            <X className="h-7 w-7" />
          </button>
          <button type="button" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center hover:text-primary md:left-6" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + IMGS.length) % IMGS.length); }}>
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button type="button" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center hover:text-primary md:right-6" aria-label="Next image" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % IMGS.length); }}>
            <ChevronRight className="h-8 w-8" />
          </button>
          <p className="eyebrow absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] text-foreground/70">{open + 1} / {IMGS.length}</p>
        </div>
      )}
    </Section>
  );
}

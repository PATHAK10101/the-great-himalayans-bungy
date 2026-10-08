import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Adventures", href: "#adventures" },
  { label: "About", href: "#about" },
  { label: "Restaurant & Café", href: "#restaurant" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blogs", href: "#blogs" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="The Great Himalayans Bungy — home">
      <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" aria-hidden>
        <path d="M2 34 L15 12 L21 22 L26 15 L38 34 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M26 15 L26 30" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="26" cy="32" r="2.6" fill="var(--color-primary)" />
      </svg>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">The Great</span>
        <span className={cn("block truncate font-display uppercase tracking-wide", compact ? "text-base" : "text-[0.95rem] sm:text-lg")}>
          Himalayans <span className="text-primary">Bungy</span>
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        !pastHero && !open && "lg:pointer-events-none lg:-translate-y-full lg:opacity-0",
        scrolled || open ? "border-b border-border bg-ink/85 backdrop-blur-md" : "max-lg:bg-ink/90 max-lg:backdrop-blur-md lg:bg-transparent",
      )}
    >
      <div className={cn("container-site grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500 lg:flex lg:justify-between", scrolled ? "h-16" : "h-20")}>
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="relative text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-foreground hover:after:w-full">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="#book" className="inline-flex min-h-10 items-center bg-primary px-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-red sm:px-6 max-[380px]:px-3 max-[380px]:text-[0.65rem]">
            <span className="sm:hidden">Book</span><span className="hidden sm:inline">Book Now</span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 bg-ink/75 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-site flex h-full flex-col justify-between py-10">
          <ul className="space-y-1">
            {NAV.map((n, i) => (
              <li key={n.href} style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }} className={cn("transition-all duration-500", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <a href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl uppercase hover:text-primary">
                  <span className="text-xs text-primary">0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#book" onClick={() => setOpen(false)} className="flex min-h-14 items-center justify-center bg-primary text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground">
            Book Your Adventure
          </a>
        </nav>
      </div>
    </>
  );
}

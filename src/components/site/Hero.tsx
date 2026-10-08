import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import jumper from "@/assets/jumper-cutout.png";
import hero from "@/assets/hero.jpg";
import place from "@/assets/place.jpg";
import swing from "@/assets/swing.jpg";
import bungee from "@/assets/bungee.jpg";
import zipline from "@/assets/zipline.jpg";
import { Corner, TabNotch } from "./ui";
import { Logo, NAV } from "./Header";
import { cn } from "@/lib/utils";

const LAYERS = [
  { src: place, alt: "Himalayan valley at sunrise", depth: 10, cls: "w-[78%] -rotate-[8deg] left-[4%] top-[18%]" },
  { src: swing, alt: "Giant swing over a river canyon", depth: 22, cls: "w-[70%] rotate-[6deg] right-[0%] top-[34%]" },
  { src: zipline, alt: "Zipline across a forested valley", depth: 36, cls: "w-[62%] -rotate-[3deg] left-[14%] top-[52%]" },
];

export function Hero() {
  const [thrill, setThrill] = useState(false);
  const [dropKey, setDropKey] = useState(0);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const on = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
      el.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
    };
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, []);

  const toggle = (v: boolean) => {
    setThrill(v);
    if (v) setDropKey((k) => k + 1);
  };

  return (
    <section id="top" className="bg-ink p-2 sm:p-3 lg:p-4" aria-labelledby="hero-title" style={{ ["--cut" as string]: "var(--color-ink)", ["--r" as string]: "1.75rem" }}>
      <div
        className={cn(
          "relative isolate min-h-[calc(100svh-1rem)] overflow-hidden rounded-[var(--r)] transition-colors duration-700 sm:min-h-[calc(100svh-1.5rem)] lg:min-h-[calc(100svh-2rem)]",
          thrill ? "bg-card text-foreground" : "bg-paper text-paper-foreground",
        )}
      >
        {/* Thrill mode backdrop */}
        <img src={hero} alt="" aria-hidden className={cn("absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-700", thrill ? "opacity-40" : "opacity-0")} />
        <div aria-hidden className={cn("absolute inset-0 -z-10 transition-opacity duration-700", thrill ? "bg-overlay-side opacity-100" : "opacity-0")} />
        <div aria-hidden className={cn("absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-3xl transition-opacity duration-700", thrill && "opacity-0")} />

        {/* Top-left notch: logo */}
        <TabNotch className="hidden px-6 pb-4 pt-4 text-foreground lg:block">
          <div className="pr-2"><Logo /></div>
        </TabNotch>

        {/* Nav pill */}
        <nav aria-label="Hero" className="absolute left-[19rem] top-5 hidden lg:block">
          <ul className={cn("flex items-center gap-1 rounded-full border px-2 py-1.5 transition-colors", thrill ? "border-foreground/30" : "border-paper-foreground/25")}>
            {NAV.slice(1).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="block rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Top-right notch: CTA */}
        <div className="absolute right-0 top-0 z-10 hidden rounded-bl-[var(--r)] bg-ink py-4 pl-5 pr-5 lg:block">
          <a href="#book" className="group inline-flex items-center gap-3 rounded-full border border-foreground/40 py-1.5 pl-1.5 pr-5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-ink transition-colors group-hover:bg-ink group-hover:text-primary">
              <ArrowRight className="h-4 w-4" />
            </span>
            Book Now
          </a>
          <Corner at="0% 100%" className="right-full top-0" />
          <Corner at="0% 100%" className="right-0 top-full" />
        </div>

        <div className="container-site grid min-h-[inherit] items-center gap-6 pb-28 pt-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-4 lg:pb-16 lg:pt-28">
          {/* Copy */}
          <div className="relative z-10 order-2 lg:order-1">
            <p className="eyebrow animate-hero-in text-primary" style={{ animationDelay: "0.1s" }}>The Great Himalayans Bungy</p>
            <h1 id="hero-title" className="animate-hero-in mt-5 font-hero text-[2.6rem] font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]" style={{ animationDelay: "0.2s" }}>
              Where the
              <span className="flex items-center gap-3 sm:gap-4">
                <span className="relative inline-block h-[0.85em] w-[0.95em] shrink-0" aria-hidden>
                  {[place, swing, bungee].map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="absolute left-0 h-[0.55em] w-full rounded-[0.14em] object-cover shadow-lg ring-2 ring-paper"
                      style={{ top: `${i * 0.15}em`, transform: `rotate(${(i - 1) * 6}deg)`, zIndex: i }}
                    />
                  ))}
                </span>
                Himalayas
              </span>
              meet the <span className="font-semibold text-primary">thrill.</span>
            </h1>

            <div className="animate-hero-in mt-10 max-w-sm" style={{ animationDelay: "0.35s" }}>
              <a href="#book" className="group flex items-center gap-3 border-b border-current/30 pb-4 text-base font-medium">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                Book Your Adventure
              </a>
              <p className={cn("mt-4 text-sm leading-relaxed", thrill ? "text-foreground/75" : "text-paper-foreground/70")}>
                Bungee, giant swing, zipline and a Restaurant & Café — set in breathtaking Himalayan surroundings, for those who seek something beyond ordinary.
              </p>
              <a href="#adventures" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] hover:text-primary">
                Explore Experiences <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Stage: layered photo "sheets" + diving jumper */}
          <div ref={stage} className="relative order-1 mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md lg:order-2 lg:max-w-none" style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}>
            {LAYERS.map((l, i) => (
              <div
                key={l.src}
                className={cn("absolute transition-transform duration-700 ease-out", l.cls)}
                style={{ transform: `translate3d(calc(var(--mx) * ${l.depth}px * ${thrill ? 2 : 1}), calc(var(--my) * ${l.depth}px + ${thrill ? (i - 1) * 28 : 0}px), 0)` }}
              >
                <div className="animate-layer" style={{ animationDelay: `${i * -1.5}s` }}>
                  <img src={l.src} alt={l.alt} width={896} height={1200} className={cn("aspect-[16/10] w-full rounded-[1.25rem] object-cover shadow-2xl ring-4 transition-all duration-700", thrill ? "ring-primary/70" : "ring-paper")} />
                </div>
              </div>
            ))}

            {/* Jumper on cord */}
            <div className="absolute left-[34%] top-[-30%] z-20 w-[42%] sm:top-[-24%]" style={{ transform: "translate3d(calc(var(--mx) * -28px), calc(var(--my) * -18px), 0)" }}>
              <div key={dropKey} className={thrill ? "animate-drop" : ""}>
                <div className="animate-bob origin-top">
                  <div aria-hidden className="absolute bottom-[99%] left-[58%] h-[200vh] w-[3px] -translate-x-1/2 bg-primary" />
                  <img src={jumper} alt="Bungee jumper diving head-first with arms spread" width={896} height={1280} fetchPriority="high" className="w-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.35)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right notch: Thrill mode toggle */}
        <div className="absolute bottom-0 right-0 z-10 flex items-center gap-3 rounded-tl-[var(--r)] bg-ink py-3 pl-5 pr-4 text-sm text-foreground sm:py-4">
          <span className="font-medium">Thrill mode:</span>
          <div role="group" aria-label="Thrill mode" className="flex rounded-full border border-foreground/30 p-0.5">
            {[{ v: true, l: "On" }, { v: false, l: "Off" }].map((o) => (
              <button
                key={o.l}
                type="button"
                aria-pressed={thrill === o.v}
                onClick={() => toggle(o.v)}
                className={cn("min-h-8 rounded-full px-4 text-sm transition-colors", thrill === o.v ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:text-foreground")}
              >
                {o.l}
              </button>
            ))}
          </div>
          <Corner at="0% 0%" className="bottom-0 right-full" />
          <Corner at="0% 0%" className="bottom-full right-0" />
        </div>
      </div>
    </section>
  );
}

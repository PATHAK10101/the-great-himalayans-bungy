import { useEffect, useRef, useState } from "react";
import arrive from "@/assets/j-arrive.jpg";
import ready from "@/assets/j-ready.jpg";
import leap from "@/assets/j-leap.jpg";
import thrill from "@/assets/j-thrill.jpg";
import complete from "@/assets/j-complete.jpg";
import dining from "@/assets/dining.jpg";
import { cn } from "@/lib/utils";

const STEPS = [
  { t: "Arrive", d: "Wind up the mountain road, check in and feel the valley open up around you.", img: arrive, alt: "Visitors arriving at a misty mountain adventure base camp" },
  { t: "Get Ready", d: "Meet the crew, get briefed and geared up. Every strap checked, every question answered.", img: ready, alt: "Instructor fastening a jumper's ankle harness at the platform edge" },
  { t: "Take the Leap", d: "Three. Two. One. Step off the edge and let gravity take over.", img: leap, alt: "Bungee jumper in freefall plunging toward a turquoise river" },
  { t: "Feel the Thrill", d: "The rebound, the rush, the whole Himalayan valley spinning around you.", img: thrill, alt: "Jumper rebounding mid-air with arms raised above a mountain valley" },
  { t: "Complete the Experience", d: "Back on solid ground. Capture the moment and celebrate with your crew.", img: complete, alt: "Friends high-fiving at sunset after their jump" },
  { t: "Refuel & Relax", d: "Wind down at the Restaurant & Café with food, drinks and the view.", img: dining, alt: "Visitors dining on an open-air deck overlooking the valley at dusk" },
];

export function Journey() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        setP(Math.min(1, Math.max(0, -r.top / total)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  const rowRef = useRef<HTMLOListElement>(null);
  const paused = useRef(false);
  useEffect(() => {
    const id = window.setInterval(() => {
      const el = rowRef.current;
      if (!el || paused.current || el.offsetParent === null) return;
      const w = el.clientWidth;
      const next = Math.round(el.scrollLeft / w) + 1;
      el.scrollTo({ left: next >= STEPS.length ? 0 : next * w, behavior: "smooth" });
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  const n = STEPS.length;
  const pos = p * n;
  const active = Math.min(n - 1, Math.floor(pos));

  return (
    <>
    <section className="bg-ink py-16 md:hidden" aria-labelledby="journey-title-m">
      <div className="container-site">
        <p className="eyebrow flex items-center gap-3 text-primary">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <span id="journey-title-m">The Freefall Journey</span>
        </p>
        <h2 className="display mt-4 text-4xl">Six steps to the leap</h2>
        <p className="mt-3 text-sm text-muted-foreground">Swipe or watch the journey unfold →</p>
        <ol
          ref={rowRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory overflow-x-auto"
          onTouchStart={() => { paused.current = true; }}
          onTouchEnd={() => { window.setTimeout(() => { paused.current = false; }, 3000); }}
        >
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative h-[26rem] w-full shrink-0 snap-center overflow-hidden rounded-[1.5rem]">
              <img src={s.img} alt={s.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-overlay-card" aria-hidden />
              <div className="absolute inset-x-5 top-5 flex items-center gap-1.5" aria-hidden>
                {STEPS.map((_, j) => (
                  <span key={j} className={cn("h-1 flex-1 rounded-full", j <= i ? "bg-primary" : "bg-foreground/25")} />
                ))}
              </div>
              <span className="eyebrow absolute left-5 top-9 text-[0.6rem] text-foreground/80">Step 0{i + 1} / 0{n}</span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="display text-6xl text-transparent [-webkit-text-stroke:1.5px_var(--color-primary)]">0{i + 1}</p>
                <h3 className="display mt-2 text-3xl">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/85">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
    <section id="journey" ref={ref} className="relative hidden scroll-mt-0 bg-ink md:block" style={{ height: `${n * 90 + 40}vh` }} aria-labelledby="journey-title">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* imagery */}
        {STEPS.map((s, i) => {
          const local = pos - i; // 0..1 while this step is active
          const vis = i === active;
          const ty = vis ? (local - 0.5) * -8 : i < active ? -12 : 12;
          return (
            <div
              key={s.t}
              className="absolute inset-0 transition-[opacity,transform] duration-[900ms] ease-out"
              style={{ opacity: vis ? 1 : 0, transform: `translate3d(0, ${ty}%, 0) scale(${vis ? 1.08 - Math.min(1, Math.max(0, local)) * 0.06 : 1.15})` }}
              aria-hidden={!vis}
            >
              <img src={s.img} alt={s.alt} width={1600} height={1008} loading="lazy" className="h-full w-full object-cover" />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-overlay-side max-md:bg-overlay-card" aria-hidden />
        <div className="absolute inset-0 bg-ink/30" aria-hidden />

        <div className="container-site relative flex h-full flex-col justify-end pb-14 pt-24 md:justify-center md:pb-0">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-12">
            {/* freefall rail */}
            <div className="relative w-6 self-stretch md:w-10" aria-hidden>
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/20" />
              <div className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-primary" style={{ height: `${p * 100}%` }} />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[top] duration-150" style={{ top: `${p * 100}%` }}>
                <span className="block h-4 w-4 rounded-full bg-primary shadow-red ring-4 ring-primary/30" />
              </div>
              {STEPS.map((_, i) => (
                <span key={i} className={cn("absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full transition-colors", i <= active ? "bg-primary" : "bg-foreground/40")} style={{ top: `${(i / (n - 1)) * 100}%` }} />
              ))}
            </div>

            <div className="min-w-0 py-2 md:py-16">
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden />
                <span id="journey-title">The Freefall Journey</span>
              </p>
              <div className="relative mt-6 min-h-[15rem] sm:min-h-[17rem] md:min-h-[22rem]">
                {STEPS.map((s, i) => (
                  <div
                    key={s.t}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-out",
                      i === active ? "translate-y-0 opacity-100" : i < active ? "-translate-y-10 opacity-0" : "translate-y-10 opacity-0",
                    )}
                    aria-hidden={i !== active}
                  >
                    <p className="display text-7xl text-transparent [-webkit-text-stroke:1.5px_var(--color-primary)] md:text-9xl">0{i + 1}</p>
                    <h3 className="display mt-3 max-w-2xl text-4xl sm:text-5xl md:text-7xl">{s.t}</h3>
                    <p className="mt-4 max-w-md text-base text-foreground/85 md:text-lg">{s.d}</p>
                  </div>
                ))}
              </div>
              <ol className="mt-6 hidden flex-wrap gap-x-6 gap-y-2 md:flex">
                {STEPS.map((s, i) => (
                  <li key={s.t} className={cn("eyebrow text-[0.65rem] transition-colors", i === active ? "text-foreground" : "text-foreground/40")}>
                    0{i + 1} {s.t}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

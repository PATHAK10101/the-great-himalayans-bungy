import food from "@/assets/food.jpg";
import cafe from "@/assets/cafe.jpg";
import dining from "@/assets/dining.jpg";
import { CtaLink, Eyebrow, Section } from "./ui";

export function Restaurant() {
  return (
    <Section id="restaurant" className="section-y bg-paper text-paper-foreground" aria-labelledby="rest-title">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div className="reveal">
            <Eyebrow>Restaurant & Café</Eyebrow>
            <h2 id="rest-title" className="display mt-5 text-4xl sm:text-5xl lg:text-7xl">Refuel after <br />the thrill</h2>
          </div>
          <div className="reveal">
            <p className="text-paper-foreground/70 md:text-lg">Take a break, relax and enjoy the flavours of the destination at our Restaurant & Café.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Restaurant", "Café", "Relax", "Refuel"].map((t) => (
                <li key={t} className="eyebrow border border-paper-foreground/20 px-4 py-2 text-[0.65rem]">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12 lg:mt-16 lg:gap-5">
          <figure className="reveal group relative overflow-hidden md:col-span-5 md:row-span-2">
            <div className="aspect-[4/5] h-full md:aspect-auto">
              <img src={food} alt="Himalayan thali and grilled skewers on a terrace table with snow peaks behind" width={1200} height={1408} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-overlay-card p-6 pt-20 text-foreground">
              <p className="eyebrow text-[0.65rem] text-primary">Restaurant</p>
              <p className="display mt-2 text-2xl md:text-3xl">Hearty plates, mountain views</p>
              <p className="mt-1 text-sm text-foreground/80">Wholesome meals to refuel after the rush.</p>
            </figcaption>
          </figure>

          <figure className="reveal group relative overflow-hidden md:col-span-7">
            <div className="aspect-[16/10]">
              <img src={dining} alt="Friends sharing dinner on an open-air deck lit with string lights at dusk" width={1600} height={1008} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-overlay-card p-6 pt-20 text-foreground">
              <p className="eyebrow text-[0.65rem] text-primary">Relax</p>
              <p className="display mt-2 text-2xl md:text-3xl">Golden hour on the deck</p>
              <p className="mt-1 text-sm text-foreground/80">Slow down, share stories and watch the valley glow.</p>
            </figcaption>
          </figure>

          <div className="grid gap-4 sm:grid-cols-2 md:col-span-7 lg:gap-5">
            <figure className="reveal group relative overflow-hidden">
              <div className="aspect-square">
                <img src={cafe} alt="Cappuccino, masala chai and fresh pastries on a café table" width={1008} height={1008} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-overlay-card p-5 pt-16 text-foreground">
                <p className="eyebrow text-[0.65rem] text-primary">Café</p>
                <p className="display mt-1 text-xl">Coffee, chai & bakes</p>
              </figcaption>
            </figure>
            <div className="reveal flex flex-col justify-between bg-ink p-6 text-foreground md:p-8">
              <div>
                <p className="eyebrow text-[0.65rem] text-primary">Refuel</p>
                <p className="display mt-3 text-3xl">The perfect end to your adventure.</p>
              </div>
              <CtaLink href="#book" className="mt-8 w-full px-4 text-xs">Explore Restaurant & Café</CtaLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

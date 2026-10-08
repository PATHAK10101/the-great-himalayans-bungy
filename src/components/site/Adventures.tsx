import { ArrowUpRight } from "lucide-react";
import bungee from "@/assets/bungee.jpg";
import freestyle from "@/assets/freestyle.jpg";
import swing from "@/assets/swing.jpg";
import zipline from "@/assets/zipline.jpg";
import adventure from "@/assets/adventure.jpg";
import { Eyebrow, Section, TabNotch } from "./ui";
import { cn } from "@/lib/utils";

const ITEMS = [
  { title: "Bungee Jumping", text: "The ultimate leap into the Himalayan air.", img: bungee, alt: "Bungee jumper diving from a platform over a green Himalayan valley", tag: "Signature" },
  { title: "Freestyle Bungy", text: "A different way to experience the freefall.", img: freestyle, alt: "Freestyle bungee jumper flipping upside down above a forested gorge" },
  { title: "Giant Swing", text: "A breathtaking swing above the landscape.", img: swing, alt: "Rider on a giant swing arcing across a Himalayan river canyon" },
  { title: "Zipline", text: "Fly across the valley and take in the views.", img: zipline, alt: "Rider on a zipline crossing a forested Himalayan valley" },
  { title: "Adventure Experiences", text: "More ways to explore, right at the destination.", img: adventure, alt: "Visitors crossing a rope bridge on a high ropes course among pine trees" },
];

export function Adventures() {
  return (
    <Section id="adventures" className="section-y bg-background" aria-labelledby="adv-title">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:items-end md:gap-12">
          <div className="reveal">
            <Eyebrow>Adventures</Eyebrow>
            <h2 id="adv-title" className="display mt-5 text-4xl sm:text-5xl lg:text-7xl">
              The adventure <br className="hidden sm:block" />starts here
            </h2>
          </div>
          <p className="reveal text-muted-foreground md:text-lg">
            Push beyond the ordinary and feel the thrill of the Himalayas through experiences you won't forget.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5 lg:mt-16" style={{ ["--cut" as string]: "var(--color-background)", ["--r" as string]: "1.5rem" }}>
          {ITEMS.map((it, i) => (
            <article
              key={it.title}
              className={cn("reveal group relative flex flex-col rounded-[1.75rem] bg-card p-3 pt-14 transition-colors duration-500 hover:bg-secondary", "w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]")}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <TabNotch className="flex h-12 items-center px-5">
                <span className="font-hero text-sm text-muted-foreground transition-colors group-hover:text-primary">/ 0{i + 1}</span>
              </TabNotch>
              {it.tag && <span className="eyebrow absolute right-5 top-5 rounded-full bg-primary px-3 py-1.5 text-[0.6rem] text-primary-foreground">{it.tag}</span>}
              <div className={cn("relative overflow-hidden rounded-[1.25rem]", "aspect-[4/3]")}>
                <img src={it.img} alt={it.alt} width={896} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-overlay-card opacity-60 transition-opacity duration-500 group-hover:opacity-90" aria-hidden />
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 px-3 pb-3 pt-6">
                <div className="min-w-0">
                  <h3 className="font-hero text-2xl font-light tracking-tight lg:text-[1.75rem]">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                </div>
                <a href="#book" aria-label={`Explore ${it.title}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-foreground/25 transition-all duration-500 after:absolute after:inset-0 after:rounded-[1.75rem] group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

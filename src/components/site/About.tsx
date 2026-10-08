import { Compass, ShieldCheck, Users } from "lucide-react";
import place from "@/assets/place.jpg";
import team from "@/assets/team.jpg";
import { CtaLink, Eyebrow, Section } from "./ui";

export function AboutPlace() {
  return (
    <Section id="about" className="section-y bg-ink" aria-labelledby="place-title">
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="reveal relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/12] lg:aspect-[5/6]">
            <img src={place} alt="Golden-hour Himalayan valley with a winding river and a cliffside viewing platform" width={1200} height={1408} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 left-5 hidden bg-primary px-6 py-5 text-primary-foreground sm:block lg:-right-8 lg:left-auto">
            <p className="display text-2xl">The Himalayas</p>
            <p className="eyebrow mt-1 text-[0.6rem] text-primary-foreground/80">Your backdrop for the day</p>
          </div>
        </div>
        <div className="reveal lg:col-span-6 lg:pl-6">
          <Eyebrow>About the place</Eyebrow>
          <h2 id="place-title" className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            More than a jump. <br />
            <span className="text-primary">A destination.</span>
          </h2>
          <div className="mt-7 space-y-4 text-muted-foreground md:text-lg">
            <p>Forested ridges, a river far below and snow peaks on the horizon. Here the landscape is part of the adventure.</p>
            <p>Come for the leap, stay for the views, the food and the stories you'll share on the way home. It's a full day out — not just a few seconds of freefall.</p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-px bg-border">
            {["Himalayan surroundings", "Adventure atmosphere", "Scenic viewpoints", "Dining & relaxation"].map((t) => (
              <li key={t} className="bg-ink py-4 pr-4 text-sm font-semibold uppercase tracking-[0.12em]">
                <span className="mr-2 text-primary">/</span>
                {t}
              </li>
            ))}
          </ul>
          <CtaLink href="#journey" className="mt-10">Discover the Place</CtaLink>
        </div>
      </div>
    </Section>
  );
}

const VALUES = [
  { icon: Compass, title: "Experience", text: "A team that knows the destination and guides every visitor through it." },
  { icon: ShieldCheck, title: "Safety", text: "Careful checks and clear briefings before every activity." },
  { icon: Users, title: "Adventure", text: "Friendly, encouraging people who make the thrill feel personal." },
];

export function Team() {
  return (
    <Section className="section-y bg-background" aria-labelledby="team-title">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div className="reveal">
            <Eyebrow>About the team</Eyebrow>
            <h2 id="team-title" className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">The people behind the thrill</h2>
          </div>
          <p className="reveal text-muted-foreground md:text-lg">
            From the first hello to the final high-five, our crew is beside you — explaining each step, checking your gear and cheering you on.
          </p>
        </div>
        <div className="reveal relative mt-12 aspect-[4/3] overflow-hidden sm:aspect-[16/8] lg:mt-16">
          <img src={team} alt="Instructors in black team t-shirts checking a smiling visitor's harness on the jump platform" width={1600} height={1008} loading="lazy" className="h-full w-full object-cover object-[35%_center]" />
        </div>
        <div className="mt-px grid gap-px bg-border md:grid-cols-3">
          {VALUES.map((v, i) => (
            <div key={v.title} className="reveal group bg-background p-6 transition-colors duration-500 hover:bg-card md:p-8" style={{ transitionDelay: `${i * 80}ms` }}>
              <v.icon className="h-7 w-7 text-primary" aria-hidden />
              <h3 className="display mt-5 text-2xl">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

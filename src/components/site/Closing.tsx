import { ArrowUpRight, Mountain, Sparkles, UtensilsCrossed, Users, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import bungee from "@/assets/bungee.jpg";
import thrill from "@/assets/j-thrill.jpg";
import ready from "@/assets/j-ready.jpg";
import hero from "@/assets/hero.jpg";
import { CtaLink, Eyebrow, Section, TabNotch } from "./ui";
import { Logo, NAV } from "./Header";

const POSTS = [
  { img: thrill, cat: "Guide", title: "The Ultimate Himalayan Adventure", text: "How to plan a day of thrills, views and good food in the mountains.", alt: "Jumper celebrating mid-air above a sunlit valley" },
  { img: ready, cat: "First Timers", title: "Your First Bungee Jump", text: "What to expect, what to wear and how to calm those nerves.", alt: "Instructor fitting an ankle harness before a jump" },
  { img: bungee, cat: "Stories", title: "A Day at The Great Himalayans Bungy", text: "From arrival to the last sip of chai — one visitor's day, start to finish.", alt: "Bungee jumper diving into a green gorge" },
];

export function Blogs() {
  return (
    <Section id="blogs" className="section-y bg-ink" aria-labelledby="blog-title">
      <div className="container-site">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Blogs</Eyebrow>
            <h2 id="blog-title" className="display mt-5 text-4xl sm:text-5xl lg:text-7xl">From the destination</h2>
          </div>
          <CtaLink href="#blogs" variant="link">All stories</CtaLink>
        </div>
        <div className="snap-row no-scrollbar mt-12 grid gap-5 md:grid-cols-3 lg:mt-16" style={{ ["--cut" as string]: "var(--color-ink)", ["--r" as string]: "1.5rem" }}>
          {POSTS.map((p, i) => (
            <article key={p.title} className="reveal group relative rounded-[1.75rem] bg-card p-3 pt-14 transition-colors duration-500 hover:bg-secondary" style={{ transitionDelay: `${i * 80}ms` }}>
              <TabNotch className="flex h-12 items-center px-5">
                <span className="eyebrow text-[0.65rem] text-primary">{p.cat}</span>
              </TabNotch>
              <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <img src={p.img} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              </div>
              <div className="px-3 pb-3 pt-6">
                <h3 className="font-hero text-xl font-light tracking-tight transition-colors group-hover:text-primary lg:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
                <a href="#blogs" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] after:absolute after:inset-0" aria-label={`Read more: ${p.title}`}>
                  Read More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

const WHY = [
  { icon: Sparkles, t: "Unforgettable Experiences", d: "Adventure moments visitors will remember." },
  { icon: Users, t: "Experienced Team", d: "Professional support throughout the experience." },
  { icon: Mountain, t: "The Himalayan Setting", d: "Adventure surrounded by breathtaking landscapes." },
  { icon: UtensilsCrossed, t: "More Than Adventure", d: "Adventure, dining and relaxation in one destination." },
];

export function WhyUs() {
  return (
    <Section className="section-y bg-background" aria-labelledby="why-title">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <Eyebrow>Why choose us</Eyebrow>
          <h2 id="why-title" className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Why The Great <br className="hidden lg:block" />Himalayans <span className="text-primary">Bungy?</span>
          </h2>
        </div>
        <div className="snap-row no-scrollbar grid gap-5 sm:grid-cols-2 lg:col-span-7" style={{ ["--cut" as string]: "var(--color-background)", ["--r" as string]: "1.5rem" }}>
          {WHY.map((w, i) => (
            <div key={w.t} className="reveal group relative rounded-[1.75rem] bg-card p-6 pt-16 transition-colors duration-500 hover:bg-secondary md:p-8 md:pt-16" style={{ transitionDelay: `${i * 80}ms` }}>
              <TabNotch className="flex h-12 items-center px-5">
                <span className="font-hero text-sm text-muted-foreground group-hover:text-primary">/ 0{i + 1}</span>
              </TabNotch>
              <span className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary transition-all duration-500 group-hover:rotate-12 group-hover:bg-primary group-hover:text-primary-foreground">
                <w.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-hero text-xl font-light tracking-tight lg:text-2xl">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="book" className="relative overflow-hidden bg-ink" aria-labelledby="book-title">
      <img src={hero} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[25%_center] opacity-60" />
      <div className="absolute inset-0 bg-overlay-side max-md:bg-ink/60" aria-hidden />
      <div className="container-site relative flex min-h-[80svh] flex-col justify-center py-24">
        <div className="reveal max-w-3xl">
          <Eyebrow>Book now</Eyebrow>
          <h2 id="book-title" className="display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Ready to take <br />the <span className="text-primary">leap?</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/85 md:text-xl">Your Himalayan adventure is waiting.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CtaLink href="#book">Book Now</CtaLink>
            <CtaLink href="#about" variant="outline">Explore the Destination</CtaLink>
          </div>
          <p className="mt-6 text-xs text-foreground/60">Online booking is coming soon — for now, reach us using the contact details below.</p>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink pt-20">
      <div className="container-site grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-muted-foreground">Bungee, adventure and Himalayan views — with good food waiting when your feet are back on the ground.</p>
          <CtaLink href="#book" className="mt-8">Book Your Adventure</CtaLink>
        </div>
        <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
          <p className="eyebrow text-[0.65rem] text-foreground/50">Explore</p>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-foreground/80 transition-colors hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="eyebrow text-[0.65rem] text-foreground/50">Contact</p>
          <ul className="mt-5 space-y-4 text-foreground/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />Location — to be confirmed</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden /><a href="tel:+910000000000" className="hover:text-primary">+91 00000 00000</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden /><a href="mailto:hello@greathimalayansbungy.com" className="break-all hover:text-primary">hello@greathimalayansbungy.com</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="eyebrow text-[0.65rem] text-foreground/50">Follow</p>
          <ul className="mt-5 flex gap-3">
            {[{ i: Instagram, l: "Instagram" }, { i: Facebook, l: "Facebook" }, { i: Youtube, l: "YouTube" }].map(({ i: Icon, l }) => (
              <li key={l}>
                <a href="#top" aria-label={l} className="grid h-11 w-11 place-items-center border border-border transition-colors hover:border-primary hover:bg-primary">
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Great Himalayans Bungy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-foreground">Privacy Policy</a>
            <a href="#top" className="hover:text-foreground">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

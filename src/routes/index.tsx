import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Adventures } from "@/components/site/Adventures";
import { AboutPlace, Team } from "@/components/site/About";
import { Journey } from "@/components/site/Journey";
import { Restaurant } from "@/components/site/Restaurant";
import { Gallery } from "@/components/site/Gallery";
import { Blogs, WhyUs, FinalCta, Footer } from "@/components/site/Closing";

const TITLE = "The Great Himalayans Bungy | Himalayan Adventure & Bungee Experience";
const DESC = "Bungee jumping, giant swing, zipline and a Restaurant & Café surrounded by the Himalayas. Plan your adventure at The Great Himalayans Bungy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-primary focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Adventures />
        <AboutPlace />
        <Team />
        <Journey />
        <Restaurant />
        <Gallery />
        <Blogs />
        <WhyUs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

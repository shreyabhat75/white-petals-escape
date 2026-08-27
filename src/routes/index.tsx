import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Escape } from "@/components/site/Escape";
import { Resort } from "@/components/site/Resort";
import { Experiences } from "@/components/site/Experiences";
import { Stay } from "@/components/site/Stay";
import { PlanEscape } from "@/components/site/PlanEscape";
import { DayAt } from "@/components/site/DayAt";
import { Gallery } from "@/components/site/Gallery";
import { Stories } from "@/components/site/Stories";
import { Location } from "@/components/site/Location";
import { Enquiry } from "@/components/site/Enquiry";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const title = "White Petals Resort | A Place to Get Away";
const description =
  "Discover White Petals Resort — a spacious getaway surrounded by greenery, activities and experiences for friends and family.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Escape />
        <Resort />
        <Experiences />
        <Stay />
        <PlanEscape />
        <DayAt />
        <Gallery />
        <Stories />
        <Location />
        <Enquiry />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

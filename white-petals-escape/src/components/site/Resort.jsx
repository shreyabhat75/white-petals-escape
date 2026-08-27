import {
  Trees,
  Waves,
  BedDouble,
  Car,
  Music,
  UtensilsCrossed,
  Volleyball,
  LandPlot,
} from "lucide-react";
import { media } from "@/lib/resort-media";
import { Figure, Reveal, Section, SectionHeading } from "./primitives";

const highlights = [
  { icon: LandPlot, label: "Spacious property" },
  { icon: Trees, label: "Green surroundings" },
  { icon: BedDouble, label: "Spacious rooms" },
  { icon: Car, label: "Parking" },
  { icon: Waves, label: "Swimming pool" },
  { icon: Volleyball, label: "Activities" },
  { icon: Music, label: "Jamming sessions" },
  { icon: UtensilsCrossed, label: "Food" },
];

export function Resort() {
  return (
    <Section id="resort" labelledBy="resort-title" className="bg-surface/40">
      <SectionHeading
        id="resort-title"
        eyebrow="The resort"
        title="More than a stay."
        body="Spacious surroundings, greenery and experiences designed for time well spent."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Figure
            src={media.cottage.src}
            alt={media.cottage.alt}
            ratio="aspect-[4/3] lg:aspect-[16/11]"
            imgClassName="hover:scale-[1.04]"
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <Figure
            src={media.poolHall.src}
            alt={media.poolHall.alt}
            ratio="aspect-[4/3] lg:aspect-[16/11]"
            imgClassName="hover:scale-[1.04]"
          />
        </Reveal>
        <Reveal delay={0.16} className="lg:col-span-5">
          <Figure
            src={media.roomBlock.src}
            alt={media.roomBlock.alt}
            ratio="aspect-[4/3]"
            imgClassName="hover:scale-[1.04]"
          />
        </Reveal>
        <Reveal delay={0.22} className="lg:col-span-7">
          <Figure
            src={media.cabanas.src}
            alt={media.cabanas.alt}
            ratio="aspect-[4/3]"
            imgClassName="hover:scale-[1.04]"
          />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-start gap-3 bg-background p-5 transition-colors duration-500 hover:bg-surface sm:p-7"
            >
              <Icon className="size-5 text-gold" aria-hidden="true" />
              <span className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

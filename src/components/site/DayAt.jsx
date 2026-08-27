import { media } from "@/lib/resort-media";
import { Reveal, Section, SectionHeading } from "./primitives";

const moments = [
  {
    time: "Morning",
    copy: "Wake up surrounded by greenery.",
    image: media.cottage,
  },
  {
    time: "Afternoon",
    copy: "Swim. Explore. Eat.",
    image: media.poolNight,
  },
  {
    time: "Evening",
    copy: "Jam. Laugh. Spend time together.",
    image: media.cabanas,
  },
  {
    time: "Night",
    copy: "Slow down.",
    image: media.poolHall,
  },
];

export function DayAt() {
  return (
    <Section id="day" labelledBy="day-title" className="bg-surface/40">
      <SectionHeading
        id="day-title"
        eyebrow="A day at White Petals"
        title="One day. No rush."
      />

      <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
        {moments.map((m, i) => (
          <Reveal
            key={m.time}
            delay={i * 0.08}
            className="w-[72vw] shrink-0 snap-center md:w-auto"
          >
            <figure className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.image.src}
                  alt={m.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover opacity-75 transition-all duration-[1.4s] ease-out group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="eyebrow">{m.time}</p>
                <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
                  {m.copy}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { media } from "@/lib/resort-media";
import { Reveal, Section, SectionHeading } from "./primitives";

const cards = [
  {
    title: "Nature",
    copy: "Slow down surrounded by greenery and open spaces.",
    image: media.aerial,
  },
  {
    title: "Swimming",
    copy: "Take a break, relax and enjoy the pool.",
    image: media.poolNight,
  },
  {
    title: "Activities",
    copy: "Keep the day moving with fun activities.",
    image: media.cottage,
  },
  {
    title: "Jamming",
    copy: "Good music, good company and time to simply be together.",
    image: media.cabanas,
  },
  {
    title: "Food",
    copy: "Enjoy the food and dining options available at the resort.",
    image: media.poolHall,
  },
];

export function Experiences() {
  return (
    <Section id="experiences" labelledBy="experiences-title">
      <SectionHeading
        id="experiences-title"
        eyebrow="Experience"
        title="Your weekend. Your way."
      />

      <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 0.06}
            className="w-[78vw] shrink-0 snap-center sm:w-auto"
          >
            <article className="group relative h-full overflow-hidden border border-border bg-surface">
              <div className="aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={c.image.src}
                  alt={c.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover opacity-80 transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl tracking-wide">{c.title}</h3>
                <div
                  className="mt-3 h-px w-8 bg-gold transition-all duration-700 group-hover:w-16"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.copy}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:hidden">
        Swipe to explore
      </p>
    </Section>
  );
}

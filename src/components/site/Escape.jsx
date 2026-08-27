import { media } from "@/lib/resort-media";
import { Button, Figure, Reveal, Section } from "./primitives";

export function Escape() {
  return (
    <Section id="escape" labelledBy="escape-title" className="bg-background">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="group relative">
            <Figure
              src={media.aerial.src}
              alt={media.aerial.alt}
              ratio="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
              imgClassName="group-hover:scale-[1.04]"
            />
            <div
              className="pointer-events-none absolute -inset-3 border border-border"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">The escape</p>
          <Reveal delay={0.05}>
            <h2
              id="escape-title"
              className="mt-4 text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.4rem]"
            >
              Leave the rush behind.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Deadlines. Notifications. Traffic. Repeat. Sometimes, the best
              thing you can do is step away from it all.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              White Petals Resort is designed to give you space to slow down,
              reconnect and enjoy time with the people who matter.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10">
              <Button href="#resort" variant="outline">
                Discover the resort
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

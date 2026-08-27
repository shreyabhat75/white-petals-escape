import { media } from "@/lib/resort-media";
import { Button, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative flex min-h-[70svh] items-center overflow-hidden"
    >
      <img
        src={media.poolHall.src}
        alt={media.poolHall.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="cine-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-24 text-center sm:px-8 lg:px-12">
        <Reveal>
          <h2
            id="final-cta-title"
            className="mx-auto max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.2rem]"
          >
            Take a break from your world.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Make time for yours.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10">
            <Button href="#enquiry">Book your stay</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

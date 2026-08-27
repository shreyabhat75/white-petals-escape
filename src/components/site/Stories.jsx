import { Quote } from "lucide-react";
import { Button, Reveal, Section, SectionHeading } from "./primitives";

export function Stories() {
  return (
    <Section id="stories" labelledBy="stories-title" className="bg-surface/40">
      <SectionHeading
        id="stories-title"
        eyebrow="Stories"
        title="What our guests say."
        body="We are collecting and verifying guest experiences before publishing them here. Rather than show anything we cannot stand behind, these spaces are reserved for real, attributed reviews."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 0.08}>
            <blockquote className="flex h-full flex-col border border-dashed border-border p-7">
              <Quote className="size-5 text-gold" aria-hidden="true" />
              <p className="mt-6 font-display text-xl leading-snug text-muted-foreground">
                Reserved for a verified guest review.
              </p>
              <footer className="mt-auto pt-8 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                Awaiting guest consent
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 border border-border bg-background p-8 sm:p-12">
          <h3 className="max-w-xl text-2xl leading-snug sm:text-3xl">
            Make your next memory part of the story.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We are continuously improving the guest experience across the
            property, and we read every piece of feedback. Stayed with us? Share
            how your escape went — your words could help someone else plan
            theirs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#enquiry">Share your experience</Button>
            <Button href="#enquiry" variant="outline">
              Plan your stay
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

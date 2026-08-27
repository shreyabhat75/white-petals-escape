import { media } from "@/lib/resort-media";
import { Button, Figure, Reveal, Section, SectionHeading } from "./primitives";

const rooms = [
  {
    name: "Cottage Stay",
    image: media.cottage,
    copy: "Standalone wooden cottages set among lawns and palms, with steps opening straight onto the greenery.",
  },
  {
    name: "Resort Rooms",
    image: media.roomBlock,
    copy: "Spacious rooms in the main block, each opening to a private balcony overlooking the grounds.",
  },
];

export function Stay() {
  return (
    <Section id="stay" labelledBy="stay-title" className="bg-surface/40">
      <SectionHeading
        id="stay-title"
        eyebrow="Stay"
        title="Find your space to slow down."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
        {rooms.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08}>
            <article className="group flex h-full flex-col border border-border bg-background">
              <Figure
                src={r.image.src}
                alt={r.image.alt}
                ratio="aspect-[16/11]"
                imgClassName="group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl tracking-wide">{r.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {r.copy}
                </p>
                <dl className="mt-6 space-y-2 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="tracking-[0.16em] uppercase">Capacity</dt>
                    <dd className="text-foreground">Contact us for details</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="tracking-[0.16em] uppercase">Amenities</dt>
                    <dd className="text-foreground">Contact us for details</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="tracking-[0.16em] uppercase">Tariff</dt>
                    <dd className="text-foreground">Contact us for details</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  <Button href="#gallery" variant="outline">
                    View room
                  </Button>
                  <Button href="#enquiry">Enquire</Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground">
          Room names shown reflect the accommodation visible on the property.
          Exact room types, capacities and inclusions are confirmed at the time
          of enquiry.
        </p>
      </Reveal>
    </Section>
  );
}

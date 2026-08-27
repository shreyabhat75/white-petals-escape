import { MapPin, Phone, Mail, Car } from "lucide-react";
import { contact } from "@/lib/resort-media";
import { Button, Reveal, Section, SectionHeading } from "./primitives";

export function Location() {
  return (
    <Section id="contact" labelledBy="location-title">
      <SectionHeading
        id="location-title"
        eyebrow="Location"
        title="Close enough to escape."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0">
                <p className="eyebrow">Address</p>
                <address className="mt-2 text-sm leading-relaxed text-muted-foreground not-italic">
                  {contact.address}
                </address>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0">
                <p className="eyebrow">Phone</p>
                <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground">
                  {contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-gold"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0">
                <p className="eyebrow">Email</p>
                <div className="mt-2 flex flex-col gap-1 text-sm break-all text-muted-foreground">
                  {contact.emails.map((e) => (
                    <a
                      key={e}
                      href={`mailto:${e}`}
                      className="transition-colors hover:text-gold"
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <Car className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0">
                <p className="eyebrow">Parking</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  On-site parking available.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <Button
              href={`https://www.google.com/maps/dir/?api=1&destination=${contact.mapsQuery}`}
              variant="outline"
            >
              Get directions
            </Button>
          </div>
        </div>

        <Reveal>
          <div className="border border-border">
            <iframe
              title="Map showing the location of White Petals Resort"
              src={`https://www.google.com/maps?q=${contact.mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full grayscale-[0.5] contrast-110 sm:h-[460px]"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

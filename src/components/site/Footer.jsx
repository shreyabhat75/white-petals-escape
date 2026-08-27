import { contact } from "@/lib/resort-media";

const links = [
  { label: "The Resort", href: "#resort" },
  { label: "Stay", href: "#stay" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 pt-20 pb-28 sm:px-8 lg:px-12 lg:pb-20">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-[0.18em] uppercase">
            White Petals Resort
          </p>
          <div className="hairline mt-5 w-24" aria-hidden="true" />
          <p className="mt-5 max-w-xs font-display text-lg text-muted-foreground">
            Sometimes, you just need to get away.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Contact</p>
          <address className="mt-5 space-y-3 text-sm text-muted-foreground not-italic">
            <p>{contact.address}</p>
            {contact.phones.map((p) => (
              <p key={p}>
                <a
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {p}
                </a>
              </p>
            ))}
            {contact.emails.map((e) => (
              <p key={e} className="break-all">
                <a
                  href={`mailto:${e}`}
                  className="transition-colors hover:text-gold"
                >
                  {e}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1240px] flex-col gap-3 border-t border-border pt-8 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} White Petals Resort</p>
        <p>Bengaluru, Karnataka</p>
      </div>
    </footer>
  );
}

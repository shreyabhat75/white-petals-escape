import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/lib/resort-media";
import { cn } from "@/lib/utils";
import { Reveal, Section, SectionHeading } from "./primitives";

const categories = ["all", "property", "rooms", "nature", "activities"];

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(null);

  const items =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  const active = index !== null ? items[index] : null;

  return (
    <Section id="gallery" labelledBy="gallery-title">
      <SectionHeading
        id="gallery-title"
        eyebrow="Gallery"
        title="The property, in frames."
      />

      <Reveal>
        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mt-10 flex flex-wrap gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              type="button"
              aria-selected={filter === c}
              onClick={() => {
                setFilter(c);
                setIndex(null);
              }}
              className={cn(
                "border px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase transition-all duration-400",
                filter === c
                  ? "border-gold text-gold"
                  : "border-border text-muted-foreground hover:border-gold hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      {items.length === 0 ? (
        <p className="mt-12 border border-dashed border-border p-10 text-sm text-muted-foreground">
          More photographs from this category are coming soon.
        </p>
      ) : (
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open image: ${item.alt}`}
                className="group relative block w-full overflow-hidden border border-border"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover opacity-85 transition-all duration-[1.2s] ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                />
                <span
                  className="absolute inset-0 bg-background/30 opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                  aria-hidden="true"
                />
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/97 p-4 sm:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              autoFocus
              className="absolute top-4 right-4 grid size-11 place-items-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 grid size-11 place-items-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 grid size-11 place-items-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full w-full max-w-4xl"
            >
              <img
                src={active.src}
                alt={active.alt}
                className="mx-auto max-h-[75vh] w-auto object-contain"
              />
              <figcaption className="mt-4 text-center text-xs text-muted-foreground">
                {active.alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

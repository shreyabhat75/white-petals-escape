import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { media } from "@/lib/resort-media";
import { Button } from "./primitives";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.img
        src={media.cottage.src}
        alt={media.cottage.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
        initial={reduced ? { scale: 1 } : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "linear" }}
      />
      <div className="cine-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-28 pb-32 sm:px-8 lg:px-12">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          White Petals Resort · Bengaluru
        </motion.p>

        <motion.h1
          id="hero-title"
          className="mt-6 max-w-4xl text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Sometimes, you just need to get away.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A space to slow down, reconnect and make time for what matters.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <Button href="#enquiry">Book your stay</Button>
          <Button href="#resort" variant="outline">
            Explore the resort
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#escape"
        aria-label="Scroll to next section"
        className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-gold sm:flex lg:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[0.6rem] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={reduced ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, delay = 0, className, y = 28 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  gold: "bg-gold text-primary-foreground hover:bg-gold-soft",
  outline:
    "border border-border text-foreground hover:border-gold hover:text-gold",
  ghost: "text-muted-foreground hover:text-gold",
};

export function Button({
  children,
  href,
  onClick,
  variant = "gold",
  type = "button",
  className,
  disabled,
  ...rest
}) {
  const cls = [base, variants[variant], className].filter(Boolean).join(" ");
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Section({ id, children, className, labelledBy }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={[
        "relative px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-[1240px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  id,
  align = "left",
  className,
}) {
  return (
    <div
      className={[
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          id={id}
          className="mt-4 text-3xl leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem]"
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Figure({
  src,
  alt,
  className,
  imgClassName,
  eager,
  ratio = "aspect-[4/3]",
}) {
  return (
    <div
      className={["overflow-hidden bg-surface", ratio, className]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={[
          "size-full object-cover transition-transform duration-[1.4s] ease-out",
          imgClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}

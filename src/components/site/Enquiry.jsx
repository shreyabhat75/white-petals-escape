import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button, Reveal, Section, SectionHeading } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number.")
    .regex(/^[+\d][\d\s-]*$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  date: z.string().trim().min(1, "Please choose a preferred date."),
  guests: z
    .string()
    .trim()
    .min(1, "Please enter the number of guests.")
    .refine((v) => Number(v) > 0 && Number(v) < 500, "Enter a valid number."),
  stayType: z.string().trim().min(1, "Please select a type of stay."),
  message: z.string().trim().max(1000).optional(),
});

const stayTypes = ["Friends", "Family", "Couple", "Group", "Other"];

const fieldCls =
  "w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-gold focus:outline-none";

function Field({ label, htmlFor, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function Enquiry() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");
    // Enquiry payload is validated and ready to be posted to a backend
    // once connected.
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 700);
  }

  return (
    <Section id="enquiry" labelledBy="enquiry-title" className="bg-surface/40">
      <SectionHeading
        id="enquiry-title"
        eyebrow="Enquiry"
        title="Your escape starts here."
        body="Tell us a little about your plans and we'll help you plan your stay."
      />

      <div className="mt-14">
        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-border bg-background p-10 sm:p-16"
              role="status"
            >
              <h3 className="text-3xl sm:text-4xl">Thank you.</h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Your enquiry has been received. We'll get in touch with you
                shortly.
              </p>
              <div className="mt-8">
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Send another enquiry
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 border border-border bg-background p-6 sm:grid-cols-2 sm:p-10"
            >
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldCls}
                  placeholder="Your full name"
                />
              </Field>

              <Field label="Phone number" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={fieldCls}
                  placeholder="+91"
                />
              </Field>

              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldCls}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Preferred date" htmlFor="date" error={errors.date}>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  className={cn(fieldCls, "[color-scheme:dark]")}
                />
              </Field>

              <Field
                label="Number of guests"
                htmlFor="guests"
                error={errors.guests}
              >
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  required
                  aria-invalid={!!errors.guests}
                  aria-describedby={errors.guests ? "guests-error" : undefined}
                  className={fieldCls}
                  placeholder="2"
                />
              </Field>

              <Field
                label="Type of stay"
                htmlFor="stayType"
                error={errors.stayType}
              >
                <select
                  id="stayType"
                  name="stayType"
                  required
                  defaultValue=""
                  aria-invalid={!!errors.stayType}
                  aria-describedby={
                    errors.stayType ? "stayType-error" : undefined
                  }
                  className={fieldCls}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {stayTypes.map((t) => (
                    <option key={t} value={t} className="bg-background">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="sm:col-span-2">
                <Field label="Message" htmlFor="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className={cn(fieldCls, "resize-y")}
                    placeholder="Tell us about your plans"
                  />
                </Field>
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-destructive sm:col-span-2">
                  Something went wrong. Please check your details and try again.
                </p>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto"
                >
                  {status === "sending" ? "Sending\u2026" : "Check your stay"}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

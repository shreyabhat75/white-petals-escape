import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button, Reveal, Section, SectionHeading } from "./primitives";

const companions = ["Friends", "Family", "Couple", "Group"];
const moods = ["Relax", "Activities", "Nature", "Food", "Quality Time"];

const recommendations = {
  "Friends|Relax": "Take the weekend slow — poolside afternoons, long conversations and nowhere to be.",
  "Friends|Activities": "Make it a weekend of swimming, activities, food and music.",
  "Friends|Nature": "Trade the city for open lawns and tree cover, with the pool a short walk away.",
  "Friends|Food": "Plan the day around long meals together, with the pool and the grounds in between.",
  "Friends|Quality Time": "Space to spread out, a jamming session in the evening and no reason to rush.",
  "Family|Relax": "Slow down, enjoy the greenery and spend uninterrupted time together.",
  "Family|Activities": "Keep everyone moving with activities and pool time, then gather for a meal.",
  "Family|Nature": "Open lawns, shade and space for everyone to wander at their own pace.",
  "Family|Food": "Unhurried meals together, with the grounds and pool to enjoy between them.",
  "Family|Quality Time": "A weekend with room to breathe — greenery, the pool and time with each other.",
  "Couple|Relax": "A quiet cottage, open greenery and a weekend with nothing on the schedule.",
  "Couple|Activities": "Swim, explore the grounds and end the day somewhere quiet.",
  "Couple|Nature": "Palms, lawns and long walks — a calm break from the city.",
  "Couple|Food": "Slow meals, easy evenings and time set aside for just the two of you.",
  "Couple|Quality Time": "Step away from the noise and make the weekend entirely yours.",
  "Group|Relax": "Room for everyone to unwind — the pool, the lawns and plenty of shade.",
  "Group|Activities": "Activities through the day, the pool in the afternoon and music at night.",
  "Group|Nature": "A spacious property with greenery that comfortably holds a big group.",
  "Group|Food": "Bring everyone together around food, with the grounds to spread out into.",
  "Group|Quality Time": "Space for the whole group, a jamming session and a weekend to remember.",
};

function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-400",
        active
          ? "border-gold bg-gold text-primary-foreground"
          : "border-border text-muted-foreground hover:border-gold hover:text-gold",
      )}
    >
      {label}
    </button>
  );
}

export function PlanEscape() {
  const [who, setWho] = useState(null);
  const [what, setWhat] = useState(null);

  const key = who && what ? `${who}|${what}` : null;
  const result = key ? recommendations[key] : null;

  return (
    <Section id="plan" labelledBy="plan-title" className="petal-motif">
      <SectionHeading
        id="plan-title"
        eyebrow="Plan your escape"
        title="What does your escape look like?"
        align="center"
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <fieldset className="border-0">
          <legend className="eyebrow">Who are you travelling with?</legend>
          <div className="mt-5 flex flex-wrap gap-3">
            {companions.map((c) => (
              <Chip
                key={c}
                label={c}
                active={who === c}
                onClick={() => setWho(who === c ? null : c)}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-12 border-0">
          <legend className="eyebrow">What are you looking for?</legend>
          <div className="mt-5 flex flex-wrap gap-3">
            {moods.map((m) => (
              <Chip
                key={m}
                label={m}
                active={what === m}
                onClick={() => setWhat(what === m ? null : m)}
              />
            ))}
          </div>
        </fieldset>

        <div aria-live="polite" className="mt-12 min-h-[9rem]">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="border border-border bg-surface p-7 sm:p-10"
              >
                <p className="eyebrow">
                  {who} · {what}
                </p>
                <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
                  &ldquo;{result}&rdquo;
                </p>
                <div className="mt-8">
                  <Button href="#enquiry">Plan this escape</Button>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-dashed border-border p-7 text-sm text-muted-foreground sm:p-10"
              >
                Pick who you are travelling with and what you are looking for —
                we will suggest how your weekend could look.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

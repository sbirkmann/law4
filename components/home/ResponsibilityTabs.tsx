"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { responsibility } from "@/data/company";
import { Eyebrow } from "@/components/ui/Headline";
import { cn } from "@/lib/utils";

/** Vertical hairline tab list left (4 cols), serif statement right (7 cols, offset). */
export function ResponsibilityTabs({ eyebrow = "Unsere Verantwortung", index = "04", link = true }: { eyebrow?: string; index?: string; link?: boolean }) {
  const [key, setKey] = useState(responsibility[0].key);
  const reduce = useReducedMotion();
  const current = responsibility.find((r) => r.key === key)!;
  return (
    <section className="bg-stone" aria-label={eyebrow}>
      <div className="container-x section-quiet">
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-4">
            <Eyebrow index={index}>{eyebrow}</Eyebrow>
            <h2 className="headline headline-lg mt-6 text-pine">Was wir über das Mandat hinaus tun</h2>
            <div role="tablist" aria-label={eyebrow} aria-orientation="vertical" className="mt-12 border-t border-line">
              {responsibility.map((r, i) => {
                const on = key === r.key;
                return (
                  <button
                    key={r.key}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls={`tab-${r.key}`}
                    onClick={() => setKey(r.key)}
                    className={cn("group relative flex w-full items-baseline gap-4 border-b border-line py-4 text-left transition-colors duration-200", on ? "text-pine" : "text-muted hover:text-pine")}
                  >
                    <span aria-hidden className={cn("absolute inset-y-0 left-0 w-px bg-copper transition-transform duration-300 ease-out-expo", on ? "scale-y-100" : "scale-y-0")} />
                    <span className="eyebrow-index pl-4" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base font-medium tracking-wide">{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait">
              <motion.div key={key} id={`tab-${key}`} role="tabpanel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }} className="lg:pt-24">
                <p className="font-serif text-xl leading-snug text-ink [font-variation-settings:'opsz'_24] lg:text-2xl">{current.text}</p>
                {link && <Link href={`/sozietaet/verantwortung#${current.key}`} className="arrow-link mt-8">Mehr erfahren<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden /></Link>}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

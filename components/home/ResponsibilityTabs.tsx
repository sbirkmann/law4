"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { responsibility } from "@/data/company";
import { cn } from "@/lib/utils";

export function ResponsibilityTabs({ eyebrow = "Unsere Verantwortung", link = true }: { eyebrow?: string; link?: boolean }) {
  const [key, setKey] = useState(responsibility[0].key);
  const reduce = useReducedMotion();
  const current = responsibility.find((r) => r.key === key)!;
  return (
    <section className="bg-stone py-16 lg:py-20" aria-label={eyebrow}>
      <div className="container-x">
        <p className="eyebrow-lines">{eyebrow}</p>
        <div role="tablist" aria-label={eyebrow} className="mt-8 flex flex-wrap justify-center gap-2">
          {responsibility.map((r) => (
            <button key={r.key} type="button" role="tab" aria-selected={key === r.key} aria-controls={`tab-${r.key}`} onClick={() => setKey(r.key)} className={cn("relative px-6 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] transition-colors", key === r.key ? "bg-pine text-white" : "text-ink hover:text-copper")}>
              {r.label}
              {key === r.key && <span aria-hidden className="absolute left-1/2 top-full -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-pine" />}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl lg:ml-auto lg:mr-[6%]">
          <AnimatePresence mode="wait">
            <motion.div key={key} id={`tab-${key}`} role="tabpanel" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="border border-line bg-white p-8 sm:p-12">
              <p className="font-serif text-[18px] leading-relaxed text-ink">{current.text}</p>
              {link && <Link href={`/sozietaet/verantwortung#${current.key}`} className="arrow-link mt-6"><ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />Mehr</Link>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

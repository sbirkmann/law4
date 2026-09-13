"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; delay?: number; y?: number; as?: "div" | "section" | "li" | "article" };

/** Reveal on scroll: 400ms, ease-out, staggered via `delay`. Disabled for prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 12, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -48px 0px" }} transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </Comp>
  );
}

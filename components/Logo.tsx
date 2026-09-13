import Link from "next/link";
import { cn } from "@/lib/utils";

/** Wordmark in a serif, like the template's, with a small O/R seal that doubles as favicon. */
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  const fg = light ? "#FFFFFF" : "#10352B";
  return (
    <svg viewBox="0 0 40 40" className={cn("h-7 w-7", className)} fill="none" aria-hidden>
      <circle cx="20" cy="20" r="16.5" stroke={fg} strokeWidth="2" />
      <path d="M13.5 27V13h7.2a4.3 4.3 0 0 1 0 8.6H13.5" stroke={fg} strokeWidth="2" strokeLinejoin="round" />
      <path d="M19.5 21.6 27.5 30" stroke="#B5793F" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Ostholm Rütter – Startseite" className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark light={light} />
      <span className={cn("font-serif text-[25px] font-medium leading-none tracking-[-0.01em]", light ? "text-white" : "text-pine")}>
        Ostholm<span className="text-copper"> </span>Rütter
      </span>
    </Link>
  );
}

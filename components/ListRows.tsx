import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/data/insights";

export function InsightRows({ items, label = "Zum Beitrag" }: { items: Insight[]; label?: string }) {
  return (
    <ul className="divide-y divide-line border-t border-line">
      {items.map((i) => (
        <li key={i.slug} className="grid gap-2 py-5 sm:grid-cols-[110px_1fr_auto] sm:gap-6">
          <time dateTime={i.date} className="text-[13px] text-muted">{i.dateLabel}</time>
          <div>
            <Link href={`/aktuelles/${i.slug}`} className="text-[17px] font-medium leading-snug text-ink hover:text-copper">{i.title}</Link>
            <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-copper">{i.type === "Presse" ? "Kanzlei News" : i.type === "Deal" ? "Mandat" : i.type}</p>
          </div>
          <Link href={`/aktuelles/${i.slug}`} className="arrow-link self-center"><ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />{i.type === "Deal" ? "Zum Mandat" : label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function Pagination({ total }: { total: number }) {
  return (
    <div className="mt-2 flex items-center justify-between border-y border-dotted border-line py-2 text-[12px] text-muted">
      <span aria-hidden />
      <span>1 von {Math.max(1, Math.ceil(total / 10))}</span>
      <span className="text-muted-light">Nächste Seite ›</span>
    </div>
  );
}

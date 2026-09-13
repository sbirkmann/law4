import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/data/insights";

export const rubric = (type: Insight["type"]) => (type === "Presse" ? "Kanzlei News" : type === "Deal" ? "Mandat" : type);

/** Editorial list: date, rubric, serif title, arrow. Hairline dividers, subtle hover. */
export function InsightRows({ items, label = "Zum Beitrag" }: { items: Insight[]; label?: string }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((i) => (
        <li key={i.slug}>
          <Link href={`/aktuelles/${i.slug}`} className="row-link -mx-4 grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 px-4 py-6 sm:grid-cols-[7rem_1fr_auto]">
            <time dateTime={i.date} className="label text-xs text-muted">{i.dateLabel}</time>
            <span className="col-span-2 sm:col-span-1">
              <span className="label block text-xs text-copper">{rubric(i.type)}</span>
              <span className="row-title mt-2 block font-serif text-lg leading-snug text-ink">{i.title}</span>
            </span>
            <span className="row-arrow col-start-2 row-start-1 inline-flex items-center gap-2 text-muted sm:col-start-3">
              <span className="label hidden text-xs xl:inline">{i.type === "Deal" ? "Zum Mandat" : label}</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Pagination({ total }: { total: number }) {
  return (
    <div className="label mt-4 flex items-center justify-between py-3 text-xs text-muted">
      <span aria-hidden />
      <span>1 von {Math.max(1, Math.ceil(total / 10))}</span>
      <span className="text-muted-light">Nächste Seite ›</span>
    </div>
  );
}

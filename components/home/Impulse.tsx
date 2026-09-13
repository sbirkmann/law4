import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/data/insights";
import { InsightRows } from "@/components/ListRows";
import { Eyebrow } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

/** Latest news as an editorial list. Left column sticky with head and link, list on the right (4/8). */
export function Impulse() {
  const latest = [...insights].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
  return (
    <section className="container-x section-quiet border-t border-line" aria-labelledby="impulse-title">
      <div className="grid-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index="01">Impulse</Eyebrow>
            <h2 id="impulse-title" className="headline headline-lg mt-6 text-pine">Aktuelles aus der Kanzlei</h2>
            <p className="mt-6 max-w-sm text-base text-muted">Mandate, Kanzlei-News und Fachbeiträge: was Ostholm Rütter bewegt.</p>
            <Link href="/aktuelles" className="arrow-link mt-8">Alle Meldungen<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden /></Link>
          </div>
        </div>
        <Reveal className="col-span-12 lg:col-span-8">
          <InsightRows items={latest} />
        </Reveal>
      </div>
    </section>
  );
}

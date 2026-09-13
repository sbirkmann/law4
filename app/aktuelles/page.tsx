import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { InsightRows } from "@/components/ListRows";
import { ArrowLink } from "@/components/MediaSplit";
import { deals, news, press } from "@/data/insights";
import { events } from "@/data/events";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Aktuelles", description: "Mandate, Kanzlei-News, Know-how und Veranstaltungen von Ostholm Rütter.", path: "/aktuelles" });

export default function AktuellesPage() {
  const latest = [...deals, ...press].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  return (
    <>
      <PageHead crumbs={[{ label: "Aktuelles" }]} title="Aktuelles" eyebrow="Immer auf dem Stand" intro={<p>Mandate, Kanzlei-News, Fachbeiträge und Veranstaltungen: Hier finden Sie, was Ostholm Rütter bewegt. Alle Inhalte sind Demo-Beispiele.</p>} />
      <section className="container-x mt-16">
        <h2 className="headline headline-lg text-pine">Mandate & Kanzlei News</h2>
        <div className="mt-6"><InsightRows items={latest} /></div>
        <div className="mt-6"><ArrowLink href="/aktuelles/news">Alle Meldungen</ArrowLink></div>
      </section>
      <section className="container-x mt-16">
        <h2 className="headline headline-lg text-pine">Know-how</h2>
        <div className="mt-6"><InsightRows items={news.slice(0, 4)} /></div>
        <div className="mt-6"><ArrowLink href="/aktuelles/know-how">Alle Beiträge</ArrowLink></div>
      </section>
      <section className="container-x mt-16">
        <h2 className="headline headline-lg text-pine">Veranstaltungen</h2>
        <ul className="mt-6 divide-y divide-line border-t border-line">
          {events.slice(0, 3).map((e) => (
            <li key={e.slug} className="grid gap-2 py-5 sm:grid-cols-[110px_1fr] sm:gap-6">
              <time dateTime={e.date} className="text-sm text-muted">{e.dateLabel}</time>
              <div>
                <p className="text-base font-medium text-ink">{e.title}</p>
                <p className="mt-1 text-sm text-muted">{e.tag} · {e.place}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6"><Link href="/aktuelles/veranstaltungen" className="arrow-link">Alle Veranstaltungen</Link></div>
      </section>
    </>
  );
}

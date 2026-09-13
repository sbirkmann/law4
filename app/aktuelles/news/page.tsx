import { PageHead } from "@/components/PageHead";
import { InsightRows, Pagination } from "@/components/ListRows";
import { deals, press } from "@/data/insights";
import { capabilities } from "@/data/practices";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Mandate & Kanzlei News", description: "Aktuelle Mandate und Kanzlei-Meldungen von Ostholm Rütter (Demo).", path: "/aktuelles/news" });

const sel = "h-10 w-full border border-line bg-white px-3 text-[13.5px] text-ink";

export default function NewsPage() {
  const items = [...deals, ...press].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHead crumbs={[{ label: "Aktuelles", href: "/aktuelles" }, { label: "Mandate & Kanzlei News" }]} title="Mandate & Kanzlei News" />
      <section className="container-x mt-12">
        <form className="grid gap-3 bg-stone p-5 sm:grid-cols-4" aria-label="Filter">
          <select className={sel} aria-label="Kompetenz" defaultValue=""><option value="">Kompetenz</option>{capabilities.map((c) => <option key={c.slug}>{c.title}</option>)}</select>
          <select className={sel} aria-label="Experte" defaultValue=""><option value="">Experte</option></select>
          <select className={sel} aria-label="Jahr" defaultValue=""><option value="">Jahr</option>{["2026", "2025", "2024"].map((y) => <option key={y}>{y}</option>)}</select>
          <select className={sel} aria-label="Kategorie" defaultValue=""><option value="">Kategorie</option><option>Kanzlei News</option><option>Mandat</option></select>
        </form>
        <div className="mt-8"><InsightRows items={items} /></div>
        <Pagination total={items.length} />
      </section>
    </>
  );
}

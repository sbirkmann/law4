import { PageHead } from "@/components/PageHead";
import { awards } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Auszeichnungen", description: "Auszeichnungen und Rankings von Ostholm Rütter (fiktive Demo-Angaben).", path: "/sozietaet/auszeichnungen" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Sozietät", href: "/sozietaet" }, { label: "Auszeichnungen" }]} title="Auszeichnungen" />
      <section className="container-x mt-12"><ul className="mx-auto max-w-3xl divide-y divide-line border-y border-line">{awards.map((a) => <li key={a.title + a.year} className="grid gap-2 py-5 sm:grid-cols-[80px_1fr]"><span className="headline text-[22px] text-copper">{a.year}</span><div><p className="text-[16px] font-medium text-ink">{a.title}</p><p className="mt-1 text-[13.5px] text-muted">{a.by}</p></div></li>)}</ul><p className="mt-6 text-center text-[13px] text-muted">Alle Auszeichnungen sind erfunden und dienen der Demonstration.</p></section>
    </>
  );
}

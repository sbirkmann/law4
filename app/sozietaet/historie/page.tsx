import { PageHead } from "@/components/PageHead";
import { history } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Historie", description: "Die Geschichte von Ostholm Rütter seit 1994 (Demo).", path: "/sozietaet/historie" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Sozietät", href: "/sozietaet" }, { label: "Historie" }]} title="Historie" eyebrow="Seit 1994" intro={<p>Von sieben Anwältinnen und Anwälten in Frankfurt zu über 600 Mitarbeitenden an sechs Standorten. Eine Geschichte bewusster Entscheidungen, nicht des Zufalls.</p>} />
      <section className="container-x mt-12"><ol className="relative mx-auto max-w-3xl border-l border-line pl-8">{history.map((h) => <li key={h.year} className="relative pb-10"><span aria-hidden className="absolute -left-[2.3rem] top-1 h-3 w-3 rounded-full bg-copper" /><p className="headline text-2xl leading-none text-pine">{h.year}</p><p className="mt-2 text-base leading-relaxed text-ink">{h.text}</p></li>)}</ol></section>
    </>
  );
}

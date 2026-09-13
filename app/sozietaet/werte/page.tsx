import { PageHead } from "@/components/PageHead";
import { values } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Unsere Werte", description: "Exzellenz, Unabhängigkeit, Teamspirit, Verantwortung, Balance: die Werte von Ostholm Rütter (Demo).", path: "/sozietaet/werte" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Sozietät", href: "/sozietaet" }, { label: "Unsere Werte" }]} title="Unsere Werte" eyebrow="Woran wir uns messen" intro={<p>Werte sind nur so viel wert wie die Entscheidungen, die daraus folgen. Diese fünf prägen, wie wir Mandate annehmen, Teams bilden und Menschen fördern.</p>} />
      <section className="container-x mt-12"><ol className="mx-auto max-w-3xl divide-y divide-line border-y border-line">{values.map((v, i) => <li key={v.title} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]"><span className="headline text-[40px] leading-none text-copper">0{i + 1}</span><div><h2 className="headline headline-md text-pine">{v.title}</h2><p className="mt-2 text-[15.5px] leading-relaxed text-ink">{v.text}</p></div></li>)}</ol></section>
    </>
  );
}

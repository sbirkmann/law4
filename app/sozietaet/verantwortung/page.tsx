import { PageHead } from "@/components/PageHead";
import { responsibility } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Unsere Verantwortung", description: "Nachhaltigkeit, gesellschaftliches Engagement und Diversity bei Ostholm Rütter (Demo).", path: "/sozietaet/verantwortung" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Sozietät", href: "/sozietaet" }, { label: "Unsere Verantwortung" }]} title="Unsere Verantwortung" />
      <div className="container-x mt-12 space-y-8">
        {responsibility.map((r) => <section key={r.key} id={r.key} className="scroll-mt-24 bg-stone p-8 sm:p-10"><h2 className="headline headline-lg text-pine">{r.label}</h2><p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink">{r.text}</p></section>)}
      </div>
    </>
  );
}

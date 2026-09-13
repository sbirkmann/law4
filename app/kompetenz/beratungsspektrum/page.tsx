import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { practices } from "@/data/practices";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Beratungsspektrum", description: "Alle Rechtsgebiete von Ostholm Rütter im Überblick (Demo).", path: "/kompetenz/beratungsspektrum" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Kompetenz", href: "/kompetenz" }, { label: "Beratungsspektrum" }]} title="Beratungsspektrum" />
      <section className="container-x mt-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => (
            <li key={p.slug}><Link href={`/kompetenz/${p.slug}`} className="card group block h-full p-7"><h2 className="headline headline-md text-pine group-hover:text-copper">{p.title}</h2><p className="mt-3 text-base leading-relaxed text-muted">{p.lead}</p></Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}

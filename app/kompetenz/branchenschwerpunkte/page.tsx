import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { industries } from "@/data/practices";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Branchenschwerpunkte", description: "Branchen, in denen Ostholm Rütter besondere Erfahrung hat (Demo).", path: "/kompetenz/branchenschwerpunkte" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Kompetenz", href: "/kompetenz" }, { label: "Branchenschwerpunkte" }]} title="Branchenschwerpunkte" />
      <section className="container-x mt-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((p) => (
            <li key={p.slug}><Link href={`/kompetenz/${p.slug}`} className="card group block h-full p-7"><h2 className="headline headline-md text-pine group-hover:text-copper">{p.title}</h2><p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.lead}</p></Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}

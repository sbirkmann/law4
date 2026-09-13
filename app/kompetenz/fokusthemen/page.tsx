import Image from "next/image";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { focusTopics } from "@/data/focus";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Fokusthemen", description: "Cybersecurity, Digital Future, ESG und Legal Tech: die Fokusthemen von Ostholm Rütter (Demo).", path: "/kompetenz/fokusthemen" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Kompetenz", href: "/kompetenz" }, { label: "Fokusthemen" }]} title="Fokusthemen" eyebrow="Impulse" intro={<p>Themen, die Branchen übergreifen und Rechtsgebiete verbinden. Hier bündeln wir Erfahrung aus allen Praxisgruppen.</p>} />
      <section className="container-x mt-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {focusTopics.map((f) => (
            <li key={f.slug}><Link href={`/kompetenz/fokusthemen/${f.slug}`} className="group grid bg-stone sm:grid-cols-5"><span className="img-zoom relative block aspect-[4/3] sm:col-span-2 sm:aspect-auto"><Image src={f.image} alt="" fill sizes="(min-width:640px) 20vw, 100vw" className="object-cover" /></span><span className="p-6 sm:col-span-3"><span className="headline headline-md block text-pine group-hover:text-copper">{f.title}</span><span className="mt-3 block text-base leading-relaxed text-muted">{f.lead}</span></span></Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}

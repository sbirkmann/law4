import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { offices } from "@/data/offices";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Standorte", description: "Berlin, Düsseldorf, Frankfurt, Hamburg, München, Stuttgart: die Standorte von Ostholm Rütter (Demo).", path: "/sozietaet/standorte" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Sozietät", href: "/sozietaet" }, { label: "Standorte" }]} title="Unsere Standorte" />
      <section className="container-x mt-12">
        <ul className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {offices.map((o) => (
            <li key={o.slug} id={o.slug} className="scroll-mt-24 grid gap-4 py-8 sm:grid-cols-[1fr_auto]">
              <address className="not-italic">
                <h2 className="headline headline-md text-pine">{o.city}</h2>
                <p className="mt-2 text-base leading-relaxed text-ink">{o.street}<br />{o.zip} {o.city}<br />Deutschland</p>
                <p className="mt-2 text-base text-muted">T <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-copper">{o.phone}</a><br />F {o.fax}</p>
              </address>
              <div className="flex gap-6 text-sm font-semibold uppercase tracking-wider text-copper sm:flex-col sm:items-end">
                <Link href={`/experten`} className="inline-flex items-center gap-1.5 hover:text-pine"><Users className="h-4 w-4" strokeWidth={1.75} aria-hidden />Team</Link>
                <a href="#" className="inline-flex items-center gap-1.5 hover:text-pine" aria-disabled><MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />Anfahrt</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

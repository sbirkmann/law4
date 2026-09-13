import { PageHead } from "@/components/PageHead";
import { ContactForm } from "@/components/ContactForm";
import { offices } from "@/data/offices";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Kontakt", description: "Kontakt zu Ostholm Rütter (Demo).", path: "/kontakt" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Kontakt" }]} title="Kontakt" />
      <section className="container-x mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="headline headline-md text-pine">Zentrale</h2>
          <p className="mt-3 text-base leading-relaxed">{site.legalName}<br />Taunusanlage 70<br />60325 Frankfurt am Main</p>
          <p className="mt-3 text-base"><a href={site.phoneHref} className="hover:text-copper">{site.phone}</a><br /><a href={`mailto:${site.email}`} className="hover:text-copper">{site.email}</a></p>
          <h2 className="headline headline-md mt-10 text-pine">Büros</h2>
          <ul className="mt-3 space-y-1.5 text-base">{offices.map((o) => <li key={o.slug}><a href={`/sozietaet/standorte#${o.slug}`} className="hover:text-copper">{o.city}</a> · {o.phone}</li>)}</ul>
        </div>
        <div className="lg:col-span-8"><div className="bg-stone p-6 sm:p-10"><ContactForm /></div></div>
      </section>
    </>
  );
}

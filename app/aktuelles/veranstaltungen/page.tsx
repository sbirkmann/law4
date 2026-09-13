import { PageHead } from "@/components/PageHead";
import { events } from "@/data/events";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Veranstaltungen", description: "Konferenzen, Webinare und Workshops von Ostholm Rütter (Demo).", path: "/aktuelles/veranstaltungen" });

export default function EventsPage() {
  return (
    <>
      <PageHead crumbs={[{ label: "Aktuelles", href: "/aktuelles" }, { label: "Veranstaltungen" }]} title="Veranstaltungen" />
      <section className="container-x mt-12">
        <ul className="grid gap-4 md:grid-cols-2">
          {events.map((e) => (
            <li key={e.slug} className="flex flex-col bg-stone p-7">
              <span className="self-start bg-pine px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">{e.tag}</span>
              <h2 className="mt-4 text-[19px] font-medium leading-snug text-ink">{e.title}</h2>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{e.text}</p>
              <p className="mt-5 text-[13px] text-ink"><time dateTime={e.date}>{e.dateLabel}</time> · {e.place}</p>
              <a href="/kontakt" className="arrow-link mt-4">Anmelden</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

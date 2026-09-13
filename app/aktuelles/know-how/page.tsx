import { PageHead } from "@/components/PageHead";
import { InsightRows, Pagination } from "@/components/ListRows";
import { news } from "@/data/insights";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Know-how", description: "Fachbeiträge, Podcasts und Analysen der Anwältinnen und Anwälte von Ostholm Rütter (Demo).", path: "/aktuelles/know-how" });

export default function KnowHowPage() {
  return (
    <>
      <PageHead crumbs={[{ label: "Aktuelles", href: "/aktuelles" }, { label: "Know-how" }]} title="Know-how" eyebrow="Wissen teilen" intro={<p>Unsere Anwältinnen und Anwälte ordnen Gesetzesvorhaben, Urteile und Marktentwicklungen ein. Kompakt, praxisnah und mit klarer Empfehlung.</p>} />
      <section className="container-x mt-12"><InsightRows items={news} label="Zum Beitrag" /><Pagination total={news.length} /></section>
    </>
  );
}

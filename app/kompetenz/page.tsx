import { PageHead } from "@/components/PageHead";
import { MediaSplit } from "@/components/MediaSplit";
import { industries, practices } from "@/data/practices";
import { focusTopics } from "@/data/focus";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Kompetenz", description: "Beratungsspektrum, Branchenschwerpunkte und Fokusthemen von Ostholm Rütter (Demo).", path: "/kompetenz" });

export default function KompetenzPage() {
  return (
    <>
      <PageHead crumbs={[{ label: "Kompetenz" }]} title="Beratung," accent="die Maßstäbe setzt" eyebrow="Weil nur Ergebnisse zählen" intro={<p>Ostholm Rütter bietet Full Service auf höchstem Niveau. Es ist unser Anspruch, in jedem Rechtsgebiet und jeder Branche zur Marktspitze zu gehören. Unsere Anwältinnen und Anwälte haben stets auch Aspekte rechts und links des eigenen Rechtsgebiets im Blick und ziehen bei Bedarf Expertinnen und Experten aus allen relevanten Bereichen hinzu. In individuell zusammengestellten Teams entwickeln wir auch für die schwierigsten Fragen pragmatische Handlungsempfehlungen.</p>} />
      <MediaSplit title="Beratungsspektrum" image="/images/office-2.jpg" alt="Blick durch die Glasfront eines Büros auf eine Skyline" links={practices.map((p) => ({ label: p.title, href: `/kompetenz/${p.slug}` }))} />
      <MediaSplit title="Branchenschwerpunkte" image="/images/cranes.jpg" alt="Hafenkräne vor blauem Himmel" flip links={industries.map((p) => ({ label: p.title, href: `/kompetenz/${p.slug}` }))} />
      <MediaSplit title="Fokusthemen" image="/images/topic-digital.jpg" alt="Farbige Glasfassade" links={focusTopics.map((f) => ({ label: f.title, href: `/kompetenz/fokusthemen/${f.slug}` }))} />
    </>
  );
}

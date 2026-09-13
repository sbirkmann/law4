import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { MediaSplit } from "@/components/MediaSplit";
import { Figures } from "@/components/home/Figures";
import { ResponsibilityTabs } from "@/components/home/ResponsibilityTabs";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Über Ostholm Rütter", description: "Unabhängige Wirtschaftskanzlei mit sechs Standorten in Deutschland (Demo).", path: "/sozietaet" });

const links = [
  { label: "Unsere Werte", href: "/sozietaet/werte" },
  { label: "Unsere Verantwortung", href: "/sozietaet/verantwortung" },
  { label: "Historie", href: "/sozietaet/historie" },
  { label: "Auszeichnungen", href: "/sozietaet/auszeichnungen" },
  { label: "Standorte", href: "/sozietaet/standorte" },
  { label: "International", href: "/international" },
];

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Sozietät" }]} title="Über" accent="Ostholm Rütter" eyebrow="Unabhängig seit 1994" intro={<p>Ostholm Rütter ist eine der führenden Wirtschaftskanzleien Deutschlands. Rund 620 Mitarbeitende, davon über 300 Anwältinnen und Anwälte, beraten an sechs Standorten Unternehmen, Investoren und die öffentliche Hand in allen Fragen des Wirtschaftsrechts. Wir gehören keinem internationalen Verbund an und wählen für jedes grenzüberschreitende Mandat die beste Kanzlei vor Ort. Das macht uns unabhängig im Urteil und flexibel in der Zusammenarbeit.</p>} />
      <MediaSplit priority title="Die Sozietät" image="/images/office-1.jpg" alt="Konferenzraum mit Glaswänden" links={links}><p>Partnerschaftlich organisiert, unternehmerisch geführt. Entscheidungen fallen in einem gewählten Managementkomitee, die Partnerschaft bleibt Eigentümerin.</p></MediaSplit>
      <div className="mt-16"><ResponsibilityTabs /></div>
      <Figures />
      <p className="container-x text-center text-base text-muted"><Link href="/kontakt" className="arrow-link">Kontakt aufnehmen</Link></p>
    </>
  );
}

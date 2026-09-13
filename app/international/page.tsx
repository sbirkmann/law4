import { PageHead } from "@/components/PageHead";
import { MediaSplit } from "@/components/MediaSplit";
import { international } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "International", description: "Grenzüberschreitende Mandate mit unabhängigen Spitzenkanzleien weltweit (Demo).", path: "/international" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "International" }]} title="International" eyebrow="Unabhängig, weltweit" intro={<p>Für grenzüberschreitende Mandate arbeiten wir mit unabhängigen Spitzenkanzleien in über 40 Ländern zusammen. Nicht gebunden an ein Netzwerk, sondern frei in der Wahl des besten Teams vor Ort. Die Koordination übernimmt immer eine Partnerin oder ein Partner bei uns.</p>} />
      <MediaSplit priority title="Best Friends" image="/images/bridge.jpg" alt="Moderne Brücke über einen breiten Fluss">
        <ul className="mt-2 space-y-4">{international.map((i) => <li key={i.region}><p className="text-sm font-semibold uppercase tracking-wider text-copper">{i.region}</p><p className="mt-1">{i.text}</p></li>)}</ul>
      </MediaSplit>
    </>
  );
}

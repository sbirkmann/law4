import Link from "next/link";
import { PageHead } from "@/components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead crumbs={[{ label: "Fehler 404" }]} title="Seite nicht gefunden" eyebrow="Fehler 404" intro={<p>Die Seite wurde verschoben oder der Link war fehlerhaft. <Link href="/" className="text-copper underline underline-offset-4">Zur Startseite</Link>.</p>} />
    </>
  );
}

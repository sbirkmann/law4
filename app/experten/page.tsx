import { PageHead } from "@/components/PageHead";
import { ExpertSearch } from "@/components/ExpertSearch";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Expertensuche", description: "Finden Sie die passende Anwältin oder den passenden Anwalt bei Ostholm Rütter (Demo).", path: "/experten" });

export default function ExpertenPage() {
  return (
    <>
      <PageHead crumbs={[{ label: "Experten" }]} title="Expertensuche" />
      <section className="container-x mt-10"><ExpertSearch /></section>
    </>
  );
}

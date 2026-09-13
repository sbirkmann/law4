import Image from "next/image";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { ArrowLink } from "@/components/MediaSplit";
import { Reveal } from "@/components/ui/Reveal";
import { careerTracks, jobs, stories, values } from "@/data/company";
import { events } from "@/data/events";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Karriere", description: "Karriere bei Ostholm Rütter: Lawyers, Legal Talents, Legal Assistants, Business Professionals (Demo).", path: "/karriere", image: "/images/career.jpg" });

export default function KarrierePage() {
  return (
    <>
      <PageHead crumbs={[{ label: "Karriere" }]} title="Karriere bei" accent="Ostholm Rütter" eyebrow="Wachsen Sie mit uns" intro={<><p>Wir suchen Menschen, die Verantwortung wollen und Zusammenarbeit schätzen. Ob nach dem Examen, als erfahrene Anwältin oder in den Business Services: Bei uns arbeiten Sie vom ersten Tag an in Mandaten, die den Markt prägen.</p><p className="mt-4"><Link href="/karriere/jobs" className="inline-flex h-11 items-center bg-pine px-7 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-copper">Zu den Jobangeboten</Link></p></>} />
      <section className="container-x mt-16" aria-label="Einstiegswege">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {careerTracks.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.05}>
              <Link href={`/karriere/lawyers#${t.slug}`} className="group flex h-full flex-col bg-stone">
                <span className="img-zoom relative block aspect-[4/3]"><Image src={t.image} alt="" fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover" /></span>
                <span className="flex flex-1 flex-col p-5"><span className="headline headline-md text-pine group-hover:text-copper">{t.title}</span><span className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">{t.text}</span><span className="arrow-link mt-4">Mehr erfahren</span></span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
      <section className="mt-20 bg-stone py-16" aria-label="Werte">
        <div className="container-x">
          <p className="eyebrow-lines">Was uns ausmacht</p>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => <li key={v.title} className="text-center"><h2 className="headline headline-md text-pine">{v.title}</h2><p className="mt-3 text-[13.5px] leading-relaxed text-muted">{v.text}</p></li>)}
          </ul>
          <p className="mt-10 text-center"><ArrowLink href="/karriere/kultur">Zur Corporate Culture</ArrowLink></p>
        </div>
      </section>
      <section className="container-x mt-20" aria-label="Stories">
        <p className="eyebrow-lines">Stories</p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {stories.map((s) => <li key={s.name} className="flex flex-col border border-line p-7"><span className="self-start bg-copper px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">{s.tag}</span><p className="mt-5 flex-1 text-[15.5px] leading-relaxed text-ink">„{s.text}“</p><p className="mt-5 text-[13px] font-medium text-pine">{s.name}</p></li>)}
        </ul>
        <p className="mt-6"><ArrowLink href="/karriere/kultur#people">Mehr Stories</ArrowLink></p>
      </section>
      <section className="container-x mt-20 grid gap-10 lg:grid-cols-2" aria-label="Events und Jobs">
        <div className="bg-stone p-8">
          <h2 className="headline headline-lg text-pine">Lernen Sie uns kennen</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink">{events[2].title}: {events[2].text}</p>
          <p className="mt-2 text-[13px] text-muted">{events[2].dateLabel} · {events[2].place}</p>
          <p className="mt-5"><ArrowLink href="/aktuelles/veranstaltungen">Entdecken und anmelden</ArrowLink></p>
        </div>
        <div className="bg-stone p-8">
          <h2 className="headline headline-lg text-pine">Jobangebote</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink">Derzeit {jobs.length} offene Positionen an unseren Standorten, von der Ausbildung bis zur Partnerschaft.</p>
          <p className="mt-5"><ArrowLink href="/karriere/jobs">Jetzt bewerben</ArrowLink></p>
        </div>
      </section>
      <section className="container-x mt-16 text-center text-[14.5px] text-muted" id="alumni">
        <p>Ostholm Rütter wurde 2025 als „Beste Arbeitgeberin unter den Wirtschaftskanzleien“ ausgezeichnet (fiktiv). Unser Alumni-Netzwerk umfasst über 400 ehemalige Kolleginnen und Kollegen.</p>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { focusTopics } from "@/data/focus";
import { SectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

export function FocusRow() {
  return (
    <section className="container-x py-16 lg:py-20" aria-label="Fokusthemen">
      <SectionHead eyebrow="Impulse" title="Fokusthemen" text={<>Ostholm Rütter begleitet aktuelle Entwicklungen und Rechtsthemen aktiv.<br className="hidden sm:block" /> Eine Übersicht unserer Fokusthemen finden Sie <Link href="/kompetenz/fokusthemen" className="text-copper underline underline-offset-4">hier</Link>.</>} />
      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
        {focusTopics.map((f, i) => (
          <Reveal as="li" key={f.slug} delay={i * 0.06}>
            <Link href={`/kompetenz/fokusthemen/${f.slug}`} className="group block text-center">
              <span className="img-zoom duotone relative mx-auto block h-32 w-32 overflow-hidden rounded-full bg-stone ring-1 ring-line ring-offset-4 ring-offset-white transition-all duration-500 group-hover:ring-copper sm:h-40 sm:w-40">
                <Image src={f.image} alt="" fill sizes="160px" className="object-cover" />
              </span>
              <span className="mt-6 block text-[16px] text-ink transition-colors group-hover:text-copper">{f.title}</span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

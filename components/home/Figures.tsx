import { figures } from "@/data/company";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

/** Key figures: large serif digits with count-up, hairline dividers, generous vertical space. */
export function Figures({ index = "05" }: { index?: string }) {
  return (
    <section className="container-x section-open" aria-label="In Zahlen">
      <Eyebrow index={index}>In Zahlen</Eyebrow>
      <dl className="mt-12 grid border-t border-line sm:grid-cols-3">
        {figures.map((f, i) => (
          <Reveal as="div" key={f.label} delay={i * 0.08} className="border-b border-line py-8 sm:border-b-0 sm:py-12 sm:pr-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-8">
            <dd className="serif-number text-figure text-pine">
              <Counter to={f.value} suffix={f.suffix} />
            </dd>
            <dt className="mt-6 max-w-[18rem] text-sm text-muted">{f.label}</dt>
          </Reveal>
        ))}
      </dl>
      <p className="label mt-8 text-xs text-muted-light">Fiktive Demo-Werte.</p>
    </section>
  );
}

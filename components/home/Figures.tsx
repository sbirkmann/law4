import { figures } from "@/data/company";
import { Counter } from "@/components/ui/Counter";

export function Figures() {
  return (
    <section className="container-x py-16 lg:py-20" aria-label="In Zahlen">
      <p className="eyebrow-lines">In Zahlen</p>
      <dl className="mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-3">
        {figures.map((f) => (
          <div key={f.label} className="text-center">
            <dd className="headline text-[64px] leading-none text-pine">
              <span className="inline-block border-b-4 border-copper pb-1"><Counter to={f.value} suffix={f.suffix} /></span>
            </dd>
            <dt className="mx-auto mt-5 max-w-[16rem] text-[14.5px] leading-relaxed text-muted">{f.label}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-center text-[11px] text-muted-light">Fiktive Demo-Werte.</p>
    </section>
  );
}

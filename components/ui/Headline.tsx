import { cn } from "@/lib/utils";

/** Small grotesk label with a hairline in front. Optional index ("01") in italic serif. */
export function Eyebrow({ children, index, className, light = false, centered = false }: { children: React.ReactNode; index?: string; className?: string; light?: boolean; centered?: boolean }) {
  return (
    <p className={cn(centered ? "eyebrow-lines" : "eyebrow", light && "text-paper/70", className)}>
      {index && <span className="eyebrow-index" aria-hidden>{index}</span>}
      {children}
    </p>
  );
}

/**
 * Section head on the 12-column grid: eyebrow and title left (7 cols), running text right (4 cols, offset).
 * `centered` keeps the old symmetric variant for pages that need it.
 */
export function SectionHead({ eyebrow, index, title, accent, text, className, light = false, centered = false }: { eyebrow?: string; index?: string; title: string; accent?: string; text?: React.ReactNode; className?: string; light?: boolean; centered?: boolean }) {
  if (centered) {
    return (
      <div className={cn("mx-auto max-w-3xl text-center", className)}>
        {eyebrow && <Eyebrow centered light={light}>{eyebrow}</Eyebrow>}
        <h2 className={cn("headline headline-lg mt-6", light ? "text-paper" : "text-pine")}>
          {title}
          {accent && <><br /><span className="italic text-copper">{accent}</span></>}
        </h2>
        {text && <div className={cn("mx-auto mt-6 measure text-base", light ? "text-paper/80" : "text-muted")}>{text}</div>}
      </div>
    );
  }
  return (
    <div className={cn("grid-12 items-end", className)}>
      <div className="col-span-12 lg:col-span-7">
        {eyebrow && <Eyebrow index={index} light={light}>{eyebrow}</Eyebrow>}
        <h2 className={cn("headline headline-lg mt-6", light ? "text-paper" : "text-pine")}>
          {title}
          {accent && <><br /><span className="italic text-copper">{accent}</span></>}
        </h2>
      </div>
      {text && <div className={cn("col-span-12 text-base lg:col-span-4 lg:col-start-9", light ? "text-paper/80" : "text-muted")}>{text}</div>}
    </div>
  );
}

export function FramedText({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-12 border-t border-line pt-8">
      <Eyebrow>{label}</Eyebrow>
      <div className="lead mt-6 text-ink">{children}</div>
    </div>
  );
}

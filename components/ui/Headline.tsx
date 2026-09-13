import { cn } from "@/lib/utils";

export function SectionHead({ eyebrow, title, accent, text, className, light = false }: { eyebrow?: string; title: string; accent?: string; text?: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && <p className={cn("eyebrow-lines", light && "text-white/70")}>{eyebrow}</p>}
      <h2 className={cn("headline headline-xl mt-8", light ? "text-white" : "text-pine")}>
        {title}
        {accent && <><br /><span className="text-copper">{accent}</span></>}
      </h2>
      {text && <div className={cn("mt-6 text-[16px] leading-relaxed", light ? "text-white/80" : "text-ink")}>{text}</div>}
    </div>
  );
}

export function FramedText({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative mx-auto mt-14 max-w-3xl border border-line px-6 pb-8 pt-8 sm:px-10">
      <p className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 text-[13px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <div className="text-[16px] leading-relaxed text-ink">{children}</div>
    </div>
  );
}

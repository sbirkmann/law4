"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { lawyers } from "@/data/lawyers";
import { offices } from "@/data/offices";
import { capabilities } from "@/data/practices";
import { cn } from "@/lib/utils";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const select = "h-9 w-full border-b border-white/40 bg-transparent pr-6 text-[13px] text-white outline-none appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221.5%22><path d=%22M3 5l4 4 4-4%22/></svg>')] bg-[length:14px] bg-[right_0_center] bg-no-repeat";

export function ExpertSearch({ initialPractice = "" }: { initialPractice?: string }) {
  const [q, setQ] = useState("");
  const [practice, setPractice] = useState(initialPractice);
  const [office, setOffice] = useState("");
  const [title, setTitle] = useState("");
  const [letter, setLetter] = useState("");

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return lawyers
      .filter((l) => (!t || l.name.toLowerCase().includes(t)) && (!practice || l.practices.includes(practice)) && (!office || l.office === office) && (!title || l.title === title) && (!letter || l.sortName.startsWith(letter)))
      .sort((a, b) => a.sortName.localeCompare(b.sortName, "de"));
  }, [q, practice, office, title, letter]);

  return (
    <div id="suche" className="scroll-mt-24">
      <div className="panel-animated mx-auto max-w-4xl px-6 py-12 text-white sm:px-16 lg:px-24">
        <div className="relative z-10">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Finden Sie Ihren Experten" aria-label="Nach Name suchen" className="h-12 w-full bg-white px-4 text-[15px] text-ink outline-none placeholder:text-muted-light" />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">Filtern nach:</p>
          <div className="mt-2 grid gap-4 sm:grid-cols-3">
            <select value={practice} onChange={(e) => setPractice(e.target.value)} className={select} aria-label="Kompetenz"><option value="" className="text-ink">Kompetenz</option>{capabilities.map((c) => <option key={c.slug} value={c.slug} className="text-ink">{c.title}</option>)}</select>
            <select value={office} onChange={(e) => setOffice(e.target.value)} className={select} aria-label="Standort"><option value="" className="text-ink">Standort</option>{offices.map((o) => <option key={o.slug} value={o.slug} className="text-ink">{o.short}</option>)}</select>
            <select value={title} onChange={(e) => setTitle(e.target.value)} className={select} aria-label="Position"><option value="" className="text-ink">Position</option>{["Partnerin", "Partner", "Counsel", "Associate"].map((t) => <option key={t} value={t} className="text-ink">{t}</option>)}</select>
          </div>
          <p className="mt-6 text-[12px] text-white/80">Alphabet</p>
          <ul className="mt-1 flex flex-wrap gap-x-2.5 gap-y-1 text-[12px]">
            <li><button type="button" onClick={() => setLetter("")} className={cn("underline-offset-4", letter === "" ? "underline" : "text-white/70 hover:text-white")}>Alle</button></li>
            {letters.map((L) => <li key={L}><button type="button" onClick={() => setLetter(L)} className={cn("underline-offset-4", letter === L ? "underline" : "text-white/70 hover:text-white")}>{L}</button></li>)}
          </ul>
        </div>
      </div>

      <h2 className="headline headline-lg mt-14 text-pine">Ihre Suchergebnisse</h2>
      <p className="sr-only" role="status">{list.length} Ergebnisse</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-[13.5px]">
          <thead>
            <tr className="bg-pine text-left text-[12px] font-semibold text-white">
              <th scope="col" className="px-3 py-2.5 font-semibold" colSpan={2}>Name</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Kompetenz</th>
              <th scope="col" className="px-3 py-2.5 font-semibold">Kontakt</th>
            </tr>
          </thead>
          <tbody>
            {list.map((l) => {
              const off = offices.find((o) => o.slug === l.office);
              return (
                <tr key={l.slug} className="border-b border-line align-top">
                  <td className="w-[150px] py-3 pr-3">
                    <Link href={`/experten/${l.slug}`} className="img-zoom relative block aspect-[5/4] w-[140px] overflow-hidden bg-stone"><Image src={l.image} alt={`Portrait von ${l.name}`} fill sizes="140px" className="object-cover object-top" /></Link>
                  </td>
                  <td className="w-[220px] px-3 py-3 leading-relaxed">
                    <Link href={`/experten/${l.slug}`} className="font-medium text-ink hover:text-copper">{l.sortName}</Link>
                    <br />T <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="hover:text-copper">{l.phone}</a>
                    <br /><Link href={`/sozietaet/standorte#${l.office}`} className="hover:text-copper">{off?.short}</Link>
                  </td>
                  <td className="px-3 py-3 leading-relaxed">
                    {l.practices.map((p) => { const c = capabilities.find((x) => x.slug === p); return c ? <div key={p}><Link href={`/kompetenz/${c.slug}`} className="hover:text-copper">{c.title}</Link></div> : null; })}
                  </td>
                  <td className="px-3 py-3 leading-loose">
                    <a href={`mailto:${l.email}`} className="flex items-center gap-2 hover:text-copper"><Mail className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />E-Mail schreiben</a>
                    <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-copper"><Phone className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />Anrufen</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {list.length === 0 && <p className="py-8 text-center text-[15px] text-muted">Keine Treffer. Passen Sie die Filter an.</p>}
      </div>
      <div className="mt-3 flex items-center justify-between border-y border-dotted border-line py-2 text-[12px] text-muted">
        <span aria-hidden />
        <span>1 von 1</span>
        <span className="text-muted-light">Nächste Seite ›</span>
      </div>
    </div>
  );
}

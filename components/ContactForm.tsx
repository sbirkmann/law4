"use client";

import Link from "next/link";

import { useState, type FormEvent } from "react";
import { offices } from "@/data/offices";

const field = "w-full border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition focus:border-pine";
const label = "mb-1.5 block text-sm font-semibold uppercase tracking-wider text-muted";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div role="status" className="bg-stone p-8">
        <p className="headline headline-md text-pine">Vielen Dank.</p>
        <p className="mt-3 text-base leading-relaxed text-ink">Dies ist eine Demo-Website. Ihre Nachricht wurde nicht versendet. Auf der echten Website würde sich das zuständige Büro innerhalb eines Werktags melden.</p>
        <button type="button" onClick={() => setSent(false)} className="arrow-link mt-6">Formular erneut anzeigen</button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={label}>Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
        <div><label htmlFor="firma" className={label}>Unternehmen</label><input id="firma" name="firma" autoComplete="organization" className={field} /></div>
        <div><label htmlFor="email" className={label}>E-Mail</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
        <div><label htmlFor="buero" className={label}>Büro</label>
          <select id="buero" name="buero" defaultValue="" className={field}><option value="">Bitte wählen</option>{offices.map((o) => <option key={o.slug} value={o.slug}>{o.short}</option>)}</select>
        </div>
      </div>
      <div><label htmlFor="nachricht" className={label}>Ihr Anliegen</label><textarea id="nachricht" name="nachricht" rows={6} required className={field} /></div>
      <div className="flex items-start gap-3">
        <input id="ds" type="checkbox" required className="mt-1 h-4 w-4 accent-pine" />
        <label htmlFor="ds" className="text-sm leading-relaxed text-muted">Ich habe die <Link href="/datenschutz" className="text-copper underline underline-offset-4">Datenschutzhinweise</Link> gelesen. Bitte übermitteln Sie keine vertraulichen Informationen, bevor ein Mandat besteht.</label>
      </div>
      <button type="submit" className="inline-flex h-11 items-center bg-pine px-7 text-sm font-semibold uppercase tracking-wider text-paper transition hover:bg-copper">Nachricht senden</button>
    </form>
  );
}

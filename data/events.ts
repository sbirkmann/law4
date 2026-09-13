export type Event = { slug: string; tag: string; title: string; date: string; dateLabel: string; place: string; text: string };

export const events: Event[] = [
  { slug: "legal-summit-defence-security-2026", tag: "Konferenz", title: "Legal Summit Defence & Security 2026", date: "2026-10-17", dateLabel: "17.10.2026", place: "München, Konferenzzentrum Flughafen", text: "Regulierung, Beschaffung und Investitionskontrolle im Verteidigungssektor. Mit Gästen aus Ministerien, Industrie und Wissenschaft." },
  { slug: "quartals-briefing-kartellrecht-q3-2026", tag: "Webinar", title: "Quartals-Briefing Kartellrecht Q3/2026", date: "2026-10-17", dateLabel: "17.10.2026", place: "Online", text: "Neue Entscheidungen, laufende Verfahren, Ausblick auf die Fusionskontrollreform. 45 Minuten, anschließend Fragen." },
  { slug: "esg-frühstueck-hamburg", tag: "Frühstück", title: "ESG-Frühstück: CSDDD-Umsetzung in der Praxis", date: "2026-11-05", dateLabel: "05.11.2026", place: "Hamburg, Am Sandtorkai 3", text: "Ein Vormittag mit Praxisberichten aus drei Branchen und Zeit für Austausch." },
  { slug: "ai-act-workshop-berlin", tag: "Workshop", title: "AI Act Workshop: Hochrisiko-Systeme inventarisieren", date: "2026-11-19", dateLabel: "19.11.2026", place: "Berlin, Unter den Linden 14", text: "Hands-on-Workshop für Rechts-, IT- und Fachabteilungen. Begrenzte Teilnehmerzahl." },
  { slug: "restrukturierungstag-frankfurt", tag: "Konferenz", title: "Frankfurter Restrukturierungstag 2026", date: "2026-12-03", dateLabel: "03.12.2026", place: "Frankfurt, Taunusanlage 70", text: "Zwischenbilanz StaRUG, Distressed M&A, Gläubigerstrategien." },
];

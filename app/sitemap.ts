import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { capabilities } from "@/data/practices";
import { focusTopics } from "@/data/focus";
import { lawyers } from "@/data/lawyers";
import { insights } from "@/data/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["", "/aktuelles", "/aktuelles/news", "/aktuelles/know-how", "/aktuelles/veranstaltungen", "/kompetenz", "/kompetenz/beratungsspektrum", "/kompetenz/branchenschwerpunkte", "/kompetenz/fokusthemen", "/experten", "/karriere", "/karriere/lawyers", "/karriere/kultur", "/karriere/jobs", "/sozietaet", "/sozietaet/werte", "/sozietaet/verantwortung", "/sozietaet/historie", "/sozietaet/auszeichnungen", "/sozietaet/standorte", "/international", "/kontakt", "/impressum", "/datenschutz"];
  return [
    ...statics.map((p) => ({ url: `${site.url}${p}`, lastModified: now })),
    ...capabilities.map((c) => ({ url: `${site.url}/kompetenz/${c.slug}`, lastModified: now })),
    ...focusTopics.map((f) => ({ url: `${site.url}/kompetenz/fokusthemen/${f.slug}`, lastModified: now })),
    ...lawyers.map((l) => ({ url: `${site.url}/experten/${l.slug}`, lastModified: now })),
    ...insights.map((i) => ({ url: `${site.url}/aktuelles/${i.slug}`, lastModified: new Date(i.date) })),
  ];
}

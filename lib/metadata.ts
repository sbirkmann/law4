import type { Metadata } from "next";
import { site } from "@/data/site";

type Args = { title: string; description: string; path: string; image?: string; type?: "website" | "article" };

export function buildMetadata({ title, description, path, image = "/images/og.jpg", type = "website" }: Args): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "de_DE", type, images: [{ url: image, width: 1800, height: 1200, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

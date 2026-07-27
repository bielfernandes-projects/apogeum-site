import type { MetadataRoute } from "next";
import { locales } from "@/i18n";

const BASE_URL = "https://apogeumdigital.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const alternates: Record<string, string> = {};
    for (const alt of locales) {
      alternates[alt] = `${BASE_URL}/${alt}`;
    }

    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === "pt" ? 1 : 0.8,
      alternates: {
        languages: alternates,
      },
    });
  }

  return entries;
}

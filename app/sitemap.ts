import type { MetadataRoute } from "next";
import { firm } from "@/lib/content";
import { sortedArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: firm.url, changeFrequency: "monthly", priority: 1 },
    { url: `${firm.url}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${firm.url}/practice-areas`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${firm.url}/team`, changeFrequency: "yearly", priority: 0.7 },
    {
      url: `${firm.url}/legal-matters`,
      lastModified: sortedArticles[0]?.date,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${firm.url}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const posts: MetadataRoute.Sitemap = sortedArticles.map((a) => ({
    url: `${firm.url}/legal-matters/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...pages, ...posts];
}

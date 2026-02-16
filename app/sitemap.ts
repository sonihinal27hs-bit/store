import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://store-sigma-lovat.vercel.app"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2026-02-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]
}


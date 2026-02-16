import { MetadataRoute } from "next"
import { getAllPages } from "@/lib/page-data"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.domain
  const pages = getAllPages()

  // Homepage — highest priority
  const homeEntry = {
    url: baseUrl,
    lastModified: new Date("2026-02-16"),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }

  // Leads page
  const leadsEntry = {
    url: `${baseUrl}/leads`,
    lastModified: new Date("2026-02-16"),
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }

  // Dynamic pages with priority based on type
  const dynamicEntries = pages.map((page) => {
    let priority = 0.7
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly"

    if (page.slug === "waterproofing-in-vadodara") {
      priority = 0.95
      changeFrequency = "daily"
    } else if (page.type === "city") {
      priority = 0.85
      changeFrequency = "weekly"
    } else if (page.type === "area") {
      priority = 0.8
      changeFrequency = "weekly"
    } else if (page.type === "service") {
      priority = 0.8
      changeFrequency = "weekly"
    } else if (page.type === "service-city") {
      priority = 0.7
      changeFrequency = "monthly"
    }

    return {
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date("2026-02-16"),
      changeFrequency,
      priority,
    }
  })

  return [homeEntry, ...dynamicEntries, leadsEntry]
}

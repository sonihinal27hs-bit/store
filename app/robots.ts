import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/leads"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/leads"],
      },
    ],
    sitemap: "https://waterproofingvadodara.com/sitemap.xml",
    host: "https://waterproofingvadodara.com",
  }
}

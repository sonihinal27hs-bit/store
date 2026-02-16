import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/leads"],
      },
    ],
    sitemap: "https://store-sigma-lovat.vercel.app/sitemap.xml",
    host: "https://store-sigma-lovat.vercel.app",
  }
}

import type { MetadataRoute } from "next";
import { areas, articles, servicePath, services, siteConfig } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();

  const staticRoutes = [
    "",
    "/regular-cleaning",
    "/total-cleaning",
    "/home-cleaning",
    "/about",
    "/contact",
    "/cleaning-tips",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${base}${servicePath(service)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: service.category === "regular" ? 0.9 : 0.78,
    })),
    ...areas.map((area) => ({
      url: `${base}/areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    })),
    ...articles.map((article) => ({
      url: `${base}/cleaning-tips/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.62,
    })),
  ];
}

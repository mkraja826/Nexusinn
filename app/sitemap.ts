import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const routes = [
  "",
  "/gcc-solutions",
  "/gcc-solutions/build-operate-transfer",
  "/gcc-solutions/hybrid-captive",
  "/gcc-solutions/joint-venture",
  "/ai-ml-services",
  "/ai-ml-services/ai-strategy",
  "/ai-ml-services/ai-readiness",
  "/ai-ml-services/ml-engineering",
  "/ai-ml-services/intelligent-automation",
  "/ai-ml-services/generative-ai",
  "/ai-ml-services/responsible-ai",
  "/insurance-solutions",
  "/insurance-solutions/claims-automation",
  "/insurance-solutions/underwriting-ai",
  "/insurance-solutions/insurtech-platforms",
  "/insurance-solutions/compliance-regtech",
  "/about",
  "/insights",
  "/careers",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/insights" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.9 : 0.75,
  }));
}

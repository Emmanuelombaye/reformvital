import type { MetadataRoute } from "next";
import { getCatalogSafe } from "@/lib/vco/catalog";

const SITE = "https://www.reformvital.com";

const STATIC_PAGES = [
  "",
  "/treatments",
  "/memberships",
  "/how-it-works",
  "/resources",
  "/about",
  "/faq",
  "/provider-network",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getCatalogSafe();
  return [
    ...STATIC_PAGES.map((path) => ({ url: `${SITE}${path}` })),
    ...products.map((t) => ({ url: `${SITE}/treatments/${t.slug}` })),
  ];
}

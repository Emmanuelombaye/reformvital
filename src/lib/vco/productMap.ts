/**
 * Presentational mapping for VCO storefront products → Reformvital UI.
 */
import type { VcoProduct } from "./storefront";

/** Local treatment slug → VCO SKU */
export const TREATMENT_SKU: Record<string, string> = {
  semaglutide: "STORE-SEMA",
  tirzepatide: "STORE-TIRZ",
};

export type StorefrontProduct = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  description: string;
  price: number | null;
  intakeUrl: string | null;
  requiresPrescription: boolean;
  requiresIntake: boolean;
  status: string;
  image: string;
  sort: number;
};

export const PRODUCT_PRESENTATION: Record<
  string,
  { image: string; sort: number }
> = {
  "STORE-SEMA": {
    image: "/images/vials/semaglutide.png",
    sort: 1,
  },
  "STORE-TIRZ": {
    image: "/images/vials/tirzepatide.png",
    sort: 2,
  },
};

export function enrichProduct(raw: VcoProduct): StorefrontProduct {
  const sku = raw.sku || raw.id;
  const meta = PRODUCT_PRESENTATION[sku] || {
    image: raw.image_url || "/images/vials/semaglutide.png",
    sort: 99,
  };

  const name = raw.public_display_name || raw.name || "Treatment";
  const image =
    raw.image_url ||
    (Array.isArray(raw.images) && raw.images[0]) ||
    meta.image;

  return {
    id: raw.id,
    slug: raw.slug || sku,
    sku,
    name,
    description: raw.description || "",
    price: typeof raw.price === "number" ? raw.price : null,
    intakeUrl: raw.intake_url || null,
    requiresPrescription: !!raw.requires_prescription,
    requiresIntake: raw.requires_intake !== false,
    status: raw.status || "active",
    image,
    sort: meta.sort,
  };
}

export function mapCatalog(rawProducts: VcoProduct[] | null | undefined): StorefrontProduct[] {
  return (rawProducts || [])
    .filter((p) => p && p.status !== "inactive")
    .map(enrichProduct)
    .sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name));
}

/** Match by the product's real slug first, then by an old local name such as "semaglutide". */
export function findProductForTreatment(
  products: StorefrontProduct[],
  treatmentId: string | null | undefined,
): StorefrontProduct | null {
  if (!treatmentId) return null;
  const bySlug = products.find((p) => p.slug === treatmentId);
  if (bySlug) return bySlug;
  const sku = TREATMENT_SKU[treatmentId];
  if (!sku) return null;
  return products.find((p) => p.sku === sku) || null;
}

/**
 * Prefer requested treatment (exact SKU match).
 * When no treatment is requested, use the first product with an intake URL.
 */
export function resolveIntakeProduct(
  products: StorefrontProduct[],
  treatmentId?: string | null,
): StorefrontProduct | null {
  if (treatmentId) {
    return findProductForTreatment(products, treatmentId);
  }
  return products.find((p) => p.intakeUrl) || products[0] || null;
}

/** CTA href for hosted intake handoff via /start */
export function startHref(treatmentSlug?: string | null): string {
  if (!treatmentSlug) return "/start";
  return `/start?treatment=${encodeURIComponent(treatmentSlug)}`;
}

import { fetchProducts } from "./storefront";
import { mapCatalog, type StorefrontProduct } from "./productMap";

export {
  TREATMENT_SKU,
  findProductForTreatment,
  mapCatalog,
  resolveIntakeProduct,
  startHref,
} from "./productMap";
export type { StorefrontProduct } from "./productMap";
export { beginIntake, fetchProduct, fetchProducts } from "./storefront";
export { VCO_API_URL, VCO_BRAND_ID } from "./config";

/** Products listed on the website. Never falls back to hard-coded products. */
export async function listStorefrontProducts(): Promise<StorefrontProduct[]> {
  try {
    return mapCatalog(await fetchProducts());
  } catch {
    return [];
  }
}

export async function listStorefrontProductsStrict(): Promise<StorefrontProduct[]> {
  return mapCatalog(await fetchProducts());
}

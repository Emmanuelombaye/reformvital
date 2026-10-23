import { fetchProducts } from "./storefront";
import {
  fallbackProducts,
  findProductForTreatment,
  mapCatalog,
  resolveIntakeProduct,
  startHref,
  type StorefrontProduct,
} from "./productMap";

export {
  TREATMENT_SKU,
  fallbackProducts,
  findProductForTreatment,
  mapCatalog,
  resolveIntakeProduct,
  startHref,
} from "./productMap";
export type { StorefrontProduct } from "./productMap";
export { beginIntake, fetchProduct, fetchProducts } from "./storefront";
export { VCO_API_URL, VCO_BRAND_ID } from "./config";

export async function listStorefrontProducts(): Promise<StorefrontProduct[]> {
  try {
    const raw = await fetchProducts();
    return mapCatalog(raw);
  } catch {
    return fallbackProducts();
  }
}

export async function listStorefrontProductsStrict(): Promise<StorefrontProduct[]> {
  const raw = await fetchProducts();
  return mapCatalog(raw);
}

/**
 * VirtualClinicOS Brand Storefront client (browser + server safe).
 * Auth: brand ID via query/header — never put API keys in the frontend.
 * Docs: https://portal.virtualclinicos.com/api-docs#storefront-auth
 */
import { VCO_API_URL, VCO_BRAND_ID } from "./config";

export type VcoProduct = {
  id: string;
  name: string;
  public_display_name?: string | null;
  slug?: string | null;
  description?: string | null;
  price?: number | null;
  sku?: string | null;
  status?: string | null;
  image_url?: string | null;
  images?: string[];
  intake_url?: string | null;
  requires_prescription?: boolean;
  requires_intake?: boolean;
};

async function commerceGet(path: string): Promise<unknown> {
  const brandId = VCO_BRAND_ID;
  if (!brandId) {
    throw new Error("Missing NEXT_PUBLIC_VCO_BRAND_ID — set Reformvital brand ID.");
  }

  const url = new URL(`${VCO_API_URL}${path}`);
  url.searchParams.set("brandId", brandId);

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "X-Brand-Id": brandId,
    },
    next: { revalidate: 60 },
  });

  let body: Record<string, unknown> | null = null;
  try {
    body = (await res.json()) as Record<string, unknown>;
  } catch {
    body = null;
  }

  if (!res.ok) {
    const msg =
      (typeof body?.error === "string" && body.error) ||
      (typeof body?.message === "string" && body.message) ||
      `Storefront request failed (${res.status})`;
    throw new Error(msg);
  }

  return body;
}

let productsCache: VcoProduct[] | null = null;
let productsInflight: Promise<VcoProduct[]> | null = null;

export async function fetchProducts({ force = false } = {}): Promise<VcoProduct[]> {
  if (!force && productsCache) return productsCache;
  if (!force && productsInflight) return productsInflight;

  productsInflight = commerceGet("/api/commerce/v1/products")
    .then((data) => {
      const list = Array.isArray((data as { products?: unknown })?.products)
        ? ((data as { products: VcoProduct[] }).products)
        : [];
      productsCache = list;
      return list;
    })
    .finally(() => {
      productsInflight = null;
    });

  return productsInflight;
}

export async function fetchProduct(slugOrSku: string): Promise<VcoProduct | null> {
  const data = (await commerceGet(
    `/api/commerce/v1/products/${encodeURIComponent(slugOrSku)}`,
  )) as { product?: VcoProduct };
  return data?.product || null;
}

export function beginIntake(intakeUrl: string | null | undefined): void {
  if (!intakeUrl) {
    throw new Error(
      "This product has no intake URL yet. Contact your VirtualClinicOS rep to finish intake domain setup.",
    );
  }
  if (typeof window !== "undefined") {
    window.location.assign(intakeUrl);
  }
}

/**
 * VirtualClinicOS Brand Storefront client (browser + server safe).
 * Auth: brand ID via query/header; the optional storefront key is server-only.
 * Docs: https://portal.virtualclinicos.com/api-docs#storefront-auth
 */
import { VCO_API_URL, VCO_BRAND_ID, VCO_TAG } from "./config";

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
  requires_video_consult?: boolean;
  short_description?: string | null;
  strength?: string | null;
  dosage_form?: string | null;
  category_name?: string | null;
  supply?: { days: number | null; months: number | null; units_per_fill: number | null } | null;
  seo?: { title: string; description: string | null; image: string | null };
};

async function commerceGet(path: string): Promise<unknown> {
  const brandId = VCO_BRAND_ID;
  if (!brandId) {
    throw new Error("Missing NEXT_PUBLIC_VCO_BRAND_ID — set Reformvital brand ID.");
  }

  // Server-only env (no NEXT_PUBLIC_): undefined in the browser, so nothing leaks.
  const base = (process.env.VCO_API_BASE || VCO_API_URL).replace(/\/$/, "");
  const key = process.env.VCO_STOREFRONT_KEY;

  const url = new URL(`${base}${path}`);
  url.searchParams.set("brandId", brandId);

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "X-Brand-Id": brandId,
      ...(key ? { Authorization: `Bearer ${key}` } : {}),
    },
    // Tagged: /api/vco-webhook refreshes it on product changes; hourly is a safety net.
    next: { tags: [VCO_TAG], revalidate: 3600 },
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

// No module-level cache: it would survive the webhook's revalidateTag on the server.
// Next's tagged fetch cache (above) dedupes and caches instead.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function fetchProducts(_opts: { force?: boolean } = {}): Promise<VcoProduct[]> {
  const data = await commerceGet("/api/commerce/v1/products");
  return Array.isArray((data as { products?: unknown })?.products)
    ? (data as { products: VcoProduct[] }).products
    : [];
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

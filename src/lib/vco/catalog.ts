/**
 * Site catalog built from the VCO storefront API.
 * Nothing about a product (name, price, link) is typed here: it all comes from the API.
 * Marketing copy in brand.config is only used when the API returns that product's SKU.
 */
import { brandConfig } from "@/brand.config";
import { fetchProducts, type VcoProduct } from "./storefront";
import { TREATMENT_SKU } from "./productMap";

export type Therapy = {
  slug: string;
  sku: string;
  name: string;
  /** Short line for cards */
  desc: string;
  /** Page body */
  description: string;
  category: string;
  price: number | null;
  /** e.g. "$399/mo" */
  priceLabel: string;
  concentration: string;
  form: string;
  imageUrl: string | null;
  /** Bundled vial art key, only for SKUs we have art for */
  artKey: string | null;
  intakeUrl: string | null;
  requiresVideoConsult: boolean;
  seo: { title: string; description: string | null; image: string | null };
  features: string[];
  clinicalNote: string;
};

type Content = {
  tagline?: string;
  description?: string;
  features?: string[];
  clinicalTrial?: string;
};

const ART_BY_SKU: Record<string, string> = Object.fromEntries(
  Object.entries(TREATMENT_SKU).map(([key, sku]) => [sku, key]),
);

const DEFAULT_FEATURES = [
  "Online licensed-provider review",
  "Secure medical intake after checkout",
  "Ongoing program support by secure message",
];

function formatPrice(p: VcoProduct): string {
  if (typeof p.price !== "number") return "";
  const amount = Number.isInteger(p.price) ? `$${p.price}` : `$${p.price.toFixed(2)}`;
  const months = p.supply?.months ?? null;
  if (months === 1) return `${amount}/mo`;
  if (months && months > 1) return `${amount} / ${months}-month supply`;
  return amount;
}

function contentFor(artKey: string | null): Content | undefined {
  if (!artKey) return undefined;
  return (brandConfig.treatmentDetails as Record<string, Content | undefined>)[artKey];
}

function toTherapy(p: VcoProduct): Therapy {
  const sku = p.sku || p.id;
  const slug = p.slug || sku;
  const artKey = ART_BY_SKU[sku] ?? null;
  const content = contentFor(artKey);
  const name = p.public_display_name || p.name || "Treatment";
  const image = p.image_url || (Array.isArray(p.images) && p.images[0]) || null;

  return {
    slug,
    sku,
    name,
    desc: p.short_description || content?.tagline || p.description || "",
    description: p.description || content?.description || "",
    category: p.category_name || "Treatment",
    price: typeof p.price === "number" ? p.price : null,
    priceLabel: formatPrice(p),
    concentration: p.strength || "",
    form: p.dosage_form || "",
    imageUrl: image,
    artKey,
    intakeUrl: p.intake_url || null,
    requiresVideoConsult: !!p.requires_video_consult,
    seo: {
      title: p.seo?.title || name,
      description: p.seo?.description ?? (p.short_description || null),
      image: p.seo?.image ?? image,
    },
    features: content?.features ?? DEFAULT_FEATURES,
    clinicalNote: content?.clinicalTrial ?? "",
  };
}

/** Every product listed on the website. Throws if the API can't be reached. */
export async function getCatalog(): Promise<Therapy[]> {
  const raw = await fetchProducts();
  return raw.filter((p) => p && p.status !== "inactive").map(toTherapy);
}

/** For site chrome (nav, footer): never breaks a page if the API is down. */
export async function getCatalogSafe(): Promise<Therapy[]> {
  try {
    return await getCatalog();
  } catch {
    return [];
  }
}

export function findTherapy(list: Therapy[], slug: string): Therapy | undefined {
  return list.find((t) => t.slug === slug);
}

/** Old local addresses such as /treatments/semaglutide map to the product's real slug. */
export function findLegacyTherapy(list: Therapy[], legacy: string): Therapy | undefined {
  return list.find((t) => t.artKey === legacy);
}

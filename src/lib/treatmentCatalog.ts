/**
 * Presentation helpers for treatments (vial art, category copy).
 * The product list itself, names and prices come from the VCO API: see lib/vco/catalog.ts.
 */

export const WEIGHT_CATEGORY = {
  id: "weight-management",
  title: "Weight Management",
  subtitle:
    "Clinician-guided injectable weight-management programs with one clear monthly price.",
  tag: "WEIGHT MANAGEMENT",
  tone: "wl",
  blurb: "Licensed provider review · Standard shipping included · RX only if prescribed.",
};

export function getTherapyVialImage(slug: string, variant: "hero" | "thumb" = "hero"): string {
  const suffix = variant === "thumb" ? "-thumb" : "";
  return `/images/vials/${slug}${suffix}.png`;
}

/** Scriptful product art — drug name on label, no site logo */
export const SCRIPTFUL_VIAL_IMAGES = {
  semaglutide: {
    hero: getTherapyVialImage("semaglutide"),
    thumb: getTherapyVialImage("semaglutide", "thumb"),
  },
  tirzepatide: {
    hero: getTherapyVialImage("tirzepatide"),
    thumb: getTherapyVialImage("tirzepatide", "thumb"),
  },
} as const;

export function getCategoryMeta(id: string) {
  if (id === "weight-management" || id === "weight-loss") {
    return {
      image: SCRIPTFUL_VIAL_IMAGES.semaglutide.hero,
      shortLabel: WEIGHT_CATEGORY.title,
      tag: WEIGHT_CATEGORY.tag,
      tone: WEIGHT_CATEGORY.tone,
      blurb: WEIGHT_CATEGORY.blurb,
    };
  }
  return {
    image: SCRIPTFUL_VIAL_IMAGES.tirzepatide.hero,
    shortLabel: "Weight Management",
    tag: "WEIGHT MANAGEMENT",
    tone: "wl",
    blurb: WEIGHT_CATEGORY.blurb,
  };
}

export type ProductImagePair = { primary: string; secondary: string };

/** Vial-only stage — no pack hover secondary */
export function getTherapyStagePair(slug: string): ProductImagePair {
  const path = getTherapyVialImage(slug);
  return { primary: path, secondary: path };
}

export function getTherapyPackPair(slug: string): ProductImagePair {
  return getTherapyStagePair(slug);
}

export function getTherapyImage(slug: string) {
  return getTherapyStagePair(slug).primary;
}

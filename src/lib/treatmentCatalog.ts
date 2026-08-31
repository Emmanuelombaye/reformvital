/** Weight-management treatment catalog — Scriptful-style vial product presentation */

export type TherapyProduct = {
  slug: string;
  name: string;
  desc: string;
  price: string;
  concentration: string;
  form: string;
  capColor: "teal" | "navy";
};

export const WEIGHT_TREATMENTS: TherapyProduct[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    desc: "A clinician-guided weight-management program built around your history, not a one-size plan.",
    price: "$149/mo",
    concentration: "2.5 mg/mL",
    form: "Injectable solution",
    capColor: "teal",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    desc: "A dual-pathway weight-management program for people reviewed and approved by a licensed clinician.",
    price: "$249/mo",
    concentration: "5 mg/mL",
    form: "Injectable solution",
    capColor: "navy",
  },
];

export const WEIGHT_CATEGORY = {
  id: "weight-management",
  title: "Weight Management",
  subtitle:
    "Clinician-guided injectable weight-management programs with one clear monthly price.",
  tag: "WEIGHT MANAGEMENT",
  tone: "wl",
  blurb: "Licensed provider review · Standard shipping included · RX only if prescribed.",
};

export function getTherapy(slug: string): TherapyProduct | undefined {
  return WEIGHT_TREATMENTS.find((t) => t.slug === slug);
}

export function getTherapySlugs(): string[] {
  return WEIGHT_TREATMENTS.map((t) => t.slug);
}

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

/** @deprecated — only weight treatments remain */
export const THERAPY_VIAL_MAP: Record<string, string> = Object.fromEntries(
  WEIGHT_TREATMENTS.map((t) => [t.slug, getTherapyVialImage(t.slug)]),
);

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

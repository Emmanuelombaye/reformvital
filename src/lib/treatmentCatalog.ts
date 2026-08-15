/** Shared Reform Vital treatment catalog helpers.
 * Category browse = client lifestyle.
 * Protocol cards = MensRx pack A/B pairs + PeakHealth dual-image hover fade.
 * Homepage stage = Yucca-style vial presentation with pack secondary on hover.
 */

/** Clean vial art for Yucca-style product stages */
export const THERAPY_VIAL_MAP: Record<string, string> = {
  semaglutide: "/images/vial-glp1.webp",
  tirzepatide: "/images/vial-glp1.webp",
  retatrutide: "/images/vial-glp1.webp",
  trt: "/images/vial-trt.webp",
  "womens-hormones": "/images/vial-trt.webp",
  "hcg-enclomiphene": "/images/packs/enclomiphene-a.webp",
  sermorelin: "/images/vial-sermorelin.webp",
  tesamorelin: "/images/vial-sermorelin.webp",
  "cjc-ipamorelin": "/images/vial-sermorelin.webp",
  "bpc-157": "/images/vial-bpc.webp",
  "tb-500": "/images/vial-bpc.webp",
  kpv: "/images/vial-bpc.webp",
  "nad-plus": "/images/vial-nad.webp",
  "mots-c": "/images/vial-nad.webp",
  "ghk-cu": "/images/vial-nad.webp",
  semax: "/images/vial-neuropeptide.webp",
  selank: "/images/vial-neuropeptide.webp",
  "pt-141": "/images/vial-pt141.webp",
  tadalafil: "/images/packs/tadalafil-a.webp",
  "hair-restoration": "/images/vial-hair.webp",
};

export const CATEGORY_META: Record<
  string,
  { image: string; shortLabel: string; tag: string; tone: string; blurb: string }
> = {
  "weight-loss": {
    image: "/images/featured-metabolic.webp",
    shortLabel: "Weight Loss",
    tag: "MEDICAL WEIGHT LOSS",
    tone: "wl",
    blurb: "GLP-1 pathways reviewed by licensed providers — available only if prescribed.",
  },
  hormones: {
    image: "/images/lifestyle-morning.webp",
    shortLabel: "Hormones",
    tag: "HORMONE HEALTH",
    tone: "hr",
    blurb: "TRT and endocrine optimization with lab-guided dosing.",
  },
  "growth-hormone": {
    image: "/images/about-longevity.webp",
    shortLabel: "Growth Hormone",
    tag: "GH OPTIMIZATION",
    tone: "gh",
    blurb: "Secretagogue protocols for recovery, sleep, and body composition.",
  },
  recovery: {
    image: "/images/resource-recovery.webp",
    shortLabel: "Recovery",
    tag: "TISSUE REPAIR",
    tone: "rc",
    blurb: "Regenerative peptides for tendons, gut integrity, and repair.",
  },
  longevity: {
    image: "/images/member-renew.webp",
    shortLabel: "Longevity",
    tag: "HEALTHY AGING",
    tone: "lg",
    blurb: "Cellular energy, NAD+, and healthy-aging support.",
  },
  cognitive: {
    image: "/images/lifestyle-education.webp",
    shortLabel: "Cognitive",
    tag: "FOCUS & BDNF",
    tone: "cg",
    blurb: "Neuropeptide pathways for focus, calm, and mental clarity.",
  },
  "sexual-wellness": {
    image: "/images/lifestyle-toast.webp",
    shortLabel: "Sexual Wellness",
    tag: "VITALITY",
    tone: "sx",
    blurb: "Discreet performance and vitality support when clinically appropriate.",
  },
  hair: {
    image: "/images/1.webp",
    shortLabel: "Hair",
    tag: "HAIR RESTORATION",
    tone: "hr2",
    blurb: "Prescription topicals and peptide protocols that fit your routine.",
  },
  preventive: {
    image: "/images/why-evidence.webp",
    shortLabel: "Preventive",
    tag: "LABS & WELLNESS",
    tone: "pv",
    blurb: "Advanced labs, tracking, and preventive wellness partnerships.",
  },
};

export type ProductImagePair = { primary: string; secondary: string };

/** MensRx-style pack pairs (A = bottle/box alone, B = pack + blister/vial kit) */
export const THERAPY_PACK_PAIRS: Record<string, ProductImagePair> = {
  semaglutide: {
    primary: "/images/packs/glp1-a.webp",
    secondary: "/images/packs/glp1-b.webp",
  },
  tirzepatide: {
    primary: "/images/packs/tirz-a.webp",
    secondary: "/images/packs/tirz-b.webp",
  },
  retatrutide: {
    primary: "/images/packs/glp1-a.webp",
    secondary: "/images/packs/glp1-b.webp",
  },
  trt: {
    primary: "/images/packs/trt-a.webp",
    secondary: "/images/packs/trt-b.webp",
  },
  "womens-hormones": {
    primary: "/images/packs/enclomiphene-a.webp",
    secondary: "/images/packs/enclomiphene-b.webp",
  },
  "hcg-enclomiphene": {
    primary: "/images/packs/enclomiphene-a.webp",
    secondary: "/images/packs/enclomiphene-b.webp",
  },
  sermorelin: {
    primary: "/images/packs/serm-a.webp",
    secondary: "/images/packs/serm-b.webp",
  },
  tesamorelin: {
    primary: "/images/packs/serm-a.webp",
    secondary: "/images/packs/serm-b.webp",
  },
  "cjc-ipamorelin": {
    primary: "/images/packs/serm-a.webp",
    secondary: "/images/packs/serm-b.webp",
  },
  "bpc-157": {
    primary: "/images/packs/bpc-a.webp",
    secondary: "/images/packs/bpc-b.webp",
  },
  "tb-500": {
    primary: "/images/packs/bpc-a.webp",
    secondary: "/images/packs/bpc-b.webp",
  },
  kpv: {
    primary: "/images/packs/bpc-a.webp",
    secondary: "/images/packs/bpc-b.webp",
  },
  "nad-plus": {
    primary: "/images/packs/nad-a.webp",
    secondary: "/images/packs/nad-b.webp",
  },
  "mots-c": {
    primary: "/images/packs/nad-a.webp",
    secondary: "/images/packs/nad-b.webp",
  },
  "ghk-cu": {
    primary: "/images/packs/nad-a.webp",
    secondary: "/images/packs/nad-b.webp",
  },
  semax: {
    primary: "/images/vial-neuropeptide.webp",
    secondary: "/images/packs/nad-b.webp",
  },
  selank: {
    primary: "/images/vial-neuropeptide.webp",
    secondary: "/images/lifestyle-mindfulness.webp",
  },
  "pt-141": {
    primary: "/images/packs/tadalafil-a.webp",
    secondary: "/images/packs/tadalafil-b.webp",
  },
  tadalafil: {
    primary: "/images/packs/tadalafil-a.webp",
    secondary: "/images/packs/tadalafil-b.webp",
  },
  "hair-restoration": {
    primary: "/images/packs/hair-a.webp",
    secondary: "/images/packs/hair-b.webp",
  },
  "metabolic-panel": {
    primary: "/images/why-evidence.webp",
    secondary: "/images/portal-performance.webp",
  },
  "preventive-wellness": {
    primary: "/images/longevity_nad.webp",
    secondary: "/images/about-longevity.webp",
  },
  "body-composition": {
    primary: "/images/portal-performance.webp",
    secondary: "/images/featured-metabolic.webp",
  },
};

/** @deprecated single path — prefer getTherapyPackPair */
export const THERAPY_IMAGE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(THERAPY_PACK_PAIRS).map(([slug, pair]) => [slug, pair.primary]),
);

export function getCategoryMeta(id: string) {
  return (
    CATEGORY_META[id] || {
      image: "/images/featured-metabolic.webp",
      shortLabel: "Care",
      tag: "CARE PROGRAM",
      tone: "wl",
      blurb: "Physician-guided protocols personalized to your goals.",
    }
  );
}

export function getTherapyPackPair(slug: string): ProductImagePair {
  return (
    THERAPY_PACK_PAIRS[slug] || {
      primary: "/images/packs/glp1-a.webp",
      secondary: "/images/packs/glp1-b.webp",
    }
  );
}

/** Yucca homepage stage: vial primary, pack secondary (PeakHealth hover fade) */
export function getTherapyStagePair(slug: string): ProductImagePair {
  const pack = getTherapyPackPair(slug);
  const vial = THERAPY_VIAL_MAP[slug];
  if (vial) {
    return { primary: vial, secondary: pack.primary };
  }
  return pack;
}

export function getTherapyImage(slug: string, fallback?: string) {
  return getTherapyPackPair(slug).primary || fallback || "/images/packs/glp1-a.webp";
}

/** Shared Reform Vital treatment catalog helpers.
 * Category browse = client lifestyle.
 * Protocol cards = MensRx pack A/B pairs + PeakHealth dual-image hover fade.
 * Homepage stage = Yucca-style vial presentation with pack secondary on hover.
 */

/** Clean vial art for Yucca-style product stages */
export const THERAPY_VIAL_MAP: Record<string, string> = {
  semaglutide: "/images/vial-glp1.png",
  tirzepatide: "/images/vial-glp1.png",
  retatrutide: "/images/vial-glp1.png",
  trt: "/images/vial-trt.png",
  "womens-hormones": "/images/vial-trt.png",
  "hcg-enclomiphene": "/images/packs/enclomiphene-a.png",
  sermorelin: "/images/vial-sermorelin.png",
  tesamorelin: "/images/vial-sermorelin.png",
  "cjc-ipamorelin": "/images/vial-sermorelin.png",
  "bpc-157": "/images/vial-bpc.png",
  "tb-500": "/images/vial-bpc.png",
  kpv: "/images/vial-bpc.png",
  "nad-plus": "/images/vial-nad.png",
  "mots-c": "/images/vial-nad.png",
  "ghk-cu": "/images/vial-nad.png",
  semax: "/images/vial-neuropeptide.png",
  selank: "/images/vial-neuropeptide.png",
  "pt-141": "/images/vial-pt141.png",
  tadalafil: "/images/packs/tadalafil-a.png",
  "hair-restoration": "/images/vial-hair.png",
};

export const CATEGORY_META: Record<
  string,
  { image: string; shortLabel: string; tag: string; tone: string; blurb: string }
> = {
  "weight-loss": {
    image: "/images/featured-metabolic.png",
    shortLabel: "Weight Loss",
    tag: "MEDICAL WEIGHT LOSS",
    tone: "wl",
    blurb: "GLP-1 pathways reviewed by licensed providers — available only if prescribed.",
  },
  hormones: {
    image: "/images/lifestyle-morning.png",
    shortLabel: "Hormones",
    tag: "HORMONE HEALTH",
    tone: "hr",
    blurb: "TRT and endocrine optimization with lab-guided dosing.",
  },
  "growth-hormone": {
    image: "/images/about-longevity.png",
    shortLabel: "Growth Hormone",
    tag: "GH OPTIMIZATION",
    tone: "gh",
    blurb: "Secretagogue protocols for recovery, sleep, and body composition.",
  },
  recovery: {
    image: "/images/resource-recovery.jpg",
    shortLabel: "Recovery",
    tag: "TISSUE REPAIR",
    tone: "rc",
    blurb: "Regenerative peptides for tendons, gut integrity, and repair.",
  },
  longevity: {
    image: "/images/member-renew.png",
    shortLabel: "Longevity",
    tag: "HEALTHY AGING",
    tone: "lg",
    blurb: "Cellular energy, NAD+, and healthy-aging support.",
  },
  cognitive: {
    image: "/images/lifestyle-education.png",
    shortLabel: "Cognitive",
    tag: "FOCUS & BDNF",
    tone: "cg",
    blurb: "Neuropeptide pathways for focus, calm, and mental clarity.",
  },
  "sexual-wellness": {
    image: "/images/lifestyle-toast.png",
    shortLabel: "Sexual Wellness",
    tag: "VITALITY",
    tone: "sx",
    blurb: "Discreet performance and vitality support when clinically appropriate.",
  },
  hair: {
    image: "/images/1.png",
    shortLabel: "Hair",
    tag: "HAIR RESTORATION",
    tone: "hr2",
    blurb: "Prescription topicals and peptide protocols that fit your routine.",
  },
  preventive: {
    image: "/images/why-evidence.png",
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
    primary: "/images/packs/glp1-a.png",
    secondary: "/images/packs/glp1-b.png",
  },
  tirzepatide: {
    primary: "/images/packs/tirz-a.png",
    secondary: "/images/packs/tirz-b.png",
  },
  retatrutide: {
    primary: "/images/packs/glp1-a.png",
    secondary: "/images/packs/glp1-b.png",
  },
  trt: {
    primary: "/images/packs/trt-a.png",
    secondary: "/images/packs/trt-b.png",
  },
  "womens-hormones": {
    primary: "/images/packs/enclomiphene-a.png",
    secondary: "/images/packs/enclomiphene-b.png",
  },
  "hcg-enclomiphene": {
    primary: "/images/packs/enclomiphene-a.png",
    secondary: "/images/packs/enclomiphene-b.png",
  },
  sermorelin: {
    primary: "/images/packs/serm-a.png",
    secondary: "/images/packs/serm-b.png",
  },
  tesamorelin: {
    primary: "/images/packs/serm-a.png",
    secondary: "/images/packs/serm-b.png",
  },
  "cjc-ipamorelin": {
    primary: "/images/packs/serm-a.png",
    secondary: "/images/packs/serm-b.png",
  },
  "bpc-157": {
    primary: "/images/packs/bpc-a.png",
    secondary: "/images/packs/bpc-b.png",
  },
  "tb-500": {
    primary: "/images/packs/bpc-a.png",
    secondary: "/images/packs/bpc-b.png",
  },
  kpv: {
    primary: "/images/packs/bpc-a.png",
    secondary: "/images/packs/bpc-b.png",
  },
  "nad-plus": {
    primary: "/images/packs/nad-a.png",
    secondary: "/images/packs/nad-b.png",
  },
  "mots-c": {
    primary: "/images/packs/nad-a.png",
    secondary: "/images/packs/nad-b.png",
  },
  "ghk-cu": {
    primary: "/images/packs/nad-a.png",
    secondary: "/images/packs/nad-b.png",
  },
  semax: {
    primary: "/images/vial-neuropeptide.png",
    secondary: "/images/packs/nad-b.png",
  },
  selank: {
    primary: "/images/vial-neuropeptide.png",
    secondary: "/images/lifestyle-mindfulness.png",
  },
  "pt-141": {
    primary: "/images/packs/tadalafil-a.png",
    secondary: "/images/packs/tadalafil-b.png",
  },
  tadalafil: {
    primary: "/images/packs/tadalafil-a.png",
    secondary: "/images/packs/tadalafil-b.png",
  },
  "hair-restoration": {
    primary: "/images/packs/hair-a.png",
    secondary: "/images/packs/hair-b.png",
  },
  "metabolic-panel": {
    primary: "/images/why-evidence.png",
    secondary: "/images/portal-performance.png",
  },
  "preventive-wellness": {
    primary: "/images/longevity_nad.png",
    secondary: "/images/about-longevity.png",
  },
  "body-composition": {
    primary: "/images/portal-performance.png",
    secondary: "/images/featured-metabolic.png",
  },
};

/** @deprecated single path — prefer getTherapyPackPair */
export const THERAPY_IMAGE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(THERAPY_PACK_PAIRS).map(([slug, pair]) => [slug, pair.primary]),
);

export function getCategoryMeta(id: string) {
  return (
    CATEGORY_META[id] || {
      image: "/images/featured-metabolic.png",
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
      primary: "/images/packs/glp1-a.png",
      secondary: "/images/packs/glp1-b.png",
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
  return getTherapyPackPair(slug).primary || fallback || "/images/packs/glp1-a.png";
}

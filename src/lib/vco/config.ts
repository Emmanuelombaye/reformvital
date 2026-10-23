/**
 * VirtualClinicOS Brand Storefront — public config only (no API keys).
 * Docs: https://portal.virtualclinicos.com/api-docs#storefront-auth
 */

export const VCO_API_URL = (
  process.env.NEXT_PUBLIC_VCO_API_URL || "https://portal.virtualclinicos.com"
).replace(/\/$/, "");

/** Reformvital brand ID — safe in frontend / build env */
export const VCO_BRAND_ID =
  process.env.NEXT_PUBLIC_VCO_BRAND_ID || "a04fc6e8-0834-4a47-9c38-f89349d0cd23";

import { brandConfig } from "@/brand.config";

export default function OfferBanner() {
  if (!brandConfig.offerBanner.enabled) return null;

  return (
    <aside className="promo" aria-label="Exclusive Telehealth Offer">
      <div className="container promo-inner">
        <div style={{ display: "inline-flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.4rem", lineHeight: 1.4 }}>
          <strong style={{ color: "var(--accent-cyan)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
            {brandConfig.offerBanner.eyebrow}:
          </strong>
          <span>Use code <strong>{brandConfig.offerBanner.code}</strong> — {brandConfig.offerBanner.subtext}</span>
        </div>
        <a
          href={brandConfig.offerBanner.ctaLink}
          style={{ whiteSpace: "nowrap", flexShrink: 0 }}
        >
          {brandConfig.offerBanner.ctaText} →
        </a>
      </div>
    </aside>
  );
}

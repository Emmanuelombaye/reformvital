import { brandConfig } from "@/brand.config";

export default function OfferBanner() {
  if (!brandConfig.offerBanner.enabled) return null;

  return (
    <aside className="offer-banner" aria-label="Exclusive Offer">
      <div className="container offer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="badge badge-orange" style={{ textTransform: "none", fontSize: "0.78rem" }}>
            {brandConfig.offerBanner.eyebrow}
          </span>
          <span style={{ fontWeight: 600 }}>
            {brandConfig.offerBanner.subtext}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div className="offer-coupon-card">
            <span>Code:</span>
            <span>{brandConfig.offerBanner.code}</span>
            <span className="offer-price-stamp">{brandConfig.offerBanner.stamp}</span>
          </div>

          <a
            href={brandConfig.offerBanner.ctaLink}
            style={{ fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {brandConfig.offerBanner.ctaText} →
          </a>
        </div>
      </div>
    </aside>
  );
}

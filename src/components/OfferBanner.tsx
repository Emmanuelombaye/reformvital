import { brandConfig } from "@/brand.config";

export default function OfferBanner() {
  if (!brandConfig.offerBanner.enabled) return null;

  return (
    <aside className="rv-promo" aria-label="Exclusive Telehealth Offer">
      <div className="container rv-promo-inner">
        <p className="rv-promo-copy">
          <span className="rv-promo-eyebrow">{brandConfig.offerBanner.eyebrow}</span>
          <span className="rv-promo-sep" aria-hidden>
            ·
          </span>
          <span>
            Use code <strong className="rv-promo-code">{brandConfig.offerBanner.code}</strong>
            <span className="rv-promo-sub"> — {brandConfig.offerBanner.subtext}</span>
          </span>
        </p>
        <a href={brandConfig.offerBanner.ctaLink} className="rv-promo-cta">
          {brandConfig.offerBanner.ctaText}
          <span aria-hidden>→</span>
        </a>
      </div>
    </aside>
  );
}

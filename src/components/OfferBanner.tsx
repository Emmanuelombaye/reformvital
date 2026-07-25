import { brandConfig } from "@/brand.config";

export default function OfferBanner() {
  if (!brandConfig.offerBanner.enabled) return null;

  return (
    <aside className="promo" aria-label="Exclusive Offer">
      <div className="container promo-inner">
        <div>
          <strong>{brandConfig.offerBanner.eyebrow}: </strong>
          <span>Use code <strong>{brandConfig.offerBanner.code}</strong> — {brandConfig.offerBanner.subtext}</span>
        </div>
        <a href={brandConfig.offerBanner.ctaLink}>
          {brandConfig.offerBanner.ctaText} →
        </a>
      </div>
    </aside>
  );
}

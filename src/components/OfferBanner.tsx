import { brandConfig } from "@/brand.config";

export default function OfferBanner() {
  if (!brandConfig.offerBanner.enabled) return null;
  const { offerBanner } = brandConfig;

  return (
    <aside className="rv-script-notice" aria-label="Program pricing notice">
      <div className="container rv-script-notice__inner">
        <p>
          <strong>{offerBanner.eyebrow}.</strong> {offerBanner.subtext}
        </p>
        <a href={offerBanner.ctaLink} className="rv-script-notice__link">
          {offerBanner.ctaText} →
        </a>
      </div>
    </aside>
  );
}

import Image from "next/image";

const BADGE_IMAGES = {
  usaPharmacy: "/images/footer-badges/usa-pharmacy.png",
  hipaa: "/images/footer-badges/hipaa.png",
  providerNetwork: "/images/footer-badges/provider-network.png",
} as const;

const TRUST_BADGE_CSS = `
.brand-footer-trust {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(1.25rem, 3vw, 2.5rem) clamp(1.75rem, 4vw, 3.25rem);
  margin: 0;
  padding: clamp(1.5rem, 3vw, 2rem) 0;
}
.brand-footer-trust--light {
  border-top-color: rgba(10, 31, 61, 0.12);
}
.brand-footer-trust__item {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  color: inherit;
  text-decoration: none;
}
.brand-footer-trust__icon {
  display: block;
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.28),
    inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}
.brand-footer-trust__icon img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.brand-footer-trust__copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.brand-footer-trust__kicker {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}
.brand-footer-trust--light .brand-footer-trust__kicker,
.brand-footer-trust__item--light .brand-footer-trust__kicker {
  color: rgba(10, 31, 61, 0.5);
}
.brand-footer-trust__title {
  font-size: 14px;
  font-weight: 650;
  line-height: 1.25;
  color: #fff;
}
.brand-footer-trust--light .brand-footer-trust__title,
.brand-footer-trust__item--light .brand-footer-trust__title {
  color: #0a1f3d;
}
.brand-footer-trust__sub {
  display: block;
  font-weight: 500;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.88);
}
.brand-footer-trust--light .brand-footer-trust__sub,
.brand-footer-trust__item--light .brand-footer-trust__sub {
  color: rgba(10, 31, 61, 0.72);
}
.brand-footer-trust__item--link:hover .brand-footer-trust__title {
  text-decoration: underline;
  text-underline-offset: 3px;
}
@media (max-width: 720px) {
  .brand-footer-trust {
    flex-direction: column;
    align-items: center;
    text-align: left;
    gap: 1.35rem;
  }
  .brand-footer-trust__item {
    width: min(100%, 20rem);
  }
  .brand-footer-trust__title {
    font-size: 13px;
  }
}
`;

type FooterTrustBadgesProps = {
  hipaaHref?: string;
  providerHref?: string;
  tone?: "dark" | "light";
  layout?: "row" | "items";
};

function TrustBadgeIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="brand-footer-trust__icon" aria-hidden="true">
      <Image src={src} alt={alt} width={104} height={104} sizes="52px" quality={60} loading="lazy" />
    </span>
  );
}

function TrustItems({
  hipaaHref,
  providerHref,
  tone,
}: {
  hipaaHref?: string;
  providerHref?: string;
  tone: "dark" | "light";
}) {
  const itemClass = `brand-footer-trust__item${tone === "light" ? " brand-footer-trust__item--light" : ""}`;

  const hipaaBody = (
    <>
      <TrustBadgeIcon src={BADGE_IMAGES.hipaa} alt="" />
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">Data protected</span>
        <span className="brand-footer-trust__title">
          HIPAA <span className="brand-footer-trust__sub">Compliant</span>
        </span>
      </span>
    </>
  );

  const providerBody = (
    <>
      <TrustBadgeIcon src={BADGE_IMAGES.providerNetwork} alt="" />
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">Care delivered by</span>
        <span className="brand-footer-trust__title">
          Licensed <span className="brand-footer-trust__sub">Provider Network</span>
        </span>
      </span>
    </>
  );

  return (
    <>
      <div className={itemClass}>
        <TrustBadgeIcon src={BADGE_IMAGES.usaPharmacy} alt="" />
        <span className="brand-footer-trust__copy">
          <span className="brand-footer-trust__kicker">Compounded by</span>
          <span className="brand-footer-trust__title">Licensed Pharmacies in the USA</span>
        </span>
      </div>

      {hipaaHref ? (
        <a href={hipaaHref} className={`${itemClass} brand-footer-trust__item--link`}>
          {hipaaBody}
        </a>
      ) : (
        <div className={itemClass}>{hipaaBody}</div>
      )}

      {providerHref ? (
        <a href={providerHref} className={`${itemClass} brand-footer-trust__item--link`}>
          {providerBody}
        </a>
      ) : (
        <div className={itemClass}>{providerBody}</div>
      )}
    </>
  );
}

/** Footer compliance marks: US pharmacies, HIPAA, and provider network. */
export function FooterTrustBadges({
  hipaaHref = "/hipaa-notice",
  providerHref = "/provider-network",
  tone = "dark",
  layout = "row",
}: FooterTrustBadgesProps) {
  const items = (
    <TrustItems hipaaHref={hipaaHref} providerHref={providerHref} tone={tone} />
  );

  return (
    <>
      <style>{TRUST_BADGE_CSS}</style>
      {layout === "items" ? (
        items
      ) : (
        <div className={`brand-footer-trust brand-footer-trust--${tone}`} aria-label="Compliance">
          {items}
        </div>
      )}
    </>
  );
}

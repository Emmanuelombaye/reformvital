"use client";

import DualProductImage from "@/components/DualProductImage";
import { getTherapyStagePair } from "@/lib/treatmentCatalog";

const PLAN_INCLUDES = [
  "Free Medical Consultation",
  "Free Expedited Shipping",
  "24/7 Dedicated Support",
  "Access to Patient Portal",
];

type Therapy = {
  slug: string;
  name: string;
  desc: string;
  price: string;
};

type Props = {
  tone: string;
  stageTitle: string;
  tag: string;
  blurb: string;
  therapies: Therapy[];
  selectedSlug: string;
  onSelectTherapy: (slug: string) => void;
  animKey?: string | number;
};

export default function TreatmentExploreHero({
  tone,
  stageTitle,
  tag,
  blurb,
  therapies,
  selectedSlug,
  onSelectTherapy,
  animKey = 0,
}: Props) {
  const selected = therapies.find((t) => t.slug === selectedSlug) || therapies[0];
  const stage = selected
    ? getTherapyStagePair(selected.slug)
    : { primary: "/images/vial-glp1.png", secondary: "/images/packs/glp1-a.png" };
  const priceLabel = selected?.price?.replace(/\/mo$/, "") || "$149";
  const priceIsMo = Boolean(selected?.price?.includes("/mo"));

  return (
    <div key={String(animKey)} className="rv-yx-explore" data-animate="peak-fade">
      <article className="rv-yx-stage" data-tone={tone}>
        <h3 className="rv-yx-stage__title">{stageTitle}</h3>

        <div className="rv-yx-stage__product">
          <DualProductImage
            primary={stage.primary}
            secondary={stage.secondary}
            alt={selected?.name || stageTitle}
          />
        </div>

        <div
          className="rv-yx-stage__burst"
          aria-label={`From ${priceLabel}${priceIsMo ? " per month" : ""}`}
        >
          <span className="rv-yx-stage__burst-inner">
            <strong>FROM</strong>
            <em>{priceLabel}</em>
            {priceIsMo && <span>/mo</span>}
          </span>
        </div>

        <div className="rv-yx-stage__meta">
          <p className="rv-yx-stage__proof">Licensed U.S. provider review required</p>
          <div className="rv-yx-stage__chips">
            <span className="rv-yx-stage__chip">{tag}</span>
            <span className="rv-yx-stage__stock">
              <i className="rv-yx-stage__dot" aria-hidden />
              Available
            </span>
          </div>
        </div>
      </article>

      <div className="rv-yx-side">
        <p className="rv-yx-side__blurb">{blurb}</p>

        {therapies.length > 0 && (
          <div className="rv-yx-side__products" role="radiogroup" aria-label="Choose protocol">
            {therapies.map((t) => {
              const active = selected?.slug === t.slug;
              const thumb = getTherapyStagePair(t.slug).primary;
              return (
                <button
                  key={t.slug}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  className={`rv-yx-side__product${active ? " is-active" : ""}`}
                  onClick={() => onSelectTherapy(t.slug)}
                >
                  <span
                    className="rv-yx-side__thumb"
                    style={{ backgroundImage: `url(${thumb})` }}
                    aria-hidden
                  />
                  <span className="rv-yx-side__product-copy">
                    <strong>{t.name}</strong>
                    <span>{t.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>
        )}

        <div className="rv-yx-side__includes">
          <div className="rv-yx-side__plans">
            <p className="rv-yx-side__plans-label">All Plans Include:</p>
            <ul className="rv-yx-side__plan-list">
              {PLAN_INCLUDES.map((item) => (
                <li key={item}>
                  <span className="rv-yx-side__check" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-yx-side__guarantee">
            <div className="rv-yx-side__guarantee-head">
              <span className="rv-yx-side__brand">Reform Vital</span>
              <span className="rv-yx-side__rule" aria-hidden />
              <span className="rv-yx-side__guarantee-word">Commitment</span>
            </div>
            <p>
              Provider-guided care, medications from U.S. licensed pharmacies, and only charged
              if treatment is prescribed — with flexibility to change or cancel anytime.
            </p>
          </div>
        </div>

        <div className="rv-yx-side__pricing">
          <div className="rv-yx-side__price-row">
            <span>Starting as low as:</span>
            <strong>
              {priceLabel}
              {priceIsMo && <em>/mo</em>}
            </strong>
          </div>
          <a href="/start" className="rv-yx-side__cta">
            See if I qualify
          </a>
          {selected && (
            <a href={`/treatments/${selected.slug}`} className="rv-yx-side__link">
              Learn more about {selected.name} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

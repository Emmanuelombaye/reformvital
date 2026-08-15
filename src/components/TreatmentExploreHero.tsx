"use client";

import DualProductImage from "@/components/DualProductImage";
import Image from "next/image";
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
    : { primary: "/images/vial-glp1.webp", secondary: "/images/packs/glp1-a.webp" };
  const rawPrice = selected?.price || "$149";
  const priceIsMo = /\/mo$/i.test(rawPrice);
  const priceLabel = rawPrice.replace(/\/mo$/i, "");
  const isCustom = /custom/i.test(rawPrice);

  return (
    <div key={String(animKey)} className="rv-tx-panel" data-animate="peak-fade">
      {/* Yucca media card */}
      <article className="rv-tx-media" data-tone={tone}>
        <div className="rv-tx-media__top">
          <p className="rv-tx-media__eyebrow">Licensed U.S. provider review</p>
          <div className="rv-tx-media__pills">
            <span>{tag.replace(/_/g, " ")}</span>
            <span className="is-stock">Available</span>
          </div>
        </div>

        <h3 className="rv-tx-media__title">{stageTitle}</h3>

        <div className="rv-tx-media__art">
          <DualProductImage
            primary={stage.primary}
            secondary={stage.secondary}
            alt={selected?.name || stageTitle}
          />
        </div>

        <div
          className="rv-tx-media__badge"
          aria-label={isCustom ? "Custom pricing" : `From ${priceLabel}${priceIsMo ? " per month" : ""}`}
        >
          {isCustom ? (
            <>
              <strong>ASK</strong>
              <em>Us</em>
            </>
          ) : (
            <>
              <strong>FROM</strong>
              <em>{priceLabel}</em>
              {priceIsMo && <span>/mo</span>}
            </>
          )}
        </div>
      </article>

      {/* Yucca copy column */}
      <div className="rv-tx-copy">
        <p className="rv-tx-copy__desc">{blurb}</p>

        {therapies.length > 0 && (
          <div className="rv-tx-pickers" role="radiogroup" aria-label="Choose protocol">
            {therapies.map((t) => {
              const active = selected?.slug === t.slug;
              const thumb = getTherapyStagePair(t.slug).primary;
              return (
                <button
                  key={t.slug}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  className={`rv-tx-picker${active ? " is-active" : ""}`}
                  onClick={() => onSelectTherapy(t.slug)}
                >
                  <span className="rv-tx-picker__thumb">
                    <Image src={thumb} alt="" width={64} height={64} sizes="64px" quality={60} />
                  </span>
                  <span className="rv-tx-picker__text">
                    <strong>{t.name}</strong>
                    <em>{t.desc}</em>
                  </span>
                </button>
              );
            })}
          </div>
        )}

        <div className="rv-tx-includes">
          <p>All Plans Include:</p>
          <ul>
            {PLAN_INCLUDES.map((item) => (
              <li key={item}>
                <span aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rv-tx-guarantee">
          <div className="rv-tx-guarantee__mark" aria-hidden>
            RV
          </div>
          <p>
            Provider-guided care, medications from U.S. licensed pharmacies, and only charged if
            treatment is prescribed — with flexibility to change or cancel anytime.
          </p>
        </div>

        <div className="rv-tx-cta-row">
          <div className="rv-tx-cta-row__price">
            <span>{isCustom ? "Pricing:" : "Starting as low as:"}</span>
            <strong>
              {isCustom ? "Custom" : priceLabel}
              {!isCustom && priceIsMo && <em>/mo</em>}
            </strong>
          </div>
          <a href="/start" className="rv-tx-cta">
            See if I qualify →
          </a>
        </div>

        {selected && (
          <a href={`/treatments/${selected.slug}`} className="rv-tx-more">
            Learn more about {selected.name} →
          </a>
        )}
      </div>
    </div>
  );
}

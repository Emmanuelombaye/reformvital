"use client";

import TreatmentVial from "@/components/visuals/TreatmentVial";
import { brandConfig } from "@/brand.config";
import { WEIGHT_TREATMENTS, type TherapyProduct } from "@/lib/treatmentCatalog";

const PLAN_INCLUDES = [
  "Online licensed-provider review",
  "Secure medical intake after checkout",
  "Standard shipping included",
  "Ongoing program support by secure message",
];

type Props = {
  selectedSlug: string;
  onSelectTherapy: (slug: string) => void;
  animKey?: string | number;
};

export default function TreatmentExploreHero({
  selectedSlug,
  onSelectTherapy,
  animKey = 0,
}: Props) {
  const selected =
    WEIGHT_TREATMENTS.find((t) => t.slug === selectedSlug) || WEIGHT_TREATMENTS[0];
  const detail =
    brandConfig.treatmentDetails[
      selected.slug as keyof typeof brandConfig.treatmentDetails
    ];

  const rawPrice = selected.price;
  const priceIsMo = /\/mo$/i.test(rawPrice);
  const priceLabel = rawPrice.replace(/\/mo$/i, "");

  return (
    <div key={String(animKey)} className="rv-tx-panel rv-tx-panel--scriptful" data-animate="peak-fade">
      <article className="rv-tx-media rv-tx-media--scriptful" data-tone="wl">
        <div className="rv-tx-media__top">
          <p className="rv-tx-media__eyebrow">{selected.concentration}</p>
          <div className="rv-tx-media__pills">
            <span>{selected.form}</span>
            <span className="is-stock">RX ONLY</span>
          </div>
        </div>

        <h3 className="rv-tx-media__title">{selected.name} Program</h3>

        <div className="rv-tx-media__art rv-tx-media__art--vial">
          <TreatmentVial
            slug={selected.slug}
            name={selected.name}
            concentration={selected.concentration}
            form={selected.form}
            className="rv-tx-vial-hero"
            priority
          />
        </div>

        <div
          className="rv-tx-media__badge"
          aria-label={`${priceLabel}${priceIsMo ? " per month" : ""}`}
        >
          <strong>FROM</strong>
          <em>{priceLabel}</em>
          {priceIsMo && <span>/mo</span>}
        </div>
      </article>

      <div className="rv-tx-copy">
        <p className="rv-tx-copy__desc">{detail?.description || selected.desc}</p>

        <div className="rv-tx-pickers" role="radiogroup" aria-label="Choose treatment">
          {WEIGHT_TREATMENTS.map((t) => (
            <TreatmentPickerCard
              key={t.slug}
              therapy={t}
              active={selected.slug === t.slug}
              onSelect={() => onSelectTherapy(t.slug)}
            />
          ))}
        </div>

        <div className="rv-tx-includes">
          <p>All programs include:</p>
          <ul>
            {PLAN_INCLUDES.map((item) => (
              <li key={item}>
                <span aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="rv-tx-disclaimer">
          Purchasing a program does not guarantee that a prescription will be issued. A licensed
          clinician reviews your intake and may decline treatment. May be compounded — not
          FDA-approved.
        </p>

        <div className="rv-tx-cta-row">
          <div className="rv-tx-cta-row__price">
            <span>All-inclusive program price:</span>
            <strong>
              {priceLabel}
              {priceIsMo && <em>/mo</em>}
            </strong>
          </div>
          <a href="/start" className="rv-tx-cta">
            Select Program →
          </a>
        </div>

        <a href={`/treatments/${selected.slug}`} className="rv-tx-more">
          View {selected.name} program details →
        </a>
      </div>
    </div>
  );
}

function TreatmentPickerCard({
  therapy,
  active,
  onSelect,
}: {
  therapy: TherapyProduct;
  active: boolean;
  onSelect: () => void;
}) {
  const meta = WEIGHT_TREATMENTS.find((t) => t.slug === therapy.slug);

  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      className={`rv-tx-picker${active ? " is-active" : ""}`}
      onClick={onSelect}
    >
      <span className="rv-tx-picker__thumb">
        <TreatmentVial
          slug={therapy.slug}
          name={therapy.name}
          concentration={therapy.concentration}
          showSyringe
          className="rv-tx-vial-thumb"
        />
      </span>
      <span className="rv-tx-picker__text">
        <strong>{therapy.name}</strong>
        <em>{meta?.desc || therapy.desc}</em>
      </span>
    </button>
  );
}

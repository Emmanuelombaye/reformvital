"use client";

import TreatmentVial from "@/components/visuals/TreatmentVial";
import type { Therapy } from "@/lib/vco/catalog";

const PLAN_INCLUDES = [
  "Online licensed-provider review",
  "Secure medical intake after checkout",
  "Standard shipping included",
  "Ongoing program support by secure message",
];

type Props = {
  therapies: Therapy[];
  selectedSlug: string;
  onSelectTherapy: (slug: string) => void;
  animKey?: string | number;
};

export default function TreatmentExploreHero({
  therapies,
  selectedSlug,
  onSelectTherapy,
  animKey = 0,
}: Props) {
  const selected = therapies.find((t) => t.slug === selectedSlug) || therapies[0];

  if (!selected) {
    return (
      <div className="rv-tx-panel rv-tx-panel--scriptful">
        <div className="rv-tx-copy">
          <p className="rv-tx-copy__desc">Programs are coming soon.</p>
        </div>
      </div>
    );
  }

  const rawPrice = selected.priceLabel;
  const priceIsMo = /\/mo$/i.test(rawPrice);
  const priceLabel = rawPrice.replace(/\/mo$/i, "");

  return (
    <div key={String(animKey)} className="rv-tx-panel rv-tx-panel--scriptful" data-animate="peak-fade">
      <article className="rv-tx-media rv-tx-media--scriptful" data-tone="wl">
        <div className="rv-tx-media__top">
          <p className="rv-tx-media__eyebrow">{selected.concentration}</p>
          <div className="rv-tx-media__pills">
            {selected.form && <span>{selected.form}</span>}
            <span className="is-stock">RX ONLY</span>
          </div>
        </div>

        <h3 className="rv-tx-media__title">{selected.name}</h3>

        <div className="rv-tx-media__art rv-tx-media__art--vial">
          <TreatmentVial
            name={selected.name}
            concentration={selected.concentration}
            form={selected.form}
            imageUrl={selected.imageUrl}
            artKey={selected.artKey}
            className="rv-tx-vial-hero"
            priority
          />
        </div>

        {priceLabel && (
          <div
            className="rv-tx-media__badge"
            aria-label={`${priceLabel}${priceIsMo ? " per month" : ""}`}
          >
            <strong>FROM</strong>
            <em>{priceLabel}</em>
            {priceIsMo && <span>/mo</span>}
          </div>
        )}
      </article>

      <div className="rv-tx-copy">
        <p className="rv-tx-copy__desc">{selected.description || selected.desc}</p>

        <div className="rv-tx-pickers" role="radiogroup" aria-label="Choose treatment">
          {therapies.map((t) => (
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
          {priceLabel && (
            <div className="rv-tx-cta-row__price">
              <span>All-inclusive program price:</span>
              <strong>
                {priceLabel}
                {priceIsMo && <em>/mo</em>}
              </strong>
            </div>
          )}
          {selected.intakeUrl ? (
            <a href={selected.intakeUrl} className="rv-tx-cta">
              Select Program →
            </a>
          ) : (
            <span className="rv-tx-cta" aria-disabled="true">
              Coming soon
            </span>
          )}
        </div>

        <a href={`/treatments/${selected.slug}`} className="rv-tx-more">
          View {selected.name} details →
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
  therapy: Therapy;
  active: boolean;
  onSelect: () => void;
}) {
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
          name={therapy.name}
          concentration={therapy.concentration}
          imageUrl={therapy.imageUrl}
          artKey={therapy.artKey}
          showSyringe
          className="rv-tx-vial-thumb"
        />
      </span>
      <span className="rv-tx-picker__text">
        <strong>{therapy.name}</strong>
        <em>{therapy.desc}</em>
      </span>
    </button>
  );
}

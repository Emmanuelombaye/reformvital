"use client";

import { useState } from "react";
import TreatmentExploreHero from "@/components/TreatmentExploreHero";
import TreatmentVial from "@/components/visuals/TreatmentVial";
import { WEIGHT_CATEGORY } from "@/lib/treatmentCatalog";
import type { Therapy } from "@/lib/vco/catalog";

const EXPECT_WEEKS = [
  {
    tag: "After checkout",
    text: "Complete the secure medical intake. A licensed clinician reviews your history and goals.",
  },
  {
    tag: "If approved",
    text: "Your program ships with provider dosing guidance and ongoing secure messaging support.",
  },
  {
    tag: "Ongoing",
    text: "Follow-up is part of the monthly price. Your clinician may adjust or discontinue at any time.",
  },
];

export default function TreatmentsCatalog({ therapies }: { therapies: Therapy[] }) {
  const [therapySlug, setTherapySlug] = useState(therapies[0]?.slug ?? "");
  const [animKey, setAnimKey] = useState(0);

  const selected = therapies.find((t) => t.slug === therapySlug) || therapies[0];

  const selectTherapy = (slug: string) => {
    setTherapySlug(slug);
    setAnimKey((k) => k + 1);
  };

  return (
    <main className="rv-yx-catalog rv-yx-catalog--explore rv-yx-catalog--scriptful">
      <header className="rv-yx-catalog__intro" data-animate="peak-fade">
        <p className="eyebrow">PROGRAM CATALOG</p>
        <h1>
          Weight-management <em>treatment programs</em>
        </h1>
        <p>
          Clinician-guided programs with one all-inclusive price. Licensed provider review
          required — RX only if prescribed.
        </p>
      </header>

      {!selected ? (
        <section className="rv-yx-catalog__pane rv-yx-catalog__pane--explore" data-tone="wl">
          <p style={{ textAlign: "center" }}>Programs are coming soon.</p>
        </section>
      ) : (
        <section className="rv-yx-catalog__pane rv-yx-catalog__pane--explore" data-tone="wl">
          <TreatmentExploreHero
            therapies={therapies}
            selectedSlug={selected.slug}
            onSelectTherapy={selectTherapy}
            animKey={animKey}
          />

          <section className="rv-yx-protocol" aria-labelledby="rv-protocol-heading" data-animate="peak-fade">
            <div className="rv-yx-protocol__left">
              <h2 id="rv-protocol-heading">
                About the <em>{selected.name}</em> program
              </h2>
              <p>{selected.desc}</p>
              <div className="rv-yx-protocol__vials" aria-hidden>
                <TreatmentVial
                  name={selected.name}
                  concentration={selected.concentration}
                  form={selected.form}
                  imageUrl={selected.imageUrl}
                  artKey={selected.artKey}
                  className="rv-tx-vial-stage"
                />
              </div>
            </div>
            <div className="rv-yx-protocol__right">
              {selected.features.map((feature, i) => (
                <article key={feature} className="rv-yx-protocol-card" style={{ ["--i" as string]: i }}>
                  <span className="rv-yx-protocol-card__n" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{feature}</p>
                </article>
              ))}
              {selected.intakeUrl ? (
                <a href={selected.intakeUrl} className="rv-yx-side__cta rv-yx-protocol__cta">
                  Select Program
                </a>
              ) : (
                <span className="rv-yx-side__cta rv-yx-protocol__cta" aria-disabled="true">
                  Coming soon
                </span>
              )}
            </div>
          </section>

          <section className="rv-yx-expect" aria-labelledby="rv-expect-heading" data-animate="rise">
            <h2 id="rv-expect-heading">
              What to expect <em>on your journey</em>
            </h2>
            <p className="rv-yx-expect__sub">{WEIGHT_CATEGORY.subtitle}</p>
            <div className="rv-yx-expect__grid rv-yx-expect__grid--copy">
              {EXPECT_WEEKS.map((w) => (
                <article key={w.tag} className="rv-yx-expect-card rv-yx-expect-card--copy">
                  <h3>{w.tag}</h3>
                  <p>{w.text}</p>
                </article>
              ))}
            </div>
          </section>

          {therapies.length > 1 && (
            <section className="rv-yx-knowall" data-animate="peak-fade">
              <div className="rv-yx-knowall__copy">
                <p className="rv-yx-knowall__eyebrow">Related programs</p>
                <h2>Compare {therapies.map((t) => t.name).join(" and ")}</h2>
                <p>
                  Whether a program suits you is a clinical judgment, not a purchase decision.
                  Complete intake for licensed provider review.
                </p>
                <div className="rv-yx-knowall__actions">
                  {selected.intakeUrl && (
                    <a href={selected.intakeUrl} className="rv-yx-side__cta">
                      Select Program
                    </a>
                  )}
                  <a href="/how-it-works" className="rv-yx-side__link">
                    How it works →
                  </a>
                </div>
              </div>
              <div className="rv-yx-knowall__media rv-yx-knowall__media--dual" aria-hidden>
                {therapies.map((t) => (
                  <TreatmentVial
                    key={t.slug}
                    name={t.name}
                    concentration={t.concentration}
                    imageUrl={t.imageUrl}
                    artKey={t.artKey}
                    className="rv-tx-vial-stage rv-tx-vial-stage--sm"
                  />
                ))}
              </div>
            </section>
          )}
        </section>
      )}
    </main>
  );
}

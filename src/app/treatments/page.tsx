"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentExploreHero from "@/components/TreatmentExploreHero";
import TreatmentVial from "@/components/visuals/TreatmentVial";
import { WEIGHT_CATEGORY, WEIGHT_TREATMENTS, getTherapy } from "@/lib/treatmentCatalog";
import { brandConfig } from "@/brand.config";

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

export default function TreatmentsPage() {
  const [therapySlug, setTherapySlug] = useState("semaglutide");
  const [animKey, setAnimKey] = useState(0);

  const selected = getTherapy(therapySlug) || WEIGHT_TREATMENTS[0];
  const detail =
    brandConfig.treatmentDetails[
      selected.slug as keyof typeof brandConfig.treatmentDetails
    ];

  const selectTherapy = (slug: string) => {
    setTherapySlug(slug);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <Navbar />
      <main className="rv-yx-catalog rv-yx-catalog--explore rv-yx-catalog--scriptful">
        <header className="rv-yx-catalog__intro" data-animate="peak-fade">
          <p className="eyebrow">PROGRAM CATALOG</p>
          <h1>
            Weight-management <em>treatment programs</em>
          </h1>
          <p>
            Two clinician-guided injectable programs with one all-inclusive monthly price. Licensed
            provider review required — RX only if prescribed.
          </p>
        </header>

        <section className="rv-yx-catalog__pane rv-yx-catalog__pane--explore" data-tone="wl">
          <TreatmentExploreHero
            selectedSlug={selected.slug}
            onSelectTherapy={selectTherapy}
            animKey={animKey}
          />

          <section className="rv-yx-protocol" aria-labelledby="rv-protocol-heading" data-animate="peak-fade">
            <div className="rv-yx-protocol__left">
              <h2 id="rv-protocol-heading">
                About the <em>{selected.name}</em> program
              </h2>
              <p>{detail?.tagline || selected.desc}</p>
              <div className="rv-yx-protocol__vials" aria-hidden>
                <TreatmentVial
                  slug={selected.slug}
                  name={selected.name}
                  concentration={selected.concentration}
                  form={selected.form}
                  className="rv-tx-vial-stage"
                />
              </div>
            </div>
            <div className="rv-yx-protocol__right">
              {(detail?.features || []).map((feature, i) => (
                <article key={feature} className="rv-yx-protocol-card" style={{ ["--i" as string]: i }}>
                  <span className="rv-yx-protocol-card__n" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{feature}</p>
                </article>
              ))}
              <a href="/start" className="rv-yx-side__cta rv-yx-protocol__cta">
                Select Program
              </a>
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

          <section className="rv-yx-knowall" data-animate="peak-fade">
            <div className="rv-yx-knowall__copy">
              <p className="rv-yx-knowall__eyebrow">Related programs</p>
              <h2>Compare {WEIGHT_TREATMENTS.map((t) => t.name).join(" and ")}</h2>
              <p>
                Whether a single-pathway or dual-pathway product suits you is a clinical judgment,
                not a purchase decision. Complete intake for licensed provider review.
              </p>
              <div className="rv-yx-knowall__actions">
                <a href="/start" className="rv-yx-side__cta">
                  Select Program
                </a>
                <a href="/how-it-works" className="rv-yx-side__link">
                  How it works →
                </a>
              </div>
            </div>
            <div className="rv-yx-knowall__media rv-yx-knowall__media--dual" aria-hidden>
              {WEIGHT_TREATMENTS.map((t) => (
                <TreatmentVial
                  key={t.slug}
                  slug={t.slug}
                  name={t.name}
                  concentration={t.concentration}
                  className="rv-tx-vial-stage rv-tx-vial-stage--sm"
                />
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

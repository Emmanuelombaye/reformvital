"use client";

import { useState } from "react";
import { WEIGHT_CATEGORY } from "@/lib/treatmentCatalog";
import TreatmentExploreHero from "@/components/TreatmentExploreHero";

export default function Treatments() {
  const [therapySlug, setTherapySlug] = useState("semaglutide");
  const [animKey, setAnimKey] = useState(0);

  const selectTherapy = (slug: string) => {
    setTherapySlug(slug);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="rv-yx rv-yx--scriptful" id="services" data-tone={WEIGHT_CATEGORY.tone}>
      <div className="rv-yx__bg" aria-hidden />

      <div className="rv-yx__head" data-animate="peak-fade">
        <p className="rv-yx__eyebrow">Program catalog</p>
        <h2>
          Choose your <em>weight-management</em> program
        </h2>
        <p>
          Two clinician-guided injectable programs · One clear monthly price · Licensed provider
          review
        </p>
      </div>

      <div className="rv-yx__panes">
        <TreatmentExploreHero
          selectedSlug={therapySlug}
          onSelectTherapy={selectTherapy}
          animKey={animKey}
        />
      </div>

      <div className="rv-yx__foot" data-animate="rise" data-delay="120">
        <a href="/treatments" className="rv-yx__catalog-link">
          View full treatments page →
        </a>
      </div>
    </section>
  );
}

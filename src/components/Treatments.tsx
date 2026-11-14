"use client";

import { useState } from "react";
import { WEIGHT_CATEGORY } from "@/lib/treatmentCatalog";
import type { Therapy } from "@/lib/vco/catalog";
import TreatmentExploreHero from "@/components/TreatmentExploreHero";

export default function Treatments({ therapies }: { therapies: Therapy[] }) {
  const [therapySlug, setTherapySlug] = useState(therapies[0]?.slug ?? "");
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
        <p>Clinician-guided programs · One clear monthly price · Licensed provider review</p>
      </div>

      <div className="rv-yx__panes">
        <TreatmentExploreHero
          therapies={therapies}
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

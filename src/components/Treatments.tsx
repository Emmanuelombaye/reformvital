"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { brandConfig } from "@/brand.config";
import TreatmentExploreHero from "@/components/TreatmentExploreHero";
import { getCategoryMeta, THERAPY_VIAL_MAP } from "@/lib/treatmentCatalog";

export default function Treatments() {
  const services = brandConfig.services;
  const [categoryId, setCategoryId] = useState(services[0]?.id ?? "weight-loss");
  const [animKey, setAnimKey] = useState(0);
  const category = useMemo(
    () => services.find((s) => s.id === categoryId) || services[0],
    [categoryId, services],
  );
  const meta = getCategoryMeta(category.id);
  const [therapySlug, setTherapySlug] = useState(category.therapies[0]?.slug ?? "");

  useEffect(() => {
    const stillInCategory = category.therapies.some((t) => t.slug === therapySlug);
    if (!stillInCategory) {
      setTherapySlug(category.therapies[0]?.slug ?? "");
    }
  }, [category, therapySlug]);

  const selected =
    category.therapies.find((t) => t.slug === therapySlug) || category.therapies[0];
  const detail =
    selected &&
    brandConfig.treatmentDetails[
      selected.slug as keyof typeof brandConfig.treatmentDetails
    ];

  const selectCategory = (id: string) => {
    setCategoryId(id);
    setAnimKey((k) => k + 1);
  };

  const selectTherapy = (slug: string) => {
    setTherapySlug(slug);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="rv-yx" id="services" data-tone={meta.tone}>
      <div className="rv-yx__bg" aria-hidden />

      <div className="rv-yx__head" data-animate="peak-fade">
        <p className="rv-yx__eyebrow">Browse by treatment</p>
        <h2>
          Explore our treatments below and choose what&apos;s best <em>for you</em>
        </h2>
        <p>
          US-licensed provider review · Flat-rate memberships · Discreet cold-chain delivery
          if prescribed
        </p>
      </div>

      <div className="rv-yx__tabs-wrap" data-animate="peak-fade" data-delay="80">
        <div className="rv-yx__tabs" role="tablist" aria-label="Care categories">
          {services.map((s) => {
            const m = getCategoryMeta(s.id);
            const active = s.id === category.id;
            const cutout =
              (s.therapies[0] && THERAPY_VIAL_MAP[s.therapies[0].slug]) || m.image;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`rv-yx__tab rv-yx__tab--cutout${active ? " is-active" : ""}`}
                data-tone={m.tone}
                onClick={() => selectCategory(s.id)}
              >
                <span>{m.shortLabel}</span>
                <span className="rv-yx__tab-img" aria-hidden>
                  <Image src={cutout} alt="" width={72} height={72} sizes="72px" quality={60} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rv-yx__panes">
        <TreatmentExploreHero
          tone={meta.tone}
          stageTitle={`Personalized ${meta.shortLabel}`}
          tag={meta.tag}
          blurb={detail?.tagline || selected?.desc || meta.blurb || category.subtitle}
          therapies={category.therapies}
          selectedSlug={selected?.slug || ""}
          onSelectTherapy={selectTherapy}
          animKey={`${category.id}-${animKey}`}
        />
      </div>

      <div className="rv-yx__foot" data-animate="rise" data-delay="120">
        <a href="/treatments" className="rv-yx__catalog-link">
          Explore full {services.length}-category care catalog →
        </a>
      </div>
    </section>
  );
}

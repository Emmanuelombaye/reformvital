"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { brandConfig } from "@/brand.config";
import DualProductImage from "@/components/DualProductImage";
import { getCategoryMeta, getTherapyPackPair } from "@/lib/treatmentCatalog";

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
  const pack = selected
    ? getTherapyPackPair(selected.slug)
    : { primary: meta.image, secondary: meta.image };

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

      <div className="rv-yx__head" data-animate="rise">
        <p className="rv-yx__eyebrow">Browse by treatment</p>
        <h2>
          Personalized care to help you <em>feel like yourself again</em>
        </h2>
        <p>
          US-licensed provider review · Flat-rate memberships · Discreet cold-chain delivery
          if prescribed
        </p>
      </div>

      <div className="rv-yx__tabs-wrap" data-animate="rise" data-delay="80">
        <div className="rv-yx__tabs" role="tablist" aria-label="Care categories">
          {services.map((s) => {
            const m = getCategoryMeta(s.id);
            const active = s.id === category.id;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`rv-yx__tab${active ? " is-active" : ""}`}
                data-tone={m.tone}
                onClick={() => selectCategory(s.id)}
              >
                {m.shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rv-yx__panes">
        <article
          key={`${category.id}-${selected?.slug}-${animKey}`}
          className="rv-yx__card rv-yx__card--mensrx rv-yx__card--pack rv-tilt"
          data-tone={meta.tone}
          data-animate="zoom"
        >
          <div className="rv-yx__media rv-yx__media--pack">
            <DualProductImage
              primary={pack.primary}
              secondary={pack.secondary}
              alt={selected?.name || category.title}
            />
            <div className="rv-yx__media-badges">
              <span className="rv-yx__chip rv-yx__chip--tone">{meta.tag}</span>
              <span className="rv-yx__chip rv-yx__chip--seller">Provider-guided</span>
            </div>
            {selected?.price && (
              <span className="rv-yx__media-price rv-yx__media-price--ink">
                from <strong>{selected.price.replace(/\/mo$/, "")}</strong>
                {selected.price.includes("/mo") ? "/mo" : ""}
              </span>
            )}
          </div>

          <div className="rv-yx__copy">
            <p className="rv-yx__card-eyebrow">{category.title}</p>
            <h3>{selected?.name || category.title}</h3>
            <p className="rv-yx__blurb">
              {detail?.tagline || selected?.desc || meta.blurb || category.subtitle}
            </p>

            {category.therapies.length > 1 && (
              <div className="rv-yx__meds" role="radiogroup" aria-label="Choose protocol">
                {category.therapies.map((t) => {
                  const active = selected?.slug === t.slug;
                  return (
                    <button
                      key={t.slug}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      className={`rv-yx__med${active ? " is-active" : ""}`}
                      onClick={() => selectTherapy(t.slug)}
                    >
                      <strong>{t.name}</strong>
                      <span>{t.price}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="rv-yx__cta">
              <a href="/start" className="rv-yx__btn rv-yx__btn--primary">
                Start Your Online Visit
              </a>
              <a
                href={selected ? `/treatments/${selected.slug}` : "/treatments"}
                className="rv-yx__btn rv-yx__btn--secondary"
              >
                View Details
              </a>
            </div>
            <p className="rv-yx__fineprint">
              Available only if prescribed · Treatment is not guaranteed · Discreet shipping
            </p>
          </div>
        </article>
      </div>

      {/* MensRx-style 2×2 quick pack preview for active category */}
      {category.therapies.length > 0 && (
        <div className="rv-yx-pack-grid" data-animate="rise" data-delay="100">
          {category.therapies.slice(0, 4).map((t) => {
            const pair = getTherapyPackPair(t.slug);
            return (
              <button
                key={t.slug}
                type="button"
                className={`rv-yx-pack-tile${selected?.slug === t.slug ? " is-active" : ""}`}
                onClick={() => selectTherapy(t.slug)}
              >
                <DualProductImage primary={pair.primary} secondary={pair.secondary} alt={t.name} />
                <span className="rv-yx-pack-tile__label">{t.name}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="rv-yx__foot" data-animate="rise" data-delay="120">
        <a href="/treatments" className="rv-yx__catalog-link">
          Explore full {services.length}-category care catalog →
        </a>
      </div>
    </section>
  );
}

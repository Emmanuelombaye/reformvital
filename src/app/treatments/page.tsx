"use client";

import { useState } from "react";
import Image from "next/image";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DualProductImage from "@/components/DualProductImage";
import { getCategoryMeta, getTherapyPackPair } from "@/lib/treatmentCatalog";

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);
  const category =
    brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];
  const meta = getCategoryMeta(category.id);
  const featured = category.therapies[0];

  return (
    <>
      <Navbar />
      <main className="rv-yx-catalog">
        <header className="rv-yx-catalog__intro" data-animate="rise">
          <p className="eyebrow">BROWSE BY TREATMENT</p>
          <h1>
            Care pathways <em>reviewed by US-licensed providers</em>
          </h1>
          <p>
            Private online assessment · Flat-rate memberships · Discreet pharmacy delivery if
            prescribed. Hover a card to preview the second product angle.
          </p>
        </header>

        <div
          className="rv-yx-catalog__tabs rv-yx-catalog__tabs--sticky"
          role="tablist"
          aria-label="Care categories"
        >
          {brandConfig.services.map((s) => {
            const m = getCategoryMeta(s.id);
            const active = s.id === category.id;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`rv-yx-catalog__tab${active ? " is-active" : ""}`}
                onClick={() => setActiveTab(s.id)}
              >
                {m.shortLabel}
              </button>
            );
          })}
        </div>

        <section className="rv-yx-catalog__pane" aria-labelledby="catalog-pane-title">
          <article key={category.id} className="rv-yx-featured" data-animate="zoom">
            <div className="rv-yx-featured__media">
              <Image
                src={meta.image}
                alt={category.title}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                quality={90}
              />
              <div className="rv-yx-featured__scrim" aria-hidden />
            </div>
            <div className="rv-yx-featured__body">
              <span className="rv-yx-featured__tag">{meta.tag}</span>
              <h2 id="catalog-pane-title">{category.title}</h2>
              <p>{meta.blurb || category.subtitle}</p>
              <div className="rv-yx-featured__actions">
                <a href="/start" className="rv-yx__btn rv-yx__btn--primary">
                  Start Your Online Visit
                </a>
                {featured && (
                  <a
                    href={`/treatments/${featured.slug}`}
                    className="rv-yx__btn rv-yx__btn--ghost"
                  >
                    View Details
                  </a>
                )}
              </div>
            </div>
          </article>

          <p className="rv-yx-catalog__lead">{category.subtitle}</p>

          {/* 2×2 MensRx pack grid with PeakHealth dual-image hover */}
          <div className="rv-yx-catalog__grid rv-yx-catalog__grid--2x2">
            {category.therapies.map((t, i) => {
              const detail =
                brandConfig.treatmentDetails[
                  t.slug as keyof typeof brandConfig.treatmentDetails
                ];
              const pair = getTherapyPackPair(t.slug);
              return (
                <article
                  key={t.slug}
                  className="rv-yx-tx-card rv-yx-tx-card--mensrx rv-yx-tx-card--pack rv-tilt"
                  data-animate="rise"
                  data-delay={String(Math.min(i * 70, 350))}
                >
                  <div className="rv-yx-tx-card__media rv-yx-tx-card__media--pack">
                    <DualProductImage
                      primary={pair.primary}
                      secondary={pair.secondary}
                      alt={t.name}
                    />
                    <span className="rv-yx-tx-card__price-pill">{t.price}</span>
                  </div>
                  <div className="rv-yx-tx-card__body">
                    <h3>{t.name}</h3>
                    <p>{detail?.tagline || t.desc}</p>
                    <div className="rv-yx-tx-card__actions">
                      <a href="/start" className="rv-yx__btn rv-yx__btn--primary">
                        Start Visit
                      </a>
                      <a
                        href={`/treatments/${t.slug}`}
                        className="rv-yx__btn rv-yx__btn--secondary"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentExploreHero from "@/components/TreatmentExploreHero";
import DualProductImage from "@/components/DualProductImage";
import { getCategoryMeta, getTherapyStagePair, THERAPY_VIAL_MAP } from "@/lib/treatmentCatalog";

const EXPECT_WEEKS = [
  {
    tag: "Week 1–2",
    text: "Onboarding, first doses, and provider check-ins as your body adjusts.",
    img: "/images/how-step-consult.webp",
  },
  {
    tag: "Week 4–8",
    text: "Titration and follow-up as appetite, energy, and markers stabilize.",
    img: "/images/how-step-physician.webp",
  },
  {
    tag: "Month 3+",
    text: "Ongoing optimization with portal access, AI coaching, and refills if prescribed.",
    img: "/images/how-step-ongoing.webp",
  },
];

const PROTOCOL_SIGNALS = [
  {
    title: "Works with your biology",
    body: "Protocols are chosen to support pathways your body already uses — not one-size-fits-all stacks.",
  },
  {
    title: "Reviewed before fulfillment",
    body: "A licensed U.S. provider reviews history and goals before any prescription is issued.",
  },
  {
    title: "Adjusted as you progress",
    body: "Follow-ups and messaging keep dosing and support aligned with how you respond.",
  },
];

export default function TreatmentsPage() {
  const services = brandConfig.services;
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [animKey, setAnimKey] = useState(0);
  const category = useMemo(
    () => services.find((s) => s.id === activeTab) || services[0],
    [activeTab, services],
  );
  const meta = getCategoryMeta(category.id);
  const [therapySlug, setTherapySlug] = useState(category.therapies[0]?.slug ?? "");

  useEffect(() => {
    const still = category.therapies.some((t) => t.slug === therapySlug);
    if (!still) setTherapySlug(category.therapies[0]?.slug ?? "");
  }, [category, therapySlug]);

  const selected =
    category.therapies.find((t) => t.slug === therapySlug) || category.therapies[0];
  const detail =
    selected &&
    brandConfig.treatmentDetails[
      selected.slug as keyof typeof brandConfig.treatmentDetails
    ];

  const selectCategory = (id: string) => {
    setActiveTab(id);
    setAnimKey((k) => k + 1);
  };

  const selectTherapy = (slug: string) => {
    setTherapySlug(slug);
    setAnimKey((k) => k + 1);
  };

  const stagePair = selected
    ? getTherapyStagePair(selected.slug)
    : { primary: meta.image, secondary: meta.image };

  return (
    <>
      <Navbar />
      <main className="rv-yx-catalog rv-yx-catalog--explore">
        <header className="rv-yx-catalog__intro" data-animate="peak-fade">
          <p className="eyebrow">BROWSE BY TREATMENT</p>
          <h1>
            Explore our treatments below and choose what&apos;s best <em>for you</em>.
          </h1>
          <p>
            Private online assessment · Flat-rate memberships · Discreet pharmacy delivery if
            prescribed.
          </p>
        </header>

        <div
          className="rv-yx-catalog__tabs rv-yx-catalog__tabs--sticky"
          role="tablist"
          aria-label="Care categories"
        >
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
                className={`rv-yx-catalog__tab${active ? " is-active" : ""}`}
                onClick={() => selectCategory(s.id)}
              >
                <span>{m.shortLabel}</span>
                <span className="rv-yx-catalog__tab-img" aria-hidden>
                  <Image src={cutout} alt="" width={72} height={72} sizes="72px" quality={60} />
                </span>
              </button>
            );
          })}
        </div>

        <section className="rv-yx-catalog__pane rv-yx-catalog__pane--explore" data-tone={meta.tone}>
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

          {/* Protocol / science */}
          <section className="rv-yx-protocol" aria-labelledby="rv-protocol-heading" data-animate="peak-fade">
            <div className="rv-yx-protocol__left">
              <h2 id="rv-protocol-heading">
                Your body isn&apos;t working against you. It just needs the{" "}
                <em>right signal</em>.
              </h2>
              <p>
                {category.subtitle} Care is reviewed by a licensed provider and adjusted as you
                progress.
              </p>
              <div className="rv-yx-protocol__vials" aria-hidden>
                <DualProductImage
                  primary={stagePair.primary}
                  secondary={stagePair.secondary}
                  alt=""
                />
              </div>
            </div>
            <div className="rv-yx-protocol__right">
              {PROTOCOL_SIGNALS.map((card, i) => (
                <article key={card.title} className="rv-yx-protocol-card" style={{ ["--i" as string]: i }}>
                  <span className="rv-yx-protocol-card__n" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
              <a href="/start" className="rv-yx-side__cta rv-yx-protocol__cta">
                Get Started
              </a>
            </div>
          </section>

          {/* What to expect */}
          <section className="rv-yx-expect" aria-labelledby="rv-expect-heading" data-animate="rise">
            <h2 id="rv-expect-heading">
              What to expect <em>on your journey</em>
            </h2>
            <p className="rv-yx-expect__sub">
              Timelines vary. Your provider guides dosing and follow-up for {meta.shortLabel.toLowerCase()}{" "}
              care.
            </p>
            <div className="rv-yx-expect__grid">
              {EXPECT_WEEKS.map((w) => (
                <article key={w.tag} className="rv-yx-expect-card">
                  <div className="rv-yx-expect-card__media">
                    <Image
                      src={w.img}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 90vw, 30vw"
                      quality={70}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3>{w.tag}</h3>
                  <p>{w.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Know-all CTA */}
          <section className="rv-yx-knowall" data-animate="peak-fade">
            <div className="rv-yx-knowall__copy">
              <p className="rv-yx-knowall__eyebrow">Ready when you are</p>
              <h2>See if {selected?.name || meta.shortLabel} is right for you</h2>
              <p>
                Complete a quick clinical intake. A licensed provider reviews within 24 hours —
                you&apos;re only charged if treatment is prescribed.
              </p>
              <div className="rv-yx-knowall__actions">
                <a href="/start" className="rv-yx-side__cta">
                  See if I qualify
                </a>
                <a href="/how-it-works" className="rv-yx-side__link">
                  How Reform Vital works →
                </a>
              </div>
            </div>
            <div className="rv-yx-knowall__media" aria-hidden>
              <DualProductImage
                primary={stagePair.primary}
                secondary={stagePair.secondary}
                alt=""
              />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

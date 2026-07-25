"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

const protocolData: Record<string, { image: string; badge: string; icon: string; highlight: string; efficacy: string }> = {
  "weight-loss": {
    image: "/images/tirzepatide_hero.png",
    badge: "METABOLIC HEALTH",
    icon: "⚡",
    highlight: "Dual GLP-1 & GIP Receptor Agonists",
    efficacy: "Up to 20.9% Average Body Weight Reduction",
  },
  "hormones": {
    image: "/images/hero_showcase.png",
    badge: "HORMONE BALANCE",
    icon: "🧬",
    highlight: "Bioidentical Testosterone & HRT Protocols",
    efficacy: "Restores Physiological Hormone Vitality & Muscle Retention",
  },
  "growth-hormone": {
    image: "/images/sermorelin_hero.png",
    badge: "PITUITARY SECRETION",
    icon: "🌙",
    highlight: "Endogenous hGH Secretagogues",
    efficacy: "Enhances REM Sleep & Night-time Fat Oxidation",
  },
  "recovery": {
    image: "/images/bpc_tissue.png",
    badge: "TISSUE REPAIR",
    icon: "🩹",
    highlight: "BPC-157 & TB-500 Angiogenesis Peptides",
    efficacy: "Accelerates Tendon, Ligament & Gut Mucosal Healing",
  },
  "longevity": {
    image: "/images/nad_cellular.png",
    badge: "MITOCHONDRIAL ENERGY",
    icon: "🔬",
    highlight: "NAD+ Coenzyme & Sirtuin Activation",
    efficacy: "Rejuvenates Cellular ATP Production & DNA Repair",
  },
  "cognitive": {
    image: "/images/longevity_nad.png",
    badge: "NEUROPROTECTION",
    icon: "🧠",
    highlight: "Semax & Selank Neuropeptide Formulations",
    efficacy: "Boosts BDNF Signaling, Mental Clarity & Stress Resilience",
  },
  "sexual-wellness": {
    image: "/images/weight_loss_glp1.png",
    badge: "VASCULAR VITALITY",
    icon: "🔥",
    highlight: "PT-141 Bremelanotide & Tadalafil Therapy",
    efficacy: "Central Nervous System Libido & Vascular Flow Enhancement",
  },
  "hair": {
    image: "/images/hero_showcase.png",
    badge: "FOLLICLE RESTORATION",
    icon: "✨",
    highlight: "Minoxidil + Finasteride + GHK-Cu Topicals",
    efficacy: "Blocks DHT Conversion & Stimulates Hair Follicle Density",
  },
};

export default function Treatments() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);

  const currentCategory = brandConfig.services[activeCategoryIndex];
  const currentMeta = protocolData[currentCategory.id] || protocolData["weight-loss"];
  const selectedTabCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];

  const handleNext = () => {
    setActiveCategoryIndex((prev) => (prev + 1) % brandConfig.services.length);
  };

  const handlePrev = () => {
    setActiveCategoryIndex((prev) => (prev - 1 + brandConfig.services.length) % brandConfig.services.length);
  };

  return (
    <section className="section" id="services" style={{ background: "var(--surface)", overflow: "hidden" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head" style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 3rem" }}>
          <span className="badge" style={{ background: "var(--accent)", color: "#FFF", marginBottom: "0.8rem" }}>
            REFORM VITAL DREAM SERVICE MENU
          </span>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900 }}>8 Physician-Guided Care Protocols</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
            Interactive formulation catalog supervised by U.S. board-certified medical directors & compounded by 50-state certified pharmacies.
          </p>
        </div>

        {/* Dynamic Interactive Spotlight Showcase */}
        <div
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #162A45 70%, #00A896 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            color: "#FFF",
            boxShadow: "0 20px 50px rgba(13, 27, 42, 0.25)",
            marginBottom: "4rem",
            position: "relative",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Spotlight Header Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span
                style={{
                  background: "var(--accent)",
                  color: "#FFF",
                  padding: "0.35rem 0.95rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                }}
              >
                SPOTLIGHT PROTOCOL 0{activeCategoryIndex + 1} OF 08
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", fontWeight: 800 }}>
                {currentMeta.badge}
              </span>
            </div>

            {/* Slider Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <button
                onClick={handlePrev}
                aria-label="Previous Protocol"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  color: "#FFF",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Protocol"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  color: "#FFF",
                  border: "none",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Spotlight Body Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#FFF", marginBottom: "0.6rem" }}>
                {currentCategory.title}
              </h3>
              <div style={{ fontSize: "1.1rem", color: "var(--accent-cyan)", fontWeight: 800, marginBottom: "1rem" }}>
                {currentMeta.highlight}
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.8rem" }}>
                {currentCategory.subtitle}
              </p>

              {/* Clinical Efficacy Highlight Box */}
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  padding: "1.2rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(0, 168, 150, 0.4)",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", fontWeight: 800, display: "block", marginBottom: "0.3rem" }}>
                  CLINICAL EFFICACY TARGET
                </span>
                <strong style={{ fontSize: "1.15rem", color: "var(--accent-gold)" }}>{currentMeta.efficacy}</strong>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/start" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                  Start {currentCategory.title} Consultation →
                </a>
                <a href="/treatments" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", borderColor: "rgba(255,255,255,0.2)" }}>
                  Explore All 8 Lines
                </a>
              </div>
            </div>

            {/* Visual Photography Container */}
            <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "2px solid rgba(0, 168, 150, 0.5)", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
              <img
                src={currentMeta.image}
                alt={currentCategory.title}
                style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.5s ease" }}
              />
            </div>
          </div>

          {/* Interactive Protocol Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2.5rem" }}>
            {brandConfig.services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                aria-label={`Go to protocol ${idx + 1}`}
                style={{
                  width: idx === activeCategoryIndex ? "32px" : "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  background: idx === activeCategoryIndex ? "var(--accent)" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* 8-Category Interactive Protocol Grid Cards */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="badge">DREAM SERVICE MENU CATALOG</span>
            <h3 style={{ fontSize: "2.2rem", marginTop: "0.4rem" }}>Explore All 8 Protocol Care Lines</h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {brandConfig.services.map((cat, idx) => {
              const meta = protocolData[cat.id] || protocolData["weight-loss"];
              const isSpotlighted = idx === activeCategoryIndex;

              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  style={{
                    background: isSpotlighted ? "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)" : "var(--surface)",
                    border: isSpotlighted ? "2px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: "1.25rem",
                    padding: "1.75rem",
                    cursor: "pointer",
                    boxShadow: isSpotlighted ? "0 12px 30px rgba(0, 168, 150, 0.15)" : "var(--shadow-card)",
                    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span className="badge" style={{ background: isSpotlighted ? "var(--accent)" : "var(--accent-soft)", color: isSpotlighted ? "#FFF" : "#00695C" }}>
                      {meta.icon} PROTOCOL 0{idx + 1}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 800 }}>{meta.badge}</span>
                  </div>

                  <h4 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.4rem", color: "var(--primary)" }}>
                    {cat.title}
                  </h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.55, marginBottom: "1.2rem" }}>
                    {cat.subtitle}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                    {cat.therapies.map((t) => (
                      <span
                        key={t.name}
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--primary)",
                        }}
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabbed Interactive Deep Dive Section */}
        <div style={{ borderTop: "2px dashed var(--border)", paddingTop: "3rem" }}>
          <div className="section-head" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <span className="badge">INDIVIDUAL PRESCRIPTIONS</span>
            <h3 style={{ fontSize: "2.2rem" }}>Filter Specific Medications & Pricing</h3>
          </div>

          <div className="tabs">
            {brandConfig.services.map((cat) => (
              <button
                key={cat.id}
                className={`tab ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Individual Therapy Medication Cards Grid */}
          <div className="treatment-grid" style={{ marginTop: "2rem" }}>
            {selectedTabCategory.therapies.map((therapy, i) => (
              <div className="treatment-card" key={i}>
                <div className="treatment-body">
                  <span className="badge">Physician Prescribed</span>
                  <h3>{therapy.name}</h3>
                  <div className="treatment-price">{therapy.price}</div>
                  <p>{therapy.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "auto" }}>
                    {therapy.slug && (
                      <a href={`/treatments/${therapy.slug}`} className="btn btn-primary" style={{ width: "100%" }}>
                        View Clinical Protocol →
                      </a>
                    )}
                    <a href="/start" className="btn btn-ghost" style={{ width: "100%" }}>
                      See If I Qualify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

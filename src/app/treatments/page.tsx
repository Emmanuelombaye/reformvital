"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryMeta: Record<string, { image: string; badge: string; icon: string }> = {
  "weight-loss": { image: "/images/tirzepatide_hero.png", badge: "METABOLIC HEALTH", icon: "⚡" },
  "hormones": { image: "/images/hero_showcase.png", badge: "HORMONE BALANCE", icon: "🧬" },
  "growth-hormone": { image: "/images/sermorelin_hero.png", badge: "PITUITARY SECRETION", icon: "🌙" },
  "recovery": { image: "/images/bpc_tissue.png", badge: "TISSUE REPAIR", icon: "🩹" },
  "longevity": { image: "/images/nad_cellular.png", badge: "MITOCHONDRIAL ENERGY", icon: "🔬" },
  "cognitive": { image: "/images/longevity_nad.png", badge: "NEUROPROTECTION", icon: "🧠" },
  "sexual-wellness": { image: "/images/weight_loss_glp1.png", badge: "VASCULAR & VITALITY", icon: "🔥" },
  "hair": { image: "/images/hero_showcase.png", badge: "FOLLICLE RESTORATION", icon: "✨" },
};

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);
  const selectedCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];

  return (
    <>
      <Navbar />
      <main>
        {/* Header Hero */}
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "56rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem", background: "var(--accent)", color: "#FFF" }}>
                REFORM VITAL DREAM SERVICE MENU
              </span>
              <h1 style={{ fontSize: "3.2rem", marginBottom: "0.8rem" }}>Physician-Guided Care Protocols</h1>
              <p style={{ fontSize: "1.15rem" }}>
                Explore all 8 specialized care lines prescribed by U.S. board-certified medical directors and compounded by 50-state certified pharmacies.
              </p>
            </div>
          </div>
        </section>

        {/* 8-Category Protocol Cards Showcase */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
                marginBottom: "4rem",
              }}
            >
              {brandConfig.services.map((cat, index) => {
                const meta = categoryMeta[cat.id] || { image: "/images/tirzepatide_hero.png", badge: "CLINICAL CARE", icon: "✨" };
                return (
                  <div
                    key={cat.id}
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "1.25rem",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-card)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Header Image */}
                    <div style={{ position: "relative", height: "190px", overflow: "hidden" }}>
                      <img
                        src={meta.image}
                        alt={cat.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, transparent 40%, rgba(13, 27, 42, 0.85) 100%)",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "1rem",
                          left: "1rem",
                          background: "rgba(13, 27, 42, 0.9)",
                          color: "var(--accent-cyan)",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(0, 168, 150, 0.4)",
                        }}
                      >
                        {meta.icon} PROTOCOL 0{index + 1}: {meta.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "1.6rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontSize: "1.5rem", marginBottom: "0.4rem", fontWeight: 900, color: "var(--primary)" }}>
                        {cat.title}
                      </h3>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.94rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                        {cat.subtitle}
                      </p>

                      <div style={{ marginTop: "auto", marginBottom: "1.2rem" }}>
                        <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--primary)", display: "block", marginBottom: "0.5rem" }}>
                          FORMULATIONS:
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                          {cat.therapies.map((t) => (
                            <span
                              key={t.name}
                              style={{
                                background: "var(--surface)",
                                border: "1px solid var(--border)",
                                padding: "0.25rem 0.65rem",
                                borderRadius: "0.5rem",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                color: "var(--primary)",
                              }}
                            >
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href="/start"
                        className="btn btn-primary"
                        style={{ width: "100%", padding: "0.85rem", fontSize: "0.92rem" }}
                      >
                        Consult Doctor for {cat.title} →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Individual Medication Filter */}
            <div style={{ borderTop: "2px dashed var(--border)", paddingTop: "3rem" }}>
              <div className="section-head" style={{ marginBottom: "1.5rem" }}>
                <span className="badge">INDIVIDUAL FORMULATIONS</span>
                <h3 style={{ fontSize: "2.2rem" }}>Filter Formulations & Pricing</h3>
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

              <div className="treatment-grid" style={{ marginTop: "2rem" }}>
                {selectedCategory.therapies.map((t) => (
                  <div className="treatment-card" key={t.slug || t.name}>
                    <div className="treatment-body">
                      <span className="badge">Physician Prescribed</span>
                      <h3>{t.name}</h3>
                      <div className="treatment-price">{t.price}</div>
                      <p>{t.desc}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "auto" }}>
                        {t.slug && (
                          <a href={`/treatments/${t.slug}`} className="btn btn-primary" style={{ width: "100%" }}>
                            View Protocol Details →
                          </a>
                        )}
                        <a href="/start" className="btn btn-ghost" style={{ width: "100%" }}>
                          Start Physician Assessment
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

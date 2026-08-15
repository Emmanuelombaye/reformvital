"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryImageMap: Record<string, { image: string; tag: string; title: string }> = {
  "weight-loss": {
    image: "/images/tirzepatide_hero.png",
    tag: "MEDICAL WEIGHT LOSS",
    title: "Clinician-Guided Weight Management",
  },
  "hormones": {
    image: "/images/TRTTestosterone.png",
    tag: "MEN'S & WOMEN'S HORMONE HEALTH",
    title: "Testosterone & Endocrine Care",
  },
  "growth-hormone": {
    image: "/images/sermorelin_hero.png",
    tag: "GROWTH HORMONE OPTIMIZATION",
    title: "Pituitary Secretagogue Protocols",
  },
  "recovery": {
    image: "/images/bpc_tissue.png",
    tag: "RECOVERY & TISSUE REPAIR",
    title: "BPC-157 & Regenerative Peptides",
  },
  "longevity": {
    image: "/images/nad_cellular.png",
    tag: "LONGEVITY & HEALTHY AGING",
    title: "NAD+ Cellular Energy Matrix",
  },
  "cognitive": {
    image: "/images/Neuropeptide.png",
    tag: "COGNITIVE OPTIMIZATION",
    title: "Neuropeptide Focus & BDNF Care",
  },
  "sexual-wellness": {
    image: "/images/Bremelanotide.png",
    tag: "SEXUAL WELLNESS & VITALITY",
    title: "PT-141 & Vascular Flow Therapy",
  },
  "hair": {
    image: "/images/Minoxidil.png",
    tag: "PRESCRIPTION HAIR RESTORATION",
    title: "Custom Topical & Peptide Regrowth",
  },
  "preventive": {
    image: "/images/longevity_nad.png",
    tag: "PREVENTIVE WELLNESS",
    title: "Labs, Tracking & Longevity Planning",
  },
};

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);
  const selectedTabCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];

  return (
    <>
      <Navbar />
      <main>
        {/* NexaMD Header Hero */}
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "56rem" }}>
              <p className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
                REFORM VITAL CARE CATALOG
              </p>
              <h1 style={{ fontSize: "3.2rem", marginBottom: "0.8rem", fontWeight: 900 }}>Explore Care Programs</h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Doctor-guided telehealth programs prescribed by U.S. board-certified medical directors & fulfilled by 50-state certified compounding pharmacies.
              </p>
            </div>
          </div>
        </section>

        {/* NexaMD Treatments Grid */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
                marginBottom: "4.5rem",
              }}
            >
              {brandConfig.services.map((cat, idx) => {
                const meta = categoryImageMap[cat.id] || {
                  image: "/images/tirzepatide_hero.png",
                  tag: cat.title.toUpperCase(),
                  title: cat.title,
                };

                const primarySlug = cat.therapies[0]?.slug || "semaglutide";

                return (
                  <article
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
                    <div style={{ position: "relative", height: "210px", width: "100%", overflow: "hidden" }}>
                      <img
                        src={meta.image}
                        alt={cat.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, transparent 40%, rgba(13, 27, 42, 0.75) 100%)",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "1rem",
                          left: "1rem",
                          background: "var(--accent)",
                          color: "#FFF",
                          padding: "0.3rem 0.85rem",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                        }}
                      >
                        CARE PROGRAM
                      </span>
                    </div>

                    <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      <p style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-cyan)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                        PROTOCOL 0{idx + 1} • {meta.tag}
                      </p>

                      <h3 style={{ fontSize: "1.45rem", fontWeight: 900, marginBottom: "0.5rem", color: "var(--primary)" }}>
                        {meta.title}
                      </h3>

                      <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                        {cat.subtitle}
                      </p>

                      <div style={{ marginTop: "auto", marginBottom: "1.25rem" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                          {cat.therapies.map((t) => (
                            <span
                              key={t.name}
                              style={{
                                background: "var(--surface)",
                                border: "1px solid var(--border)",
                                padding: "0.25rem 0.65rem",
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

                      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", marginBottom: "1.25rem" }}>
                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>
                          {cat.therapies[0]?.price || "$149/mo"}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700 }}>
                          Doctor Consultation & Shipping Included
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        <a
                          href={`/treatments/${primarySlug}`}
                          className="btn btn-ghost"
                          style={{ fontSize: "0.88rem", padding: "0.75rem" }}
                        >
                          View Details
                        </a>
                        <a
                          href="/start"
                          className="btn btn-primary"
                          style={{ fontSize: "0.88rem", padding: "0.75rem" }}
                        >
                          Check Eligibility
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Tabbed Interactive Filter */}
            <div style={{ borderTop: "2px dashed var(--border)", paddingTop: "3.5rem" }}>
              <div className="section-head" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                <p className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800 }}>
                  INDIVIDUAL PRESCRIPTIONS
                </p>
                <h3 style={{ fontSize: "2.2rem", fontWeight: 900 }}>Filter Formulations & Pricing</h3>
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
                {selectedTabCategory.therapies.map((t) => (
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

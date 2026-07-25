"use client";

import { brandConfig } from "@/brand.config";

export default function Treatments() {
  return (
    <section className="section" id="services" style={{ background: "var(--surface)", padding: "4.5rem 0" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head" style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 3rem" }}>
          <p className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
            PHYSICIAN-GUIDED CARE PROTOCOLS
          </p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, marginBottom: "0.8rem" }}>
            Precision Healthcare. Compounded for You.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Select from 8 specialized care lines prescribed by U.S. board-certified medical directors and compounded by 50-state certified pharmacies.
          </p>
        </div>

        {/* Creative Featured Hero Teaser Box */}
        <div
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #162A45 60%, #00A896 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(1.75rem, 4vw, 3.2rem)",
            color: "#FFF",
            boxShadow: "0 20px 50px rgba(13, 27, 42, 0.25)",
            marginBottom: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{ background: "var(--accent)", color: "#FFF", padding: "0.3rem 0.85rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 900 }}>
                FEATURED PROGRAM
              </span>
              <span style={{ background: "rgba(255,255,255,0.15)", color: "#FFF", padding: "0.3rem 0.85rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 800 }}>
                METABOLIC WEIGHT LOSS
              </span>
            </div>

            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#FFF", marginBottom: "0.8rem", lineHeight: 1.2 }}>
              Compounded Semaglutide & Tirzepatide+
            </h3>

            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.75rem" }}>
              Clinically proven dual-action GLP-1/GIP receptor agonists prescribed online with Vitamin B12, sterile injection supplies, and free cold-chain pharmacy delivery.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/treatments" className="btn btn-primary" style={{ padding: "0.95rem 1.8rem", fontSize: "0.98rem" }}>
                Explore All 8 Care Protocols →
              </a>
              <a href="/start" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", borderColor: "rgba(255,255,255,0.2)" }}>
                Start Online Assessment
              </a>
            </div>
          </div>

          <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "2px solid rgba(0, 168, 150, 0.5)", boxShadow: "0 15px 35px rgba(0,0,0,0.3)" }}>
            <img
              src="/images/tirzepatide_hero.png"
              alt="Compounded Metabolic Health Protocol"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* 4 Core Pillars Overview Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.5rem", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>⚡</div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.3rem", color: "var(--primary)" }}>Metabolic Weight Loss</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
              Targeted appetite regulation with Semaglutide, Tirzepatide & Retatrutide.
            </p>
            <a href="/treatments/semaglutide" style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent)" }}>
              View GLP-1 Details →
            </a>
          </div>

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.5rem", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🧬</div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.3rem", color: "var(--primary)" }}>Hormone Optimization</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
              Bioidentical TRT, Enclomiphene & endocrine balance protocols.
            </p>
            <a href="/treatments/trt" style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent)" }}>
              View TRT Details →
            </a>
          </div>

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.5rem", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🔬</div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.3rem", color: "var(--primary)" }}>Longevity & NAD+</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
              Mitochondrial ATP cellular energy & sirtuin activation coenzymes.
            </p>
            <a href="/treatments/nad-plus" style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent)" }}>
              View NAD+ Details →
            </a>
          </div>

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.5rem", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🩹</div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.3rem", color: "var(--primary)" }}>Recovery & Tissue Repair</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
              BPC-157 & TB-500 pentadecapeptides for tendon and mucosal healing.
            </p>
            <a href="/treatments/bpc-157" style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent)" }}>
              View BPC-157 Details →
            </a>
          </div>
        </div>

        {/* View All Catalog Footer Banner */}
        <div style={{ textAlign: "center", paddingTop: "1.5rem" }}>
          <a
            href="/treatments"
            className="btn btn-navy"
            style={{ padding: "1.1rem 2.5rem", fontSize: "1.05rem" }}
          >
            View Complete 8-Category Dream Service Menu Catalog →
          </a>
        </div>
      </div>
    </section>
  );
}

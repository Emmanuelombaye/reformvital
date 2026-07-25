"use client";

import { brandConfig } from "@/brand.config";
import Image from "next/image";

export default function Hero() {
  const { hero, stats } = brandConfig;
  return (
    <section className="hero" id="qualify">
      <div className="hero-blob" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "center" }}>
          <div className="hero-inner" style={{ maxWidth: "100%" }}>
            <p className="hero-brand-tag">REFORM VITAL HEALTH</p>
            <h1>{hero.headline}</h1>
            <span className="hero-highlight">{hero.subheadline}</span>
            <p className="hero-price">Physician-Guided GLP-1 & Peptide Optimization for just $149/mo</p>
            <p className="hero-fine">*100% Online Physician Consultations & Free Cold-Chain Delivery</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={hero.ctaLink}>
                {hero.primaryCtaText} →
              </a>
              <a className="btn btn-ghost" href="#services">
                {hero.secondaryCtaText}
              </a>
            </div>
            <ul className="hero-stats">
              {stats.map((stat, i) => (
                <li key={i}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Showcase Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 24px 50px rgba(0, 168, 150, 0.18)",
                background: "var(--surface)",
              }}
            >
              <img
                src="/images/hero_showcase.png"
                alt="Reform Vital Telehealth Hero Showcase"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {/* Floating Live Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.2rem",
                left: "1.5rem",
                background: "rgba(13, 27, 42, 0.92)",
                color: "#FFF",
                backdropFilter: "blur(12px)",
                padding: "0.75rem 1.25rem",
                borderRadius: "9999px",
                border: "1px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.85rem",
                fontWeight: 800,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)" }}></span>
              <span>100% Licensed U.S. Medical Doctors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

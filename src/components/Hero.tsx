"use client";

import { useState, useEffect } from "react";
import { brandConfig } from "@/brand.config";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % brandConfig.hero.dynamicWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const currentWord = brandConfig.hero.dynamicWords[wordIndex];

  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Trustpilot Score Badge */}
        <div style={{ textAlign: "left" }}>
          <div className="hero-trustpilot-badge">
            <span style={{ color: "#10B981", fontSize: "1.2rem", fontWeight: 900 }}>★</span>
            <strong style={{ fontSize: "0.95rem" }}>{brandConfig.hero.trustpilot.score}</strong>
            <span style={{ color: "var(--color-text-muted)" }}>
              {brandConfig.hero.trustpilot.label} ({brandConfig.hero.trustpilot.reviewsCount} reviews)
            </span>
          </div>
        </div>

        <div className="hero-banner-card">
          <div className="hero-top-content">
            <h1 className="hero-heading">
              <span
                className="hero-pill-word"
                style={{
                  backgroundColor: currentWord.bg,
                  color: currentWord.color,
                }}
              >
                {currentWord.text}
              </span>
              <br />
              {brandConfig.hero.headline}
            </h1>
            <p className="hero-subtitle">{brandConfig.hero.subheadline}</p>

            <div className="hero-cta-group">
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href={brandConfig.hero.ctaLink} className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem" }}>
                  {brandConfig.hero.primaryCtaText}
                </a>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                  {brandConfig.hero.primaryCtaNote}
                </span>
              </div>
              <a href="#treatments" className="btn btn-secondary" style={{ padding: "16px 28px", fontSize: "1rem" }}>
                <span>{brandConfig.hero.secondaryCtaText}</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </a>
            </div>
          </div>

          {/* Hero Feature Highlight Card */}
          <div className="hero-card-retro">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <span className="badge badge-orange">{brandConfig.hero.cardHighlight.category}</span>
              <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "var(--color-primary)" }}>
                {brandConfig.hero.cardHighlight.price}
                <span style={{ fontSize: "0.95rem", color: "var(--color-text-muted)" }}>
                  {brandConfig.hero.cardHighlight.unit}
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "16px" }}>
              {brandConfig.hero.cardHighlight.title}
            </h3>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {brandConfig.hero.cardHighlight.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.88rem" }}>
                  <span style={{ color: "var(--color-green)", fontWeight: 900 }}>✓</span> {b}
                </li>
              ))}
            </ul>

            <a href="#quiz" className="btn btn-sky" style={{ width: "100%", justifyContent: "center" }}>
              {brandConfig.hero.cardHighlight.ctaText} →
            </a>
          </div>
        </div>

        {/* Hero Social Proof Metrics Cards */}
        <div className="hero-social-proof-grid">
          {brandConfig.hero.socialProof.map((sp, i) => (
            <div className="social-proof-card" key={i}>
              {sp.rating ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#10B981", fontSize: "1.4rem" }}>★</span>
                  <strong style={{ fontSize: "1.6rem", fontWeight: 900 }}>{sp.rating}</strong>
                  <em style={{ fontStyle: "normal", fontWeight: 700, color: "var(--color-green)" }}>{sp.ratingText}</em>
                </div>
              ) : (
                <strong className="social-proof-value">{sp.value}</strong>
              )}
              <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--color-text-muted)", whiteSpace: "pre-line" }}>
                {sp.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

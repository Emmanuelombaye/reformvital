"use client";

import { useState, useEffect } from "react";
import { brandConfig } from "@/brand.config";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % brandConfig.hero.dynamicWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentWord = brandConfig.hero.dynamicWords[wordIndex];

  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Physician Supervision Badge */}
        <div style={{ textAlign: "left" }}>
          <div className="hero-trustpilot-badge" style={{ background: "var(--color-teal-soft)", borderColor: "var(--color-teal)" }}>
            <span style={{ color: "var(--color-teal)", fontSize: "1.2rem", fontWeight: 900 }}>🛡️</span>
            <strong style={{ fontSize: "0.95rem", color: "var(--color-primary)" }}>Physician-Guided Telehealth</strong>
            <span style={{ color: "var(--color-text-muted)" }}>({brandConfig.hero.trustpilot.label})</span>
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
            <p className="hero-subtitle">{brandConfig.hero.description}</p>

            <div className="hero-cta-group">
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href={brandConfig.hero.ctaLink} className="btn btn-teal" style={{ padding: "16px 34px", fontSize: "1.08rem" }}>
                  {brandConfig.hero.primaryCtaText}
                </a>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                  {brandConfig.hero.primaryCtaNote}
                </span>
              </div>
              <a href="#services" className="btn btn-secondary" style={{ padding: "16px 28px", fontSize: "1rem" }}>
                <span>{brandConfig.hero.secondaryCtaText}</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </a>
            </div>
          </div>

          {/* Hero Feature Highlight Card */}
          <div className="hero-card-retro">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <span className="badge badge-teal">{brandConfig.hero.cardHighlight.category}</span>
              <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "var(--color-primary)" }}>
                {brandConfig.hero.cardHighlight.price}
                <span style={{ fontSize: "0.95rem", color: "var(--color-text-muted)" }}>
                  {brandConfig.hero.cardHighlight.unit}
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "16px" }}>
              {brandConfig.hero.cardHighlight.title}
            </h3>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {brandConfig.hero.cardHighlight.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.88rem" }}>
                  <span style={{ color: "var(--color-teal)", fontWeight: 900 }}>✓</span> {b}
                </li>
              ))}
            </ul>

            <a href="#quiz" className="btn btn-cyan" style={{ width: "100%", justifyContent: "center" }}>
              {brandConfig.hero.cardHighlight.ctaText} →
            </a>
          </div>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div className="pillars-grid">
          {brandConfig.pillars.map((pillar, i) => (
            <div className="pillar-card" key={i}>
              <div className="pillar-icon">
                {i === 0 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                {i === 1 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                {i === 2 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                {i === 3 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>}
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Metrics Cards */}
        <div className="hero-social-proof-grid">
          {brandConfig.hero.socialProof.map((sp, i) => (
            <div className="social-proof-card" key={i}>
              {sp.rating ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--color-teal)", fontSize: "1.4rem" }}>★</span>
                  <strong style={{ fontSize: "1.6rem", fontWeight: 900 }}>{sp.rating}</strong>
                  <em style={{ fontStyle: "normal", fontWeight: 700, color: "var(--color-teal)" }}>{sp.ratingText}</em>
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

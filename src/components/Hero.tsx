"use client";

import { brandConfig } from "@/brand.config";

export default function Hero() {
  const { hero, stats, pillars } = brandConfig;
  return (
    <section className="hero" id="qualify">
      <div className="hero-blob" aria-hidden="true" />
      <div className="container hero-inner">
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
    </section>
  );
}

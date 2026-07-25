"use client";

import { brandConfig } from "@/brand.config";

export default function Transformations() {
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-head">
          <span className="badge" style={{ marginBottom: "0.8rem" }}>PROVEN OUTCOMES</span>
          <h2>Incredible Patient Results — Built to Last</h2>
          <p>Real weight loss, metabolic health improvements, and muscle recovery outcomes supervised by board-certified physicians.</p>
        </div>

        <div className="results-grid">
          {brandConfig.transformations.map((patient, i) => (
            <div className="result-card" key={i}>
              <div className="result-visual">
                <span className="before">BEFORE</span>
                <span className="after">AFTER</span>
              </div>
              <div className="result-body">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <strong>-{patient.lbsLost} lbs</strong>
                  <span className="badge" style={{ background: "var(--accent-soft)", color: "var(--accent)", fontSize: "0.72rem" }}>
                    {patient.badge}
                  </span>
                </div>
                <div className="time" style={{ fontWeight: 700, color: "var(--primary)" }}>
                  Achieved {patient.timeframe}
                </div>
                <div className="meta" style={{ marginTop: "0.6rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 900 }}>✓</span>
                  <span>{patient.name} ({patient.verified})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

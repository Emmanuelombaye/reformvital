"use client";

import { brandConfig } from "@/brand.config";

export default function Transformations() {
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-head">
          <span className="badge" style={{ marginBottom: "0.8rem" }}>PROVEN OUTCOMES</span>
          <h2>Incredible Patient Results — Built to Last</h2>
          <p>Real weight loss, metabolic health improvements, and muscle recovery outcomes.</p>
        </div>

        <div className="results-grid">
          {brandConfig.transformations.map((patient, i) => (
            <div className="result-card" key={i}>
              <div className="result-visual">
                <span className="before">BEFORE</span>
                <span className="after">AFTER</span>
              </div>
              <div className="result-body">
                <strong>-{patient.lbsLost} lbs</strong>
                <div className="time">{patient.timeframe}</div>
                <div className="meta">✓ {patient.name} ({patient.verified})</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

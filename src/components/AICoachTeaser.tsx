"use client";

import { brandConfig } from "@/brand.config";

export default function AICoachTeaser() {
  return (
    <section className="section" id="ai-coach" style={{ background: "var(--color-bg-mint)" }}>
      <div className="container">
        <div className="ai-coach-card">
          <div>
            <span className="badge badge-teal" style={{ marginBottom: "16px", background: "var(--color-teal)", color: "#FFF" }}>
              24/7 CONTINUOUS CARE
            </span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900, marginBottom: "16px", color: "#FFF", lineHeight: 1.1 }}>
              {brandConfig.aiCoach.headline}
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "32px", lineHeight: 1.6 }}>
              {brandConfig.aiCoach.subheadline}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
              {brandConfig.aiCoach.features.map((feat, i) => (
                <div key={i} style={{ background: "rgba(255, 255, 255, 0.08)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(0, 168, 150, 0.4)" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--color-cyan)", marginBottom: "4px" }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: "0.84rem", color: "rgba(255, 255, 255, 0.75)" }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            <a href="#portal" className="btn btn-teal" style={{ padding: "14px 32px" }}>
              Explore AI Health Portal →
            </a>
          </div>

          {/* Interactive Patient Dashboard Teaser Box */}
          <div
            style={{
              background: "#FFF",
              color: "var(--color-primary)",
              border: "2px solid #070E17",
              borderRadius: "18px",
              boxShadow: "6px 8px 0px #070E17",
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "14px", borderBottom: "2px solid var(--color-bg-mint)" }}>
              <div style={{ fontWeight: 900, fontSize: "1.1rem" }}>
                Patient Metrics Dashboard
              </div>
              <span className="badge badge-teal">LIVE SYNC</span>
            </div>

            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, marginBottom: "14px", color: "var(--color-teal)" }}>
              TRACKED HEALTH PARAMETERS:
            </h4>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {brandConfig.aiCoach.dashboardMetrics.map((metric, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    padding: "8px 12px",
                    background: "var(--color-bg-mint)",
                    borderRadius: "8px",
                    border: "1px solid var(--color-teal-soft)",
                  }}
                >
                  <span style={{ color: "var(--color-teal)", fontWeight: 900 }}>📊</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

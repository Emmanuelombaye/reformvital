"use client";

import { brandConfig } from "@/brand.config";

export default function MembershipTiers() {
  return (
    <section className="section" id="memberships" style={{ background: "#FFF" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
            Transparent Membership Plans
          </span>
          <h2 className="section-title">Physician-Guided Membership Tiers</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Flat-rate monthly plans with no hidden fees, insurance hassles, or surprise bills.
          </p>
        </div>

        <div className="memberships-grid">
          {brandConfig.memberships.map((plan) => (
            <div
              key={plan.id}
              className={`membership-card ${plan.highlight ? "highlight" : ""}`}
              style={{
                position: "relative",
                padding: "2rem",
                borderRadius: "1.25rem",
                border: plan.highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
                background: plan.highlight ? "linear-gradient(180deg, #FFF 0%, #F0FDF4 100%)" : "var(--surface)",
                boxShadow: plan.highlight ? "var(--shadow-hover)" : "var(--shadow-card)",
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--accent)",
                    color: "#FFF",
                    padding: "4px 14px",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  RECOMMENDED BY DOCTORS
                </div>
              )}

              <div style={{ marginBottom: "12px" }}>
                <span className="badge">
                  {plan.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "8px", color: "var(--primary)" }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "20px", lineHeight: 1.5 }}>
                {plan.desc}
              </p>

              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "2.6rem", fontWeight: 900, color: "var(--primary)" }}>{plan.price}</span>
                <span style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{plan.period}</span>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {plan.features.map((feat, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: 600 }}>
                    <span style={{ color: "var(--accent)", fontWeight: 900 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="/start" className={`btn ${plan.highlight ? "btn-primary" : "btn-ghost"}`} style={{ width: "100%" }}>
                {plan.ctaText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { brandConfig } from "@/brand.config";

export default function MembershipTiers() {
  return (
    <section className="section" id="memberships" style={{ background: "#FFF" }}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
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
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--color-teal)",
                    color: "#FFF",
                    padding: "4px 16px",
                    borderRadius: "9999px",
                    fontSize: "0.78rem",
                    fontWeight: 900,
                    letterSpacing: "0.06em",
                    border: "2px solid #070E17",
                    boxShadow: "2px 2px 0px #070E17",
                  }}
                >
                  RECOMMENDED BY DOCTORS
                </div>
              )}

              <div style={{ marginBottom: "16px" }}>
                <span className={`badge ${plan.highlight ? "badge-teal" : "badge-navy"}`}>
                  {plan.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "8px", color: "var(--color-primary)" }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginBottom: "20px", lineHeight: 1.5 }}>
                {plan.desc}
              </p>

              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "2.6rem", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1 }}>
                  {plan.price}
                  <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {plan.features.map((feat, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-primary)",
                    }}
                  >
                    <span style={{ color: "var(--color-teal)", fontWeight: 900, fontSize: "1.1rem" }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quiz"
                className={`btn ${plan.highlight ? "btn-teal" : "btn-navy"}`}
                style={{ marginTop: "auto", width: "100%", justifyContent: "center" }}
              >
                {plan.ctaText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

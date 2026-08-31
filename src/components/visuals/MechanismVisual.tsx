import React from "react";

const pathways = [
  {
    n: 1,
    accent: "var(--accent)",
    title: "Hypothalamic Appetite Suppression",
    body: "Semaglutide and Tirzepatide support appetite signaling pathways involved in hunger and satiety.",
  },
  {
    n: 2,
    accent: "var(--accent-cyan)",
    title: "Gastric Motility Moderation",
    body: "Slows gastric emptying to extend satiety and prevent post-meal glucose spikes.",
  },
  {
    n: 3,
    accent: "var(--accent-gold)",
    title: "Adipose Fat Oxidation & Energy",
    body: "Tirzepatide's dual-action profile may enhance insulin sensitivity and support metabolic energy use.",
  },
];

export default function MechanismVisual() {
  return (
    <div
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        border: "2px solid var(--border-dark)",
        boxShadow: "var(--shadow-card)",
        background: "#0D1B2A",
        color: "#FFF",
        padding: "2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
        }}
      >
        <span className="badge" style={{ background: "var(--accent)", color: "#FFF" }}>
          MECHANISM DIAGRAM
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            fontWeight: 800,
          }}
        >
          RECEPTOR SIGNALING
        </span>
      </div>

      <h3
        style={{
          fontSize: "1.5rem",
          color: "#FFF",
          marginBottom: "1rem",
          fontWeight: 900,
        }}
      >
        Semaglutide & Tirzepatide Program Pathways
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1.2rem",
        }}
      >
        {pathways.map((step) => (
          <div
            key={step.n}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              background: "rgba(255,255,255,0.06)",
              padding: "1rem",
              borderRadius: "0.85rem",
              borderLeft: `4px solid ${step.accent}`,
            }}
          >
            <span
              className="rv-step-num"
              aria-hidden="true"
              style={{ background: step.accent }}
            >
              {step.n}
            </span>
            <div>
              <strong
                style={{
                  color: step.accent,
                  display: "block",
                  fontSize: "1rem",
                  marginBottom: "0.2rem",
                }}
              >
                {step.title}
              </strong>
              <span style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.8)" }}>
                {step.body}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

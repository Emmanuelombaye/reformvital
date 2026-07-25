import { brandConfig } from "@/brand.config";

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" style={{ background: "#FFF", borderTop: "2px solid var(--color-border-dark)", borderBottom: "2px solid var(--color-border-dark)" }}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: "12px" }}>
            Simple 3-Step Process
          </span>
          <h2 className="section-title">{brandConfig.howItWorks.headline}</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {brandConfig.howItWorks.subtitle}
          </p>
        </div>

        <div className="steps-grid">
          {brandConfig.howItWorks.steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-number" style={{ background: "var(--color-teal)", color: "#FFF" }}>
                {s.step}
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "10px", color: "var(--color-primary)" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

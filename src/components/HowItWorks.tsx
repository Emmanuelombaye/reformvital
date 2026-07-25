import { brandConfig } from "@/brand.config";

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="badge" style={{ background: "rgba(0, 180, 216, 0.2)", color: "var(--accent-cyan)", marginBottom: "0.8rem" }}>
            SIMPLE 3-STEP PROCESS
          </span>
          <h2 style={{ color: "#FFF" }}>{brandConfig.howItWorks.headline}</h2>
          <p>{brandConfig.howItWorks.subtitle}</p>
        </div>

        <div className="steps">
          {brandConfig.howItWorks.steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-label">STEP {s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

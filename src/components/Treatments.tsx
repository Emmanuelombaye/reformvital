import { brandConfig } from "@/brand.config";

export default function Treatments() {
  return (
    <section className="section" id="treatments">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="badge badge-purple" style={{ marginBottom: "12px" }}>Proven Programs</span>
          <h2 className="section-title">Personalized Treatments That Work</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Compounded prescription medications prescribed by U.S. board-certified medical providers.
          </p>
        </div>

        <div className="treatments-grid">
          {brandConfig.treatments.map((t) => (
            <div className="treatment-card" key={t.id}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
                  {t.category}
                </span>
                <span className={`badge badge-${t.badgeColor}`}>{t.badge}</span>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "6px" }}>{t.name}</h3>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-orange)", marginBottom: "14px" }}>
                {t.tagline}
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                {t.description}
              </p>

              <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "2px dashed #E5E7EB", marginBottom: "20px" }}>
                <div style={{ fontSize: "2.1rem", fontWeight: 900, color: "var(--color-primary)" }}>
                  {t.price}
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
                    {t.priceUnit}
                  </span>
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text-muted)" }}>{t.priceNote}</div>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                {t.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.84rem", fontWeight: 600 }}>
                    <span style={{ color: "var(--color-green)", fontWeight: 900 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href={t.ctaLink} className="btn btn-primary" style={{ marginTop: "auto", textAlign: "center" }}>
                {t.ctaText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

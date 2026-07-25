import { brandConfig } from "@/brand.config";

export default function Reviews() {
  return (
    <section className="section" id="reviews" style={{ background: "var(--color-sky-soft)" }}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="badge badge-sky" style={{ marginBottom: "12px" }}>Real Patient Stories</span>
          <h2 className="section-title">Results That Speak for Themselves</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Join thousands of patients across all 50 states achieving lasting results with Yucca.
          </p>
        </div>

        <div className="treatments-grid" style={{ marginTop: "40px" }}>
          {brandConfig.reviews.map((r, i) => (
            <div className="treatment-card" key={i} style={{ background: "#FFF" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <span style={{ color: "#F59E0B", fontSize: "1.1rem" }}>★★★★★</span>
                <span className="badge badge-green">{r.weightLost}</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ marginTop: "auto", fontWeight: 800, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <span>{r.name}</span>
                {r.verified && <span style={{ color: "#059669", fontSize: "0.8rem", fontWeight: 600 }}>✓ Verified Patient</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

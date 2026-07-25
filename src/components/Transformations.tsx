import { brandConfig } from "@/brand.config";

export default function Transformations() {
  return (
    <section className="section transformations-section" id="results">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="badge badge-green" style={{ marginBottom: "12px" }}>Real Transformations</span>
          <h2 className="section-title">
            Our <em style={{ fontStyle: "italic", color: "var(--color-orange)" }}>patients&rsquo; incredible results</em>
            <br />
            &mdash; built to last!
          </h2>
        </div>

        <div className="transformations-grid">
          {brandConfig.transformations.map((item, idx) => (
            <div className="transformation-card" key={idx}>
              <div className="transformation-avatar-box">
                <div
                  className="patient-avatar-circle"
                  style={{ backgroundColor: item.avatarColor || "var(--color-orange)" }}
                >
                  {item.name[0]}
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-muted)" }}>Lost</span>
                  <span style={{ color: "#10B981", fontWeight: 900 }}>↓</span>
                  <strong style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1 }}>
                    {item.lbsLost}
                  </strong>
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-muted)" }}>lbs</span>
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text-muted)", marginTop: "4px" }}>
                  {item.timeframe}
                </div>
              </div>

              <div style={{ marginTop: "auto", paddingTop: "10px", borderTop: "1.5px dashed #E5E7EB" }}>
                <strong style={{ fontSize: "0.95rem", fontWeight: 800, display: "block" }}>{item.name}</strong>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#059669" }}>✓ {item.verified}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

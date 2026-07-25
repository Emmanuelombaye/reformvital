import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "52rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>TRANSPARENT PRICING</span>
              <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>Physician-Guided Membership Tiers</h1>
              <p style={{ fontSize: "1.15rem" }}>
                Flat-rate monthly memberships covering doctor consultations, lab review, compounding pharmacy shipping, and 24/7 AI Health Coach access with no surprise fees.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Cards Grid */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
              {brandConfig.memberships.map((plan) => (
                <div
                  key={plan.id}
                  className="testimonial-card"
                  style={{
                    padding: "2.2rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    borderColor: plan.highlight ? "var(--accent)" : "var(--border)",
                    background: plan.highlight ? "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)" : "var(--surface)",
                  }}
                >
                  {plan.highlight && (
                    <span className="badge" style={{ background: "var(--accent)", color: "#FFF", marginBottom: "1rem" }}>
                      DOCTOR RECOMMENDED
                    </span>
                  )}
                  <span className="badge" style={{ marginBottom: "1rem" }}>{plan.badge}</span>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "0.4rem" }}>{plan.name}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "1.5rem" }}>{plan.desc}</p>

                  <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--primary)", marginBottom: "1.5rem" }}>
                    {plan.price}
                    <span style={{ fontSize: "1rem", color: "var(--text-muted)" }}>{plan.period}</span>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                    {plan.features.map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.92rem", fontWeight: 600 }}>
                        <span style={{ color: "var(--accent)", fontWeight: 900 }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/start" className={`btn ${plan.highlight ? "btn-primary" : "btn-ghost"}`} style={{ marginTop: "auto", width: "100%" }}>
                    {plan.ctaText} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

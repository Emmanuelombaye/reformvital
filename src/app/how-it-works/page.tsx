import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "54rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>PATIENT CARE JOURNEY</span>
              <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>How Reform Vital Works</h1>
              <p style={{ fontSize: "1.15rem" }}>
                From online medical evaluation to compounding pharmacy delivery and 24/7 AI Health Coaching, we support every step of your health optimization.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="steps" style={{ gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              {brandConfig.howItWorks.steps.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "2rem",
                    alignItems: "center",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "2rem",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      fontWeight: 900,
                    }}
                  >
                    {s.step}
                  </div>

                  <div>
                    <h3 style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.65 }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
              <a href="/start" className="btn btn-primary" style={{ padding: "1.1rem 2.5rem" }}>
                Begin Online Consultation Now →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

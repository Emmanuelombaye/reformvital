import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AICoachPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "54rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>24/7 CONTINUOUS CARE</span>
              <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>{brandConfig.aiCoach.headline}</h1>
              <p style={{ fontSize: "1.15rem" }}>
                {brandConfig.aiCoach.subheadline}
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="card-grid two" style={{ gap: "2.5rem", alignItems: "center" }}>
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>PATIENT DASHBOARD METRICS</span>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Track What Matters Most</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  Your AI Coach synchronizes with your daily logs to generate progress reports for your physician check-ins.
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {brandConfig.aiCoach.dashboardMetrics.map((m, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1rem", fontWeight: 700 }}>
                      <span style={{ color: "var(--accent)" }}>📊</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "var(--primary)", color: "#FFF", padding: "2.5rem", borderRadius: "1.25rem", boxShadow: "var(--shadow-hover)" }}>
                <span className="badge" style={{ background: "var(--accent)", color: "#FFF", marginBottom: "1rem" }}>AI ACCOUNTABILITY CHAT</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#FFF" }}>Live Coaching Demo</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.92rem" }}>
                  <div style={{ background: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "0.85rem" }}>
                    <strong style={{ color: "var(--accent-cyan)", display: "block", marginBottom: "0.2rem" }}>AI Health Coach:</strong>
                    Good morning, Sarah! Reminder to take your weekly Semaglutide injection today. Have you hit your 130g protein goal?
                  </div>
                  <div style={{ background: "rgba(0, 168, 150, 0.2)", padding: "1rem", borderRadius: "0.85rem", alignSelf: "flex-end" }}>
                    <strong style={{ color: "#FFF", display: "block", marginBottom: "0.2rem" }}>Patient:</strong>
                    Yes! Had a high protein smoothie and tracked 140g protein. Energy levels feel great!
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "0.85rem" }}>
                    <strong style={{ color: "var(--accent-cyan)", display: "block", marginBottom: "0.2rem" }}>AI Health Coach:</strong>
                    Awesome progress! You're down 3.2 lbs this week. Your monthly physician check-in report is ready for Dr. Wasef.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

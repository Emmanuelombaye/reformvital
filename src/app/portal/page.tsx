import Image from "next/image";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = brandConfig.aiCoach.dashboardMetrics;

export default function PortalPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="rv-page-hero rv-page-hero--photo rv-page-hero--dark">
          <Image
            src="/images/portal-performance.png"
            alt="Reform Vital patient performance dashboard lifestyle"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
          <div className="rv-page-hero-scrim rv-page-hero-scrim--dark" aria-hidden />
          <div className="container rv-page-hero-content" style={{ maxWidth: "46rem" }}>
            <span
              className="badge"
              style={{
                marginBottom: "0.9rem",
                background: "rgba(0,168,150,0.2)",
                color: "#5EEAD4",
                border: "1px solid rgba(94,234,212,0.35)",
              }}
            >
              PATIENT PORTAL
            </span>
            <h1>
              Your care dashboard is coming online
            </h1>
            <p>
              The Reform Vital Patient Portal will house your goals, lab trends,
              AI coach check-ins, and progress metrics between physician visits.
              While secure login is being finalized, start your clinical
              assessment to join the waitlist for portal access.
            </p>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <a href="/start" className="btn btn-primary">
                Start Assessment →
              </a>
              <a href="/ai-coach" className="btn btn-outline">
                Preview AI Coach
              </a>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)", padding: "3.5rem 0 4.5rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "40rem", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.5rem" }}>
                What you&apos;ll track in the portal
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                Built around the Reform Vital accountability model—not diagnoses,
                just measurable progress between visits.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {metrics.map((metric) => (
                <div
                  key={metric}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.9rem",
                    padding: "1.15rem 1.25rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", marginRight: "0.4rem" }}>✓</span>
                  {metric}
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: "2rem",
                fontSize: "0.92rem",
                color: "var(--text-muted)",
              }}
            >
              Questions? Email{" "}
              <a href={`mailto:${brandConfig.nav.email}`} style={{ color: "var(--accent)", fontWeight: 700 }}>
                {brandConfig.nav.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${brandConfig.nav.phone}`} style={{ color: "var(--accent)", fontWeight: 700 }}>
                {brandConfig.nav.phone}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = Object.keys(brandConfig.treatmentDetails);
  return slugs.map((slug) => ({ slug }));
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = brandConfig.treatmentDetails[slug as keyof typeof brandConfig.treatmentDetails];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Detail Hero Section */}
        <section className="hero" style={{ padding: "4rem 0 3.5rem" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "center" }}>
              <div>
                <span className="badge" style={{ marginBottom: "1rem" }}>{detail.badge}</span>
                <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>{detail.name}</h1>
                <p style={{ fontSize: "1.2rem", color: "var(--accent)", fontWeight: 700, marginBottom: "1.2rem" }}>
                  {detail.tagline}
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "2rem" }}>
                  {detail.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--primary)" }}>
                    {detail.price}
                  </div>
                  <a href="/start" className="btn btn-primary" style={{ padding: "1.1rem 2.2rem" }}>
                    Start Online Consultation →
                  </a>
                </div>

                <div style={{ fontSize: "0.86rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  * Prescriptions subject to U.S. board-certified physician evaluation & state compounding pharmacy availability.
                </div>
              </div>

              {/* Product Photography */}
              <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-hover)" }}>
                <img
                  src={detail.image}
                  alt={detail.name}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Highlights & Mechanism */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>CLINICAL FEATURES</span>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Key Program Benefits</h2>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {detail.features.map((feat, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", fontSize: "1rem", fontWeight: 600 }}>
                      <span style={{ color: "var(--accent)", fontWeight: 900, fontSize: "1.2rem" }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>RESEARCH & DOSAGE</span>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Clinical Overview</h2>

                <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.5rem", marginBottom: "1.5rem" }}>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.5rem" }}>Clinical Research Summary</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {detail.clinicalTrial}
                  </p>
                </div>

                <div style={{ background: "var(--sand)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.5rem" }}>Administration & Guidance</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {detail.howToUse}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta">
          <div className="container">
            <div className="section-head">
              <h2>Ready to Begin {detail.name}?</h2>
              <p>Complete your 5-minute online health assessment to connect with a licensed physician.</p>
              <div style={{ marginTop: "2rem" }}>
                <a href="/start" className="btn btn-primary" style={{ padding: "1.1rem 2.5rem" }}>
                  Start Physician Assessment Now →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

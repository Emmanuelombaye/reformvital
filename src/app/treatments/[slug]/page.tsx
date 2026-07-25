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
        {/* ScriptsRxDirect Style Top Hero Header */}
        <section className="hero" style={{ padding: "4rem 0 3.5rem" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span className="badge" style={{ background: "var(--accent)", color: "#FFF" }}>{detail.badge}</span>
                  <span className="badge">{detail.category}</span>
                  <span className="badge badge-cyan">U.S. DOCTOR PRESCRIBED</span>
                </div>

                <h1 style={{ fontSize: "3.2rem", marginBottom: "0.8rem" }}>{detail.name}</h1>
                <p style={{ fontSize: "1.25rem", color: "var(--accent)", fontWeight: 700, marginBottom: "1.2rem", lineHeight: 1.4 }}>
                  {detail.tagline}
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "2rem" }}>
                  {detail.description}
                </p>

                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "1.25rem",
                    padding: "1.5rem 2rem",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase" }}>
                      FLAT-RATE MEMBERSHIP
                    </div>
                    <div style={{ fontSize: "2.6rem", fontWeight: 900, color: "var(--primary)" }}>
                      {detail.price}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 700 }}>
                      ✓ Includes Doctor Consultation & Overnight Pharmacy Shipping
                    </div>
                  </div>

                  <a href="/start" className="btn btn-primary" style={{ padding: "1.1rem 2rem", fontSize: "1.05rem" }}>
                    Start Assessment →
                  </a>
                </div>

                <div style={{ fontSize: "0.84rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  * Prescriptions subject to U.S. board-certified physician approval. Formulated by state-licensed compounding pharmacies.
                </div>
              </div>

              {/* Product Photography Container */}
              <div style={{ position: "relative" }}>
                <div style={{ borderRadius: "1.5rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-hover)", background: "var(--surface)" }}>
                  <img
                    src={detail.image}
                    alt={detail.name}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                {/* Floating Pharmacy Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1rem",
                    left: "1.5rem",
                    background: "rgba(13, 27, 42, 0.94)",
                    color: "#FFF",
                    backdropFilter: "blur(12px)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.84rem",
                    fontWeight: 800,
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>🛡️</span>
                  <span>50-State Certified Compounding Pharmacy Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ScriptsRxDirect Key Benefits Highlights Grid */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="section-head">
              <span className="badge" style={{ marginBottom: "0.8rem" }}>KEY PROGRAM BENEFITS</span>
              <h2>Why Doctors Prescribe {detail.name}</h2>
              <p>Clinical advantages, active ingredient mechanisms, and program support.</p>
            </div>

            <div className="card-grid two" style={{ gap: "2rem" }}>
              <div className="testimonial-card">
                <span className="badge" style={{ marginBottom: "0.8rem" }}>CLINICAL EFFICACY</span>
                <h3>Targeted Biomarker Action</h3>
                <p style={{ lineHeight: 1.65 }}>
                  Mimics endogenous peptide signaling to regulate appetite, enhance nutrient partitioning, and accelerate natural tissue repair pathways.
                </p>
              </div>

              <div className="testimonial-card">
                <span className="badge" style={{ marginBottom: "0.8rem" }}>PHYSICIAN OVERSIGHT</span>
                <h3>100% Board-Certified Care</h3>
                <p style={{ lineHeight: 1.65 }}>
                  Every prescription is reviewed and monitored by licensed U.S. medical directors with continuous quarterly lab follow-up.
                </p>
              </div>

              <div className="testimonial-card">
                <span className="badge" style={{ marginBottom: "0.8rem" }}>24/7 AI COACHING</span>
                <h3>Continuous Accountability</h3>
                <p style={{ lineHeight: 1.65 }}>
                  Integrated with the Reform Vital AI Health Coach for daily habit tracking, protein targets, and weekly progress reports.
                </p>
              </div>

              <div className="testimonial-card">
                <span className="badge" style={{ marginBottom: "0.8rem" }}>COLD-CHAIN SHIPPING</span>
                <h3>Freshly Compounded Delivery</h3>
                <p style={{ lineHeight: 1.65 }}>
                  Direct expedited temperature-controlled delivery containing sterile injection supplies, syringes, and prep pads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ScriptsRxDirect Style Medication Comparison Table */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="section-head">
              <span className="badge" style={{ marginBottom: "0.8rem" }}>TRANSPARENT COMPARISON</span>
              <h2>Reform Vital vs Brand Name Alternatives</h2>
              <p>See how our physician-guided compounding protocol compares to traditional retail options.</p>
            </div>

            <div style={{ overflowX: "auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "1.25rem", boxShadow: "var(--shadow-card)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ background: "var(--primary)", color: "#FFF" }}>
                    <th style={{ padding: "1.2rem", fontWeight: 800 }}>Feature / Service</th>
                    <th style={{ padding: "1.2rem", fontWeight: 800, background: "var(--accent)" }}>Reform Vital {detail.name}</th>
                    <th style={{ padding: "1.2rem", fontWeight: 800 }}>Retail Brand Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 700 }}>Monthly Cost</td>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 900, color: "var(--accent)" }}>{detail.price} (Flat Rate)</td>
                    <td style={{ padding: "1rem 1.2rem", color: "var(--text-muted)" }}>$1,000 – $1,350/mo</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 700 }}>U.S. Doctor Evaluation</td>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 800, color: "var(--accent)" }}>✓ Included (100% Online)</td>
                    <td style={{ padding: "1rem 1.2rem", color: "var(--text-muted)" }}>Separate Office Copay Required</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 700 }}>Syringes & Injection Supplies</td>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 800, color: "var(--accent)" }}>✓ Free Cold-Chain Delivery</td>
                    <td style={{ padding: "1rem 1.2rem", color: "var(--text-muted)" }}>Pharmacy Pickup Only</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 700 }}>24/7 AI Health & Habit Coach</td>
                    <td style={{ padding: "1rem 1.2rem", fontWeight: 800, color: "var(--accent)" }}>✓ Included Free</td>
                    <td style={{ padding: "1rem 1.2rem", color: "var(--text-muted)" }}>✕ Not Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dosing & Administration Guide */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>CLINICAL RESEARCH SUMMARY</span>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Trial & Efficacy Data</h3>
                <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
                  <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65 }}>
                    {detail.clinicalTrial}
                  </p>
                </div>
              </div>

              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>ADMINISTRATION GUIDE</span>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Dosing & Storage</h3>
                <div style={{ background: "var(--sand)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
                  <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1rem", lineHeight: 1.65 }}>
                    {detail.howToUse}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Converting CTA Banner */}
        <section className="cta">
          <div className="container">
            <div className="section-head">
              <h2>Get Started with {detail.name} Today</h2>
              <p>Answer a short medical intake questionnaire to connect with a licensed physician.</p>
              <div style={{ marginTop: "2rem" }}>
                <a href="/start" className="btn btn-primary" style={{ padding: "1.15rem 2.6rem", fontSize: "1.08rem" }}>
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

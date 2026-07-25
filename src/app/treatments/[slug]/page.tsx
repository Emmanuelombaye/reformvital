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

  // Section specific image paths
  const heroImage = detail.image || "/images/tirzepatide_hero.png";
  const mechanismImage = "/images/mechanism_glp1.png";
  const suppliesImage = "/images/dosing_supplies.png";
  const doctorImage = "/images/doctor_portrait.png";

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
                      ✓ Includes Doctor Consultation & Free Pharmacy Shipping
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
                    src={heroImage}
                    alt={detail.name}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                {/* Floating Pharmacy Seal Badge */}
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

        {/* Mechanism of Action Section Supported with Visual Image */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>HOW IT WORKS IN THE BODY</span>
                <h2 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>Mechanism of Action</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {detail.name} operates through targeted receptor signaling. It regulates hunger pathways, enhances cellular insulin sensitivity, and promotes natural metabolic fat oxidation.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.2rem" }}>
                    <h4 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.3rem" }}>1. Receptor Binding & Activation</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>Selective stimulation of metabolic receptors to reduce cravings and appetite triggers.</p>
                  </div>
                  <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.2rem" }}>
                    <h4 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.3rem" }}>2. Sustained Energy & Metabolism</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>Optimizes glucose metabolism while preserving lean muscle tissue during weight reduction.</p>
                  </div>
                </div>
              </div>

              {/* Mechanism Illustration Container */}
              <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-card)" }}>
                <img
                  src={mechanismImage}
                  alt="Mechanism of Action Illustration"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ScriptsRxDirect Dosing & Supplies Guide Section */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "3.5rem", alignItems: "center" }}>
              {/* Dosing Supplies Image */}
              <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-card)" }}>
                <img
                  src={suppliesImage}
                  alt="Dosing Supplies Kit"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>INJECTION & DOSING GUIDE</span>
                <h2 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>Simple Weekly Administration</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  Every shipment includes your compounded medication vial, sterile insulin syringes, alcohol prep pads, and full dosing instructions.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--surface)", padding: "1rem 1.25rem", borderRadius: "0.85rem", border: "1px solid var(--border)" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", color: "#FFF", display: "grid", placeItems: "center", fontWeight: 900 }}>1</div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: 800 }}>Clean & Prepare Site</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Wipe the injection area (abdomen or thigh) with an alcohol prep swab.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--surface)", padding: "1rem 1.25rem", borderRadius: "0.85rem", border: "1px solid var(--border)" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", color: "#FFF", display: "grid", placeItems: "center", fontWeight: 900 }}>2</div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: 800 }}>Subcutaneous Dosing</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{detail.howToUse}</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--surface)", padding: "1rem 1.25rem", borderRadius: "0.85rem", border: "1px solid var(--border)" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", color: "#FFF", display: "grid", placeItems: "center", fontWeight: 900 }}>3</div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: 800 }}>Log Progress in AI App</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Track weekly weight, protein, and water metrics in your 24/7 AI Health Coach dashboard.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ScriptsRxDirect Comparison Table */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="section-head">
              <span className="badge" style={{ marginBottom: "0.8rem" }}>TRANSPARENT COMPARISON</span>
              <h2>Reform Vital vs Brand Name Retail Options</h2>
              <p>Compare our physician-guided compounding membership against traditional retail options.</p>
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

        {/* Doctor Advisory Board Feature */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "3rem", alignItems: "center" }}>
              <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-card)" }}>
                <img
                  src={doctorImage}
                  alt="Doctor Advisory Board"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>PHYSICIAN-SUPERVISED CARE</span>
                <h2 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>Guided by Board-Certified MDs</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Our medical directors evaluate your health profile, order necessary biomarker labs, and tailor your compounded dosage schedule for safe, long-term success.
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "1rem 1.25rem", borderRadius: "0.85rem" }}>
                    <strong style={{ display: "block", color: "var(--primary)", fontSize: "1.1rem" }}>Dr. Michael Wasef, MD</strong>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 700 }}>Internal Medicine Director</span>
                  </div>
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "1rem 1.25rem", borderRadius: "0.85rem" }}>
                    <strong style={{ display: "block", color: "var(--primary)", fontSize: "1.1rem" }}>Dr. Andrew Sakla, DO</strong>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 700 }}>Regenerative Care Advisory</span>
                  </div>
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

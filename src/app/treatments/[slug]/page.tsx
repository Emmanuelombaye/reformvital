import Image from "next/image";
import {
  getAllTreatmentSlugs,
  resolveTreatmentDetail,
} from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MechanismVisual from "@/components/visuals/MechanismVisual";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const slugImageMap: Record<string, string> = {
  semaglutide: "/images/Tirzepatide.png",
  tirzepatide: "/images/Tirzepatide.png",
  retatrutide: "/images/Tirzepatide.png",
  trt: "/images/TRTTestosterone.png",
  "womens-hormones": "/images/TRTTestosterone.png",
  "hcg-enclomiphene": "/images/TRTTestosterone.png",
  sermorelin: "/images/Sermorelin.png",
  tesamorelin: "/images/Sermorelin.png",
  "cjc-ipamorelin": "/images/Sermorelin.png",
  "bpc-157": "/images/Recovery & Tissue.png",
  "tb-500": "/images/Recovery & Tissue.png",
  kpv: "/images/Recovery & Tissue.png",
  "nad-plus": "/images/NAD+ Cellular.png",
  "mots-c": "/images/NAD+ Cellular.png",
  "ghk-cu": "/images/NAD+ Cellular.png",
  semax: "/images/Neuropeptide.png",
  selank: "/images/Neuropeptide.png",
  "pt-141": "/images/Bremelanotide.png",
  tadalafil: "/images/Bremelanotide.png",
  "hair-restoration": "/images/Minoxidil.png",
  "metabolic-panel": "/images/why-evidence.png",
  "preventive-wellness": "/images/longevity_nad.png",
  "body-composition": "/images/portal-performance.png",
};

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = resolveTreatmentDetail(slug);

  if (!detail) {
    notFound();
  }

  const heroImage =
    slugImageMap[slug] || detail.image || "/images/Tirzepatide.png";

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" style={{ padding: "4rem 0 3.5rem" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    className="badge"
                    style={{ background: "var(--accent)", color: "#FFF" }}
                  >
                    {detail.badge}
                  </span>
                  <span className="badge">{detail.category}</span>
                  <span className="badge badge-cyan">U.S. DOCTOR PRESCRIBED</span>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                    marginBottom: "0.8rem",
                    fontWeight: 900,
                  }}
                >
                  {detail.name}
                </h1>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                    marginBottom: "1.2rem",
                    lineHeight: 1.4,
                  }}
                >
                  {detail.tagline}
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    marginBottom: "2rem",
                  }}
                >
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
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      FLAT-RATE MEMBERSHIP
                    </div>
                    <div
                      style={{
                        fontSize: "2.6rem",
                        fontWeight: 900,
                        color: "var(--primary)",
                      }}
                    >
                      {detail.price}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--accent)",
                        fontWeight: 700,
                      }}
                    >
                      ✓ Includes Doctor Consultation & Free Pharmacy Shipping
                    </div>
                  </div>

                  <a
                    href="/start"
                    className="btn btn-primary"
                    style={{ padding: "1.1rem 2rem", fontSize: "1.05rem" }}
                  >
                    Start Assessment →
                  </a>
                </div>

                <div
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                  }}
                >
                  * Prescriptions subject to U.S. board-certified physician
                  approval. Formulated by 503A state-licensed compounding
                  pharmacies.
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  border: "2px solid rgba(0, 168, 150, 0.4)",
                  boxShadow: "0 20px 45px rgba(13, 27, 42, 0.2)",
                  background: "var(--surface)",
                }}
              >
                <Image
                  src={heroImage}
                  alt={`${detail.name} Prescription Protocol`}
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                  priority={true}
                  quality={90}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    right: "1rem",
                    background: "rgba(7, 14, 23, 0.85)",
                    backdropFilter: "blur(10px)",
                    padding: "0.85rem 1.2rem",
                    borderRadius: "0.85rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", fontWeight: 800 }}>
                    503A CERTIFIED COMPOUNDED FORMULATION
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent-cyan)",
                      fontWeight: 800,
                    }}
                  >
                    OVERNIGHT SHIPPING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          style={{ background: "var(--bg)", padding: "3.5rem 0" }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                marginBottom: "1.5rem",
              }}
            >
              What&apos;s Included
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {detail.features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.85rem",
                    padding: "1.1rem 1.25rem",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ color: "var(--accent)", marginRight: "0.45rem" }}>
                    ✓
                  </span>
                  {feature}
                </div>
              ))}
            </div>
            <p
              style={{
                marginTop: "1.5rem",
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              {detail.clinicalTrial}
            </p>
          </div>
        </section>

        <section
          className="section"
          style={{ background: "var(--surface)", padding: "4.5rem 0" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>
                  HOW IT WORKS IN THE BODY
                </span>
                <h2
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    marginBottom: "1rem",
                  }}
                >
                  Mechanism of Action
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {detail.name} operates through targeted receptor signaling. It
                  regulates metabolic pathways, enhances cellular energy, and
                  promotes optimal physiological performance.
                </p>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  {[
                    {
                      n: 1,
                      title: "Receptor Binding & Activation",
                      body: "Selective stimulation of metabolic receptors to regulate systemic hormone and energy signaling.",
                    },
                    {
                      n: 2,
                      title: "Sustained Energy & Metabolism",
                      body: "Optimizes physiological metabolism while preserving lean muscle tissue during treatment.",
                    },
                  ].map((step) => (
                    <div
                      key={step.n}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        padding: "1.2rem",
                      }}
                    >
                      <span className="rv-step-num" aria-hidden="true">
                        {step.n}
                      </span>
                      <div>
                        <h4
                          style={{
                            fontSize: "1.1rem",
                            color: "var(--primary)",
                            marginBottom: "0.3rem",
                            fontWeight: 800,
                          }}
                        >
                          {step.title}
                        </h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <MechanismVisual />
            </div>
          </div>
        </section>

        <section
          className="section"
          style={{ background: "var(--bg)", padding: "4.5rem 0" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>
                  DOSING GUIDE
                </span>
                <h2
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    marginBottom: "1rem",
                  }}
                >
                  Simple Administration
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  Every shipment includes your compounded medication, sterile
                  supplies when required, and step-by-step physician dosing
                  instructions.
                </p>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  {[
                    {
                      n: 1,
                      title: "Clean & Prepare",
                      body: "Follow the hygiene steps on your dosing card before each dose.",
                    },
                    {
                      n: 2,
                      title: "Follow Your Protocol",
                      body: detail.howToUse,
                    },
                    {
                      n: 3,
                      title: "Log Progress with AI Coach",
                      body: "Track weekly metrics in your 24/7 AI Health Coach dashboard.",
                    },
                  ].map((step) => (
                    <div
                      key={step.n}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                        background: "var(--surface)",
                        padding: "1rem 1.25rem",
                        borderRadius: "0.85rem",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span className="rv-step-num" aria-hidden="true">
                        {step.n}
                      </span>
                      <div>
                        <h4 style={{ fontSize: "1rem", fontWeight: 800 }}>
                          {step.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>
                  MEDICAL SUPERVISION
                </span>
                <h2
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    marginBottom: "1rem",
                  }}
                >
                  Board-Certified Physician Oversight
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  Every prescription is reviewed and approved by U.S.
                  board-certified physicians, led by Medical Directors Dr.
                  Michael Wasef, MD & Dr. Andrew Sakla, DO.
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <div
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.85rem",
                      padding: "1rem",
                      flex: 1,
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        color: "var(--primary)",
                      }}
                    >
                      Dr. Michael Wasef, MD
                    </strong>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--accent)",
                        fontWeight: 700,
                      }}
                    >
                      Medical Director
                    </span>
                  </div>
                  <div
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.85rem",
                      padding: "1rem",
                      flex: 1,
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        color: "var(--primary)",
                      }}
                    >
                      Dr. Andrew Sakla, DO
                    </strong>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--accent)",
                        fontWeight: 700,
                      }}
                    >
                      Medical Director
                    </span>
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

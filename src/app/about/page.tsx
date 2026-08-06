import Image from "next/image";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "54rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>ABOUT REFORM VITAL</span>
              <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>Modern Medicine. Personalized Health. Real Results.</h1>
              <p style={{ fontSize: "1.15rem" }}>
                Reform Vital Health LLC bridges clinical medical research, board-certified physician oversight, and cutting-edge peptide optimization.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="card-grid two" style={{ gap: "3rem", marginBottom: "4rem" }}>
              <div>
                <span className="badge" style={{ marginBottom: "0.8rem" }}>OUR MISSION</span>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Elevating Patient Telehealth</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                  Reform Vital differentiates itself from standard telehealth providers by pairing licensed medical oversight with continuous 24/7 AI accountability coaching, health metrics tracking, and white-glove compounding delivery.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                  We focus strictly on measurable health outcomes rather than quick product sales, ensuring long-term metabolic health, tissue repair, and longevity.
                </p>
              </div>

              <div style={{ background: "var(--sand)", padding: "2.5rem", borderRadius: "1.25rem", border: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Entity & Business References</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "0.95rem" }}>
                  <li><strong>Legal Entity:</strong> {brandConfig.fullName}</li>
                  <li><strong>Legal Name:</strong> {brandConfig.legalOwner}</li>
                  <li><strong>Official Email:</strong> {brandConfig.nav.email}</li>
                  <li><strong>Business Phone:</strong> {brandConfig.nav.phone}</li>
                  <li><strong>Compounding Quality:</strong> 50-State Certified U.S. Compounding Pharmacies</li>
                </ul>
              </div>
            </div>

            {/* Medical Directors Section */}
            <div>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>BOARD-CERTIFIED PHYSICIANS</span>
              <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>Medical Advisory Team</h2>

              <div className="card-grid two" style={{ gap: "2rem" }}>
                {brandConfig.medicalTeam.map((doctor) => (
                  <div className="testimonial-card" key={doctor.name}>
                    <div style={{ borderRadius: "0.85rem", overflow: "hidden", marginBottom: "1rem" }}>
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={480}
                        height={360}
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                      />
                    </div>
                    <span className="badge" style={{ marginBottom: "0.8rem" }}>Board-Certified</span>
                    <h3>{doctor.name}</h3>
                    <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.8rem" }}>
                      {doctor.title}
                    </p>
                    <p>{doctor.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

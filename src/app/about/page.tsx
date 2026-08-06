import Image from "next/image";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="rv-page-hero rv-page-hero--photo">
          <Image
            src="/images/about-villa.png"
            alt="Reform Vital lifestyle of personalized wellness"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="rv-page-hero-scrim" aria-hidden />
          <div className="container rv-page-hero-content">
            <span className="badge" style={{ marginBottom: "0.8rem" }}>ABOUT REFORM VITAL</span>
            <h1>Modern Medicine. Personalized Health. Real Results.</h1>
            <p>
              Reform Vital Health LLC bridges clinical medical research, board-certified physician oversight, and cutting-edge peptide optimization.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="card-grid two" style={{ gap: "3rem", marginBottom: "4rem", alignItems: "center" }}>
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

              <div className="rv-about-side-photo">
                <Image
                  src="/images/about-longevity.png"
                  alt="Longevity lifestyle with Reform Vital"
                  width={720}
                  height={480}
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "1.25rem" }}
                />
              </div>
            </div>

            <div className="card-grid two" style={{ gap: "2rem", marginBottom: "4rem" }}>
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
              <div className="rv-about-side-photo">
                <Image
                  src="/images/member-renew.png"
                  alt="Clinical renewal suite"
                  width={720}
                  height={480}
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "1.25rem" }}
                />
              </div>
            </div>

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

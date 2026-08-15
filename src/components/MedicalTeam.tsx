import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function MedicalTeam() {
  const { medicalTeam } = brandConfig;

  return (
    <section className="rv-medical-team" id="medical-team">
      <div className="container">
        <div className="rv-medical-team-head section-head" data-animate="rise">
          <span className="rv-medical-team-eyebrow">BOARD-CERTIFIED PHYSICIANS</span>
          <h2>Meet Your Medical Team</h2>
          <p>
            Licensed U.S. providers with credentials, specialties, and experience—building
            the trust every concierge patient deserves.
          </p>
        </div>

        <div className="rv-medical-team-grid">
          {medicalTeam.map((doctor, i) => (
            <article
              key={doctor.name}
              className="rv-medical-team-card"
              data-animate="tilt-left"
              data-delay={String(i * 120)}
            >
              <div className="rv-medical-team-photo">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={480}
                  style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "0.85rem" }}
                />
              </div>
              <span className="rv-medical-team-badge">{doctor.credentials}</span>
              <h3>{doctor.name}</h3>
              <p className="rv-medical-team-title">{doctor.title}</p>
              <p className="rv-medical-team-specialty">{doctor.specialty}</p>
              <p className="rv-medical-team-bio">{doctor.bio}</p>
              <a href="/about" className="rv-resource-cta">
                View full profile →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

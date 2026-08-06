import { brandConfig } from "@/brand.config";

export default function PatientJourney() {
  const { headline, subtitle, steps } = brandConfig.patientJourney;

  return (
    <section className="rv-journey" id="patient-journey">
      <div className="container">
        <div className="rv-journey-head section-head" data-animate="rise">
          <span className="rv-journey-eyebrow">YOUR PATH TO OPTIMIZATION</span>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-journey-track" data-animate="rise" data-delay="120">
          <div className="rv-journey-line" aria-hidden />
          {steps.map((step, i) => (
            <div key={step.label} className="rv-journey-step">
              <div className="rv-journey-dot">
                <span>{i + 1}</span>
              </div>
              <div className="rv-journey-copy">
                <h3>{step.label}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

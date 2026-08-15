import { brandConfig } from "@/brand.config";

export default function PatientJourney() {
  const { headline, subtitle, steps } = brandConfig.patientJourney;
  const words = headline.trim().split(/\s+/);
  const emphasis = words.pop() ?? "";
  const lead = words.join(" ");

  return (
    <section className="rv-journey" id="patient-journey">
      <div className="container">
        <div className="rv-journey-panel" data-animate="peak-fade">
          <div className="rv-journey-head">
            <p className="rv-journey-eyebrow">Your path to optimization</p>
            <h2>
              {lead} <em>{emphasis}</em>
            </h2>
            <p className="rv-journey-sub">{subtitle}</p>
          </div>

          <ol className="rv-journey-track">
            {steps.map((step, i) => (
              <li key={step.label} className="rv-journey-step">
                <div className="rv-journey-step__n" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="rv-journey-step__body">
                  <h3>{step.label}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rv-journey-cta">
            <a href="/start" className="btn btn-primary">
              Start my assessment →
            </a>
            <a href="/how-it-works" className="rv-journey-cta__link">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

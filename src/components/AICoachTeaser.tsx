import { brandConfig } from "@/brand.config";

export default function AICoachTeaser() {
  const { headline, subheadline, features } = brandConfig.aiCoach;

  return (
    <section className="rv-script-section rv-script-ai" id="ai-coach">
      <div className="container rv-script-ai__grid">
        <div className="rv-script-ai__copy">
          <p className="rv-script-eyebrow">AI Health Coach</p>
          <h2>{headline}</h2>
          <p>{subheadline}</p>
          <ul className="rv-script-ai__features">
            {features.map((feat) => (
              <li key={feat.title}>
                <strong>{feat.title}</strong>
                <span>{feat.desc}</span>
              </li>
            ))}
          </ul>
          <div className="rv-script-section__foot rv-script-section__foot--left">
            <a href="/ai-coach" className="rv-script-btn rv-script-btn--primary">
              Explore AI Coach →
            </a>
          </div>
        </div>

        <div className="rv-script-ai__panel">
          <p className="rv-script-ai__sample-label">Sample interface — not a real patient record</p>
          <div className="rv-script-ai__chat">
            <div className="rv-script-ai__bubble rv-script-ai__bubble--coach">
              <strong>AI Accountability Coach</strong>
              <p>Reminder: log your weekly check-in and dose schedule in the portal.</p>
            </div>
            <div className="rv-script-ai__bubble rv-script-ai__bubble--user">
              <strong>Patient log (example)</strong>
              <p>Check-in completed. Trends saved for licensed provider review.</p>
            </div>
            <div className="rv-script-ai__bubble rv-script-ai__bubble--coach">
              <strong>AI Accountability Coach</strong>
              <p>This coach organizes habits and metrics—it does not diagnose or prescribe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

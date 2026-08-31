import { brandConfig } from "@/brand.config";

export default function MemberExperience() {
  const { headline, subtitle, inclusions } = brandConfig.memberExperience;

  return (
    <section className="rv-script-section rv-script-member" id="member-experience">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Member experience</p>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-script-benefits rv-script-benefits--compact">
          {inclusions.map((item) => (
            <article key={item.label} className="rv-script-benefits__card">
              <span className="rv-script-benefits__check" aria-hidden>✓</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="rv-script-section__foot">
          <a href="/memberships" className="rv-script-btn rv-script-btn--secondary">
            Compare membership tiers
          </a>
          <a href="/start" className="rv-script-btn rv-script-btn--primary">
            Start assessment →
          </a>
        </div>
      </div>
    </section>
  );
}

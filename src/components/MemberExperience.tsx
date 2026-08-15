import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function MemberExperience() {
  const { headline, subtitle, inclusions } = brandConfig.memberExperience;

  return (
    <section className="rv-member-exp" id="member-experience">
      <div className="container">
        <div className="rv-member-exp-head section-head" data-animate="rise">
          <span className="rv-member-exp-eyebrow">MEMBER EXPERIENCE</span>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-member-exp-grid">
          {inclusions.map((item, i) => (
            <div
              key={item.label}
              className="rv-member-exp-item"
              data-animate="rise"
              data-delay={String(i * 80)}
            >
              {"image" in item && item.image ? (
                <div className="rv-member-exp-photo">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 92vw, 33vw"
                    className="rv-member-exp-photo__img"
                  />
                </div>
              ) : null}
              <div className="rv-member-exp-body">
                <span className="rv-member-exp-check" aria-hidden>✓</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rv-member-exp-cta" data-animate="bounce">
          <a href="/memberships" className="btn btn-outline">
            Compare membership tiers
          </a>
          <a href="/start" className="btn btn-primary">
            Begin My Wellness Journey →
          </a>
        </div>
      </div>
    </section>
  );
}

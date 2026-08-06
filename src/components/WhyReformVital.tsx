import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function WhyReformVital() {
  const { headline, subtitle, pillars } = brandConfig.whyReformVital;

  return (
    <section className="rv-why" id="why-reform-vital">
      <div className="container">
        <div className="rv-why-head section-head" data-animate="rise">
          <span className="rv-why-eyebrow">CONCIERGE HEALTHCARE</span>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-why-grid">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="rv-why-card"
              data-animate="tilt-left"
              data-delay={String(i * 100)}
              data-tilt
            >
              {"image" in pillar && pillar.image ? (
                <div className="rv-why-photo">
                  <Image
                    src={pillar.image}
                    alt=""
                    width={400}
                    height={280}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ) : null}
              <span className="rv-why-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

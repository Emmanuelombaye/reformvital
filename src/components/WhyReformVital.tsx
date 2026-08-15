import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function WhyReformVital() {
  const { headline, subtitle, pillars } = brandConfig.whyReformVital;

  return (
    <section className="rv-why" id="why-reform-vital">
      <div className="container">
        <div className="rv-why-head section-head" data-animate="peak-fade">
          <span className="rv-why-eyebrow">CONCIERGE HEALTHCARE</span>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-why-grid">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="rv-why-card"
              data-animate="peak-fade"
              data-delay={String(i * 80)}
              data-tilt
            >
              {"image" in pillar && pillar.image ? (
                <div className="rv-why-photo">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 25vw"
                    className="rv-why-photo__img"
                    quality={65}
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="rv-why-body">
                <span className="rv-why-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

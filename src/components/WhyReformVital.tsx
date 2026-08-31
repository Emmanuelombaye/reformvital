import { brandConfig } from "@/brand.config";

export default function WhyReformVital() {
  const { headline, subtitle, pillars } = brandConfig.whyReformVital;

  return (
    <section className="rv-script-section rv-script-why" id="why-reform-vital">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Why Reform Vital</p>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-script-benefits">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rv-script-benefits__card">
              <span className="rv-script-benefits__check" aria-hidden>✓</span>
              <div>
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

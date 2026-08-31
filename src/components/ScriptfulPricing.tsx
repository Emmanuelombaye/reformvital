import { brandConfig } from "@/brand.config";

export default function ScriptfulPricing() {
  const { pricingPromise } = brandConfig;

  return (
    <section className="rv-script-pricing" data-animate="peak-fade">
      <div className="container rv-script-pricing__inner">
        <div className="rv-script-pricing__copy">
          <p className="rv-script-eyebrow">Pricing promise</p>
          <h2>{pricingPromise.headline}</h2>
          <p>{pricingPromise.body}</p>
        </div>
        <div className="rv-script-pricing__card">
          <p className="rv-script-pricing__label">Not included unless stated</p>
          <ul>
            {pricingPromise.exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

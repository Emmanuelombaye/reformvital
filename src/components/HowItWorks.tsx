import Link from "next/link";
import { brandConfig } from "@/brand.config";

export default function HowItWorks() {
  const { headline, subtitle, steps } = brandConfig.howItWorks;

  return (
    <section className="rv-script-section rv-script-section--sand" id="how-it-works">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">How it works</p>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-script-enrollment__grid">
          {steps.map((step) => (
            <article key={step.step} className="rv-script-enrollment__step">
              <span className="rv-script-enrollment__num">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="rv-script-section__foot">
          <Link href="/treatments" className="rv-script-btn rv-script-btn--primary">
            Explore treatments →
          </Link>
          <Link href="/how-it-works" className="rv-script-btn rv-script-btn--secondary">
            Full process details
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/brand.config";

const guaranteeItems = [
  {
    title: "Licensed U.S. providers",
    desc: "Consultations and follow-ups are conducted by licensed clinicians—not automated checkout alone.",
  },
  {
    title: "503A compounding partners",
    desc: "Medications are dispensed through licensed compounding pharmacies where clinically appropriate.",
  },
  {
    title: "Discreet shipping",
    desc: "Standard program shipping is included unless expedited options are selected separately.",
  },
  {
    title: "Transparent membership terms",
    desc: "Pause or cancel according to your plan terms—no hidden contracts buried in fine print.",
  },
];

export default function MembershipTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const plans = brandConfig.memberships;
  const enrollmentSteps = brandConfig.howItWorks.steps;

  return (
    <section className="rv-script-section rv-script-memberships" id="memberships">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Membership plans</p>
          <h2>Essentials · Performance · Elite</h2>
          <p>
            Flat-rate tiers for Semaglutide and Tirzepatide weight-management programs—physician
            review and program support included where stated.
          </p>

          <div className="rv-script-toggle" role="group" aria-label="Billing cycle">
            <button
              type="button"
              className={billingCycle === "monthly" ? "is-active" : undefined}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={billingCycle === "quarterly" ? "is-active" : undefined}
              onClick={() => setBillingCycle("quarterly")}
            >
              Quarterly · Save 20%
            </button>
          </div>
        </div>

        <div className="rv-script-plans">
          {plans.map((plan) => {
            const displayPrice =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;

            return (
              <article
                key={plan.id}
                className={`rv-script-plans__card${plan.highlight ? " rv-script-plans__card--featured" : ""}`}
              >
                <span className="rv-script-plans__badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p className="rv-script-plans__focus">Focus: {plan.focus}</p>
                <p className="rv-script-plans__desc">{plan.desc}</p>

                <div className="rv-script-plans__price">
                  <span className="rv-script-plans__amount">${displayPrice}</span>
                  <span className="rv-script-plans__period">/ month</span>
                  <span className="rv-script-plans__billing">
                    {billingCycle === "quarterly"
                      ? "Billed quarterly (20% savings applied)"
                      : "Billed monthly · Provider consultation included"}
                  </span>
                </div>

                <ul className="rv-script-plans__features">
                  {plan.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>

                <Link href="/start" className="rv-script-btn rv-script-btn--primary rv-script-plans__cta">
                  {plan.ctaText} →
                </Link>
              </article>
            );
          })}
        </div>

        <div className="rv-script-enrollment">
          <div className="rv-script-section__head rv-script-section__head--left">
            <p className="rv-script-eyebrow">Enrollment pathway</p>
            <h3>{brandConfig.howItWorks.headline}</h3>
            <p>{brandConfig.howItWorks.subtitle}</p>
          </div>

          <div className="rv-script-enrollment__grid">
            {enrollmentSteps.map((step) => (
              <article key={step.step} className="rv-script-enrollment__step">
                <span className="rv-script-enrollment__num">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="rv-script-section__foot">
            <Link href="/start" className="rv-script-btn rv-script-btn--primary">
              Begin assessment →
            </Link>
          </div>
        </div>

        <div className="rv-script-guarantee">
          <div className="rv-script-section__head">
            <p className="rv-script-eyebrow">Included with every plan</p>
            <h3>Reform Vital care standards</h3>
          </div>
          <div className="rv-script-safety__grid">
            {guaranteeItems.map((item) => (
              <div key={item.title} className="rv-script-safety__card">
                <span aria-hidden>✓</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

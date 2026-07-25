"use client";

import { brandConfig } from "@/brand.config";

export default function FAQAccordion() {
  return (
    <section className="section" id="faq" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head">
          <span className="badge" style={{ marginBottom: "0.8rem" }}>WE'VE GOT YOU</span>
          <h2>Frequently Asked Questions</h2>
          <p>You have questions, we have answers regarding Reform Vital telehealth treatments.</p>
        </div>

        <div style={{ maxWidth: "44rem" }}>
          {brandConfig.faqs.map((faq, i) => (
            <details className="faq-item" key={i}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

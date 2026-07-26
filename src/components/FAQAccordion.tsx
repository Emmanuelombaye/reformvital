"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rv-faq" id="faq">
      <div className="rv-faq-atmosphere" aria-hidden data-parallax="0.1" />

      <div className="container rv-faq-layout">
        <div className="rv-faq-intro" data-animate="tilt-left" data-delay="0">
          <span className="rv-faq-eyebrow">WE&apos;VE GOT YOU</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Clear answers on physician care, compounding, memberships, AI coaching,
            and how Reform Vital works—before you start your assessment.
          </p>

          <div className="rv-faq-support">
            <p className="rv-faq-support-label">Still need help?</p>
            <a href={`mailto:${brandConfig.nav.email}`}>{brandConfig.nav.email}</a>
            <a href={`tel:${brandConfig.nav.phone}`}>{brandConfig.nav.phone}</a>
            <a href="/start" className="btn btn-primary rv-faq-cta">
              Start Assessment →
            </a>
          </div>
        </div>

        <div className="rv-faq-list" role="list">
          {brandConfig.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`rv-faq-item${isOpen ? " is-open" : ""}`}
                key={faq.question}
                role="listitem"
                data-animate="rise"
                data-delay={String(i * 90)}
              >
                <button
                  type="button"
                  className="rv-faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="rv-faq-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rv-faq-q-text">{faq.question}</span>
                  <span className="rv-faq-toggle" aria-hidden>
                    <span className="rv-faq-toggle-bar" />
                    <span className="rv-faq-toggle-bar rv-faq-toggle-bar--vert" />
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="rv-faq-answer"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

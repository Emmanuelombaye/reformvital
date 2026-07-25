"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faqs">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="badge badge-orange" style={{ marginBottom: "12px" }}>Questions & Answers</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Everything you need to know about prescription GLP-1 weight loss and Yucca telehealth.
          </p>
        </div>

        <div className="faq-list">
          {brandConfig.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq-item" key={i}>
                <button className="faq-question-btn" onClick={() => toggle(i)}>
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                {isOpen && <div className="faq-answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

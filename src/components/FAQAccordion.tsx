"use client";

import { useMemo, useState } from "react";
import { brandConfig } from "@/brand.config";

const FILTERS = [
  { id: "all", label: "All Questions" },
  { id: "getting-started", label: "Getting started" },
  { id: "treatments", label: "Treatments" },
  { id: "pharmacy", label: "Pharmacy & shipping" },
  { id: "membership", label: "Membership & pricing" },
  { id: "ai-portal", label: "AI coach & portal" },
] as const;

type FaqCategory = (typeof FILTERS)[number]["id"];

export default function FAQAccordion({ showPageHero = false }: { showPageHero?: boolean }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FaqCategory>("all");

  const faqs = brandConfig.faqs;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const cat = ("category" in faq ? faq.category : "getting-started") as string;
      const matchesCat = filter === "all" || cat === filter;
      const matchesQ =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [faqs, filter, query]);

  return (
    <section className="rv-faq" id="faq">
      <div className="rv-faq-atmosphere" aria-hidden data-parallax="0.1" />

      {showPageHero && (
        <div className="rv-faq-page-hero">
          <span className="rv-faq-eyebrow">WE&apos;VE GOT YOU</span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Clear answers on physician care, compounding, memberships, AI coaching, and how
            Reform Vital works—before you start your assessment.
          </p>
        </div>
      )}

      <div className="container rv-faq-layout">
        <div className="rv-faq-intro" data-animate="tilt-left" data-delay="0">
          {!showPageHero && (
            <>
              <span className="rv-faq-eyebrow">WE&apos;VE GOT YOU</span>
              <h2>Frequently Asked Questions</h2>
              <p>
                Clear answers on physician care, compounding, memberships, AI coaching, and
                how Reform Vital works—before you start your assessment.
              </p>
            </>
          )}

          <div className="rv-faq-support">
            <p className="rv-faq-support-label">Still need help?</p>
            <a href={`mailto:${brandConfig.nav.email}`}>{brandConfig.nav.email}</a>
            <a href={`tel:${brandConfig.nav.phone}`}>{brandConfig.nav.phone}</a>
            <a href="/start" className="btn btn-primary rv-faq-cta">
              Start My Health Assessment →
            </a>
          </div>
        </div>

        <div>
          <div className="rv-faq-toolbar">
            <div className="rv-faq-search">
              <svg
                className="rv-faq-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="search"
                placeholder="Search questions (shipping, labs, GLP-1, membership…)"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(0);
                }}
                aria-label="Search FAQs"
              />
            </div>

            <div className="rv-faq-filters" role="tablist" aria-label="FAQ categories">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  className={`rv-faq-filter${filter === f.id ? " is-active" : ""}`}
                  onClick={() => {
                    setFilter(f.id);
                    setOpenIndex(0);
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rv-faq-list" role="list">
            {filtered.length === 0 ? (
              <div className="rv-faq-empty">
                No questions matching &quot;{query}&quot;. Try another search or{" "}
                <a href={`mailto:${brandConfig.nav.email}`}>email our care team</a>.
              </div>
            ) : (
              filtered.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    className={`rv-faq-item${isOpen ? " is-open" : ""}`}
                    key={faq.question}
                    role="listitem"
                    data-animate="rise"
                    data-delay={String(Math.min(i, 8) * 60)}
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
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

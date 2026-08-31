"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/brand.config";

const FILTERS = [
  { id: "all", label: "All" },
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
    <section className="rv-script-section rv-script-faq" id="faq">
      {showPageHero && (
        <div className="rv-script-page-hero">
          <div className="container">
            <p className="rv-script-eyebrow">Support</p>
            <h1>Frequently asked questions</h1>
            <p>
              Clear answers on physician care, compounding, memberships, AI coaching, and how
              Reform Vital works—before you start your assessment.
            </p>
          </div>
        </div>
      )}

      <div className="container rv-script-faq__layout">
        <aside className="rv-script-faq__sidebar">
          {!showPageHero && (
            <div className="rv-script-section__head rv-script-section__head--left">
              <p className="rv-script-eyebrow">Support</p>
              <h2>Frequently asked questions</h2>
              <p>
                Clear answers on physician care, compounding, memberships, AI coaching, and how
                Reform Vital works—before you start your assessment.
              </p>
            </div>
          )}

          <div className="rv-script-faq__support">
            <p>Still need help?</p>
            <a href={`mailto:${brandConfig.nav.email}`}>{brandConfig.nav.email}</a>
            <a href={`tel:${brandConfig.nav.phone}`}>{brandConfig.nav.phone}</a>
            <Link href="/start" className="rv-script-btn rv-script-btn--primary">
              Start assessment →
            </Link>
          </div>
        </aside>

        <div className="rv-script-faq__main">
          <div className="rv-script-faq__toolbar">
            <label className="rv-script-faq__search">
              <span className="sr-only">Search FAQs</span>
              <input
                type="search"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(0);
                }}
              />
            </label>

            <div className="rv-script-faq__filters" role="tablist" aria-label="FAQ categories">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.id}
                  className={filter === f.id ? "is-active" : undefined}
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

          <div className="rv-script-faq__list">
            {filtered.length === 0 ? (
              <p className="rv-script-faq__empty">
                No questions matching &quot;{query}&quot;. Try another search or{" "}
                <a href={`mailto:${brandConfig.nav.email}`}>email our care team</a>.
              </p>
            ) : (
              filtered.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={faq.question} className={`rv-script-faq__item${isOpen ? " is-open" : ""}`}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      <span>{faq.question}</span>
                      <span className="rv-script-faq__icon" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="rv-script-faq__answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
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

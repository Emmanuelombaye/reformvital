"use client";

import { useEffect, useRef } from "react";
import {
  HOW_FAQS,
  HOW_MEDIA,
  HOW_STEPS,
  HOW_WHY,
} from "@/lib/howItWorksData";

function StickySteps() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const desktopMq = window.matchMedia("(min-width: 992px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = () =>
      Array.from(root.querySelectorAll<HTMLElement>(".rv-hiw-step-card"));

    const clear = () => {
      cards().forEach((card) => {
        card.style.opacity = "";
        card.style.transform = "";
        card.style.visibility = "";
        card.style.pointerEvents = "";
      });
    };

    let raf = 0;
    const onScroll = () => {
      if (!desktopMq.matches || motionMq.matches) {
        clear();
        return;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const steps = Array.from(root.querySelectorAll<HTMLElement>(".rv-hiw-step"));
        steps.forEach((step, i) => {
          const card = step.querySelector<HTMLElement>(".rv-hiw-step-card");
          const next = steps[i + 1];
          if (!card || !next) {
            if (card) {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
              card.style.visibility = "visible";
              card.style.pointerEvents = "";
            }
            return;
          }
          const nextTop = next.getBoundingClientRect().top;
          const stickyTop = window.innerHeight * 0.23;
          const start = stickyTop + card.offsetHeight + 80;
          const end = stickyTop + card.offsetHeight * 0.5;
          const range = Math.max(1, start - end);
          const t = Math.min(1, Math.max(0, (start - nextTop) / range));
          const opacity = 1 - t;
          card.style.opacity = String(opacity);
          card.style.transform = `scale(${1 - t * 0.12})`;
          card.style.visibility = opacity < 0.02 ? "hidden" : "visible";
          card.style.pointerEvents = opacity < 0.02 ? "none" : "";
        });
      });
    };

    const refresh = () => {
      clear();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refresh);
    desktopMq.addEventListener("change", refresh);
    motionMq.addEventListener("change", refresh);
    refresh();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refresh);
      desktopMq.removeEventListener("change", refresh);
      motionMq.removeEventListener("change", refresh);
      clear();
    };
  }, []);

  return (
    <section ref={rootRef} className="rv-hiw-hero">
      <div className="rv-hiw-steps-stack">
        {HOW_STEPS.map((step, i) => {
          const isLast = i === HOW_STEPS.length - 1;
          return (
            <div
              key={step.n}
              className={`rv-hiw-step ${isLast ? "rv-hiw-step--last" : "rv-hiw-step--sticky"}`}
              style={{ zIndex: i + 1 }}
            >
              <article className="rv-hiw-step-card">
                <div className="rv-hiw-step-media">
                  <div className="rv-hiw-step-media__frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="rv-hiw-step-media__img"
                      src={step.image.src}
                      alt={step.image.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  {"chips" in step && step.chips ? (
                    <div className="rv-hiw-step-chips">
                      {step.chips.map((chip) => (
                        <span key={chip} className="rv-hiw-step-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="rv-hiw-step-copy">
                  <p className="rv-hiw-step-label">Step {step.n}</p>
                  <h2 className="rv-hiw-step-title">
                    {step.title} <em>{step.titleItalic}</em>
                  </h2>
                  <p className="rv-hiw-step-body">{step.body}</p>

                  {"callout" in step && step.callout ? (
                    <div className="rv-hiw-step-callout">
                      <p className="rv-hiw-step-callout__value">{step.callout.value}</p>
                      <p className="rv-hiw-step-callout__label">{step.callout.label}</p>
                    </div>
                  ) : null}

                  {"link" in step && step.link ? (
                    <a href={step.link.href} className="rv-hiw-step-link">
                      {step.link.label}
                    </a>
                  ) : null}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function HowItWorksFlow() {
  return (
    <div className="rv-hiw-page">
      <section className="rv-hiw-page-hero">
        <div className="rv-hiw-shell">
          <h1 className="rv-hiw-page-hero__title">
            Reform Vital delivers a{" "}
            <span className="rv-hiw-page-hero__accent">seamless, patient-first experience</span>
          </h1>
          <p className="rv-hiw-page-hero__sub">
            Five clear steps from treatment choice to ongoing care.
          </p>
        </div>
      </section>

      <section className="rv-hiw-page-body">
        <div className="rv-hiw-shell">
          <div className="rv-hiw-flow">
            <StickySteps />

            <section className="rv-hiw-process" aria-labelledby="rv-hiw-process-title">
              <div className="rv-hiw-process__head">
                <p className="rv-hiw-process__eyebrow">Clinical process</p>
                <h2 className="rv-hiw-process__title" id="rv-hiw-process-title">
                  Every plan starts with a <em>provider review</em>
                </h2>
                <p className="rv-hiw-process__sub">
                  Complete intake, clinician review, and pharmacy fulfillment — only when
                  treatment is appropriate.
                </p>
              </div>

              <ol className="rv-hiw-process__grid">
                {[
                  { step: "01", title: "Intake & lab review", meta: "Secure questionnaire" },
                  { step: "02", title: "Licensed provider review", meta: "Typically within 24 hours" },
                  { step: "03", title: "Pharmacy fulfillment", meta: "When prescribed" },
                  { step: "04", title: "Ongoing care", meta: "Follow-up & AI coach" },
                ].map((item) => (
                  <li key={item.step} className="rv-hiw-process-card">
                    <span className="rv-hiw-process-card__n" aria-hidden>
                      {item.step}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.meta}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rv-hiw-why">
              <h2 className="rv-hiw-why__title">
                Why <em>Reform Vital</em>?
              </h2>
              <div className="rv-hiw-why__grid">
                {HOW_WHY.map((item) => (
                  <article key={item.title} className="rv-hiw-why-card">
                    <div className="rv-hiw-why-card__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image.src} alt={item.image.alt} loading="lazy" />
                    </div>
                    <div className="rv-hiw-why-card__body">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="rv-hiw-why__cta-wrap">
                <a href="/treatments" className="rv-hiw-btn-primary">
                  Explore treatments
                </a>
              </div>
            </section>

            <section className="rv-hiw-priority">
              <div className="rv-hiw-priority__card">
                <div className="rv-hiw-priority__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={HOW_MEDIA.priority.src}
                    alt={HOW_MEDIA.priority.alt}
                    loading="lazy"
                  />
                </div>
                <div className="rv-hiw-priority__copy">
                  <h2>Exceptional experience is our priority</h2>
                  <ul>
                    <li>Stay in touch with your provider</li>
                    <li>Update your treatment when clinically appropriate</li>
                    <li>Track progress with clear accountability</li>
                  </ul>
                  <a href="/start" className="rv-hiw-btn-primary">
                    Start your intake
                  </a>
                </div>
              </div>
            </section>

            <section className="rv-hiw-faq">
              <p className="rv-hiw-faq__eyebrow">We&rsquo;ve got you.</p>
              <h2 className="rv-hiw-faq__title">You have questions, we have answers.</h2>
              <div className="rv-hiw-faq__list">
                {HOW_FAQS.map((item) => (
                  <details key={item.q} className="rv-hiw-faq__item">
                    <summary>
                      <span>{item.q}</span>
                      <span className="rv-hiw-faq__icon" aria-hidden>
                        +
                      </span>
                    </summary>
                    <div className="rv-hiw-faq__answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="rv-hiw-cta">
              <div className="rv-hiw-cta__grid">
                <div className="rv-hiw-cta__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={HOW_MEDIA.cta.src} alt={HOW_MEDIA.cta.alt} loading="lazy" />
                </div>
                <div className="rv-hiw-cta__copy">
                  <p className="rv-hiw-cta__eyebrow">Begin care</p>
                  <h2>Ready for provider-led care?</h2>
                  <p>Complete your intake. A licensed provider reviews within 24 hours.</p>
                  <div className="rv-hiw-cta__actions">
                    <a href="/start" className="rv-hiw-btn-primary">
                      Get started
                    </a>
                    <a href="/treatments" className="rv-hiw-btn-secondary">
                      View treatments
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

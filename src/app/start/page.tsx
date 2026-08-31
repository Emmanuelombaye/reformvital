"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WEIGHT_TREATMENTS } from "@/lib/treatmentCatalog";

export default function StartAssessmentPage() {
  const [step, setStep] = useState(1);
  const [selectedSlug, setSelectedSlug] = useState(WEIGHT_TREATMENTS[0].slug);
  const [stateName, setStateName] = useState("Florida");

  const selectedProgram =
    WEIGHT_TREATMENTS.find((t) => t.slug === selectedSlug) || WEIGHT_TREATMENTS[0];

  return (
    <>
      <Navbar />
      <main>
        <section className="rv-start" data-rv-skip-motion="1">
          <div className="container rv-start-layout">
            <aside className="rv-start-photo" aria-hidden>
              <Image
                src="/images/start-wellness.webp"
                alt=""
                width={900}
                height={1125}
                className="rv-start-photo__img"
                sizes="(max-width: 900px) 100vw, 38vw"
                priority
              />
            </aside>

            <div className="rv-start-card">
              <div className="rv-start-card__top">
                <span className="rv-start-badge">Physician intake</span>
                <div className="rv-start-steps" aria-label={`Step ${step} of 3`}>
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`rv-start-step${n <= step ? " is-active" : ""}`}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div className="rv-start-body">
                  <h1>Which weight-management program are you interested in?</h1>
                  <p>
                    Reform Vital offers two clinician-guided programs: Semaglutide and Tirzepatide. Select one to
                    begin your secure intake.
                  </p>

                  <div className="rv-start-options" role="radiogroup" aria-label="Treatment program">
                    {WEIGHT_TREATMENTS.map((program) => {
                      const active = selectedSlug === program.slug;
                      return (
                        <button
                          key={program.slug}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          className={`rv-start-option${active ? " is-active" : ""}`}
                          onClick={() => setSelectedSlug(program.slug)}
                        >
                          <span className="rv-start-option__mark" aria-hidden>
                            {active ? "✓" : ""}
                          </span>
                          <span>
                            <strong>{program.name}</strong>
                            <em>{program.price}</em>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary rv-start-cta"
                    onClick={() => setStep(2)}
                  >
                    Continue to medical metrics →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="rv-start-body">
                  <h1>Verify medical location &amp; info</h1>
                  <p>
                    Confirm your location for licensed provider matching and pharmacy
                    delivery.
                  </p>

                  <div className="rv-start-fields">
                    <label className="rv-start-field">
                      <span>State of residence</span>
                      <select
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                      >
                        <option value="Florida">Florida</option>
                        <option value="California">California</option>
                        <option value="Texas">Texas</option>
                        <option value="New York">New York</option>
                        <option value="All 50 States Supported">All 50 States Supported</option>
                      </select>
                    </label>

                    <label className="rv-start-field">
                      <span>Previous Semaglutide or Tirzepatide use?</span>
                      <select defaultValue="no">
                        <option value="no">First-time patient</option>
                        <option value="semaglutide">Currently on Semaglutide</option>
                        <option value="tirzepatide">Currently on Tirzepatide</option>
                      </select>
                    </label>
                  </div>

                  <div className="rv-start-actions">
                    <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setStep(3)}
                    >
                      Complete assessment →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="rv-start-body rv-start-body--done">
                  <div className="rv-start-done-icon" aria-hidden>
                    ✓
                  </div>
                  <h1>Assessment complete</h1>
                  <p>
                    You selected the <strong>{selectedProgram.name}</strong> program ({selectedProgram.price}) in{" "}
                    {stateName}. A licensed U.S. clinician will review your file within 24 hours.
                  </p>
                  <div className="rv-start-plan">
                    Recommended program: {selectedProgram.name} at {selectedProgram.price} — includes
                    provider review &amp; standard pharmacy shipping when prescribed.
                  </div>
                  <Link href={`/treatments/${selectedProgram.slug}`} className="btn btn-primary rv-start-cta">
                    Review {selectedProgram.name} program →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

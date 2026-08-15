"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOALS = [
  "Weight Loss (GLP-1 / Tirzepatide)",
  "Hormone Optimization / TRT",
  "Growth Hormone Peptides (Sermorelin)",
  "Longevity & NAD+ Cellular Therapy",
  "Recovery & Tissue Repair (BPC-157)",
  "Cognitive & Mood Optimization (Semax)",
];

export default function StartAssessmentPage() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);
  const [stateName, setStateName] = useState("Florida");

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
                  <h1>What is your primary health optimization goal?</h1>
                  <p>
                    Select your main focus area to match with a specialized U.S.
                    board-certified medical director.
                  </p>

                  <div className="rv-start-options" role="radiogroup" aria-label="Health goal">
                    {GOALS.map((goal) => {
                      const active = selectedGoal === goal;
                      return (
                        <button
                          key={goal}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          className={`rv-start-option${active ? " is-active" : ""}`}
                          onClick={() => setSelectedGoal(goal)}
                        >
                          <span className="rv-start-option__mark" aria-hidden>
                            {active ? "✓" : ""}
                          </span>
                          <span>{goal}</span>
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
                      <span>Previous GLP-1 or peptide therapies?</span>
                      <select defaultValue="no">
                        <option value="no">First-time patient</option>
                        <option value="yes">Currently on Semaglutide / Tirzepatide</option>
                        <option value="trt">Currently on TRT / Peptide protocols</option>
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
                    You qualify for physician-guided <strong>{selectedGoal}</strong> in{" "}
                    {stateName}. A licensed U.S. medical director will review your file
                    within 24 hours.
                  </p>
                  <div className="rv-start-plan">
                    Recommended: Essentials / Performance membership ($149/mo includes
                    doctor consult &amp; compounded pharmacy shipping)
                  </div>
                  <a href="/treatments" className="btn btn-primary rv-start-cta">
                    Explore prescribed formulations →
                  </a>
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

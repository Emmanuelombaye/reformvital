"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StartAssessmentPage() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState("Weight Loss (GLP-1s)");
  const [stateName, setStateName] = useState("Florida");

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", minHeight: "75vh" }}>
          <div className="container rv-start-layout">
            <div className="rv-start-photo" data-animate="rise">
              <Image
                src="/images/start-wellness.png"
                alt="Begin your Reform Vital wellness journey"
                fill
                sizes="(max-width: 900px) 92vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
                priority
              />
            </div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "2.5rem", boxShadow: "var(--shadow-hover)" }}>
              {/* Progress Indicator */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem", gap: "1rem", flexWrap: "wrap" }}>
                <span className="badge">PHYSICIAN INTAKE QUESTIONNAIRE</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} aria-label={`Step ${step} of 3`}>
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className="rv-step-num"
                      style={{
                        width: "1.85rem",
                        height: "1.85rem",
                        minWidth: "1.85rem",
                        minHeight: "1.85rem",
                        maxWidth: "1.85rem",
                        maxHeight: "1.85rem",
                        flex: "0 0 1.85rem",
                        fontSize: "0.8rem",
                        background: n <= step ? "var(--accent)" : "var(--border)",
                        color: n <= step ? "#fff" : "var(--text-muted)",
                      }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div>
                  <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>What is your primary health optimization goal?</h2>
                  <p style={{ color: "var(--text-muted)", marginBottom: "1.8rem" }}>
                    Select your main focus area to match with a specialized U.S. board-certified medical director.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                    {[
                      "Weight Loss (GLP-1 / Tirzepatide)",
                      "Hormone Optimization / TRT",
                      "Growth Hormone Peptides (Sermorelin)",
                      "Longevity & NAD+ Cellular Therapy",
                      "Recovery & Tissue Repair (BPC-157)",
                      "Cognitive & Mood Optimization (Semax)",
                    ].map((goal) => (
                      <button
                        key={goal}
                        className={`btn ${selectedGoal === goal ? "btn-primary" : "btn-ghost"}`}
                        style={{ justifyContent: "flex-start", padding: "1.1rem 1.4rem", fontSize: "1rem" }}
                        onClick={() => setSelectedGoal(goal)}
                      >
                        <span style={{ fontWeight: 800 }}>{selectedGoal === goal ? "✓" : "○"}</span>
                        <span>{goal}</span>
                      </button>
                    ))}
                  </div>

                  <button className="btn btn-primary" style={{ width: "100%", padding: "1.1rem" }} onClick={() => setStep(2)}>
                    Continue to Medical Metrics →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>Verify Medical Location & Info</h2>
                  <p style={{ color: "var(--text-muted)", marginBottom: "1.8rem" }}>
                    Confirm your location for licensed provider matching and pharmacy delivery.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2rem" }}>
                    <div>
                      <label style={{ display: "block", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>
                        Select Your State of Residence
                      </label>
                      <select
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                        style={{ width: "100%", padding: "0.85rem", borderRadius: "0.75rem", border: "1px solid var(--border)", fontSize: "1rem", fontFamily: "var(--font-body)" }}
                      >
                        <option value="Florida">Florida</option>
                        <option value="California">California</option>
                        <option value="Texas">Texas</option>
                        <option value="New York">New York</option>
                        <option value="All 50 States Supported">All 50 States Supported</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>
                        Have you previously used GLP-1 or peptide therapies?
                      </label>
                      <select
                        style={{ width: "100%", padding: "0.85rem", borderRadius: "0.75rem", border: "1px solid var(--border)", fontSize: "1rem", fontFamily: "var(--font-body)" }}
                      >
                        <option value="no">First-time patient</option>
                        <option value="yes">Currently on Semaglutide / Tirzepatide</option>
                        <option value="trt">Currently on TRT / Peptide protocols</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <button className="btn btn-ghost" style={{ flex: 1 }} onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => setStep(3)}>
                      Complete Assessment →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                  <h2 style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>Assessment Complete!</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "1.8rem" }}>
                    You qualify for physician-guided <strong>{selectedGoal}</strong> in {stateName}. A licensed U.S. medical director will review your file within 24 hours.
                  </p>

                  <div style={{ background: "var(--accent-soft)", padding: "1.2rem", borderRadius: "0.85rem", marginBottom: "2rem", color: "#00695C", fontWeight: 700 }}>
                    Recommended Plan: Essentials / Performance Membership ($149/mo includes Doctor & Compounded Pharmacy Shipping)
                  </div>

                  <a href="/treatments" className="btn btn-primary" style={{ width: "100%", padding: "1.1rem" }}>
                    Explore Prescribed Formulations →
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

"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";
import TealIcon, { TealIconBadge } from "./TealIcon";

const enrollmentSteps = [
  {
    step: "01",
    time: "2 MIN",
    title: "Select Protocol & Digital Intake",
    tag: "HIPAA SECURE",
    desc: "Choose your target health goal (Weight Loss, TRT, Longevity, Repair). Complete your confidential digital health assessment online without insurance or waiting rooms.",
    icon: "clipboard" as const,
    highlights: ["2-minute online check", "No insurance required", "State-licensed eligibility"],
  },
  {
    step: "02",
    time: "UNDER 24H",
    title: "Physician Evaluation & Custom RX",
    tag: "U.S. DOCTOR REVIEW",
    desc: "Dr. Michael Wasef, MD & Dr. Andrew Sakla, DO review your medical history, symptoms, and lab work to formulate your custom compounded prescription plan.",
    icon: "stethoscope" as const,
    highlights: ["Board-certified review", "Tailored dosage precision", "50-State legal prescription"],
  },
  {
    step: "03",
    time: "EXPRESS",
    title: "503A Pharmacy Dispensing & Delivery",
    tag: "COLD-CHAIN SHIPPING",
    desc: "Your medication is freshly compounded at a 503A certified pharmacy facility and delivered directly to your doorstep in discreet, temperature-controlled packaging.",
    icon: "box" as const,
    highlights: ["Overnight cold shipping", "Syringes & wipes included", "Discreet plain packaging"],
  },
  {
    step: "04",
    time: "24/7 ACTIVE",
    title: "Ongoing Care & AI Coach Sync",
    tag: "CONTINUOUS MONITORING",
    desc: "Track daily macros, dose schedules, and biomarker progress with your 24/7 AI Health Coach while your medical team monitors your quarterly lab results.",
    icon: "bot" as const,
    highlights: ["Unlimited doctor messaging", "Quarterly bloodwork review", "Zero cancellation fees"],
  },
];

const guaranteeItems = [
  {
    title: "U.S. Licensed Doctors",
    desc: "100% of consultations and lab reviews are conducted by board-certified physicians.",
    icon: "doctor" as const,
  },
  {
    title: "503A Compounded Meds",
    desc: "Compounded by 50-state certified outsourcing facilities with COA lab purity testing.",
    icon: "lab" as const,
  },
  {
    title: "Discreet Cold Shipping",
    desc: "Fast express shipping directly to your door in temperature-controlled packaging.",
    icon: "truck" as const,
  },
  {
    title: "No Hidden Contracts",
    desc: "Pause, adjust dosage, or cancel your subscription anytime with 1-click in your patient portal.",
    icon: "shield" as const,
  },
];

export default function MembershipTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const [activeStep, setActiveStep] = useState(0);
  const plans = brandConfig.memberships;

  return (
    <section className="section" id="memberships" style={{ background: "var(--surface)", padding: "5.5rem 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "52rem", margin: "0 auto 3rem" }}>
          <span className="badge" style={{ background: "var(--accent)", color: "#FFF", marginBottom: "0.8rem" }}>
            TRANSPARENT MEMBERSHIP PLANS
          </span>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, marginBottom: "0.8rem" }}>
            Essentials · Performance · Elite
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Care tiers mapped to Weight Loss, TRT & metabolic stacking, and Longevity / Executive concierge—flat rates, no insurance hassles.
          </p>

          <div
            style={{
              display: "inline-flex",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "9999px",
              padding: "0.35rem",
              marginTop: "1.5rem",
              gap: "0.25rem",
            }}
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              style={{
                border: "none",
                borderRadius: "9999px",
                padding: "0.65rem 1.25rem",
                fontWeight: 800,
                cursor: "pointer",
                background: billingCycle === "monthly" ? "var(--accent)" : "transparent",
                color: billingCycle === "monthly" ? "#FFF" : "var(--text-muted)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              style={{
                border: "none",
                borderRadius: "9999px",
                padding: "0.65rem 1.25rem",
                fontWeight: 800,
                cursor: "pointer",
                background: billingCycle === "quarterly" ? "var(--accent)" : "transparent",
                color: billingCycle === "quarterly" ? "#FFF" : "var(--text-muted)",
              }}
            >
              Quarterly · Save 20%
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "5.5rem",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan) => {
            const displayPrice =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;

            return (
              <div
                key={plan.id}
                className="membership-card"
                style={{
                  position: "relative",
                  borderRadius: "1.5rem",
                  padding: "2.25rem",
                  display: "flex",
                  flexDirection: "column",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #0D1B2A 0%, #162A45 70%, #00A896 100%)"
                    : "var(--bg)",
                  color: plan.highlight ? "#FFF" : "var(--primary)",
                  border: plan.highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
                  boxShadow: plan.highlight
                    ? "0 20px 45px rgba(13, 27, 42, 0.25)"
                    : "var(--shadow-card)",
                  transform: plan.highlight ? "scale(1.03)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ marginBottom: "1.2rem" }}>
                  <span
                    style={{
                      background: plan.highlight ? "var(--accent)" : "var(--accent-soft)",
                      color: plan.highlight ? "#FFF" : "var(--accent)",
                      padding: "0.35rem 0.95rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                      letterSpacing: "0.06em",
                      display: "inline-block",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    marginBottom: "0.35rem",
                    color: plan.highlight ? "#FFF" : "var(--primary)",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: plan.highlight ? "#5EEAD4" : "var(--accent)",
                    marginBottom: "0.65rem",
                  }}
                >
                  Focus: {plan.focus}
                </p>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: plan.highlight ? "rgba(255,255,255,0.85)" : "var(--text-muted)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.55,
                  }}
                >
                  {plan.desc}
                </p>

                <div
                  style={{
                    marginBottom: "1.75rem",
                    borderBottom: plan.highlight
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "1px solid var(--border)",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
                    <span
                      style={{
                        fontSize: "3rem",
                        fontWeight: 900,
                        color: plan.highlight ? "#FFF" : "var(--primary)",
                      }}
                    >
                      ${displayPrice}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
                        fontWeight: 700,
                      }}
                    >
                      / month
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: plan.highlight ? "var(--accent-cyan)" : "var(--accent)",
                      fontWeight: 800,
                    }}
                  >
                    {billingCycle === "quarterly"
                      ? "Billed quarterly (20% savings applied)"
                      : "Billed monthly · Doctor consultation included"}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    marginBottom: "2.25rem",
                    flex: 1,
                  }}
                >
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      <span
                        style={{
                          color: plan.highlight ? "var(--accent-cyan)" : "var(--accent)",
                          fontWeight: 900,
                          fontSize: "1.1rem",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          color: plan.highlight ? "rgba(255,255,255,0.9)" : "var(--primary)",
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/start"
                  className={`btn ${plan.highlight ? "btn-primary" : "btn-ghost"}`}
                  style={{
                    width: "100%",
                    padding: "0.95rem",
                    fontSize: "0.95rem",
                    background: plan.highlight ? "var(--accent)" : "transparent",
                    color: plan.highlight ? "#FFF" : "var(--primary)",
                    borderColor: plan.highlight ? "transparent" : "var(--border)",
                  }}
                >
                  {plan.ctaText} →
                </a>
              </div>
            );
          })}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #070E17 0%, #0D1B2A 70%, #162A45 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(1.75rem, 4vw, 3.5rem)",
            color: "#FFF",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
            marginBottom: "5rem",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 3rem" }}>
            <span
              style={{
                background: "var(--accent)",
                color: "#FFF",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                fontWeight: 900,
                letterSpacing: "0.08em",
                display: "inline-block",
                marginBottom: "0.8rem",
              }}
            >
              PATIENT ENROLLMENT PATHWAY
            </span>
            <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#FFF" }}>
              How Membership Enrollment Works
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", marginTop: "0.5rem" }}>
              Click any step below to explore your path from digital intake to pharmacy fulfillment.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {enrollmentSteps.map((s, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    background: isActive ? "rgba(0, 168, 150, 0.25)" : "rgba(255,255,255,0.06)",
                    border: isActive ? "2px solid var(--accent)" : "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "1rem",
                    padding: "1.2rem 1rem",
                    color: "#FFF",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        color: isActive ? "var(--accent-cyan)" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      STEP {s.step}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        background: "rgba(255,255,255,0.15)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontWeight: 800,
                      }}
                    >
                      {s.time}
                    </span>
                  </div>
                  <strong
                    style={{
                      fontSize: "1rem",
                      display: "block",
                      fontWeight: 800,
                      color: isActive ? "#FFF" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    {s.title}
                  </strong>
                </button>
              );
            })}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 168, 150, 0.4)",
              borderRadius: "1.25rem",
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ marginBottom: "0.8rem" }}>
                <TealIcon
                  name={enrollmentSteps[activeStep].icon}
                  size={36}
                  color="#5EEAD4"
                />
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.08em",
                }}
              >
                PHASE 0{activeStep + 1} · {enrollmentSteps[activeStep].tag}
              </span>
              <h4
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#FFF",
                  marginTop: "0.3rem",
                  marginBottom: "0.8rem",
                }}
              >
                {enrollmentSteps[activeStep].title}
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {enrollmentSteps[activeStep].desc}
              </p>
              <a
                href="/start"
                className="btn btn-primary"
                style={{ padding: "0.9rem 1.8rem", fontSize: "0.95rem" }}
              >
                Begin Assessment →
              </a>
            </div>

            <div
              style={{
                background: "rgba(7, 14, 23, 0.6)",
                padding: "1.5rem",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h5
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "var(--accent-cyan)",
                  marginBottom: "1rem",
                }}
              >
                KEY INCLUSIONS IN THIS STEP
              </h5>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {enrollmentSteps[activeStep].highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.92rem",
                      color: "#FFF",
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: 900 }}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="badge">REFORM VITAL CARE GUARANTEE</span>
            <h3 style={{ fontSize: "2rem", marginTop: "0.4rem" }}>
              Included in Every Membership Plan
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {guaranteeItems.map((item) => (
              <div key={item.title}>
                <TealIconBadge name={item.icon} />
                <strong
                  style={{
                    display: "block",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.title}
                </strong>
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

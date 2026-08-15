"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

import aiCoachDashboard from "../../../public/images/ai_coach_dashboard.webp";
import aiCoachPatient from "../../../public/images/ai_coach_patient.webp";
import aiCoachDoctor from "../../../public/images/ai_coach_doctor.webp";
import lifestyleToast from "../../../public/images/lifestyle-toast.webp";
import lifestyleMindfulness from "../../../public/images/lifestyle-mindfulness.webp";

const chatDemoPrompts = [
  {
    label: "Log Weekly Dose",
    aiResponse:
      "Awesome! I have logged your weekly Tirzepatide (5mg) dose for Dr. Wasef's review. Did you experience any nausea or fatigue today?",
    userText: "Log my weekly Tirzepatide dose completed today at 9:00 AM.",
  },
  {
    label: "Check Protein Goal",
    aiResponse:
      "Great job! You have logged 142g of protein today out of your 140g target (101% achieved). Keep up the hydration!",
    userText: "Did I hit my daily protein target today?",
  },
  {
    label: "Generate Lab Report",
    aiResponse:
      "Your 90-day progress summary shows -18.4 lbs total weight reduction and a 1.3% drop in HbA1c. Your report has been dispatched to Dr. Sakla, DO.",
    userText: "Generate my quarterly biomarker progress report for my doctor.",
  },
];

const deliverRows = [
  {
    badge: "01 · Accountability",
    title: "Daily nudges that keep your protocol on track",
    description:
      "Dose reminders, protein targets, hydration, and movement—timed to your plan so accountability feels natural between visits.",
    proof: "Non-intrusive cadence matched to your protocol week",
    image: aiCoachPatient,
    alt: "Member using Reform Vital AI coach on a phone",
    fit: "cover" as const,
    reverse: false,
  },
  {
    badge: "02 · Clinical sync",
    title: "Answers aligned with your provider’s plan",
    description:
      "Injection timing, symptom logs, and nutrition tradeoffs—guidance tuned to your physician protocol, not generic chatbot advice.",
    proof: "Evidence-aligned responses reviewed against care plans",
    image: aiCoachDoctor,
    alt: "Physician reviewing patient progress with AI coach insights",
    fit: "cover" as const,
    reverse: true,
  },
  {
    badge: "03 · Tracker",
    title: "A clear dashboard—never cropped, always readable",
    description:
      "Macros, dosing consistency, and vitals in one view. Your coach structures the data; your doctor reviews cleaner trends at follow-up.",
    proof: "UI shown in full—contain frame, not cover crop",
    image: aiCoachDashboard,
    alt: "Reform Vital AI coach dashboard interface",
    fit: "contain" as const,
    reverse: false,
  },
];

const workflow = [
  {
    step: 1,
    title: "Connect baseline and goals",
    description:
      "Intake, labs, protocol goals, and check-in rhythm—captured in under two minutes.",
  },
  {
    step: 2,
    title: "Coach runs daily accountability",
    description:
      "Smart reminders, scorecards, and practical recommendations based on your current phase.",
  },
  {
    step: 3,
    title: "Doctors review trends",
    description:
      "Clean summaries and deltas before each follow-up—so decisions aren’t guesswork.",
  },
];

const trustStats = [
  { value: "24/7", label: "Member support" },
  { value: "<15s", label: "Demo response speed" },
  { value: "50 states", label: "Physician network" },
  { value: "365 days", label: "Accountability" },
];

const trackedMetrics = [
  {
    id: "dose",
    title: "Dosing & Titration",
    icon: "💊",
    description: "Maintains optimal therapeutic levels while minimizing side effects.",
    details: [
      "Logs exact injection timestamp and dose strength automatically.",
      "Prompts injection site rotation to protect tissue health.",
      "Alerts on delayed or missed doses with provider-approved recovery guidance.",
      "Tracks side-effect severity to inform titration decisions.",
    ],
  },
  {
    id: "protein",
    title: "Lean Mass Preservation",
    icon: "🥩",
    description: "Ensures weight loss is fat loss, not lean muscle mass.",
    details: [
      "Calculates daily protein goals from lean body mass.",
      "Logs food entries with natural language in seconds.",
      "Feedback on protein distribution across meals.",
      "Pairs with resistance training logs for muscle support.",
    ],
  },
  {
    id: "hydration",
    title: "Hydration & Electrolytes",
    icon: "💧",
    description: "Supports energy, kidney function, and comfort on GLP-1 protocols.",
    details: [
      "Dynamic fluid goals from weight, activity, and climate.",
      "Electrolyte reminders around injection days.",
      "Consistency tracking to reduce common mild side effects.",
      "Separates fluid retention from true body-composition progress.",
    ],
  },
  {
    id: "biomarkers",
    title: "Biomarkers & Symptoms",
    icon: "📊",
    description: "Aggregates daily vitals and subjective logs for clinical review.",
    details: [
      "Daily weight with a 7-day moving average.",
      "Blood pressure, resting HR, sleep, and energy logs.",
      "Digestive comfort flags with lifestyle remedies when appropriate.",
      "Structured reports synced to your patient profile.",
    ],
  },
];

const comparisonData = [
  {
    metric: "Support Cadence",
    traditional: "Once every 4–12 weeks during brief follow-ups.",
    reform: "24/7 accountability with fast, plan-aligned responses.",
  },
  {
    metric: "Dose & Adherence",
    traditional: "Memory-based; missed doses and titration errors are common.",
    reform: "Calendar-synced dose tracking with site-rotation prompts.",
  },
  {
    metric: "Body Composition",
    traditional: "Scale weight only—high risk of muscle loss.",
    reform: "Lean-mass focus with protein and training accountability.",
  },
  {
    metric: "Symptom Management",
    traditional: "Mild side effects go unmanaged until the next visit.",
    reform: "Real-time triage and lifestyle guidance between visits.",
  },
  {
    metric: "Provider Visibility",
    traditional: "Decisions from retrospective patient recall.",
    reform: "Structured biomarker reports before follow-ups.",
  },
];

const coachFaqs = [
  {
    question: "Is my personal health data secure and HIPAA-compliant?",
    answer:
      "Yes. Reform Vital uses bank-grade encryption. The AI Coach runs in a HIPAA-compliant environment. Logs and conversations are confidential and shared only with your assigned U.S. licensed medical team.",
  },
  {
    question: "Does the AI Coach make medical decisions or change my prescription?",
    answer:
      "No. The coach is an accountability and tracking assistant. It cannot prescribe, diagnose, or alter your plan. Clinical decisions remain with your licensed Reform Vital physician.",
  },
  {
    question: "What happens if I experience severe side effects or a medical emergency?",
    answer:
      "Red-flag symptoms trigger immediate triage: the coach stops the session, provides emergency guidance, and prompts you to contact your doctor or seek urgent care.",
  },
  {
    question: "How does the AI Coach communicate with my doctor?",
    answer:
      "Logged weight trends, protein, dosing consistency, and symptoms are compiled into structured reports reviewed by your provider before follow-ups.",
  },
  {
    question: "Can I use the AI Coach for GLP-1 and hormone protocols?",
    answer:
      "Yes. The coach configures to your plan—protein and GI comfort for Tirzepatide, dosing and vitals focus for TRT, and more.",
  },
];

interface SmoothImageProps {
  src: any;
  alt: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  placeholder?: "blur" | "empty";
  priority?: boolean;
}

function SmoothImage({
  src,
  alt,
  fill,
  sizes,
  style,
  placeholder,
  priority,
}: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.imageWrapper} ${isLoaded ? styles.imageWrapperLoaded : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        style={style}
        placeholder={placeholder}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`${styles.smoothImage} ${isLoaded ? styles.smoothImageLoaded : ""}`}
      />
    </div>
  );
}

export default function AICoachPage() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [activeMetricId, setActiveMetricId] = useState("dose");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeDemo = chatDemoPrompts[selectedPromptIndex];
  const activeMetric =
    trackedMetrics.find((m) => m.id === activeMetricId) || trackedMetrics[0];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Full-bleed Yucca-style hero */}
        <section className={styles.heroBleed} data-animate="peak-fade">
          <div className={styles.heroBleedMedia} aria-hidden>
            <SmoothImage
              src={lifestyleToast}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
              placeholder="blur"
              priority
            />
            <div className={styles.heroBleedScrim} />
          </div>
          <div className={`container ${styles.heroBleedInner}`}>
            <p className={styles.kicker}>Reform Vital · AI Coach</p>
            <h1 className={styles.heroTitle}>
              Accountability between every <em>physician visit</em>
            </h1>
            <p className={styles.heroSubtitle}>
              Personalized reminders, nutrition logs, and physician-ready trends—so your
              protocol stays on track without replacing your doctor.
            </p>
            <div className={styles.heroCtas}>
              <a href="#demo" className="btn btn-primary">
                Try live demo
              </a>
              <a href="/start" className={`btn ${styles.heroGhost}`}>
                Start health intake
              </a>
            </div>
          </div>
        </section>

        {/* Thin trust strip */}
        <section className={styles.trustStrip} data-animate="rise">
          <div className="container">
            <ul className={styles.trustList}>
              {trustStats.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alternating deliver rows */}
        <section className={styles.deliverSection}>
          <div className="container">
            <div className={styles.sectionHead} data-animate="rise">
              <span className="badge">HOW IT HELPS</span>
              <h2 className={styles.sectionTitle}>
                Built like a care partner—not a cropped card gallery
              </h2>
              <p className={styles.sectionSubtitle}>
                Large lifestyle frames for people. Full dashboard UI in a soft stage—never
                chopped by cover crops.
              </p>
            </div>

            <div className={styles.deliverStack}>
              {deliverRows.map((row) => (
                <article
                  key={row.badge}
                  className={`${styles.deliverRow}${row.reverse ? ` ${styles.deliverRowReverse}` : ""}`}
                  data-animate="peak-fade"
                >
                  <div className={styles.deliverCopy}>
                    <span className={styles.deliverBadge}>{row.badge}</span>
                    <h3>{row.title}</h3>
                    <p>{row.description}</p>
                    <span className={styles.deliverProof}>{row.proof}</span>
                  </div>
                  <div
                    className={`${styles.deliverMedia}${
                      row.fit === "contain" ? ` ${styles.deliverMediaContain}` : ""
                    }`}
                  >
                    <SmoothImage
                      src={row.image}
                      alt={row.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={
                        row.fit === "contain"
                          ? { objectFit: "contain", objectPosition: "center" }
                          : { objectFit: "contain", objectPosition: "center center" }
                      }
                      placeholder="blur"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className={styles.workflowSection} data-animate="rise">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">CARE WORKFLOW</span>
              <h2 className={styles.sectionTitle}>
                Daily execution. Smarter follow-ups.
              </h2>
            </div>
            <div className={styles.workflowGrid}>
              {workflow.map((item) => (
                <div key={item.title} className={styles.workflowCard} data-animate="peak-fade">
                  <span className={`rv-step-num ${styles.workflowStep}`} aria-hidden>
                    {item.step}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className={styles.metricsSection} data-animate="peak-fade">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">METRIC TRACKING</span>
              <h2 className={styles.sectionTitle}>What we track & optimize</h2>
              <p className={styles.sectionSubtitle}>
                Every entry is structured for your medical team—not lost in chat history.
              </p>
            </div>
            <div className={styles.metricsLayout}>
              <div className={styles.metricsTabs}>
                {trackedMetrics.map((metric) => (
                  <button
                    key={metric.id}
                    type="button"
                    onClick={() => setActiveMetricId(metric.id)}
                    className={`${styles.metricTabButton} ${
                      activeMetricId === metric.id ? styles.metricTabButtonActive : ""
                    }`}
                  >
                    <span className={styles.metricTabIcon}>{metric.icon}</span>
                    <div className={styles.metricTabText}>
                      <span className={styles.metricTabTitle}>{metric.title}</span>
                      <span className={styles.metricTabDesc}>{metric.description}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className={styles.metricsContent} key={activeMetricId}>
                <div className={styles.metricsContentHeader}>
                  <span className={styles.metricsContentIcon}>{activeMetric.icon}</span>
                  <h3>{activeMetric.title}</h3>
                </div>
                <p className={styles.metricsContentSub}>{activeMetric.description}</p>
                <ul className={styles.metricsDetailsList}>
                  {activeMetric.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className={styles.comparisonSection} data-animate="rise">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">THE CARE GAP</span>
              <h2 className={styles.sectionTitle}>Traditional telehealth vs Reform Vital</h2>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Pillar</th>
                    <th>Traditional</th>
                    <th>Reform Vital</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.metric}>
                      <td className={styles.tablePillar}>{row.metric}</td>
                      <td className={styles.tableTraditional}>{row.traditional}</td>
                      <td className={styles.tableReform}>{row.reform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className={styles.safetySection} data-animate="peak-fade">
          <div className="container">
            <div className={styles.safetyCard}>
              <div className={styles.safetyContent}>
                <span className={styles.safetyBadge}>CLINICAL INTEGRITY</span>
                <h3>Medical guardrails & triage protocols</h3>
                <p>
                  The coach supports—never replaces—clinical judgment. Guardrails set by our
                  medical directors keep conversations safe and on-protocol.
                </p>
                <div className={styles.safetyGrid}>
                  <div className={styles.safetyFeature}>
                    <h4>Red-flag triage</h4>
                    <p>
                      Severe symptoms stop the session and route you to emergency guidance and
                      your care team.
                    </p>
                  </div>
                  <div className={styles.safetyFeature}>
                    <h4>Locked knowledge</h4>
                    <p>
                      Bound to provider-approved guidelines—not open-web improvisation.
                    </p>
                  </div>
                  <div className={styles.safetyFeature}>
                    <h4>HIPAA-aligned sync</h4>
                    <p>
                      Encrypted logs compiled into your patient record for follow-up review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection} data-animate="rise">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">FAQ</span>
              <h2 className={styles.sectionTitle}>AI Coach questions</h2>
            </div>
            <div className={styles.faqList}>
              {coachFaqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={faq.question}
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.faqToggleIcon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo — copy first in DOM; lifestyle sits left on desktop via grid */}
        <section id="demo" className={styles.demoSection}>
          <div className="container">
            <div className={styles.demoSplit}>
              <div className={styles.demoPanel} data-animate="peak-fade">
                <div className={styles.sectionHead} style={{ textAlign: "left", margin: "0 0 1.25rem" }}>
                  <span className={styles.demoKicker}>LIVE DEMO</span>
                  <h2 className={styles.demoTitle}>Test the accountability engine</h2>
                  <p className={styles.demoSubtitle}>
                    Tap a sample prompt to preview clarity and care-plan alignment.
                  </p>
                </div>
                <div className={styles.promptRow}>
                  {chatDemoPrompts.map((item, idx) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSelectedPromptIndex(idx)}
                      className={`${styles.promptButton} ${
                        idx === selectedPromptIndex ? styles.promptButtonActive : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className={styles.chatShell}>
                  <div className={styles.chatHeader}>
                    <div className={styles.chatBrand}>
                      <span className={styles.chatDot} />
                      <span>REFORM VITAL AI COACH</span>
                    </div>
                    <span className={styles.chatStatus}>24/7</span>
                  </div>
                  <div className={styles.chatThread} key={selectedPromptIndex}>
                    <div className={styles.userBubble}>
                      <span>YOU</span>
                      <p>{activeDemo.userText}</p>
                    </div>
                    <div className={styles.aiBubble}>
                      <span>AI COACH</span>
                      <p>{activeDemo.aiResponse}</p>
                    </div>
                  </div>
                  <a href="/portal" className={`btn btn-primary ${styles.demoCta}`}>
                    Connect portal to AI Coach →
                  </a>
                </div>
              </div>
              <div className={styles.demoLifestyle} aria-hidden data-animate="peak-fade">
                <SmoothImage
                  src={lifestyleMindfulness}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 42vw"
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.closingCta} data-animate="bounce">
          <div className="container">
            <div className={styles.closingInner}>
              <h2>Ready for provider-led care with daily accountability?</h2>
              <p>Start your assessment. Prescriptions only if clinically appropriate.</p>
              <div className={styles.heroCtas}>
                <a href="/start" className="btn btn-primary">
                  Start assessment
                </a>
                <a href="/treatments" className={`btn ${styles.heroGhostDark}`}>
                  Browse treatments
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

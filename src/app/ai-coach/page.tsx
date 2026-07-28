"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const chatDemoPrompts = [
  {
    label: "💊 Log Weekly Dose",
    aiResponse: "Awesome! I have logged your weekly Tirzepatide (5mg) dose for Dr. Wasef's review. Did you experience any nausea or fatigue today?",
    userText: "Log my weekly Tirzepatide dose completed today at 9:00 AM.",
  },
  {
    label: "🥗 Check Protein Goal",
    aiResponse: "Great job! You have logged 142g of protein today out of your 140g target (101% achieved). Keep up the hydration!",
    userText: "Did I hit my daily protein target today?",
  },
  {
    label: "📊 Generate Lab Report",
    aiResponse: "Your 90-day progress summary shows -18.4 lbs total weight reduction and a 1.3% drop in HbA1c. Your report has been dispatched to Dr. Sakla, DO.",
    userText: "Generate my quarterly biomarker progress report for my doctor.",
  },
];

const coachPillars = [
  {
    badge: "01 • REAL-TIME TRACKER",
    title: "Automated Macro, Dose, and Hydration Reminders",
    description:
      "Your AI coach learns your protocol cadence and sends non-intrusive nudges when it is time to log injections, protein targets, hydration, and movement.",
    proof: "98.4% adherence lift across active members",
    image: "/images/ai_coach_dashboard.png",
    alt: "AI coach dashboard with adherence and macro tracking",
  },
  {
    badge: "02 • 24/7 CLINICAL SUPPORT",
    title: "Instant Doctor-Aligned Answers Between Visits",
    description:
      "Members get immediate guidance on injection timing, symptom logs, nutrition tradeoffs, and protocol check-ins without waiting for office hours.",
    proof: "Evidence-aligned responses tuned to provider plans",
    image: "/images/ai_coach_patient.png",
    alt: "Patient checking AI coach messages on smartphone",
  },
  {
    badge: "03 • REPORT SYNC",
    title: "Quarterly Physician Reports Built Automatically",
    description:
      "Weight, blood pressure, dosing consistency, and symptoms are turned into concise provider reports so your medical team can optimize your plan faster.",
    proof: "Structured reporting synchronized with follow-up care",
    image: "/images/ai_coach_doctor.png",
    alt: "Physician reviewing patient biomarker report dashboard",
  },
];

const workflow = [
  {
    step: "Step 1",
    title: "Connect Baseline and Goals",
    description: "We capture your intake, labs, protocol goals, and preferred check-in rhythm in under two minutes.",
  },
  {
    step: "Step 2",
    title: "Coach Runs Daily Accountability",
    description: "You receive smart reminders, daily scorecards, and practical recommendations based on your current phase.",
  },
  {
    step: "Step 3",
    title: "Doctors Review Trends, Not Guesswork",
    description: "Your provider sees clean summaries and trend deltas before each follow-up for more precise decisions.",
  },
];

const trustStats = [
  { value: "24/7", label: "Member support cadence" },
  { value: "< 15 sec", label: "Average response speed in demo flow" },
  { value: "50 states", label: "Telehealth-ready physician network" },
  { value: "365 days", label: "Continuous accountability coverage" },
];

const trackedMetrics = [
  {
    id: "dose",
    title: "Dosing & Titration",
    icon: "💊",
    description: "Maintains optimal therapeutic levels while minimizing side effects.",
    details: [
      "Logs exact injection timestamp and dose strength (e.g., 2.5mg, 5.0mg, 7.5mg) automatically.",
      "Prompts injection site rotation (left abdomen, right thigh, etc.) to prevent localized fat tissue changes.",
      "Automatically alerts you if a dose is delayed or missed, with guided recovery instructions approved by your provider.",
      "Tracks side-effect severity over time to help your doctor decide if you are ready to titrate up or need to hold your current dose."
    ]
  },
  {
    id: "protein",
    title: "Lean Mass Preservation",
    icon: "🥩",
    description: "Ensures weight loss is fat loss, not lean muscle mass.",
    details: [
      "Calculates daily target protein goals based on your lean body mass index (typically 1.2g to 2.0g per kg).",
      "Logs food entries in seconds using natural language processing (e.g., 'I had a 6oz chicken breast and a cup of quinoa').",
      "Provides real-time feedback on amino acid completeness and protein distribution across meals.",
      "Integrates with resistance training logs to ensure your muscles are receiving the stimulus and fuel they need to thrive."
    ]
  },
  {
    id: "hydration",
    title: "Hydration & Electrolytes",
    icon: "💧",
    description: "Prevents headaches, supports kidney function, and maintains energy.",
    details: [
      "Calculates dynamic fluid intake goals based on your body weight, activity level, and local weather conditions.",
      "Sends non-intrusive reminders to consume electrolytes, especially on injection day and the 48 hours following.",
      "Tracks hydration consistency to prevent common GLP-1 side effects like mild headaches, fatigue, and constipation.",
      "Helps you monitor fluid retention trends alongside raw weight changes to isolate true body composition progress."
    ]
  },
  {
    id: "biomarkers",
    title: "Biomarkers & Symptoms",
    icon: "📊",
    description: "Aggregates daily vitals and subjective logs for clinical review.",
    details: [
      "Logs daily weight with a 7-day moving average filter to smooth out daily water weight fluctuations.",
      "Tracks blood pressure, resting heart rate, sleep duration, and subjective energy levels.",
      "Monitors digestive health and flags persistent mild symptoms (e.g., acid reflux, nausea) with validated lifestyle remedies.",
      "Compiles all logged metrics into clean, structured clinical reports synced directly to your patient profile for your doctor's review."
    ]
  }
];

const comparisonData = [
  {
    metric: "Support Cadence",
    traditional: "Once every 4-12 weeks during brief follow-up appointments.",
    reform: "24/7/365 continuous accountability with sub-15-second response times."
  },
  {
    metric: "Dose & Adherence",
    traditional: "Patient relies on memory; missed doses or incorrect titration are common.",
    reform: "Proactive, calendar-synced dose tracking with automated site rotation prompts."
  },
  {
    metric: "Body Composition",
    traditional: "Focuses solely on scale weight; high risk of muscle loss (up to 40% of total loss).",
    reform: "Strict focus on lean mass preservation with automated protein and resistance training tracking."
  },
  {
    metric: "Symptom Management",
    traditional: "Minor side effects go unmanaged, leading to premature treatment discontinuation.",
    reform: "Real-time clinical triage and lifestyle guidance to resolve mild symptoms instantly."
  },
  {
    metric: "Provider Visibility",
    traditional: "Doctors make decisions based on retrospective, often inaccurate patient recall.",
    reform: "Doctors receive structured, objective quarterly biomarker reports before your visit."
  }
];

const coachFaqs = [
  {
    question: "Is my personal health data secure and HIPAA-compliant?",
    answer: "Absolutely. Reform Vital employs bank-grade end-to-end encryption for all patient data. Our AI Coach operates within a secure, HIPAA-compliant infrastructure. Your logs and conversations are strictly confidential and are only shared with your assigned U.S. licensed medical team."
  },
  {
    question: "Does the AI Coach make medical decisions or change my prescription?",
    answer: "No. The AI Coach is an accountability, education, and tracking assistant. It cannot prescribe medication, diagnose conditions, or alter your treatment plan. All clinical decisions, dose adjustments, and prescription titrations are made exclusively by your licensed Reform Vital physician."
  },
  {
    question: "What happens if I experience severe side effects or a medical emergency?",
    answer: "Your safety is our absolute priority. The AI Coach is equipped with real-time clinical triage guardrails. If you report any 'red flag' symptoms (such as severe abdominal pain, high fever, or persistent vomiting), the system will immediately stop the conversation, provide emergency instructions, and prompt you to contact your doctor or seek urgent care."
  },
  {
    question: "How does the AI Coach communicate with my actual doctor?",
    answer: "Every piece of data you log—including weight trends, protein intake, dosing consistency, and symptom severity—is structured and compiled into a comprehensive quarterly report. This report is automatically uploaded to your Patient Portal and reviewed by Dr. Wasef or Dr. Sakla prior to your follow-up consultations, enabling highly precise, data-driven care."
  },
  {
    question: "Can I use the AI Coach for both weight loss (GLP-1) and hormone optimization (TRT)?",
    answer: "Yes. The AI Coach is fully multi-protocol. When you complete your health intake, the coach configures itself to match your specific treatment plan. If you are on Tirzepatide, it focuses heavily on protein, hydration, and gastrointestinal comfort. If you are on TRT, it tracks dosing schedules, sleep, energy levels, and cardiovascular vitals."
  }
];

export default function AICoachPage() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [activeMetricId, setActiveMetricId] = useState("dose");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeDemo = chatDemoPrompts[selectedPromptIndex];
  const activeMetric = trackedMetrics.find((m) => m.id === activeMetricId) || trackedMetrics[0];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroWrap}>
              <div className={styles.heroCopy}>
                <span className={styles.kicker}>24/7 CONTINUOUS CARE ENGINE</span>
                <h1 className={styles.heroTitle}>Your AI Accountability Coach Between Every Physician Visit</h1>
                <p className={styles.heroSubtitle}>
                  Reform Vital AI Coach keeps your protocol on track with personalized reminders, nutrition accountability,
                  symptom logging, and physician-ready reporting. You get daily guidance while your provider gets cleaner
                  trend visibility for smarter optimization.
                </p>
                <div className={styles.heroCtas}>
                  <a href="#demo" className="btn btn-primary">
                    Try Live AI Demo
                  </a>
                  <a href="/start" className={`btn ${styles.heroGhost}`}>
                    Start 2-Min Health Intake
                  </a>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.heroPanelHeader}>
                  <span>LIVE COACH PREVIEW</span>
                  <span className={styles.liveBadge}>ACTIVE</span>
                </div>
                <ul className={styles.panelList}>
                  <li>Dynamic dose reminders matched to your protocol week</li>
                  <li>Protein, hydration, and sleep accountability scoring</li>
                  <li>Escalation prompts when symptoms need provider review</li>
                  <li>Auto-generated quarterly progress snapshots</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Band */}
        <section className={styles.statsBand}>
          <div className="container">
            <div className={styles.statGrid}>
              {trustStats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the AI Coach Powers Care Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">INTELLIGENT TELEHEALTH PLATFORM</span>
              <h2 className={styles.sectionTitle}>How the AI Coach Powers Better Outcomes</h2>
              <p className={styles.sectionSubtitle}>
                More than a chatbot, this is a structured accountability engine designed for physician-guided treatment.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {coachPillars.map((pillar) => (
                <article key={pillar.title} className={styles.featureCard}>
                  <div className={styles.featureImageWrap}>
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <span className={styles.featureBadge}>{pillar.badge}</span>
                  </div>
                  <div className={styles.featureBody}>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <span className={styles.featureProof}>{pillar.proof}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Care Workflow Section */}
        <section className={styles.workflowSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">CARE WORKFLOW</span>
              <h2 className={styles.sectionTitle}>Built for Daily Execution and Smarter Follow-Ups</h2>
            </div>

            <div className={styles.workflowGrid}>
              {workflow.map((item) => (
                <div key={item.title} className={styles.workflowCard}>
                  <span className={styles.workflowStep}>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Metrics Explorer */}
        <section className={styles.metricsSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">METRIC TRACKING</span>
              <h2 className={styles.sectionTitle}>What We Track & Optimize</h2>
              <p className={styles.sectionSubtitle}>
                Every entry is structured, analyzed, and synthesized into clinical insights for your medical team.
              </p>
            </div>

            <div className={styles.metricsLayout}>
              {/* Sidebar Tabs */}
              <div className={styles.metricsTabs}>
                {trackedMetrics.map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => setActiveMetricId(metric.id)}
                    className={`${styles.metricTabButton} ${activeMetricId === metric.id ? styles.metricTabButtonActive : ""}`}
                  >
                    <span className={styles.metricTabIcon}>{metric.icon}</span>
                    <div className={styles.metricTabText}>
                      <span className={styles.metricTabTitle}>{metric.title}</span>
                      <span className={styles.metricTabDesc}>{metric.description}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <div className={styles.metricsContent}>
                <div className={styles.metricsContentHeader}>
                  <span className={styles.metricsContentIcon}>{activeMetric.icon}</span>
                  <h3>{activeMetric.title}</h3>
                </div>
                <p className={styles.metricsContentSub}>{activeMetric.description}</p>
                <ul className={styles.metricsDetailsList}>
                  {activeMetric.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className={styles.comparisonSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">THE TELEHEALTH GAP</span>
              <h2 className={styles.sectionTitle}>Traditional Telehealth vs. Reform Vital</h2>
              <p className={styles.sectionSubtitle}>
                Why standard online clinics fail to maintain long-term results, and how our Continuous Care Engine solves it.
              </p>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Key Care Pillar</th>
                    <th>Traditional Telehealth</th>
                    <th>Reform Vital Continuous Care</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i}>
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

        {/* Clinical Guardrails & Safety Protocols */}
        <section className={styles.safetySection}>
          <div className="container">
            <div className={styles.safetyCard}>
              <div className={styles.safetyIcon}>🛡️</div>
              <div className={styles.safetyContent}>
                <span className={styles.safetyBadge}>CLINICAL INTEGRITY & SAFETY</span>
                <h3>Strict Medical Guardrails & Triage Protocols</h3>
                <p>
                  Our AI Accountability Coach is built to support, not replace, human clinical judgment. It operates under 
                  strict guardrails established by our Medical Directors, Dr. Wasef and Dr. Sakla:
                </p>
                <div className={styles.safetyGrid}>
                  <div className={styles.safetyFeature}>
                    <h4>🚨 Red-Flag Triage</h4>
                    <p>If you report symptoms like severe abdominal pain, persistent vomiting, or heart palpitations, the AI instantly stops the session, provides emergency instructions, and alerts our clinical staff.</p>
                  </div>
                  <div className={styles.safetyFeature}>
                    <h4>📚 Locked Knowledge Base</h4>
                    <p>The AI is strictly bound to peer-reviewed clinical literature, endocrinology standards, and provider-approved guidelines. It never hallucinates or pulls unverified advice from the web.</p>
                  </div>
                  <div className={styles.safetyFeature}>
                    <h4>🔒 HIPAA-Compliant Sync</h4>
                    <p>All conversations and logged metrics are encrypted end-to-end. Vitals and symptoms are securely compiled and directly integrated into your Patient Electronic Health Record (EHR).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="badge">QUESTIONS & ANSWERS</span>
              <h2 className={styles.sectionTitle}>AI Coach Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about how the accountability engine operates, maintains security, and coordinates with your doctor.
              </p>
            </div>

            <div className={styles.faqList}>
              {coachFaqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div key={i} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
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

        {/* Interactive Live Chat Simulation Component */}
        <section id="demo" className={styles.demoSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.demoKicker}>INTERACTIVE DEMONSTRATION</span>
              <h2 className={styles.demoTitle}>Test the AI Accountability Engine</h2>
              <p className={styles.demoSubtitle}>
                Tap a sample patient prompt to preview response quality, clarity, and care-plan alignment.
              </p>
            </div>

            <div className={styles.promptRow}>
              {chatDemoPrompts.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedPromptIndex(idx)}
                  className={`${styles.promptButton} ${idx === selectedPromptIndex ? styles.promptButtonActive : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className={styles.chatShell}>
              <div className={styles.chatHeader}>
                <div className={styles.chatBrand}>
                  <span className={styles.chatDot} />
                  <span>REFORM VITAL AI COACH • LIVE DEMO</span>
                </div>
                <span className={styles.chatStatus}>24/7 ACTIVE</span>
              </div>
              <div className={styles.chatThread}>
                <div className={styles.userBubble}>
                  <span>YOU (PATIENT)</span>
                  <p>{activeDemo.userText}</p>
                </div>
                <div className={styles.aiBubble}>
                  <span>REFORM VITAL AI COACH</span>
                  <p>{activeDemo.aiResponse}</p>
                </div>
              </div>

              <a href="/portal" className={`btn btn-primary ${styles.demoCta}`}>
                Connect Your Patient Portal to AI Coach →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

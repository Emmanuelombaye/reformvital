"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function AICoachPage() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const activeDemo = chatDemoPrompts[selectedPromptIndex];

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--surface)", minHeight: "100vh" }}>
        {/* Header Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #070E17 0%, #0D1B2A 60%, #00A896 100%)",
            color: "#FFF",
            padding: "5rem 0 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
              <span
                style={{
                  background: "var(--accent)",
                  color: "#FFF",
                  padding: "0.4rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.8rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  display: "inline-block",
                  marginBottom: "1.2rem",
                }}
              >
                24/7 CONTINUOUS CARE ENGINE
              </span>

              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1.2rem", color: "#FFF" }}>
                Your 24/7 AI Health & Accountability Coach
              </h1>

              <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.65, marginBottom: "2.5rem" }}>
                Continuous guidance between physician visits. Track daily macros, dose schedules, and biomarker trends with instant AI assistance synced directly with your U.S. board-certified medical team.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#demo" className="btn btn-primary" style={{ padding: "1.05rem 2.2rem", fontSize: "1.05rem" }}>
                  Try Live AI Chat Demo ↓
                </a>
                <a href="/start" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", borderColor: "rgba(255,255,255,0.2)" }}>
                  Start 2-Min Health Intake
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3 AI Coach High-Res Visual Feature Frames */}
        <section style={{ padding: "4.5rem 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 3.5rem" }}>
              <span className="badge">INTELLIGENT TELEHEALTH PLATFORM</span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 900, marginTop: "0.4rem" }}>
                How the AI Accountability Coach Powers Your Care
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.2rem" }}>
              {/* Feature 1 Card */}
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: "230px", background: "linear-gradient(135deg, #0D1B2A 0%, #00A896 100%)" }}>
                  <Image
                    src="/images/ai_coach_dashboard.png"
                    alt="AI Health Dashboard Interface"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "var(--accent)",
                      color: "#FFF",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                    }}
                  >
                    01 • REAL-TIME TRACKER
                  </span>
                </div>

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.6rem", color: "var(--primary)" }}>
                    Automated Macro & Dose Reminders
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Never miss an injection dose or protein target. Your AI coach sends smart, non-intrusive check-ins tailored to your Tirzepatide or TRT protocol schedule.
                  </p>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--accent)", marginTop: "auto" }}>
                    ✓ 98.4% Adherence Improvement
                  </span>
                </div>
              </div>

              {/* Feature 2 Card */}
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: "230px", background: "linear-gradient(135deg, #162A45 0%, #0284C7 100%)" }}>
                  <Image
                    src="/images/ai_coach_patient..png"
                    alt="Patient Interacting with AI Coach"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "var(--accent)",
                      color: "#FFF",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                    }}
                  >
                    02 • 24/7 KNOWLEDGE
                  </span>
                </div>

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.6rem", color: "var(--primary)" }}>
                    Instant Clinical Q&A Support
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Have questions about injection technique, mild side-effects, or food pairings? Get immediate, doctor-validated answers 24 hours a day.
                  </p>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--accent)", marginTop: "auto" }}>
                    ✓ Doctor-Validated Clinical Knowledge
                  </span>
                </div>
              </div>

              {/* Feature 3 Card */}
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: "230px", background: "linear-gradient(135deg, #0F172A 0%, #10B981 100%)" }}>
                  <Image
                    src="/images/ai_coach_doctor.png"
                    alt="Physician Reviewing AI Generated Lab Report"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "var(--accent)",
                      color: "#FFF",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                    }}
                  >
                    03 • DOCTOR REPORT SYNC
                  </span>
                </div>

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.6rem", color: "var(--primary)" }}>
                    Automated Physician Biomarker Reports
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Your weight trends, blood pressure, and symptom logs are automatically compiled into quarterly reports for Dr. Wasef and Dr. Sakla to review.
                  </p>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--accent)", marginTop: "auto" }}>
                    ✓ Synced to Patient Electronic Record
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Live Chat Simulation Component */}
        <section id="demo" style={{ background: "#070E17", padding: "5rem 0", color: "#FFF" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 3rem" }}>
              <span style={{ background: "var(--accent)", color: "#FFF", padding: "0.35rem 0.95rem", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: 900, display: "inline-block", marginBottom: "0.8rem" }}>
                INTERACTIVE DEMONSTRATION
              </span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#FFF" }}>
                Test the AI Accountability Engine
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", marginTop: "0.4rem" }}>
                Select an example patient query below to experience real-time AI response formatting.
              </p>
            </div>

            {/* Prompt Selector Pills */}
            <div style={{ display: "flex", justifyContent: "center", gap: "0.85rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              {chatDemoPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPromptIndex(idx)}
                  style={{
                    background: idx === selectedPromptIndex ? "var(--accent)" : "rgba(255,255,255,0.08)",
                    color: "#FFF",
                    border: idx === selectedPromptIndex ? "none" : "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "9999px",
                    padding: "0.7rem 1.4rem",
                    fontSize: "0.92rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Simulated Smartphone Chat Screen */}
            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                background: "linear-gradient(180deg, #0D1B2A 0%, #162A45 100%)",
                border: "2px solid rgba(0, 168, 150, 0.5)",
                borderRadius: "1.75rem",
                padding: "2rem",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", paddingBottom: "0.8rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)" }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
                    REFORM VITAL AI COACH • LIVE DEMO
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", background: "rgba(0, 168, 150, 0.25)", color: "var(--accent)", padding: "3px 10px", borderRadius: "9999px", fontWeight: 800 }}>
                  24/7 ACTIVE
                </span>
              </div>

              {/* Chat Thread */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "1.5rem" }}>
                {/* User Message */}
                <div style={{ background: "rgba(0, 168, 150, 0.25)", padding: "1rem 1.25rem", borderRadius: "1rem 1rem 0.2rem 1rem", alignSelf: "flex-end", maxWidth: "85%" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "0.2rem", textAlign: "right" }}>
                    YOU (PATIENT)
                  </span>
                  <p style={{ fontSize: "0.95rem", color: "#FFF", margin: 0, fontWeight: 600 }}>{activeDemo.userText}</p>
                </div>

                {/* AI Message */}
                <div style={{ background: "rgba(255,255,255,0.08)", padding: "1.25rem", borderRadius: "1rem 1rem 1rem 0.2rem", maxWidth: "90%" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 900, display: "block", marginBottom: "0.3rem" }}>
                    🤖 REFORM VITAL AI COACH
                  </span>
                  <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.6, margin: 0 }}>
                    {activeDemo.aiResponse}
                  </p>
                </div>
              </div>

              <a href="/portal" className="btn btn-primary" style={{ width: "100%", padding: "1rem", textAlign: "center" }}>
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

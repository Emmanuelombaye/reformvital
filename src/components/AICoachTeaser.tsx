"use client";

import { brandConfig } from "@/brand.config";

export default function AICoachTeaser() {
  return (
    <section className="section" id="ai-coach" style={{ background: "var(--bg)", padding: "5rem 0" }}>
      <div className="container">
        {/* Main AI Coach Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #162A45 65%, #00A896 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(1.75rem, 4vw, 3.5rem)",
            color: "#FFF",
            boxShadow: "0 25px 60px rgba(13, 27, 42, 0.25)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient Radial Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0, 180, 216, 0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Left Text & Feature Grid */}
          <div style={{ position: "relative", zIndex: 2 }}>
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
                marginBottom: "1.2rem",
              }}
            >
              24/7 CONTINUOUS CARE ENGINE
            </span>

            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, color: "#FFF", lineHeight: 1.15, marginBottom: "1rem" }}>
              {brandConfig.aiCoach.headline}
            </h2>

            <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.65, marginBottom: "2rem" }}>
              {brandConfig.aiCoach.subheadline}
            </p>

            {/* 4 Feature Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.2rem" }}>
              {brandConfig.aiCoach.features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.95rem",
                    border: "1px solid rgba(0, 168, 150, 0.35)",
                  }}
                >
                  <h4 style={{ fontSize: "0.98rem", fontWeight: 800, color: "var(--accent-cyan)", marginBottom: "0.3rem" }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.45 }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/ai-coach" className="btn btn-primary" style={{ padding: "0.95rem 1.8rem", fontSize: "0.98rem" }}>
                Explore AI Health Portal →
              </a>
              <a href="/start" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", borderColor: "rgba(255,255,255,0.2)" }}>
                Start Online Assessment
              </a>
            </div>
          </div>

          {/* Right Simulated Smartphone Live Chat & Dashboard UI */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                background: "#070E17",
                border: "2px solid rgba(0, 168, 150, 0.5)",
                borderRadius: "1.75rem",
                padding: "1.5rem",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                color: "#FFF",
              }}
            >
              {/* Header Notch & Status */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem", paddingBottom: "0.8rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
                    REFORM VITAL AI COACH • LIVE
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", background: "rgba(0, 168, 150, 0.2)", color: "var(--accent)", padding: "2px 8px", borderRadius: "4px", fontWeight: 800 }}>
                  24/7 ACTIVE
                </span>
              </div>

              {/* Chat Messages */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.4rem", fontSize: "0.86rem" }}>
                <div style={{ background: "rgba(255,255,255,0.08)", padding: "0.85rem 1rem", borderRadius: "0.85rem 0.85rem 0.85rem 0.2rem" }}>
                  <strong style={{ color: "var(--accent-cyan)", display: "block", fontSize: "0.78rem", marginBottom: "0.2rem" }}>
                    AI Accountability Coach
                  </strong>
                  Good morning Sarah! Time for your weekly Tirzepatide dose check. Have you hit your 140g protein goal today?
                </div>

                <div style={{ background: "rgba(0, 168, 150, 0.25)", padding: "0.85rem 1rem", borderRadius: "0.85rem 0.85rem 0.2rem 0.85rem", alignSelf: "flex-end", maxWidth: "88%" }}>
                  <strong style={{ color: "#FFF", display: "block", fontSize: "0.78rem", marginBottom: "0.2rem", textAlign: "right" }}>
                    Patient Log
                  </strong>
                  Yes! Tracked 142g protein and completed a 45-minute resistance workout. Feeling energized!
                </div>

                <div style={{ background: "rgba(255,255,255,0.08)", padding: "0.85rem 1rem", borderRadius: "0.85rem 0.85rem 0.85rem 0.2rem" }}>
                  <strong style={{ color: "var(--accent-cyan)", display: "block", fontSize: "0.78rem", marginBottom: "0.2rem" }}>
                    AI Accountability Coach
                  </strong>
                  Awesome progress! You are down <strong>-3.4 lbs</strong> this week. Your monthly physician report is synced for Dr. Wasef.
                </div>
              </div>

              {/* Live Metric Widgets */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.75rem", borderRadius: "0.65rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", display: "block" }}>WEIGHT LOSS TREND</span>
                  <strong style={{ fontSize: "1rem", color: "var(--accent)" }}>-3.4 lbs This Week</strong>
                </div>

                <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.75rem", borderRadius: "0.65rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", display: "block" }}>DAILY PROTEIN GOAL</span>
                  <strong style={{ fontSize: "1rem", color: "var(--accent-cyan)" }}>142g / 140g (100%)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

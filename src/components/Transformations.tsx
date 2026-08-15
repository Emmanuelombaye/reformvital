"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const transformationsData = [
  {
    id: 1,
    image: "/images/1.webp",
    name: "Sarah M.",
    age: 38,
    verified: "Verified Patient",
    lbsLost: 54,
    timeframe: "5 Months",
    protocol: "Tirzepatide+ Dual GLP-1/GIP Protocol",
    beforeWeight: "218 lbs",
    afterWeight: "164 lbs",
    biomarker: "HbA1c Reduced from 6.4% to 5.1%",
    quote: "I tried every diet for 8 years without success. Reform Vital's physician team changed my life. 54 lbs down and my HbA1c is in optimal range.",
  },
  {
    id: 2,
    image: "/images/2.webp",
    name: "Marcus T.",
    age: 44,
    verified: "Verified Patient",
    lbsLost: 42,
    timeframe: "4 Months",
    protocol: "TRT + Enclomiphene & Sermorelin Stack",
    beforeWeight: "235 lbs",
    afterWeight: "193 lbs",
    biomarker: "Free Testosterone Increased by +320%",
    quote: "Energy levels are through the roof. My doctor monitored my bloodwork every 90 days. I feel 10 years younger and retained lean muscle.",
  },
  {
    id: 3,
    image: "/images/3.webp",
    name: "David K.",
    age: 51,
    verified: "Verified Patient",
    lbsLost: 62,
    timeframe: "6 Months",
    protocol: "Compounded Semaglutide + B12 Protocol",
    beforeWeight: "264 lbs",
    afterWeight: "202 lbs",
    biomarker: "Visceral Waist Reduction: -5.2 inches",
    quote: "No nausea, clear weekly guidance from Dr. Wasef, and discreet pharmacy delivery right to my door. Down 62 lbs total!",
  },
  {
    id: 4,
    image: "/images/4.webp",
    name: "Elena R.",
    age: 42,
    verified: "Verified Patient",
    lbsLost: 28,
    timeframe: "3 Months",
    protocol: "NAD+ Longevity & BPC-157 Repair Stack",
    beforeWeight: "168 lbs",
    afterWeight: "140 lbs",
    biomarker: "Cellular Energy & Recovery Score: 96%",
    quote: "Joint inflammation is gone and brain fog lifted within 3 weeks. Incredible longevity care with full physician support.",
  },
  {
    id: 5,
    image: "/images/5.webp",
    name: "Michael S.",
    age: 39,
    verified: "Verified Patient",
    lbsLost: 35,
    timeframe: "4 Months",
    protocol: "BPC-157 & TB-500 Tissue Recovery Stack",
    beforeWeight: "220 lbs",
    afterWeight: "185 lbs",
    biomarker: "Tendon Mobility & Joint Repair: 100%",
    quote: "Chronic knee pain prevented me from running. After 8 weeks on BPC-157, I am back running marathons pain-free.",
  },
  {
    id: 6,
    image: "/images/6.webp",
    name: "James P.",
    age: 41,
    verified: "Verified Patient",
    lbsLost: 0,
    timeframe: "6 Months",
    protocol: "Prescription Topical Hair Restoration Stack",
    beforeWeight: "Thinning Scalp",
    afterWeight: "Thick Density",
    biomarker: "Follicle Density Increased by +240%",
    quote: "My receding hairline reversed within 5 months. The topical Minoxidil + Finasteride + GHK-Cu blend actually works!",
  },
  {
    id: 7,
    image: "/images/7.webp",
    name: "Amanda L.",
    age: 35,
    verified: "Verified Patient",
    lbsLost: 48,
    timeframe: "5 Months",
    protocol: "Retatrutide Triple-Target Protocol",
    beforeWeight: "205 lbs",
    afterWeight: "157 lbs",
    biomarker: "Body Fat Percentage: 32% → 19%",
    quote: "The triple receptor targeting stopped my food noise completely. 48 lbs lost and I have never felt healthier.",
  },
  {
    id: 8,
    image: "/images/8.webp",
    name: "Robert B.",
    age: 48,
    verified: "Verified Patient",
    lbsLost: 38,
    timeframe: "4 Months",
    protocol: "Sermorelin Growth Hormone Optimization",
    beforeWeight: "228 lbs",
    afterWeight: "190 lbs",
    biomarker: "Deep REM Sleep Score: 94% Optimal",
    quote: "Sleeping like a teenager again and waking up energized. Lost 38 lbs while maintaining solid lean mass.",
  },
];

export default function Transformations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Auto-play continuous loop for spotlight slider (slides every 4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % transformationsData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleSelectPatient = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Smooth scroll jump to spotlight showcase box
    spotlightRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % transformationsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + transformationsData.length) % transformationsData.length);
  };

  const currentItem = transformationsData[activeIndex];

  return (
    <section className="section" id="results" style={{ background: "var(--surface)", padding: "5rem 0", overflow: "hidden" }}>
      {/* CSS Keyframes for Continuous Marquee Loop */}
      <style jsx global>{`
        @keyframes continuousMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div className="section-head" style={{ textAlign: "center", maxWidth: "52rem", margin: "0 auto 3.5rem" }}>
          <span className="badge" style={{ background: "var(--accent)", color: "#FFF", marginBottom: "0.8rem" }}>
            PROVEN CLINICAL OUTCOMES
          </span>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, marginBottom: "0.8rem" }}>
            Incredible Patient Results — Built to Last
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Real weight loss, metabolic health improvements, and muscle recovery outcomes supervised by board-certified physicians.
          </p>
        </div>

        {/* Aggregate Metrics Bar */}
        <div
          className="rv-transform-metrics"
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #162A45 100%)",
            borderRadius: "1.25rem",
            padding: "1.5rem 2rem",
            color: "#FFF",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
            marginBottom: "3.5rem",
            boxShadow: "0 15px 35px rgba(13, 27, 42, 0.15)",
          }}
        >
          <div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--accent-cyan)" }}>94.2%</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>6-Month Patient Retention</div>
          </div>
          <div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--accent-gold)" }}>18.4%</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>Average Body Weight Reduction</div>
          </div>
          <div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--accent)" }}>100%</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>U.S. Doctor Supervised</div>
          </div>
          <div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#FFF" }}>50-State</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>Discreet Cold-Chain Delivery</div>
          </div>
        </div>

        {/* Spotlight Showcase Box (Target for Smooth Scroll Jump) */}
        <div
          ref={spotlightRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            background: "linear-gradient(135deg, #070E17 0%, #0D1B2A 70%, #162A45 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            color: "#FFF",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
            marginBottom: "4rem",
            position: "relative",
          }}
        >
          {/* Controls Bar */}
          <div className="rv-transform-controls" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
              <span
                style={{
                  background: "var(--accent)",
                  color: "#FFF",
                  padding: "0.35rem 0.95rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                }}
              >
                PATIENT CASE 0{activeIndex + 1} OF 08
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 800 }}>
                {currentItem.name} • {currentItem.verified}
              </span>
            </div>

            {/* Controls & Loop Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <span className="rv-transform-autoplay" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>
                {isPaused ? "⏸ PAUSED" : "▶ AUTO PLAY"}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Transformation"
                  className="rv-touch"
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    minHeight: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    color: "#FFF",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Transformation"
                  className="rv-touch"
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    minHeight: "48px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    color: "#FFF",
                    border: "none",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Featured Spotlight Grid */}
          <div
            className="rv-transform-spotlight-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div
              className="rv-transform-spotlight-media"
              style={{
                position: "relative",
                borderRadius: "1.25rem",
                overflow: "hidden",
                border: "2px solid rgba(0, 168, 150, 0.5)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                aspectRatio: "4 / 5",
                background: "linear-gradient(165deg, #eef5f3 0%, #e8f0ee 55%, #0d1b2a 100%)",
                padding: "0.55rem",
                boxSizing: "border-box",
              }}
            >
              <Image
                src={currentItem.image}
                alt={`${currentItem.name} Transformation Result`}
                fill
                sizes="(max-width: 768px) 92vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "center center" }}
                loading="lazy"
                quality={65}
              />

              <div
                className="rv-transform-outcome"
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                  background: "rgba(7, 14, 23, 0.85)",
                  backdropFilter: "blur(12px)",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "0.85rem",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", display: "block" }}>BASELINE INTAKE</span>
                  <strong style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>{currentItem.beforeWeight}</strong>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", display: "block" }}>ACHIEVED OUTCOME</span>
                  <strong style={{ fontSize: "1.1rem", color: "#FFF" }}>{currentItem.afterWeight}</strong>
                </div>
              </div>
            </div>

            <div className="rv-transform-copy">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.8rem" }}>
                <span className="badge" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  ✓ {currentItem.verified}
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>Age {currentItem.age}</span>
              </div>

              <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#FFF", marginBottom: "0.5rem" }}>
                {currentItem.lbsLost > 0 ? `-${currentItem.lbsLost} LBS Reduced` : "Restored Hair Density"}
              </h3>

              <div style={{ fontSize: "1.1rem", color: "var(--accent-cyan)", fontWeight: 800, marginBottom: "1.2rem" }}>
                Achieved in {currentItem.timeframe} with {currentItem.protocol}
              </div>

              <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.8rem", background: "rgba(255,255,255,0.06)", padding: "1.2rem", borderRadius: "1rem", borderLeft: "4px solid var(--accent)" }}>
                "{currentItem.quote}"
              </p>

              <div className="rv-transform-biomarker" style={{ background: "rgba(255,255,255,0.08)", padding: "1rem 1.25rem", borderRadius: "0.85rem", border: "1px solid rgba(0, 168, 150, 0.4)", marginBottom: "2rem" }}>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 800, display: "block", marginBottom: "0.2rem" }}>
                  CLINICAL BIOMARKER
                </span>
                <strong style={{ fontSize: "1.1rem", color: "var(--accent-gold)" }}>{currentItem.biomarker}</strong>
              </div>

              <a href="/start" className="btn btn-primary rv-transform-cta" style={{ padding: "0.95rem 2rem", fontSize: "1rem" }}>
                Start Your Transformation Assessment →
              </a>
            </div>
          </div>

          {/* 8 Indicator Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2.5rem" }}>
            {transformationsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPatient(idx)}
                aria-label={`Go to transformation ${idx + 1}`}
                style={{
                  width: idx === activeIndex ? "32px" : "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  background: idx === activeIndex ? "var(--accent)" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* CONTINUOUS LOOPING MOTION MARQUEE FOR DESKTOP & SWIPE FOR MOBILE */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "2rem", marginTop: "0.4rem" }}>Select Patient Story to View</h3>
        </div>

        <div
          className="marquee-track-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            overflow: "hidden",
            width: "100%",
            paddingBottom: "1.5rem",
            position: "relative",
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: "flex",
              gap: "1.25rem",
              width: "max-content",
              animation: "continuousMarquee 28s linear infinite",
            }}
          >
            {/* Double the array for seamless infinite marquee loop */}
            {[...transformationsData, ...transformationsData].map((item, idx) => {
              const realIndex = idx % transformationsData.length;
              const isSelected = realIndex === activeIndex;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="transform-card"
                  onClick={() => handleSelectPatient(realIndex)}
                  style={{
                    flex: "0 0 250px",
                    background: isSelected ? "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)" : "var(--bg)",
                    border: isSelected ? "2px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: "1.25rem",
                    padding: "1rem",
                    cursor: "pointer",
                    boxShadow: isSelected ? "0 10px 25px rgba(0, 168, 150, 0.2)" : "var(--shadow-card)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="rv-transform-thumb"
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 5",
                      borderRadius: "0.95rem",
                      overflow: "hidden",
                      marginBottom: "0.85rem",
                      background: "linear-gradient(165deg, #eef5f3 0%, #e8f0ee 100%)",
                      padding: "0.45rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="250px"
                      style={{ objectFit: "contain", objectPosition: "center center" }}
                      loading="lazy"
                      quality={75}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.2rem" }}>
                    <strong style={{ fontSize: "1.02rem", color: "var(--primary)", fontWeight: 900 }}>
                      {item.name}
                    </strong>
                    <span
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      {item.lbsLost > 0 ? `-${item.lbsLost} lbs` : "Hair Density"}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600, display: "block" }}>
                    {item.timeframe} • {item.protocol}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { brandConfig } from "@/brand.config";
import { TealIconBadge } from "./TealIcon";

const featuredLines = [
  {
    title: "Metabolic Weight Loss",
    desc: "Targeted appetite regulation with Semaglutide, Tirzepatide & Retatrutide.",
    whoItHelps: "Adults seeking sustainable weight loss with physician oversight.",
    benefits: "Reduced cravings, metabolic reset, and cold-chain pharmacy delivery included.",
    href: "/treatments/semaglutide",
    cta: "Start My Health Assessment →",
    icon: "bolt" as const,
  },
  {
    title: "Hormone Optimization",
    desc: "Bioidentical TRT, Enclomiphene & endocrine balance protocols.",
    whoItHelps: "Men and women with fatigue, low energy, or hormone imbalance symptoms.",
    benefits: "Lab-guided dosing, libido support, and lean mass retention.",
    href: "/treatments/trt",
    cta: "Meet With a Provider →",
    icon: "dna" as const,
  },
  {
    title: "Longevity & NAD+",
    desc: "Mitochondrial ATP cellular energy & sirtuin activation coenzymes.",
    whoItHelps: "Those focused on cellular energy, recovery, and healthy aging.",
    benefits: "Physician-guided NAD+ protocols with ongoing biomarker monitoring.",
    href: "/treatments/nad-plus",
    cta: "Learn How It Works →",
    icon: "lab" as const,
  },
  {
    title: "Recovery & Tissue Repair",
    desc: "BPC-157 & TB-500 pentadecapeptides for tendon and mucosal healing.",
    whoItHelps: "Active adults with joint, tendon, or recovery-focused goals.",
    benefits: "Clinical oversight, structured dosing, and follow-up adjustments.",
    href: "/treatments/bpc-157",
    cta: "Book My Consultation →",
    icon: "repair" as const,
  },
];

export default function Treatments() {
  const categoryCount = brandConfig.services.length;

  return (
    <section className="section" id="services" style={{ background: "var(--surface)", padding: "4.5rem 0" }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 3rem" }}>
          <p className="eyebrow" style={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
            PHYSICIAN-GUIDED CARE PROTOCOLS
          </p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, marginBottom: "0.8rem" }}>
            Precision Healthcare. Compounded for You.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Long-term health partnerships—not one-time prescriptions. Select from specialized care lines with ongoing provider support, lab reviews, and personalized optimization.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #162A45 60%, #00A896 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(1.75rem, 4vw, 3.2rem)",
            color: "#FFF",
            boxShadow: "0 20px 50px rgba(13, 27, 42, 0.25)",
            marginBottom: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{ background: "var(--accent)", color: "#FFF", padding: "0.3rem 0.85rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 900 }}>
                FEATURED PROGRAM
              </span>
              <span style={{ background: "rgba(255,255,255,0.15)", color: "#FFF", padding: "0.3rem 0.85rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 800 }}>
                METABOLIC WEIGHT LOSS
              </span>
            </div>

            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#FFF", marginBottom: "0.8rem", lineHeight: 1.2 }}>
              Compounded Semaglutide & Tirzepatide+
            </h3>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Physician-guided GLP-1 care with consult, compounding, and cold-chain delivery included. Flat-rate from $149/mo.
            </p>
            <a href="/start" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", borderColor: "rgba(255,255,255,0.2)" }}>
              Begin Assessment →
            </a>
          </div>
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
            }}
          >
            <Image
              src="/images/Tirzepatide.png"
              alt="Compounded GLP-1 therapy"
              width={720}
              height={540}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              quality={85}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {featuredLines.map((line) => (
            <div
              key={line.title}
              className="treatment-card"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                padding: "1.5rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <TealIconBadge name={line.icon} />
              <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.3rem", color: "var(--primary)" }}>
                {line.title}
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.65rem" }}>
                {line.desc}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: 600, lineHeight: 1.45, marginBottom: "0.35rem" }}>
                <strong>Who it helps:</strong> {line.whoItHelps}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.45, marginBottom: "1rem" }}>
                {line.benefits}
              </p>
              <a href={line.href} style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent)" }}>
                {line.cta}
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", paddingTop: "1.5rem" }}>
          <a
            href="/treatments"
            className="btn btn-navy"
            style={{ padding: "1.1rem 2.5rem", fontSize: "1.05rem" }}
          >
            View Complete {categoryCount}-Category Dream Service Menu →
          </a>
        </div>
      </div>
    </section>
  );
}

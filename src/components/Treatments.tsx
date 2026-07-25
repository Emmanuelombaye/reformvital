"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

const categoryImageMap: Record<string, string> = {
  "weight-loss": "/images/weight_loss_glp1.png",
  "longevity": "/images/longevity_nad.png",
  "recovery": "/images/recovery_bpc157.png",
  "growth-hormone": "/images/recovery_bpc157.png",
  "hormones": "/images/weight_loss_glp1.png",
  "cognitive": "/images/longevity_nad.png",
  "sexual-wellness": "/images/weight_loss_glp1.png",
  "hair": "/images/longevity_nad.png",
};

export default function Treatments() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);

  const selectedCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];
  const activeImage = categoryImageMap[activeTab] || "/images/weight_loss_glp1.png";

  return (
    <section className="section" id="services" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head">
          <span className="badge" style={{ marginBottom: "0.8rem" }}>DREAM SERVICE MENU</span>
          <h2>Personalized Treatments & Protocols</h2>
          <p>Compounded prescription medications prescribed by U.S. board-certified medical providers.</p>
        </div>

        {/* Category Pill Tabs */}
        <div className="tabs">
          {brandConfig.services.map((cat) => (
            <button
              key={cat.id}
              className={`tab ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Featured Category Banner with Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "2rem",
            alignItems: "center",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "2rem",
            marginBottom: "2.5rem",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div>
            <span className="badge" style={{ marginBottom: "0.8rem" }}>{selectedCategory.title}</span>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>
              Physician-Guided {selectedCategory.title} Protocols
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
              {selectedCategory.subtitle}
            </p>
            <a href="#quiz" className="btn btn-primary">
              Consult U.S. Doctor Now →
            </a>
          </div>

          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid var(--border)",
              maxHeight: "240px",
            }}
          >
            <img
              src={activeImage}
              alt={selectedCategory.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="treatment-grid">
          {selectedCategory.therapies.map((therapy, i) => (
            <div className="treatment-card" key={i}>
              <div className="treatment-body">
                <span className="badge">Physician Prescribed</span>
                <h3>{therapy.name}</h3>
                <div className="treatment-price">{therapy.price}</div>
                <p>{therapy.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
                  <a href="#quiz" className="btn btn-primary" style={{ width: "100%" }}>
                    See if I qualify →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

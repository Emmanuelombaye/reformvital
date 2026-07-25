"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

export default function Treatments() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);

  const selectedCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: "12px" }}>
            Comprehensive Care Catalog
          </span>
          <h2 className="section-title">Dream Service Menu & Therapies</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Physician-guided medical protocols, compounded peptides, and metabolic optimization plans tailored to your goals.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="services-nav-tabs">
          {brandConfig.services.map((cat) => (
            <button
              key={cat.id}
              className={`service-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div
          style={{
            background: "#FFF",
            border: "2px solid var(--color-border-dark)",
            borderRadius: "var(--radius-md)",
            padding: "20px 24px",
            marginTop: "24px",
            boxShadow: "var(--shadow-retro-md)",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "4px", color: "var(--color-primary)" }}>
            {selectedCategory.title}
          </h3>
          <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)" }}>{selectedCategory.subtitle}</p>
        </div>

        {/* Therapies Cards Grid */}
        <div className="services-grid">
          {selectedCategory.therapies.map((therapy, i) => (
            <div className="service-card" key={i}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span className="badge badge-teal">Physician Prescribed</span>
                <span style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--color-teal)" }}>
                  {therapy.price}
                </span>
              </div>

              <h4 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "8px", color: "var(--color-primary)" }}>
                {therapy.name}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                {therapy.desc}
              </p>

              <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1.5px dashed var(--color-teal-soft)" }}>
                <a href="#quiz" className="btn btn-teal" style={{ width: "100%", justifyContent: "center" }}>
                  Consult Physician →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

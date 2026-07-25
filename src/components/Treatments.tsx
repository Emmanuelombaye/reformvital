"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

export default function Treatments() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);

  const selectedCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];

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

        {/* Treatment Grid Cards */}
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

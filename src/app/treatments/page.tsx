"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState(brandConfig.services[0].id);

  const selectedCategory = brandConfig.services.find((s) => s.id === activeTab) || brandConfig.services[0];

  return (
    <>
      <Navbar />
      <main>
        {/* Header Hero */}
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "56rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>FULL SERVICE MENU</span>
              <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>Physician-Guided Treatments & Protocols</h1>
              <p style={{ fontSize: "1.15rem" }}>
                Select a treatment category below to explore compounded medications, physician protocols, active ingredients, and clinical research.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="tabs" style={{ marginTop: "1.5rem" }}>
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
          </div>
        </section>

        {/* Selected Category Content */}
        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="badge" style={{ marginBottom: "0.5rem" }}>{selectedCategory.title}</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{selectedCategory.title} Catalog</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>{selectedCategory.subtitle}</p>
            </div>

            <div className="treatment-grid">
              {selectedCategory.therapies.map((t) => (
                <div className="treatment-card" key={t.slug || t.name}>
                  <div className="treatment-body">
                    <span className="badge">Physician Prescribed</span>
                    <h3>{t.name}</h3>
                    <div className="treatment-price">{t.price}</div>
                    <p>{t.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "auto" }}>
                      {t.slug && (
                        <a href={`/treatments/${t.slug}`} className="btn btn-primary" style={{ width: "100%" }}>
                          View Treatment Details →
                        </a>
                      )}
                      <a href="/start" className="btn btn-ghost" style={{ width: "100%" }}>
                        Start Physician Intake
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

export default function Navbar() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-inner">
        <a href="/" className="navbar-brand">
          <ReformVitalLogo height={38} showText={true} />
        </a>

        <ul className="navbar-links">
          {brandConfig.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Phone Quick Link */}
          <a
            href={`tel:${brandConfig.nav.phone}`}
            style={{
              fontSize: "0.88rem",
              fontWeight: 700,
              color: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{brandConfig.nav.phone}</span>
          </a>

          {/* Language Dropdown */}
          <div style={{ position: "relative" }}>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ padding: "6px 12px", fontSize: "0.85rem" }}
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{currentLang}</span>
              <span style={{ fontSize: "0.7rem" }}>▼</span>
            </button>

            {langMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "6px",
                  background: "#FFF",
                  border: "2px solid #070E17",
                  borderRadius: "10px",
                  boxShadow: "3px 4px 0px #070E17",
                  padding: "6px",
                  zIndex: 1100,
                  minWidth: "120px",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 12px",
                    fontWeight: 700,
                    borderRadius: "6px",
                    background: currentLang === "EN" ? "var(--color-teal-soft)" : "transparent",
                  }}
                  onClick={() => {
                    setCurrentLang("EN");
                    setLangMenuOpen(false);
                  }}
                >
                  English (EN)
                </button>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 12px",
                    fontWeight: 700,
                    borderRadius: "6px",
                    background: currentLang === "ES" ? "var(--color-teal-soft)" : "transparent",
                  }}
                  onClick={() => {
                    setCurrentLang("ES");
                    setLangMenuOpen(false);
                  }}
                >
                  Español (ES)
                </button>
              </div>
            )}
          </div>

          <a href={brandConfig.nav.ctaLink} className="btn btn-teal">
            {brandConfig.nav.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}

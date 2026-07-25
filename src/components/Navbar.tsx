"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";

export default function Navbar() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo-text">
            {brandConfig.name}
          </a>
        </div>

        <ul className="navbar-links">
          {brandConfig.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">
                {link.isSoon && <span className="navbar-dot"></span>}
                <span>{link.label}</span>
                {link.tag && <span className="navbar-soon-badge">{link.tag}</span>}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
                  border: "2px solid #1F2A37",
                  borderRadius: "10px",
                  boxShadow: "3px 4px 0px #181C24",
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
                    background: currentLang === "EN" ? "var(--color-cream)" : "transparent",
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
                    background: currentLang === "ES" ? "var(--color-cream)" : "transparent",
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

          <a
            href={brandConfig.nav.loginLink}
            style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-primary)" }}
          >
            {brandConfig.nav.loginText}
          </a>

          <a href={brandConfig.nav.ctaLink} className="btn btn-primary">
            {brandConfig.nav.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}

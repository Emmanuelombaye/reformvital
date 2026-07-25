"use client";

import { useState } from "react";
import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
      <nav className="nav" id="navbar">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <ReformVitalLogo height={36} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {brandConfig.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <a
              href={`tel:${brandConfig.nav.phone}`}
              className="desktop-only-phone"
              style={{
                fontSize: "0.88rem",
                fontWeight: 700,
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{brandConfig.nav.phone}</span>
            </a>

            <a href={brandConfig.nav.ctaLink} className="btn btn-primary" style={{ padding: "0.65rem 1.25rem", fontSize: "0.88rem" }}>
              {brandConfig.nav.ctaText}
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "var(--surface)",
              borderBottom: "2px solid var(--accent)",
              padding: "1.25rem 1.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {brandConfig.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", display: "block" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: "0.5rem", borderTop: "1px solid var(--border)" }}>
                <a
                  href={`tel:${brandConfig.nav.phone}`}
                  style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent)", display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  📞 Call Doctor Support: {brandConfig.nav.phone}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

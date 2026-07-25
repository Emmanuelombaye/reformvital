"use client";

import { useState, useRef, useEffect } from "react";
import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

const dropdownProtocols = [
  { slug: "semaglutide", title: "Medical Weight Loss (GLP-1)", tag: "Semaglutide / Tirzepatide", icon: "⚡" },
  { slug: "trt", title: "Hormone Optimization (TRT)", tag: "Testosterone Cypionate & HRT", icon: "🧬" },
  { slug: "sermorelin", title: "Growth Hormone Optimization", tag: "Sermorelin & Secretagogues", icon: "🌙" },
  { slug: "bpc-157", title: "Recovery & Tissue Repair", tag: "BPC-157 & TB-500 Peptides", icon: "🩹" },
  { slug: "nad-plus", title: "Longevity & Healthy Aging", tag: "NAD+ Cellular Energy Matrix", icon: "🔬" },
  { slug: "semax", title: "Cognitive Optimization", tag: "Semax & Selank Neuropeptides", icon: "🧠" },
  { slug: "pt-141", title: "Sexual Wellness & Vitality", tag: "PT-141 Bremelanotide Therapy", icon: "🔥" },
  { slug: "hair-restoration", title: "Prescription Hair Restoration", tag: "Minoxidil + Finasteride + GHK-Cu", icon: "✨" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
      <nav className="nav" id="navbar">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <ReformVitalLogo height={36} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            {/* Interactive Treatments Dropdown (NexaMD Style) */}
            <li
              ref={dropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="/treatments"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: dropdownOpen ? "var(--accent)" : "var(--text-muted)",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                }}
              >
                <span>Treatments</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>

              {/* Dropdown Menu Panel */}
              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "-1rem",
                    width: "360px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "1rem",
                    boxShadow: "0 20px 40px rgba(13, 27, 42, 0.2)",
                    padding: "0.85rem",
                    zIndex: 1100,
                    animation: "rise 0.2s ease both",
                  }}
                >
                  <div style={{ padding: "0.4rem 0.6rem 0.6rem", borderBottom: "1px solid var(--border)", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em" }}>
                      CARE PROTOCOLS MENU (08 LINES)
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {dropdownProtocols.map((item) => (
                      <a
                        key={item.slug}
                        href={`/treatments/${item.slug}`}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.6rem 0.75rem",
                          borderRadius: "0.6rem",
                          transition: "background 0.2s ease",
                          color: "var(--primary)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                        <div>
                          <strong style={{ display: "block", fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)" }}>
                            {item.title}
                          </strong>
                          <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{item.tag}</span>
                        </div>
                      </a>
                    ))}

                    <div style={{ borderTop: "1px solid var(--border)", marginTop: "0.4rem", paddingTop: "0.5rem" }}>
                      <a
                        href="/treatments"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          textAlign: "center",
                          fontSize: "0.86rem",
                          fontWeight: 800,
                          color: "var(--accent)",
                          padding: "0.4rem",
                        }}
                      >
                        Explore Full Service Menu Catalog →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Standard Nav Links */}
            {brandConfig.nav.links
              .filter((l) => l.href !== "/treatments")
              .map((link) => (
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
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <button
                onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.4rem 0",
                }}
              >
                <span>Care Programs (08 Protocols)</span>
                <span>{mobileTreatmentsOpen ? "▲" : "▼"}</span>
              </button>

              {mobileTreatmentsOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", paddingLeft: "0.8rem", marginTop: "0.6rem" }}>
                  {dropdownProtocols.map((item) => (
                    <a
                      key={item.slug}
                      href={`/treatments/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary)" }}
                    >
                      {item.icon} {item.title}
                    </a>
                  ))}
                  <a
                    href="/treatments"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--accent)", marginTop: "0.4rem" }}
                  >
                    → View All Treatments Catalog
                  </a>
                </div>
              )}
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {brandConfig.nav.links
                .filter((l) => l.href !== "/treatments")
                .map((link) => (
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

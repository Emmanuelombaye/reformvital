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

/** All center links share identical padding — FAQ is never next to Portal */
const PRIMARY_LINKS = [
  { label: "Memberships", href: "/memberships" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI Coach", href: "/ai-coach" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const treatmentsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (treatmentsRef.current && !treatmentsRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="rv-header">
      <nav className="nav" id="navbar" aria-label="Primary">
        <div className="container nav-shell">
          <a href="/" className="brand" aria-label="Reform Vital home">
            <ReformVitalLogo height={30} showText />
          </a>

          <ul className="nav-menu">
            <li
              ref={treatmentsRef}
              className={`nav-item${dropdownOpen ? " is-open" : ""}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="/treatments"
                className="nav-item-link"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Treatments
                <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>

              <div className="nav-dropdown nav-dropdown--treatments" role="menu">
                <div className="nav-dropdown-kicker">Care protocols</div>
                {dropdownProtocols.map((item) => (
                  <a
                    key={item.slug}
                    href={`/treatments/${item.slug}`}
                    className="nav-dropdown-row"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-dropdown-icon" aria-hidden>
                      {item.icon}
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      <em>{item.tag}</em>
                    </span>
                  </a>
                ))}
                <a
                  href="/treatments"
                  className="nav-dropdown-footer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Explore full catalog →
                </a>
              </div>
            </li>

            {PRIMARY_LINKS.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-item-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions are a separate column — Portal never sits beside FAQ */}
          <div className="nav-end">
            <div className="nav-end-divider" aria-hidden />
            <a href={brandConfig.nav.loginLink} className="nav-portal">
              Portal
            </a>
            <a
              href={`tel:${brandConfig.nav.phone}`}
              className="nav-phone"
              aria-label={`Call ${brandConfig.nav.phone}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="nav-phone-text">{brandConfig.nav.phone}</span>
            </a>
            <a href={brandConfig.nav.ctaLink} className="btn btn-primary nav-cta">
              {brandConfig.nav.ctaText}
            </a>
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
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

        {mobileMenuOpen && (
          <div className="nav-mobile">
            <button
              type="button"
              className="nav-mobile-accordion"
              onClick={() => setMobileTreatmentsOpen((v) => !v)}
            >
              <span>Treatments</span>
              <span aria-hidden>{mobileTreatmentsOpen ? "▲" : "▼"}</span>
            </button>

            {mobileTreatmentsOpen && (
              <div className="nav-mobile-sub">
                {dropdownProtocols.map((item) => (
                  <a
                    key={item.slug}
                    href={`/treatments/${item.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon} {item.title}
                  </a>
                ))}
                <a href="/treatments" className="nav-mobile-accent" onClick={() => setMobileMenuOpen(false)}>
                  → View all treatments
                </a>
              </div>
            )}

            <ul className="nav-mobile-list">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-mobile-meta">
                <a href={brandConfig.nav.loginLink} onClick={() => setMobileMenuOpen(false)}>
                  Patient portal
                </a>
                <a href={`tel:${brandConfig.nav.phone}`} className="nav-mobile-accent">
                  Call {brandConfig.nav.phone}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

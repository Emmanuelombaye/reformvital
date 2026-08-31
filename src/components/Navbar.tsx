"use client";

import { useState, useRef, useEffect } from "react";
import { brandConfig } from "@/brand.config";
import { WEIGHT_TREATMENTS } from "@/lib/treatmentCatalog";
import OfferBanner from "./OfferBanner";
import TrustBar from "./TrustBar";
import ReformVitalLogo from "./ReformVitalLogo";

const TREATMENT_LINKS = WEIGHT_TREATMENTS.map((t) => ({
  label: t.name,
  href: `/treatments/${t.slug}`,
}));

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const treatmentsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (treatmentsRef.current && !treatmentsRef.current.contains(target)) {
        setTreatmentsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="rv-site-header">
      <OfferBanner />
      <TrustBar />

      <nav className={`nav${mobileMenuOpen ? " is-mobile-open" : ""}`} id="navbar" aria-label="Primary">
        <div className="container nav-shell">
          <a href="/" className="brand" aria-label="Reform Vital home" onClick={closeMobile}>
            <ReformVitalLogo height={30} showText showTagline={false} />
          </a>

          <ul className="nav-menu">
            <li
              ref={treatmentsRef}
              className={`nav-item nav-item--more${treatmentsOpen ? " is-open" : ""}`}
              onMouseEnter={() => setTreatmentsOpen(true)}
              onMouseLeave={() => setTreatmentsOpen(false)}
            >
              <button
                type="button"
                className="nav-item-link nav-item-link--btn"
                aria-expanded={treatmentsOpen}
                aria-haspopup="true"
                onClick={() => setTreatmentsOpen((v) => !v)}
              >
                Treatments
                <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-more-panel">
                <a href="/treatments" className="nav-more-link" onClick={() => setTreatmentsOpen(false)}>
                  All Treatments
                </a>
                {TREATMENT_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-more-link"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          <div className="nav-end">
            <a href={brandConfig.nav.loginLink} className="nav-login">
              Log in
            </a>
            <a href={`tel:${brandConfig.nav.phone}`} className="nav-phone" aria-label={`Call ${brandConfig.nav.phone}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="nav-phone-text">{brandConfig.nav.phone}</span>
            </a>
            <a href={brandConfig.nav.ctaLink} className="btn btn-primary nav-cta nav-cta--desktop">
              Start Assessment
            </a>
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="rv-mobile-nav"
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
          <div className="rv-mobile-drawer" id="rv-mobile-nav">
            <ul className="rv-mobile-list">
              <li>
                <a href="/treatments" className="rv-mobile-link" onClick={closeMobile}>
                  All Treatments
                </a>
              </li>
              {TREATMENT_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="rv-mobile-link" onClick={closeMobile}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="rv-mobile-meta">
                <a href={brandConfig.nav.loginLink} className="rv-mobile-link" onClick={closeMobile}>
                  Log in to patient portal
                </a>
                <a
                  href={`tel:${brandConfig.nav.phone}`}
                  className="rv-mobile-link rv-mobile-link--accent"
                  onClick={closeMobile}
                >
                  Call {brandConfig.nav.phone}
                </a>
                <a
                  href={brandConfig.nav.ctaLink}
                  className="btn btn-primary rv-mobile-cta"
                  onClick={closeMobile}
                >
                  Start Assessment
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

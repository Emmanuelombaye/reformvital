"use client";

import { useState, useRef, useEffect } from "react";
import { brandConfig } from "@/brand.config";
import OfferBanner from "./OfferBanner";
import TrustBar from "./TrustBar";
import ReformVitalLogo from "./ReformVitalLogo";
import TealIcon from "./TealIcon";

const metabolicProtocols = [
  { slug: "semaglutide", title: "Medical Weight Loss (GLP-1)", tag: "Semaglutide / Tirzepatide", icon: "bolt" as const },
  { slug: "trt", title: "Hormone Optimization (TRT)", tag: "Testosterone Cypionate & HRT", icon: "dna" as const },
  { slug: "sermorelin", title: "Growth Hormone Secretagogues", tag: "Sermorelin & Tesamorelin", icon: "moon" as const },
  { slug: "bpc-157", title: "Recovery & Tissue Repair", tag: "BPC-157 & TB-500 Peptides", icon: "repair" as const },
];

const longevityProtocols = [
  { slug: "nad-plus", title: "Longevity & Cellular Energy", tag: "NAD+ Coenzyme Matrix", icon: "lab" as const },
  { slug: "semax", title: "Cognitive Optimization", tag: "Semax & Selank Neuropeptides", icon: "brain" as const },
  { slug: "pt-141", title: "Sexual Wellness & Vitality", tag: "PT-141 Bremelanotide", icon: "flame" as const },
  { slug: "preventive-wellness", title: "Metabolic & Preventive Wellness", tag: "Labs · Nutrition · Monitoring", icon: "clipboard" as const },
];

const PRIMARY_LINKS = [
  { label: "Memberships", href: "/memberships" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI Coach", href: "/ai-coach" },
  { label: "Resources", href: "/resources" },
];

const MORE_LINKS = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const treatmentsRef = useRef<HTMLLIElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (treatmentsRef.current && !treatmentsRef.current.contains(target)) {
        setDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="rv-site-header">
      <OfferBanner />
      <TrustBar />

      <nav className="nav" id="navbar" aria-label="Primary">
        <div className="container nav-shell">
          <a href="/" className="brand" aria-label="Reform Vital home">
            <ReformVitalLogo height={30} showText showTagline={false} />
          </a>

          <ul className="nav-menu">
            <li
              ref={treatmentsRef}
              className={`nav-item nav-item--mega${dropdownOpen ? " is-open" : ""}`}
              onMouseEnter={() => {
                setDropdownOpen(true);
                setMoreOpen(false);
              }}
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

              <div className="nav-mega">
                <div className="rv-mega-panel">
                  <div className="rv-mega-head">
                    <span className="rv-mega-kicker">Care programs</span>
                    <span className="rv-mega-note">U.S. doctor supervised</span>
                  </div>
                  <div className="rv-mega-grid">
                    <div>
                      <span className="rv-mega-col-label">Metabolic & hormone</span>
                      <div className="rv-mega-list">
                        {metabolicProtocols.map((item) => (
                          <a
                            key={item.slug}
                            href={`/treatments/${item.slug}`}
                            className="rv-mega-item"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <TealIcon name={item.icon} size={18} />
                            <div>
                              <strong>{item.title}</strong>
                              <span>{item.tag}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="rv-mega-col-label">Longevity & recovery</span>
                      <div className="rv-mega-list">
                        {longevityProtocols.map((item) => (
                          <a
                            key={item.slug}
                            href={`/treatments/${item.slug}`}
                            className="rv-mega-item"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <TealIcon name={item.icon} size={18} />
                            <div>
                              <strong>{item.title}</strong>
                              <span>{item.tag}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rv-mega-foot">
                    <span>All protocols compounded by 503A pharmacies</span>
                    <a href="/treatments" onClick={() => setDropdownOpen(false)}>
                      Explore full catalog →
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {PRIMARY_LINKS.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-item-link">
                  {link.label}
                </a>
              </li>
            ))}

            <li
              ref={moreRef}
              className={`nav-item nav-item--more${moreOpen ? " is-open" : ""}`}
              onMouseEnter={() => {
                setMoreOpen(true);
                setDropdownOpen(false);
              }}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                className="nav-item-link nav-item-link--btn"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                onClick={() => setMoreOpen((v) => !v)}
              >
                More
                <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-more-panel">
                {MORE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-more-link"
                    onClick={() => setMoreOpen(false)}
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
            <a href={brandConfig.nav.ctaLink} className="btn btn-primary nav-cta">
              Start Assessment
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
          <div className="rv-mobile-drawer">
            <div className="rv-mobile-block">
              <button
                type="button"
                className="rv-mobile-accordion"
                onClick={() => setMobileTreatmentsOpen((v) => !v)}
              >
                <span>Treatments</span>
                <span className={mobileTreatmentsOpen ? "is-open" : ""} aria-hidden>
                  ▼
                </span>
              </button>
              {mobileTreatmentsOpen && (
                <div className="rv-mobile-sub">
                  {[...metabolicProtocols, ...longevityProtocols].map((item) => (
                    <a
                      key={item.slug}
                      href={`/treatments/${item.slug}`}
                      className="rv-mobile-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                  <a
                    href="/treatments"
                    className="rv-mobile-link rv-mobile-link--accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    → View all treatments
                  </a>
                </div>
              )}
            </div>

            <ul className="rv-mobile-list">
              {[...PRIMARY_LINKS, ...MORE_LINKS].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rv-mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="rv-mobile-meta">
                <a
                  href={brandConfig.nav.loginLink}
                  className="rv-mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in to patient portal
                </a>
                <a href={`tel:${brandConfig.nav.phone}`} className="rv-mobile-link rv-mobile-link--accent">
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

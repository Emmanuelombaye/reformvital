"use client";

import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

export default function Navbar() {
  return (
    <nav className="nav" id="navbar">
      <div className="container nav-inner">
        <a href="/" className="brand">
          <ReformVitalLogo height={36} showText={true} />
        </a>

        <ul className="nav-links">
          {brandConfig.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href={`tel:${brandConfig.nav.phone}`}
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{brandConfig.nav.phone}</span>
          </a>

          <a href={brandConfig.nav.ctaLink} className="btn btn-primary">
            {brandConfig.nav.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}

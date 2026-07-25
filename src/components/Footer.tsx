import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <ReformVitalLogo height={42} showText={true} />
            <p style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--color-text-muted)", marginTop: "8px" }}>
              {brandConfig.tagline}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", fontWeight: 700 }}>
            <div>
              <span style={{ color: "var(--color-teal)" }}>Email: </span>
              <a href={`mailto:${brandConfig.nav.email}`} style={{ color: "var(--color-primary)" }}>
                {brandConfig.nav.email}
              </a>
            </div>
            <div>
              <span style={{ color: "var(--color-teal)" }}>Phone: </span>
              <a href={`tel:${brandConfig.nav.phone}`} style={{ color: "var(--color-primary)" }}>
                {brandConfig.nav.phone}
              </a>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
              Entity: {brandConfig.fullName}
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", fontSize: "0.9rem", fontWeight: 700 }}>
            {brandConfig.nav.links.map((link) => (
              <a key={link.href} href={link.href} style={{ color: "var(--color-primary)" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="footer-disclaimer">{brandConfig.footer.disclaimer}</p>

        <div className="footer-bottom">
          <span>{brandConfig.footer.copyright}</span>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#telehealth">Telehealth Consent</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

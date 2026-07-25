import { brandConfig } from "@/brand.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 900 }}>
              {brandConfig.name}
            </span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text-muted)", marginLeft: "10px" }}>
              {brandConfig.tagline}
            </span>
          </div>

          <div style={{ display: "flex", gap: "20px", fontSize: "0.9rem", fontWeight: 700 }}>
            {brandConfig.nav.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="footer-disclaimer">{brandConfig.footer.disclaimer}</p>

        <div className="footer-bottom">
          <span>{brandConfig.footer.copyright}</span>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Telehealth Consent</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

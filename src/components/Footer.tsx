import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <ReformVitalLogo height={38} showText={true} />
          <p style={{ marginTop: "1rem" }}>
            Physician-guided telehealth platform for personalized GLP-1 weight loss, hormone optimization, peptides, and longevity medicine.
          </p>
          <div style={{ marginTop: "1rem", fontSize: "0.88rem", fontWeight: 700 }}>
            <span>Email: </span>
            <a href={`mailto:${brandConfig.nav.email}`} style={{ color: "var(--accent)" }}>
              {brandConfig.nav.email}
            </a>
            <span style={{ margin: "0 0.8rem" }}>•</span>
            <span>Phone: </span>
            <a href={`tel:${brandConfig.nav.phone}`} style={{ color: "var(--accent)" }}>
              {brandConfig.nav.phone}
            </a>
          </div>
        </div>

        <div>
          <p className="disclaimer">{brandConfig.footer.disclaimer}</p>
          <p style={{ marginTop: "1rem", fontSize: "0.84rem", fontWeight: 700, color: "var(--text-muted)" }}>
            {brandConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

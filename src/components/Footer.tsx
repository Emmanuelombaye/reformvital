import { brandConfig } from "@/brand.config";
import ReformVitalLogo from "./ReformVitalLogo";

const careLinks = [
  { label: "All Treatments", href: "/treatments" },
  { label: "Weight Loss (GLP-1)", href: "/treatments/semaglutide" },
  { label: "Hormone / TRT", href: "/treatments/trt" },
  { label: "Longevity & NAD+", href: "/treatments/nad-plus" },
  { label: "Preventive Wellness", href: "/treatments/preventive-wellness" },
  { label: "Memberships", href: "/memberships" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI Health Coach", href: "/ai-coach" },
  { label: "Resources", href: "/resources" },
  { label: "Patient Portal", href: "/portal" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Start Assessment", href: "/start" },
  { label: "Email Support", href: `mailto:${brandConfig.nav.email}` },
  { label: "Call Us", href: `tel:${brandConfig.nav.phone}` },
];

export default function Footer() {
  return (
    <footer className="rv-footer" id="site-footer">
      <div className="rv-footer-glow" aria-hidden />

      <div className="container rv-footer-main">
        <div className="rv-footer-brand">
          <a href="/" className="rv-footer-logo" aria-label="Reform Vital home">
            <ReformVitalLogo height={42} showText showTagline={false} onDark />
          </a>
          <p className="rv-footer-tagline">{brandConfig.tagline}</p>
          <p className="rv-footer-blurb">
            Physician-guided telehealth for GLP-1 weight loss, hormone
            optimization, peptides, longevity, and preventive metabolic wellness.
          </p>

          <div className="rv-footer-contact">
            <a href={`mailto:${brandConfig.nav.email}`} className="rv-footer-contact-link">
              <span className="rv-footer-contact-label">Email</span>
              {brandConfig.nav.email}
            </a>
            <a href={`tel:${brandConfig.nav.phone}`} className="rv-footer-contact-link">
              <span className="rv-footer-contact-label">Phone</span>
              {brandConfig.nav.phone}
            </a>
          </div>

          <a href="/start" className="btn btn-primary rv-footer-cta">
            Start Assessment →
          </a>
        </div>

        <nav className="rv-footer-cols" aria-label="Footer">
          <div className="rv-footer-col">
            <h3 className="rv-footer-heading">Care</h3>
            <ul>
              {careLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-footer-col">
            <h3 className="rv-footer-heading">Company</h3>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv-footer-col">
            <h3 className="rv-footer-heading">Support</h3>
            <ul>
              {supportLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <p className="rv-footer-domain">{brandConfig.domain}</p>
          </div>
        </nav>
      </div>

      <div className="rv-footer-bottom">
        <div className="container rv-footer-bottom-inner">
          <p className="rv-footer-disclaimer">{brandConfig.footer.disclaimer}</p>
          <div className="rv-footer-meta">
            <span>{brandConfig.footer.copyright}</span>
            <span>
              {brandConfig.footer.company} · {brandConfig.footer.legalOwner}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

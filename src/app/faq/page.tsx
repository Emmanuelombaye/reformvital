import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "54rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem" }}>WE'VE GOT YOU</span>
              <h1 style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>Frequently Asked Questions</h1>
              <p style={{ fontSize: "1.15rem" }}>
                Answers regarding GLP-1 weight loss, peptide compounding, physician consultations, shipping, and telehealth memberships.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--surface)" }}>
          <div className="container" style={{ maxWidth: "48rem" }}>
            {brandConfig.faqs.map((faq, i) => (
              <details className="faq-item" key={i} open={i === 0}>
                <summary style={{ fontSize: "1.15rem", padding: "0.5rem 0" }}>{faq.question}</summary>
                <p style={{ fontSize: "1rem", lineHeight: 1.65 }}>{faq.answer}</p>
              </details>
            ))}

            <div style={{ marginTop: "3.5rem", padding: "2rem", background: "var(--bg)", borderRadius: "1rem", border: "1px solid var(--border)", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Have a question not answered here?</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Contact our medical support team directly at <strong>{brandConfig.nav.email}</strong> or call <strong>{brandConfig.nav.phone}</strong>.
              </p>
              <a href="/start" className="btn btn-primary">
                Start Medical Assessment →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HealthCalculators from "@/components/academy/HealthCalculators";
import Link from "next/link";

export default function AcademyToolsPage() {
  return (
    <>
      <Navbar />
      <main className="rv-academy">
        <section className="rv-academy-hero">
          <div className="container">
            <span className="badge">HEALTH ACADEMY · TOOLS</span>
            <h1>Interactive Health Tools</h1>
            <p>
              Physician-aligned calculators and assessments—educational starting points to
              discuss with your Reform Vital provider.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <HealthCalculators />
            <p style={{ marginTop: "1.5rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
              <Link href="/resources">← Back to Health Academy</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

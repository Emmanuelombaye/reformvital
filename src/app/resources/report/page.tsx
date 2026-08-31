import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyStickyNav from "@/components/academy/AcademyStickyNav";
import Link from "next/link";
import { brandConfig } from "@/brand.config";

export default function MonthlyReportPage() {
  const report = brandConfig.healthAcademy.monthlyReport;

  return (
    <>
      <Navbar />
      <main className="rv-academy rv-article-page">
        <AcademyStickyNav />
        <article className="rv-article">
          <div className="container rv-article-inner">
            <span className="rv-article-category">{report.month}</span>
            <h1>{report.title}</h1>
            <p className="rv-article-meta">Monthly Reform Vital Health Report · Physician commentary</p>
            <p className="rv-article-lead">{report.summary}</p>

            <div className="rv-callout">
              <strong>This month&apos;s focus</strong>
              <ul>
                {report.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <section className="rv-article-block">
              <h2>Semaglutide &amp; Tirzepatide research updates</h2>
              <p>
                Continued evidence supports physician-supervised Semaglutide and Tirzepatide programs for metabolic health—with
                emphasis on protein intake, gradual titration, and quarterly lab monitoring.
              </p>
            </section>

            <section className="rv-article-block">
              <h2>Longevity nutrition</h2>
              <p>
                Prioritize whole proteins, fiber, and hydration. Longevity is built on habits that
                compound—medication supports biology; nutrition and sleep sustain it.
              </p>
            </section>

            <section className="rv-article-block">
              <h2>Seasonal wellness</h2>
              <p>
                Summer heat increases hydration needs, especially on Semaglutide and Tirzepatide protocols. Adjust
                water intake and electrolytes per your provider&apos;s guidance.
              </p>
            </section>

            <section className="rv-article-block">
              <h2>Physician Q&amp;A</h2>
              <p>
                <strong>Q:</strong> Can I switch from Semaglutide to Tirzepatide mid-protocol?
                <br />
                <strong>A:</strong> Yes—with physician review of your progress, side effects, and labs.
                Never switch therapies without clinical approval.
              </p>
            </section>

            <div className="rv-article-cta">
              <h3>Questions about your protocol?</h3>
              <Link href="/start" className="btn btn-primary">
                Schedule a Consultation →
              </Link>
            </div>

            <p className="rv-article-back">
              <Link href="/resources">← Health Academy</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

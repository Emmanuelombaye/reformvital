import { brandConfig } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="rv-script-page-hero">
          <div className="container">
            <p className="rv-script-eyebrow">About Reform Vital</p>
            <h1>Modern medicine. Personalized health.</h1>
            <p>
              Reform Vital Health LLC connects patients with licensed U.S. clinicians, secure
              telehealth intake, and pharmacy fulfillment—plus memberships, AI coaching, and
              physician-reviewed education between visits.
            </p>
          </div>
        </section>

        <section className="rv-script-section">
          <div className="container rv-script-about__grid">
            <div>
              <p className="rv-script-eyebrow">Our mission</p>
              <h2>Elevating patient telehealth</h2>
              <p>
                Reform Vital pairs licensed medical oversight with secure messaging, follow-up
                care, and optional AI accountability coaching—focused on measurable health
                outcomes rather than product-only sales.
              </p>
              <p>
                We address metabolic health, hormones, recovery, and longevity with transparent
                pricing and compliance-first communication.
              </p>
            </div>

            <div className="rv-script-about__card">
              <h3>Entity & business references</h3>
              <ul>
                <li>
                  <strong>Legal entity:</strong> {brandConfig.fullName}
                </li>
                <li>
                  <strong>Legal name:</strong> {brandConfig.legalOwner}
                </li>
                <li>
                  <strong>Email:</strong> {brandConfig.nav.email}
                </li>
                <li>
                  <strong>Phone:</strong> {brandConfig.nav.phone}
                </li>
                <li>
                  <strong>Pharmacy partners:</strong> Licensed U.S. compounding pharmacies
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rv-script-section rv-script-section--sand">
          <div className="container">
            <div className="rv-script-section__head rv-script-section__head--left">
              <p className="rv-script-eyebrow">Clinical oversight</p>
              <h2>Licensed provider review</h2>
              <p>
                Reform Vital connects patients with licensed U.S. clinicians who review medical
                intake, determine eligibility, and issue prescriptions only when clinically
                appropriate. We do not display individual physician profiles on this site until
                provider partnerships are formally verified and authorized for publication.
              </p>
            </div>

            <div className="rv-script-section__foot rv-script-section__foot--left">
              <Link href="/start" className="rv-script-btn rv-script-btn--primary">
                Start assessment →
              </Link>
              <Link href="/faq" className="rv-script-btn rv-script-btn--secondary">
                Read FAQs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

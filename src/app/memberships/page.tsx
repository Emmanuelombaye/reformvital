import Image from "next/image";
import Navbar from "@/components/Navbar";
import MembershipTiers from "@/components/MembershipTiers";
import Footer from "@/components/Footer";

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="rv-page-hero rv-page-hero--photo">
          <Image
            src="/images/membership-hero.png"
            alt="Executive membership lifestyle with Reform Vital"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "contain", objectPosition: "center center" }}
          />
          <div className="rv-page-hero-scrim" aria-hidden />
          <div className="container rv-page-hero-content">
            <span className="badge" style={{ marginBottom: "0.8rem", background: "var(--accent)", color: "#FFF" }}>
              ALL-INCLUSIVE TELEHEALTH PRICING
            </span>
            <h1>Essentials · Performance · Elite</h1>
            <p>
              Membership tiers focused on Weight Loss, TRT & metabolic stacking, and Longevity / Executive concierge—flat rates with physician care included.
            </p>
          </div>
        </section>

        <MembershipTiers />
      </main>
      <Footer />
    </>
  );
}

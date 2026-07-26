import Navbar from "@/components/Navbar";
import MembershipTiers from "@/components/MembershipTiers";
import Footer from "@/components/Footer";

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header Hero */}
        <section className="section" style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #E6F2F0 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <div className="section-head" style={{ maxWidth: "54rem" }}>
              <span className="badge" style={{ marginBottom: "0.8rem", background: "var(--accent)", color: "#FFF" }}>
                ALL-INCLUSIVE TELEHEALTH PRICING
              </span>
              <h1 style={{ fontSize: "3.2rem", marginBottom: "0.8rem", fontWeight: 900 }}>
                Essentials · Performance · Elite
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Membership tiers focused on Weight Loss, TRT & metabolic stacking, and Longevity / Executive concierge—flat rates with physician care included.
              </p>
            </div>
          </div>
        </section>

        <MembershipTiers />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import MembershipTiers from "@/components/MembershipTiers";
import Footer from "@/components/Footer";

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="rv-script-page-hero">
          <div className="container">
            <p className="rv-script-eyebrow">Memberships</p>
            <h1>Essentials · Performance · Elite</h1>
            <p>
              Flat-rate membership tiers for Semaglutide and Tirzepatide weight-management
              programs—with physician review and program support included where stated.
            </p>
          </div>
        </section>

        <MembershipTiers />
      </main>
      <Footer />
    </>
  );
}

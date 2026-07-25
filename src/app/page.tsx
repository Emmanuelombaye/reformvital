import OfferBanner from "@/components/OfferBanner";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import MembershipTiers from "@/components/MembershipTiers";
import AICoachTeaser from "@/components/AICoachTeaser";
import Transformations from "@/components/Transformations";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <OfferBanner />
      <Navbar />
      <main>
        <TrustBar />
        <Hero />
        <Treatments />
        <MembershipTiers />
        <AICoachTeaser />
        <Transformations />
        <HowItWorks />
        <Reviews />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}

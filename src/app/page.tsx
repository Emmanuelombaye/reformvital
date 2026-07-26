import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandPillars from "@/components/BrandPillars";
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
      <Navbar />
      <main>
        <Hero />
        <BrandPillars />
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

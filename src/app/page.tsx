import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import BrandPillars from "@/components/BrandPillars";
import WhyReformVital from "@/components/WhyReformVital";
import HowItWorks from "@/components/HowItWorks";
import PatientJourney from "@/components/PatientJourney";
import Treatments from "@/components/Treatments";
import MedicalTeam from "@/components/MedicalTeam";
import MembershipTiers from "@/components/MembershipTiers";
import MemberExperience from "@/components/MemberExperience";
import AICoachTeaser from "@/components/AICoachTeaser";
import Transformations from "@/components/Transformations";
import Reviews from "@/components/Reviews";
import FAQAccordion from "@/components/FAQAccordion";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <BrandPillars />
        <WhyReformVital />
        <HowItWorks />
        <PatientJourney />
        <Treatments />
        <MedicalTeam />
        <MembershipTiers />
        <MemberExperience />
        <AICoachTeaser />
        <Transformations />
        <Reviews />
        <FAQAccordion />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

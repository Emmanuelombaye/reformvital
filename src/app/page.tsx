import OfferBanner from "@/components/OfferBanner";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/Hero";
import Transformations from "@/components/Transformations";
import Treatments from "@/components/Treatments";
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
        <Transformations />
        <Treatments />
        <HowItWorks />
        <Reviews />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}


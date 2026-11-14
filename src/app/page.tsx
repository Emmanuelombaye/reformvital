import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Treatments from "@/components/Treatments";
import FitStory from "@/components/FitStory";
import HowItWorks from "@/components/HowItWorks";
import ScriptfulPricing from "@/components/ScriptfulPricing";
import HomeExtras from "@/components/HomeExtras";
import FAQAccordion from "@/components/FAQAccordion";
import ScriptfulCompliance from "@/components/ScriptfulCompliance";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import { getCatalogSafe } from "@/lib/vco/catalog";

export default async function HomePage() {
  const therapies = await getCatalogSafe();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <Treatments therapies={therapies} />
        <FitStory />
        <HowItWorks />
        <ScriptfulPricing />
        <HomeExtras />
        <FAQAccordion homeTeaser />
        <ScriptfulCompliance />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

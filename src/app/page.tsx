import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import TrustSignals from "@/components/TrustSignals";

import Treatments from "@/components/Treatments";

import HowItWorks from "@/components/HowItWorks";

import ScriptfulPricing from "@/components/ScriptfulPricing";

import ScriptfulSafety from "@/components/ScriptfulSafety";

import HomeExtras from "@/components/HomeExtras";

import FAQAccordion from "@/components/FAQAccordion";

import ScriptfulCompliance from "@/components/ScriptfulCompliance";

import ClosingCTA from "@/components/ClosingCTA";

import Footer from "@/components/Footer";



export default function HomePage() {

  return (

    <>

      <Navbar />

      <main>

        <Hero />

        <TrustSignals />

        <Treatments />

        <HowItWorks />

        <ScriptfulPricing />

        <ScriptfulSafety />

        <HomeExtras />

        <FAQAccordion />

        <ScriptfulCompliance />

        <ClosingCTA />

      </main>

      <Footer />

    </>

  );

}


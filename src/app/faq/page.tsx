import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQAccordion showPageHero />
      </main>
      <Footer />
    </>
  );
}

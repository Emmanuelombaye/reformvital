import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksFlow from "@/components/HowItWorksFlow";
import "./how-it-works-page.css";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <HowItWorksFlow />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentsCatalog from "@/components/TreatmentsCatalog";
import { getCatalog } from "@/lib/vco/catalog";

export default async function TreatmentsPage() {
  const therapies = await getCatalog();

  return (
    <>
      <Navbar />
      <TreatmentsCatalog therapies={therapies} />
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import LegalDocumentView from "@/components/LegalDocumentView";
import Navbar from "@/components/Navbar";
import type { LegalDocument } from "@/lib/legalDocuments";

type LegalPageShellProps = {
  document: LegalDocument;
};

export default function LegalPageShell({ document }: LegalPageShellProps) {
  return (
    <>
      <Navbar />
      <main>
        <section className="rv-script-page-hero">
          <div className="container">
            <p className="rv-script-eyebrow">Legal</p>
            <h1>{document.title}</h1>
          </div>
        </section>

        <section className="rv-script-section rv-legal-page">
          <div className="container">
            <LegalDocumentView document={document} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

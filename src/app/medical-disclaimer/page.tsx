import LegalPageShell from "@/components/LegalPageShell";
import { getLegalDocument } from "@/lib/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Reform Vital",
  robots: { index: true, follow: true },
};

export default function MedicalDisclaimerPage() {
  const document = getLegalDocument("medical-disclaimer");
  return <LegalPageShell document={document} />;
}

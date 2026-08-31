import LegalPageShell from "@/components/LegalPageShell";
import { getLegalDocument } from "@/lib/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Consent — Reform Vital",
  robots: { index: true, follow: true },
};

export default function TelehealthConsentPage() {
  const document = getLegalDocument("telehealth-consent");
  return <LegalPageShell document={document} />;
}

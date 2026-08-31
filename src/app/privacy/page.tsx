import LegalPageShell from "@/components/LegalPageShell";
import { getLegalDocument } from "@/lib/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Reform Vital",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const document = getLegalDocument("privacy");
  return <LegalPageShell document={document} />;
}

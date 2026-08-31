import LegalPageShell from "@/components/LegalPageShell";
import { getLegalDocument } from "@/lib/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Reform Vital",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const document = getLegalDocument("terms");
  return <LegalPageShell document={document} />;
}

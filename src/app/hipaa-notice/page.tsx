import LegalPageShell from "@/components/LegalPageShell";
import { getLegalDocument } from "@/lib/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices — Reform Vital",
  robots: { index: true, follow: true },
};

export default function HipaaNoticePage() {
  const document = getLegalDocument("hipaa-notice");
  return <LegalPageShell document={document} />;
}

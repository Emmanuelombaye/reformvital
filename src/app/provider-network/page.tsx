import LegalPageShell from "@/components/LegalPageShell";
import { getLegalDocument } from "@/lib/legalDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider Network — Reform Vital",
  robots: { index: true, follow: true },
};

export default function ProviderNetworkPage() {
  const document = getLegalDocument("provider-network");
  return <LegalPageShell document={document} />;
}

export type LegalDocumentSlug =
  | "terms"
  | "privacy"
  | "medical-disclaimer"
  | "telehealth-consent"
  | "hipaa-notice"
  | "provider-network";

export type LegalLink = {
  slug: LegalDocumentSlug;
  label: string;
};

export const LEGAL_LINKS: LegalLink[] = [
  { slug: "terms", label: "Terms of Use" },
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "medical-disclaimer", label: "Medical Disclaimer" },
  { slug: "telehealth-consent", label: "Telehealth Consent" },
  { slug: "hipaa-notice", label: "HIPAA Notice" },
  { slug: "provider-network", label: "Provider Network" },
];

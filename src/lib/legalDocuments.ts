import fs from "node:fs";
import path from "node:path";
import type { LegalDocumentSlug } from "@/lib/legalLinks";

export type LegalSection = {
  heading?: string;
  paragraphs: string[];
  bullets: string[];
};

export type LegalDocument = {
  slug: LegalDocumentSlug;
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

const DOCUMENT_FILES: Record<LegalDocumentSlug, string> = {
  terms: "terms-of-use.txt",
  privacy: "privacy-policy.txt",
  "medical-disclaimer": "medical-disclaimer.txt",
  "telehealth-consent": "telehealth-consent.txt",
  "hipaa-notice": "hipaa-notice.txt",
  "provider-network": "provider-network.txt",
};

function normalizeRawText(raw: string): string {
  return raw.replace(/^\uFEFF/, "").replace(/^\?/, "").replace(/\r\n/g, "\n").trim();
}

function isNumberedHeading(line: string): boolean {
  return /^\d+\.\s+.+/u.test(line);
}

function isTitleCaseHeading(line: string): boolean {
  return /^[A-Z][A-Za-z\s,&;'-]+$/u.test(line) && line.length < 80 && !line.endsWith(".");
}

function parseLegalText(raw: string, slug: LegalDocumentSlug): LegalDocument {
  const text = normalizeRawText(raw);
  const lines = text.split("\n");

  const title = lines[0]?.trim() || "Legal";
  let lastUpdated: string | undefined;
  let index = 1;

  if (lines[index]?.trim().startsWith("Last updated:")) {
    lastUpdated = lines[index].replace("Last updated:", "").trim();
    index += 1;
  }

  while (index < lines.length && !lines[index]?.trim()) {
    index += 1;
  }

  const sections: LegalSection[] = [];
  let current: LegalSection = { paragraphs: [], bullets: [] };

  const pushCurrent = () => {
    if (current.heading || current.paragraphs.length || current.bullets.length) {
      sections.push(current);
    }
    current = { paragraphs: [], bullets: [] };
  };

  for (let i = index; i < lines.length; i += 1) {
    const line = lines[i]?.trim() ?? "";
    if (!line) continue;

    if (isNumberedHeading(line) || (slug !== "terms" && isTitleCaseHeading(line))) {
      pushCurrent();
      current.heading = line;
      continue;
    }

    if (line.startsWith("*")) {
      current.bullets.push(line.replace(/^\*\s*/, ""));
      continue;
    }

    current.paragraphs.push(line);
  }

  pushCurrent();

  if (!sections.length) {
    sections.push({
      paragraphs: lines.slice(index).filter(Boolean),
      bullets: [],
    });
  }

  return { slug, title, lastUpdated, sections };
}

export function getLegalDocument(slug: LegalDocumentSlug): LegalDocument {
  const fileName = DOCUMENT_FILES[slug];
  const filePath = path.join(process.cwd(), "content", "legal", fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  return parseLegalText(raw, slug);
}

export function getAllLegalSlugs(): LegalDocumentSlug[] {
  return Object.keys(DOCUMENT_FILES) as LegalDocumentSlug[];
}

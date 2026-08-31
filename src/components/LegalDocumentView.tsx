import type { LegalDocument } from "@/lib/legalDocuments";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      const href = part.replace(/[.,;]+$/, "");
      const trailing = part.slice(href.length);
      return (
        <span key={index}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {href}
          </a>
          {trailing}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function LegalDocumentView({ document }: LegalDocumentViewProps) {
  return (
    <article className="rv-legal-doc">
      {document.lastUpdated ? (
        <p className="rv-legal-doc__updated">Last updated: {document.lastUpdated}</p>
      ) : null}

      {document.sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="rv-legal-doc__section">
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{linkify(paragraph)}</p>
          ))}
          {section.bullets.length ? (
            <ul>
              {section.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{linkify(bullet)}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}

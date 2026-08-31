import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllGuideSlugs, getGuideBySlug, getGuidePdfUrl } from "@/content/academy";
import GuidePrintButton from "@/components/academy/GuidePrintButton";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <Navbar />
      <main className="rv-academy rv-guide-page">
        <article className="rv-guide-printable">
          <div className="container rv-guide-inner">
            <span className="badge">DOWNLOADABLE GUIDE</span>
            <h1>{guide.title}</h1>
            <p className="rv-article-lead">{guide.desc}</p>

            {guide.sections.map((section) => (
              <section key={section.heading} className="rv-article-block">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <div className="rv-callout">
              <strong>Physician-reviewed · Educational use</strong>
              <p>
                This guide supports informed conversations with your licensed provider—it does
                not replace personalized medical advice.
              </p>
            </div>

            <div className="rv-guide-actions">
              <GuidePrintButton pdfUrl={getGuidePdfUrl(slug)} />
              <Link href="/start" className="btn btn-outline">
                Schedule a Consultation
              </Link>
            </div>

            <p className="rv-article-back">
              <Link href="/resources#guides">← All guides</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

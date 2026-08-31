import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brandConfig } from "@/brand.config";
import { getArticlesByCategory, getCategoryMeta, getGuideBySlug, getGuidePdfUrl } from "@/content/academy";

export function generateStaticParams() {
  return brandConfig.healthAcademy.categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = brandConfig.healthAcademy.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug);
  const meta = getCategoryMeta(slug);
  const guide = meta?.guideSlug ? getGuideBySlug(meta.guideSlug) : undefined;

  return (
    <>
      <Navbar />
      <main className="rv-academy">
        <section className="rv-academy-hero">
          <div className="container">
            <span className="badge">HEALTH ACADEMY · {category.label.toUpperCase()}</span>
            <h1>{category.label}</h1>
            <p>
              Beginner guides, FAQs, physician-reviewed articles, and actionable tips—with a
              clear path to schedule a consultation.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {guide && (
              <div className="rv-academy-monthly-card" style={{ marginBottom: "2.5rem" }} data-animate="rise">
                <span className="rv-resource-type">Beginner guide</span>
                <h2>{guide.title}</h2>
                <p>{guide.desc}</p>
                <div className="rv-guide-action-buttons">
                  <Link href={`/resources/guides/${guide.slug}`} className="btn btn-primary">
                    View guide online →
                  </Link>
                  <a href={getGuidePdfUrl(guide.slug)} className="btn btn-outline" download>
                    Download PDF
                  </a>
                </div>
              </div>
            )}

            {articles.length > 0 ? (
              <>
                <h2 style={{ fontSize: "1.35rem", marginBottom: "1.25rem" }}>Physician-reviewed articles</h2>
                <div className="rv-academy-cluster-grid" style={{ marginBottom: "2.5rem" }}>
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/resources/articles/${article.slug}`}
                      className="rv-academy-article"
                    >
                      <span className="rv-resource-type">Article</span>
                      <h3>{article.title}</h3>
                      <p>{article.summary}</p>
                      <span className="rv-resource-cta">Read article →</span>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                Articles coming soon.{" "}
                <Link href="/start">Schedule a consultation</Link> to discuss {category.label.toLowerCase()} with a physician.
              </p>
            )}

            {meta && meta.tips.length > 0 && (
              <section className="rv-article-block" style={{ marginBottom: "2.5rem" }}>
                <h2>Actionable tips</h2>
                <ul>
                  {meta.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </section>
            )}

            {meta && meta.faqs.length > 0 && (
              <section className="rv-article-block" style={{ marginBottom: "2.5rem" }}>
                <h2>FAQs</h2>
                <div className="rv-category-faqs">
                  {meta.faqs.map((faq) => (
                    <div key={faq.q} className="rv-callout">
                      <strong>{faq.q}</strong>
                      <p>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="rv-article-cta">
              <h3>Ready for a long-term health partnership?</h3>
              <p>
                Start with a secure assessment. Your physician builds a personalized plan—not just a prescription.
              </p>
              <Link href="/start" className="btn btn-primary">
                Schedule a Consultation →
              </Link>
            </div>

            <p style={{ marginTop: "2rem" }}>
              <Link href="/resources">← Health Academy</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

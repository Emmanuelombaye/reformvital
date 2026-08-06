import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyStickyNav from "@/components/academy/AcademyStickyNav";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/content/academy";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="rv-academy rv-article-page">
        <AcademyStickyNav />
        <article className="rv-article">
          <div className="container rv-article-inner">
            <Link href={`/resources/category/${article.categorySlug}`} className="rv-article-category">
              {article.category}
            </Link>
            <h1>{article.title}</h1>
            <p className="rv-article-meta">
              {article.published} · {article.readTime} read · Physician-reviewed
            </p>
            <p className="rv-article-lead">{article.summary}</p>

            <div className="rv-article-hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt="" />
            </div>

            <section className="rv-article-block">
              <h2>What is it?</h2>
              <p>{article.what}</p>
            </section>

            <div className="rv-callout">
              <strong>Why it matters</strong>
              <p>{article.why}</p>
            </div>

            <section className="rv-article-block">
              <h2>What can I do?</h2>
              <ul>
                {article.whatToDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="rv-callout rv-callout--physician">
              <strong>When should I talk to a physician?</strong>
              <p>{article.whenPhysician}</p>
            </div>

            <section className="rv-article-block">
              <h2>Actionable tips</h2>
              <ul>
                {article.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <div className="rv-article-cta">
              <h3>Ready for physician-guided care?</h3>
              <p>Start with a secure assessment. Prescriptions only after clinical approval.</p>
              <Link href="/start" className="btn btn-primary">
                Schedule a Consultation →
              </Link>
            </div>

            {related.length > 0 && (
              <section className="rv-article-related">
                <h2>Related articles</h2>
                <div className="rv-article-related-grid">
                  {related.map((r) =>
                    r ? (
                      <Link key={r.slug} href={`/resources/articles/${r.slug}`} className="rv-academy-article">
                        <h3>{r.title}</h3>
                        <p>{r.summary}</p>
                        <span className="rv-resource-cta">Read →</span>
                      </Link>
                    ) : null,
                  )}
                </div>
              </section>
            )}

            <p className="rv-article-back">
              <Link href="/resources">← Health Academy</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return { title: article ? `${article.title} | Reform Vital Health Academy` : "Article" };
}

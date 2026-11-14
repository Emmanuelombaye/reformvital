import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentVial from "@/components/visuals/TreatmentVial";
import { findLegacyTherapy, findTherapy, getCatalog } from "@/lib/vco/catalog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    return (await getCatalog()).map((t) => ({ slug: t.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const therapy = findTherapy(await getCatalog(), slug);
  if (!therapy) return {};
  return {
    title: therapy.seo.title,
    description: therapy.seo.description ?? undefined,
    alternates: { canonical: `/treatments/${therapy.slug}` },
    openGraph: {
      title: therapy.seo.title,
      description: therapy.seo.description ?? undefined,
      images: therapy.seo.image ? [therapy.seo.image] : [],
    },
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const list = await getCatalog();
  const therapy = findTherapy(list, slug);

  if (!therapy) {
    // Old local addresses (e.g. /treatments/semaglutide) go to the product's real page.
    const legacy = findLegacyTherapy(list, slug);
    if (legacy) permanentRedirect(`/treatments/${legacy.slug}`);
    notFound(); // not sold any more: no page, never another drug
  }

  const related = list.filter((t) => t.slug !== therapy.slug);

  return (
    <>
      <Navbar />
      <main className="rv-treatment-detail">
        <section className="rv-treatment-detail__hero">
          <div className="container rv-treatment-detail__grid">
            <div className="rv-treatment-detail__media">
              <div className="rv-treatment-detail__badges">
                {therapy.concentration && <span className="badge">{therapy.concentration}</span>}
                {therapy.form && <span className="badge">{therapy.form}</span>}
                <span className="badge badge-cyan">RX ONLY</span>
                {therapy.requiresVideoConsult && (
                  <span className="badge">Includes a video visit</span>
                )}
              </div>
              <TreatmentVial
                name={therapy.name}
                concentration={therapy.concentration}
                form={therapy.form}
                imageUrl={therapy.imageUrl}
                artKey={therapy.artKey}
                className="rv-tx-vial-detail"
                priority
              />
            </div>

            <div className="rv-treatment-detail__copy">
              <p className="eyebrow">{therapy.category}</p>
              <h1>{therapy.name}</h1>
              {therapy.desc && <p className="rv-treatment-detail__tagline">{therapy.desc}</p>}
              {therapy.description && (
                <p className="rv-treatment-detail__desc">{therapy.description}</p>
              )}

              <div className="rv-treatment-detail__price-card">
                <div>
                  <div className="rv-treatment-detail__price-label">All-inclusive program price</div>
                  <div className="rv-treatment-detail__price">{therapy.priceLabel}</div>
                </div>
                {therapy.intakeUrl ? (
                  <a href={therapy.intakeUrl} className="btn btn-primary">
                    Get started →
                  </a>
                ) : (
                  <p>Coming soon</p>
                )}
              </div>

              <p className="rv-treatment-detail__fine">
                Purchasing a program does not guarantee that a prescription will be issued. A
                licensed clinician reviews your intake and may decline treatment.{" "}
                {therapy.clinicalNote}
              </p>
            </div>
          </div>
        </section>

        <section className="section rv-treatment-detail__includes">
          <div className="container">
            <h2>What&apos;s included</h2>
            <div className="rv-treatment-detail__feature-grid">
              {therapy.features.map((feature) => (
                <div key={feature} className="rv-treatment-detail__feature">
                  <span aria-hidden>✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section rv-treatment-detail__related">
            <div className="container">
              <h2>Related programs</h2>
              <div className="rv-tx-pickers rv-tx-pickers--related">
                {related.map((t) => (
                  <a key={t.slug} href={`/treatments/${t.slug}`} className="rv-tx-picker">
                    <span className="rv-tx-picker__thumb">
                      <TreatmentVial
                        name={t.name}
                        concentration={t.concentration}
                        imageUrl={t.imageUrl}
                        artKey={t.artKey}
                        showSyringe
                        className="rv-tx-vial-thumb"
                      />
                    </span>
                    <span className="rv-tx-picker__text">
                      <strong>{t.name}</strong>
                      <em>{t.desc}</em>
                      <span className="rv-tx-picker__price">{t.priceLabel}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

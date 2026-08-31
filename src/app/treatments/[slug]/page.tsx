import { getAllTreatmentSlugs, resolveTreatmentDetail } from "@/brand.config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentVial from "@/components/visuals/TreatmentVial";
import { getTherapy, WEIGHT_TREATMENTS } from "@/lib/treatmentCatalog";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = resolveTreatmentDetail(slug);
  const therapy = getTherapy(slug);

  if (!detail || !therapy) {
    notFound();
  }

  const related = WEIGHT_TREATMENTS.filter((t) => t.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="rv-treatment-detail">
        <section className="rv-treatment-detail__hero">
          <div className="container rv-treatment-detail__grid">
            <div className="rv-treatment-detail__media">
              <div className="rv-treatment-detail__badges">
                <span className="badge">{therapy.concentration}</span>
                <span className="badge">{therapy.form}</span>
                <span className="badge badge-cyan">RX ONLY</span>
              </div>
              <TreatmentVial
                slug={therapy.slug}
                name={therapy.name}
                concentration={therapy.concentration}
                form={therapy.form}
                className="rv-tx-vial-detail"
                priority
              />
              <p className="rv-treatment-detail__img-note">
                Product imagery is illustrative. Labels and concentrations shown are for demonstration.
              </p>
            </div>

            <div className="rv-treatment-detail__copy">
              <p className="eyebrow">{detail.category}</p>
              <h1>{detail.name} Program</h1>
              <p className="rv-treatment-detail__tagline">{detail.tagline}</p>
              <p className="rv-treatment-detail__desc">{detail.description}</p>

              <div className="rv-treatment-detail__price-card">
                <div>
                  <div className="rv-treatment-detail__price-label">All-inclusive program price</div>
                  <div className="rv-treatment-detail__price">{detail.price}</div>
                </div>
                <a href="/start" className="btn btn-primary">
                  Select Program →
                </a>
              </div>

              <p className="rv-treatment-detail__fine">
                Purchasing a program does not guarantee that a prescription will be issued. A
                licensed clinician reviews your intake and may decline treatment.{" "}
                {detail.clinicalTrial}
              </p>
            </div>
          </div>
        </section>

        <section className="section rv-treatment-detail__includes">
          <div className="container">
            <h2>What&apos;s included</h2>
            <div className="rv-treatment-detail__feature-grid">
              {detail.features.map((feature) => (
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
                        slug={t.slug}
                        name={t.name}
                        concentration={t.concentration}
                        showSyringe
                        className="rv-tx-vial-thumb"
                      />
                    </span>
                    <span className="rv-tx-picker__text">
                      <strong>{t.name}</strong>
                      <em>{t.desc}</em>
                      <span className="rv-tx-picker__price">{t.price}</span>
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

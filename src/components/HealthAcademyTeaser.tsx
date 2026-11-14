import Link from "next/link";
import TreatmentVial from "@/components/visuals/TreatmentVial";
import { getCatalogSafe } from "@/lib/vco/catalog";

export default async function HealthAcademyTeaser() {
  const programs = await getCatalogSafe();
  if (programs.length === 0) return null;

  return (
    <section className="rv-script-section rv-script-academy" id="health-academy">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Programs</p>
          <h2>{programs.map((p) => p.name).join(" & ")}</h2>
          <p>Clinician-guided weight-management programs—select the option that fits your goals.</p>
        </div>

        <div className="rv-script-academy__grid rv-script-academy__grid--two">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/treatments/${program.slug}`}
              className="rv-script-academy__card"
            >
              <div className="rv-script-academy__media">
                <TreatmentVial
                  name={program.name}
                  concentration={program.concentration}
                  imageUrl={program.imageUrl}
                  artKey={program.artKey}
                  showSyringe
                  className="rv-script-academy__img"
                />
              </div>
              <span>
                {program.name}
                {program.priceLabel ? ` · ${program.priceLabel}` : ""}
              </span>
            </Link>
          ))}
        </div>

        <div className="rv-script-section__foot">
          <Link href="/treatments" className="rv-script-btn rv-script-btn--secondary">
            View all programs →
          </Link>
        </div>
      </div>
    </section>
  );
}

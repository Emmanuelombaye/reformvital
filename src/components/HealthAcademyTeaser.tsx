import Link from "next/link";
import Image from "next/image";
import { WEIGHT_TREATMENTS, getTherapyVialImage } from "@/lib/treatmentCatalog";

export default function HealthAcademyTeaser() {
  return (
    <section className="rv-script-section rv-script-academy" id="health-academy">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Programs</p>
          <h2>Semaglutide &amp; Tirzepatide</h2>
          <p>
            Two clinician-guided weight-management programs—select the option that fits your
            goals and budget.
          </p>
        </div>

        <div className="rv-script-academy__grid rv-script-academy__grid--two">
          {WEIGHT_TREATMENTS.map((program) => (
            <Link
              key={program.slug}
              href={`/treatments/${program.slug}`}
              className="rv-script-academy__card"
            >
              <div className="rv-script-academy__media">
                <Image
                  src={getTherapyVialImage(program.slug, "thumb")}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 90vw, 30vw"
                />
              </div>
              <span>
                {program.name} · {program.price}
              </span>
            </Link>
          ))}
        </div>

        <div className="rv-script-section__foot">
          <Link href="/treatments" className="rv-script-btn rv-script-btn--secondary">
            Compare both programs →
          </Link>
        </div>
      </div>
    </section>
  );
}

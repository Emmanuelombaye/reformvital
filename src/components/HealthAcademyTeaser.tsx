import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/brand.config";

export default function HealthAcademyTeaser() {
  const academy = brandConfig.healthAcademy;
  const categories = academy.categories.slice(0, 6);

  return (
    <section className="rv-script-section rv-script-academy" id="health-academy">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Health Academy</p>
          <h2>{academy.title.replace("Reform Vital ", "")}</h2>
          <p>{academy.subtitle}</p>
        </div>

        <div className="rv-script-academy__grid">
          {categories.map((cat) => (
            <Link key={cat.slug} href={cat.href} className="rv-script-academy__card">
              <div className="rv-script-academy__media">
                <Image src={cat.image} alt="" fill sizes="(max-width: 640px) 90vw, 30vw" />
              </div>
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>

        <div className="rv-script-section__foot">
          <Link href="/resources" className="rv-script-btn rv-script-btn--secondary">
            Browse Health Academy →
          </Link>
        </div>
      </div>
    </section>
  );
}

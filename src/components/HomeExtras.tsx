import Link from "next/link";
import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function HomeExtras() {
  const { memberships, aiCoach, healthAcademy, memberExperience } = brandConfig;
  const categories = healthAcademy.categories.slice(0, 4);

  return (
    <section className="rv-script-section" id="member-resources">
      <div className="container">
        <div className="rv-script-section__head">
          <p className="rv-script-eyebrow">Beyond the prescription</p>
          <h2>Memberships, coaching &amp; education</h2>
          <p>
            Membership tiers, AI accountability coaching, and physician-reviewed education—linked
            from your portal and available to explore anytime.
          </p>
        </div>

        <div className="rv-script-extras">
          <article className="rv-script-extras__card">
            <p className="rv-script-eyebrow">Memberships</p>
            <h3>Essentials · Performance · Elite</h3>
            <ul className="rv-script-extras__tiers">
              {memberships.map((plan) => (
                <li key={plan.id}>
                  <strong>{plan.name}</strong>
                  <span>from ${plan.monthlyPrice}/mo</span>
                </li>
              ))}
            </ul>
            <ul className="rv-script-extras__bullets">
              {memberExperience.inclusions.slice(0, 4).map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
            <Link href="/memberships" className="rv-script-btn rv-script-btn--secondary">
              Compare tiers →
            </Link>
          </article>

          <article className="rv-script-extras__card">
            <p className="rv-script-eyebrow">AI Health Coach</p>
            <h3>{aiCoach.headline}</h3>
            <p className="rv-script-extras__desc">{aiCoach.subheadline}</p>
            <ul className="rv-script-extras__bullets">
              {aiCoach.features.slice(0, 3).map((feat) => (
                <li key={feat.title}>{feat.title}</li>
              ))}
            </ul>
            <Link href="/ai-coach" className="rv-script-btn rv-script-btn--secondary">
              Explore AI Coach →
            </Link>
          </article>

          <article className="rv-script-extras__card">
            <p className="rv-script-eyebrow">Health Academy</p>
            <h3>{healthAcademy.title.replace("Reform Vital ", "")}</h3>
            <p className="rv-script-extras__desc">{healthAcademy.subtitle}</p>
            <div className="rv-script-extras__cats">
              {categories.map((cat) => (
                <Link key={cat.slug} href={cat.href} className="rv-script-extras__cat">
                  <span className="rv-script-extras__cat-media">
                    <Image src={cat.image} alt="" fill sizes="48px" />
                  </span>
                  {cat.label}
                </Link>
              ))}
            </div>
            <Link href="/resources" className="rv-script-btn rv-script-btn--secondary">
              Browse Health Academy →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

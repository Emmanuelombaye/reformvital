import Link from "next/link";

const LINKS = [
  {
    eyebrow: "Memberships",
    title: "Essentials · Performance · Elite",
    href: "/memberships",
    cta: "Compare tiers",
  },
  {
    eyebrow: "AI Coach",
    title: "Daily accountability between visits",
    href: "/ai-coach",
    cta: "Explore coaching",
  },
  {
    eyebrow: "Health Academy",
    title: "Physician-reviewed guides & habits",
    href: "/resources",
    cta: "Browse education",
  },
] as const;

export default function HomeExtras() {
  return (
    <section className="rv-home-continue" id="member-resources">
      <div className="container">
        <div className="rv-home-continue__head">
          <p className="rv-script-eyebrow">Keep exploring</p>
          <h2>More support after you choose a program</h2>
        </div>
        <div className="rv-home-continue__row">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="rv-home-continue__link">
              <span className="rv-script-eyebrow">{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <span className="rv-home-continue__cta">{item.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

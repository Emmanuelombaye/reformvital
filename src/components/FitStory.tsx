import Image from "next/image";
import Link from "next/link";

export default function FitStory() {
  return (
    <section className="rv-fit-story" aria-labelledby="fit-story-heading">
      <div className="container rv-fit-story__grid">
        <div className="rv-fit-story__media" data-animate="rise">
          <Image
            src="/images/waist-baggy-jeans.jpg"
            alt="Member holding baggy jeans at the waist to show how much smaller her midsection is now"
            width={1600}
            height={1200}
            sizes="(max-width: 900px) 100vw, 52vw"
            quality={78}
            className="rv-fit-story__img"
          />
          <p className="rv-fit-story__caption">The jeans didn’t shrink. She did.</p>
        </div>

        <div className="rv-fit-story__copy" data-animate="peak-fade">
          <p className="rv-script-eyebrow">Real-world proof</p>
          <h2 id="fit-story-heading">When the waistband has room to spare</h2>
          <p>
            Progress isn’t only a number on a scale. It’s the moment your old jeans hang loose—proof
            that provider-guided Semaglutide or Tirzepatide care can reshape how clothes actually
            fit.
          </p>
          <ul className="rv-fit-story__beats">
            <li>
              <strong>Baggy where it used to pinch</strong>
              <span>Waist and hips with breathing room again</span>
            </li>
            <li>
              <strong>Licensed oversight</strong>
              <span>RX only after clinical review—never automatic</span>
            </li>
            <li>
              <strong>Accountability between visits</strong>
              <span>AI coaching keeps habits on track</span>
            </li>
          </ul>
          <div className="rv-fit-story__actions">
            <Link href="/treatments" className="rv-script-btn rv-script-btn--primary">
              See programs →
            </Link>
            <Link href="/how-it-works" className="rv-script-btn rv-script-btn--secondary">
              How care works
            </Link>
          </div>
          <p className="rv-fit-story__note">
            Individual results vary. Treatment is prescribed only when clinically appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}

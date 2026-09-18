import Image from "next/image";
import Link from "next/link";

export default function FitStory() {
  return (
    <section className="rv-fit-story" aria-labelledby="fit-story-heading">
      <div className="rv-fit-story__bleed">
        <Image
          src="/images/waist-baggy-jeans.jpg"
          alt="Member wearing oversized baggy jeans, pinching the loose waistband to show how much room she has now"
          fill
          sizes="100vw"
          quality={80}
          priority={false}
          className="rv-fit-story__img"
        />
        <div className="rv-fit-story__shade" aria-hidden />
        <div className="rv-fit-story__content">
          <div className="container rv-fit-story__copy" data-animate="peak-fade">
            <p className="rv-script-eyebrow">Real-world proof</p>
            <h2 id="fit-story-heading">When the waistband has room to spare</h2>
            <p className="rv-fit-story__lead">
              Progress isn’t only a number on a scale. It’s wearing the jeans that used to pinch—and
              finding a whole fist of fabric to spare.
            </p>
            <p className="rv-fit-story__caption">The jeans didn’t shrink. She did.</p>
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
      </div>
    </section>
  );
}

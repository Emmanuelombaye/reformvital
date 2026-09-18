import Image from "next/image";
import Link from "next/link";

export default function FitStory() {
  return (
    <section className="rv-fit-story" aria-labelledby="fit-story-heading">
      <div className="rv-fit-story__bleed">
        <Image
          src="/images/waist-baggy-jeans.jpg"
          alt="Centered close crop of oversized baggy jeans at the waist, showing how loose the waistband hangs"
          fill
          sizes="100vw"
          quality={82}
          className="rv-fit-story__img"
        />
        <div className="rv-fit-story__shade" aria-hidden />
        <div className="rv-fit-story__content">
          <div className="container rv-fit-story__copy" data-animate="peak-fade">
            <p className="rv-script-eyebrow">See the difference</p>
            <h2 id="fit-story-heading">Room in the waist again</h2>
            <p className="rv-fit-story__lead">
              Old jeans hang loose. That gap is the goal — steady care, clear pricing, real fit.
            </p>
            <div className="rv-fit-story__actions">
              <Link href="/start" className="rv-script-btn rv-script-btn--primary">
                Get started
              </Link>
              <Link href="/treatments" className="rv-script-btn rv-script-btn--secondary">
                View programs
              </Link>
            </div>
            <p className="rv-fit-story__note">
              Results vary. A prescription is never guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { brandConfig } from "@/brand.config";

export default function Reviews() {
  return (
    <section className="rv-reviews" id="reviews">
      <div className="container">
        <header className="rv-reviews__head" data-animate="peak-fade">
          <span className="rv-reviews__eyebrow">Patient &amp; Physician Testimonials</span>
          <h2>Results That Speak for Themselves</h2>
          <p>
            Real patient outcomes from physician-guided metabolic and peptide protocols
            across all 50 states.
          </p>
        </header>

        <div className="rv-reviews__grid">
          {brandConfig.reviews.map((r, i) => (
            <article
              className="rv-review-card"
              key={r.name}
              data-animate="peak-fade"
              data-delay={String(i * 70)}
            >
              <div className="rv-review-card__top">
                <span className="rv-review-card__stars" aria-label={`${r.stars} out of 5 stars`}>
                  {"★".repeat(r.stars)}
                </span>
                <span className="rv-review-card__result">{r.weightLost}</span>
              </div>

              <blockquote className="rv-review-card__quote">
                <p>&ldquo;{r.text}&rdquo;</p>
              </blockquote>

              <footer className="rv-review-card__footer">
                <strong>{r.name}</strong>
                {r.verified ? (
                  <span className="rv-review-card__verified">Verified Reform Vital patient</span>
                ) : null}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

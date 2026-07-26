import { brandConfig } from "@/brand.config";

const stepVisuals = [
  {
    image: "/images/how-step-consult.png",
    alt: "Patient completing online health consultation",
    shape: "rv-shape-blob",
    accent: "#00A896",
    time: "5 MIN",
  },
  {
    image: "/images/how-step-physician.png",
    alt: "Physician reviewing personalized treatment plan",
    shape: "rv-shape-hex",
    accent: "#00B4D8",
    time: "UNDER 24H",
  },
  {
    image: "/images/how-step-delivery.png",
    alt: "Compounded medication delivered with AI coaching support",
    shape: "rv-shape-arch",
    accent: "#5EEAD4",
    time: "TO YOUR DOOR",
  },
] as const;

export default function HowItWorks() {
  const { headline, subtitle, steps } = brandConfig.howItWorks;

  return (
    <section className="rv-how" id="how-it-works">
      <div className="rv-how-atmosphere" aria-hidden data-parallax="0.08" />

      <div className="container">
        <div className="rv-how-head" data-animate="rise" data-delay="0">
          <span className="rv-how-eyebrow">SIMPLE 3-STEP PROCESS</span>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="rv-how-track" data-tilt-scroll>
          <div className="rv-how-connector" aria-hidden />

          {steps.map((step, i) => {
            const visual = stepVisuals[i];
            const anim = i === 0 ? "tilt-left" : i === 1 ? "bounce" : "tilt-right";
            return (
              <article
                className="rv-how-step"
                key={step.step}
                data-animate={anim}
                data-delay={String(i * 120)}
                style={{ ["--step-accent" as string]: visual.accent }}
              >
                <div className={`rv-how-visual ${visual.shape}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={visual.image}
                    alt={visual.alt}
                    className="rv-how-img"
                    width={360}
                    height={360}
                  />
                  <span className="rv-how-num">{step.step}</span>
                </div>

                <div className="rv-how-copy">
                  <span className="rv-how-time">{visual.time}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rv-how-cta">
          <a href="/start" className="btn btn-primary">
            Begin Online Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}

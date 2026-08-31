"use client";

import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function Hero() {
  const { hero } = brandConfig;

  return (
    <section className="rv-script-hero" id="qualify">
      <div className="container">
        <div className="rv-script-hero__shell">
          <div className="rv-script-hero__copy" data-animate="peak-fade">
            <p className="rv-script-eyebrow">Reform Vital telehealth</p>
            <h1>
              <span className="rv-script-hero__headline-line">Personalized care.</span>
              <span className="rv-script-hero__headline-line">One clear monthly price.</span>
            </h1>
            <p className="rv-script-hero__sub">{hero.description}</p>
            <div className="rv-script-hero__actions">
              <a href="/treatments" className="rv-script-btn rv-script-btn--primary">
                {hero.primaryCtaText}
                <span aria-hidden>→</span>
              </a>
              <a href="/how-it-works" className="rv-script-btn rv-script-btn--secondary">
                {hero.secondaryCtaText}
              </a>
            </div>
            <p className="rv-script-hero__note">{hero.primaryCtaNote}</p>
          </div>

          <div className="rv-script-hero__media" data-animate="rise" data-delay="80">
            <div className="rv-script-hero__picture rv-script-hero__picture--desktop">
              <Image
                src="/images/hero-commercial-wide.webp"
                alt="Reform Vital telehealth consultation with a licensed provider"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                quality={75}
                className="rv-script-hero__img"
              />
            </div>
            <div className="rv-script-hero__picture rv-script-hero__picture--mobile">
              <Image
                src="/images/hero-commercial-mobile.webp"
                alt="Reform Vital telehealth consultation with a licensed provider"
                width={1024}
                height={1536}
                priority
                sizes="100vw"
                quality={75}
                className="rv-script-hero__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

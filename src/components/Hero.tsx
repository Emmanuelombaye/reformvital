"use client";

import Image from "next/image";
import { brandConfig } from "@/brand.config";

export default function Hero() {
  const { hero } = brandConfig;

  return (
    <section className="rv-script-hero" id="qualify">
      <div className="container rv-script-hero__grid">
        <div className="rv-script-hero__copy" data-animate="peak-fade">
          <p className="rv-script-eyebrow">Reform Vital telehealth</p>
          <h1>{hero.headline}</h1>
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
          <Image
            src="/images/hero-commercial-wide.webp"
            alt="Reform Vital telehealth consultation"
            width={1536}
            height={1024}
            sizes="(min-width: 901px) 50vw, 1px"
            quality={75}
            loading="lazy"
            className="rv-script-hero__img rv-script-hero__img--desktop"
          />
          <Image
            src="/images/hero-commercial-mobile.webp"
            alt="Reform Vital wellness lifestyle"
            width={900}
            height={1350}
            sizes="(max-width: 900px) 100vw, 1px"
            quality={72}
            fetchPriority="high"
            className="rv-script-hero__img rv-script-hero__img--mobile"
          />
        </div>
      </div>
    </section>
  );
}

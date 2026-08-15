"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="qualify"
      style={{
        background: "#FFF",
        padding: "1.25rem 1.25rem 2.5rem",
        width: "100%",
      }}
    >
      <div className="rv-hero-card">
        {/* Desktop: wide split composition */}
        <Image
          src="/images/hero-commercial-wide.png"
          alt="Physician telehealth consultation with Reform Vital"
          fill
          sizes="100vw"
          className="rv-hero-visual rv-hero-visual--desktop"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
        />
        {/* Mobile: tall stacked composition */}
        <Image
          src="/images/hero-commercial-mobile.png"
          alt="Wellness and longevity lifestyle with Reform Vital"
          fill
          sizes="100vw"
          className="rv-hero-visual rv-hero-visual--mobile"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />

        <div className="rv-hero-scrim" aria-hidden />


        <div className="rv-hero-content">
          <h1 className="rv-hero-title">
            Your Health.
            <br />
            <span className="rv-hero-title-accent">Optimized for Life.</span>
          </h1>
          <p className="rv-hero-sub">
            Medical Weight Loss · Hormone Optimization · Longevity · Preventive Wellness
          </p>
        </div>

        <div className="rv-hero-ctas">
          <a href="/start" className="rv-hero-btn rv-hero-btn--primary">
            <span className="rv-hero-btn-label">Start My Health Assessment</span>
          </a>
          <a href="/how-it-works" className="rv-hero-btn rv-hero-btn--secondary">
            Learn How It Works
            <span className="rv-hero-btn-arrow" aria-hidden>
              →
            </span>
          </a>
          <p className="rv-hero-note">Long-term partnership · Physician-guided · No insurance required</p>
        </div>
      </div>

      <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .rv-hero-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 2px solid #1f2a37;
          width: 100%;
          min-height: clamp(520px, 72vh, 720px);
          aspect-ratio: 16 / 9;
          max-height: 780px;
          background: linear-gradient(180deg, #0d1b2a 0%, #1a3a4a 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .rv-hero-visual {
          z-index: 0;
          pointer-events: none;
        }

        .rv-hero-visual--desktop {
          display: block !important;
        }

        .rv-hero-visual--mobile {
          display: none !important;
        }

        .rv-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(13, 27, 42, 0.55) 0%,
              rgba(13, 27, 42, 0.18) 28%,
              rgba(13, 27, 42, 0.12) 50%,
              rgba(13, 27, 42, 0.22) 72%,
              rgba(13, 27, 42, 0.5) 100%
            ),
            linear-gradient(
              180deg,
              rgba(13, 27, 42, 0.35) 0%,
              rgba(13, 27, 42, 0.1) 40%,
              rgba(13, 27, 42, 0.45) 100%
            );
        }

        .rv-hero-trust {
          position: absolute;
          left: clamp(1rem, 3vw, 2.5rem);
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          z-index: 4;
          max-width: 15.5rem;
        }

        .rv-hero-trust-card {
          background: #fff;
          border-radius: 1rem;
          padding: 0.9rem 1.1rem;
          border: 1.5px solid #1f2a37;
          box-shadow: 4px 4px 0 #1f2a37;
          text-align: left;
        }

        .rv-hero-trust-value {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .rv-hero-trust-label {
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          color: #1f2a37;
          margin-top: 0.2rem;
          line-height: 1.35;
        }

        .rv-hero-content {
          position: relative;
          z-index: 5;
          max-width: 40rem;
          width: 100%;
          padding: 1.5rem 1.25rem;
        }

        .rv-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #fff;
          margin-bottom: 0.85rem;
          text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
        }

        .rv-hero-title-accent {
          font-style: italic;
          font-weight: 600;
          color: #5EEAD4;
        }

        .rv-hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5.5vw, 4.25rem);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #fff;
          margin-bottom: 0.85rem;
          text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
        }

        .rv-hero-rotator {
          display: inline-block;
          min-height: 1.15em;
          padding-right: 3px;
          transition: color 0.3s ease, letter-spacing 0.3s ease;
        }

        .rv-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 0;
          letter-spacing: 0.02em;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.3);
          max-width: 36rem;
          margin-left: auto;
          margin-right: auto;
        }

        .rv-hero-ctas {
          position: absolute;
          right: clamp(1.25rem, 3.5vw, 2.75rem);
          bottom: clamp(1.25rem, 3.5vw, 2.5rem);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.7rem;
          max-width: min(22rem, calc(100% - 2.5rem));
        }

        .rv-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.85rem 0.95rem 0.85rem 1.2rem;
          border-radius: 0.85rem;
          text-decoration: none;
          line-height: 1.2;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
        }

        .rv-hero-btn:hover {
          transform: translateY(-2px);
        }

        .rv-hero-btn--primary {
          color: #fff;
          background: linear-gradient(135deg, #00a896 0%, #00b4d8 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          box-shadow:
            0 10px 28px rgba(0, 168, 150, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }

        .rv-hero-btn--primary:hover {
          box-shadow:
            0 14px 34px rgba(0, 168, 150, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .rv-hero-btn-label {
          letter-spacing: -0.01em;
        }

        .rv-hero-btn-price {
          display: inline-flex;
          align-items: baseline;
          gap: 0.05rem;
          background: rgba(13, 27, 42, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          padding: 0.35rem 0.7rem;
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .rv-hero-btn-price span {
          font-size: 0.68em;
          font-weight: 600;
          opacity: 0.9;
        }

        .rv-hero-btn--secondary {
          color: #f4f8f7;
          background: rgba(13, 27, 42, 0.55);
          border: 1.5px solid rgba(0, 180, 216, 0.65);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          justify-content: center;
        }

        .rv-hero-btn--secondary:hover {
          border-color: #00b4d8;
          background: rgba(13, 27, 42, 0.72);
        }

        .rv-hero-btn-arrow {
          width: 1.45rem;
          height: 1.45rem;
          border-radius: 0.4rem;
          background: #00b4d8;
          color: #0d1b2a;
          display: inline-grid;
          place-items: center;
          font-size: 0.85rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .rv-hero-note {
          font-family: var(--font-body);
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.92);
          font-weight: 600;
          text-align: right;
          margin: 0;
          letter-spacing: 0.01em;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 1100px) {
          .rv-hero-trust {
            display: none !important;
          }
        }

        @media (max-width: 900px) {
          .rv-hero-card {
            aspect-ratio: auto;
            max-height: none;
            min-height: min(78vh, 680px);
            justify-content: flex-start;
            padding-top: clamp(2.5rem, 8vh, 4rem);
          }

          .rv-hero-visual--desktop {
            display: none !important;
          }

          .rv-hero-visual--mobile {
            display: block !important;
          }

          .rv-hero-scrim {
            background:
              linear-gradient(
                180deg,
                rgba(13, 27, 42, 0.2) 0%,
                rgba(13, 27, 42, 0.45) 28%,
                rgba(13, 27, 42, 0.55) 48%,
                rgba(13, 27, 42, 0.2) 68%,
                rgba(13, 27, 42, 0.65) 100%
              );
          }

          .rv-hero-content {
            max-width: 34rem;
            padding: 0.5rem 1rem 2rem;
          }

          .rv-hero-title {
            font-size: clamp(2rem, 8vw, 2.85rem);
          }

          .rv-hero-ctas {
            left: 1rem;
            right: 1rem;
            bottom: 1.15rem;
            max-width: none;
            align-items: stretch;
          }

          .rv-hero-note {
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .rv-hero-card {
            min-height: min(88vh, 720px);
            border-radius: 1.15rem;
            padding-top: clamp(2rem, 7vh, 3.25rem);
            padding-bottom: 10.5rem;
          }

          .rv-hero-visual--mobile {
            object-position: center 8% !important;
          }

          .rv-hero-btn {
            font-size: 0.92rem;
            padding: 0.85rem 0.9rem 0.85rem 1.05rem;
          }

          .rv-hero-title {
            font-size: clamp(1.85rem, 9vw, 2.4rem);
          }

          .rv-hero-sub {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}

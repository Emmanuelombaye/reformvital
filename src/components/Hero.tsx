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
        {/* Clip media only — keep CTAs outside overflow so buttons never get cut */}
        <div className="rv-hero-media">
          {/* Desktop only downloads on large viewports (sizes=0px skips mobile) */}
          <Image
            src="/images/hero-commercial-wide.webp"
            alt="Physician telehealth consultation with Reform Vital"
            fill
            sizes="(max-width: 900px) 0px, 100vw"
            className="rv-hero-visual rv-hero-visual--desktop"
            style={{ objectFit: "contain", objectPosition: "center center" }}
            quality={70}
          />
          {/* Mobile — preloaded via media query in layout; skip on desktop */}
          <Image
            src="/images/hero-commercial-mobile.webp"
            alt="Wellness and longevity lifestyle with Reform Vital"
            fill
            sizes="(max-width: 900px) 100vw, 0px"
            className="rv-hero-visual rv-hero-visual--mobile"
            style={{ objectFit: "contain", objectPosition: "center center" }}
            quality={70}
          />
          <div className="rv-hero-scrim" aria-hidden />
        </div>

        <div className="rv-hero-content">
          <p className="rv-hero-eyebrow">Reform Vital</p>
          <h1 className="rv-hero-title">
            Your Health.
            <br />
            <span className="rv-hero-title-accent">Optimized for Life.</span>
          </h1>
          <p className="rv-hero-sub">
            Physician-guided weight loss, hormones, and longevity—built around you.
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
          <p className="rv-hero-note">Physician-guided · No insurance required</p>
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
          overflow: visible;
          border-radius: 1.5rem;
          border: 2px solid #1f2a37;
          width: 100%;
          /* Match client desktop art (1536×1024 → 3:2) — avoid 16:9 crop */
          aspect-ratio: 3 / 2;
          min-height: 0;
          max-height: none;
          background: linear-gradient(180deg, #0d1b2a 0%, #1a3a4a 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .rv-hero-media {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          isolation: isolate;
          contain: paint;
          transform: none !important;
          transform-style: flat !important;
          border-radius: inherit;
          pointer-events: none;
        }

        .rv-hero-visual {
          z-index: 0;
          pointer-events: none;
          object-fit: contain !important;
          transform: none !important;
        }

        .rv-hero-visual--desktop {
          display: block !important;
          object-position: center center !important;
        }

        .rv-hero-visual--mobile {
          display: none !important;
          object-position: center center !important;
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

        .rv-hero-eyebrow {
          display: none;
          margin: 0 0 0.55rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
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
          /* Keep CTAs fully inside the rounded frame */
          padding: 0.15rem;
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
          white-space: normal;
          overflow: visible;
          box-sizing: border-box;
        }

        .rv-hero-btn-label {
          letter-spacing: -0.01em;
          flex: 1;
          text-align: left;
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
            /* Yucca phone flow: image → copy → CTAs (no overlay fight) */
            aspect-ratio: auto;
            max-height: none;
            min-height: 0;
            height: auto;
            justify-content: flex-start;
            align-items: stretch;
            padding: 0;
            text-align: left;
            background: #fff;
            overflow: hidden;
          }

          .rv-hero-media {
            position: relative;
            inset: auto;
            width: 100%;
            aspect-ratio: 2 / 3;
            flex: 0 0 auto;
            border-radius: 0;
            background: linear-gradient(165deg, #eef5f3 0%, #e8f0ee 100%);
          }

          .rv-hero-visual--desktop {
            display: none !important;
          }

          .rv-hero-visual--mobile {
            display: block !important;
            object-fit: contain !important;
            object-position: center center !important;
          }

          .rv-hero-scrim {
            display: none;
          }

          .rv-hero-content {
            position: relative;
            left: auto;
            right: auto;
            top: auto;
            z-index: 2;
            order: 2;
            max-width: none;
            width: 100%;
            padding: 1.35rem 1.15rem 0.35rem;
            background: #fff;
            text-align: left;
          }

          .rv-hero-eyebrow {
            display: block;
          }

          .rv-hero-title {
            font-size: clamp(1.95rem, 8vw, 2.55rem);
            color: var(--primary);
            text-shadow: none;
            margin: 0 0 0.55rem;
          }

          .rv-hero-title-accent {
            color: var(--accent);
            -webkit-text-fill-color: var(--accent);
            background: none;
          }

          .rv-hero-sub {
            color: var(--text-muted);
            text-shadow: none;
            font-size: 1.02rem;
            line-height: 1.5;
            max-width: 28rem;
            margin: 0;
            margin-left: 0;
            margin-right: 0;
          }

          .rv-hero-ctas {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            order: 3;
            z-index: 2;
            width: 100%;
            max-width: none;
            align-items: stretch;
            gap: var(--rv-cta-gap, 0.65rem);
            padding: 1.1rem 1.15rem 1.35rem;
            background: #fff;
            border-radius: 0;
            box-sizing: border-box;
          }

          .rv-hero-btn--secondary {
            background: #fff;
            color: var(--primary);
            border: 1.5px solid rgba(13, 27, 42, 0.16);
            box-shadow: none;
          }

          .rv-hero-note {
            text-align: left;
            width: 100%;
            color: var(--text-muted);
            text-shadow: none;
            font-size: 0.78rem;
            margin-top: 0.15rem;
          }
        }

        @media (max-width: 640px) {
          #qualify {
            padding: 0.85rem 0.85rem 1.75rem !important;
          }

          .rv-hero-card {
            border-radius: 1.15rem;
          }

          .rv-hero-media {
            aspect-ratio: 2 / 3;
          }

          .rv-hero-content {
            padding: 1.2rem 1rem 0.25rem;
          }

          .rv-hero-btn {
            font-size: 0.95rem;
            padding: 0.95rem 1rem;
            min-height: 3.15rem;
          }

          .rv-hero-title {
            font-size: clamp(1.8rem, 8.5vw, 2.25rem);
          }

          .rv-hero-sub {
            font-size: 0.98rem;
            line-height: 1.5;
          }

          .rv-hero-ctas {
            padding: 1rem 1rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}

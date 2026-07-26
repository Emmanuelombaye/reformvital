import { brandConfig } from "@/brand.config";

const pillarIcons = [
  // Physician Guided — shield
  "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z",
  // Personalized Treatment — person
  "M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z",
  // AI Powered Health Coach — heart/pulse
  "M12 21s-7-4.5-9.5-8.2C.7 9.8 2.4 6 6 6c2 0 3.2 1.2 4 2.3C10.8 7.2 12 6 14 6c3.6 0 5.3 3.8 3.5 6.8C19 16.5 12 21 12 21z",
  // Track Improve Thrive — chart
  "M4 19h16v2H4v-2zm2-2V9h2v8H6zm5 0V5h2v12h-2zm5 0v-6h2v6h-2z",
];

export default function BrandPillars() {
  return (
    <section
      className="section"
      style={{
        background:
          "linear-gradient(180deg, #F4F8F7 0%, #FFFFFF 55%, #F4F8F7 100%)",
        padding: "3.5rem 0",
        borderBottom: "1px solid rgba(0, 168, 150, 0.12)",
      }}
    >
      <div className="container">
        <div
          className="section-head"
          style={{
            textAlign: "center",
            maxWidth: "40rem",
            margin: "0 auto 2.5rem",
          }}
        >
          <p
            className="eyebrow"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              letterSpacing: "0.14em",
              marginBottom: "0.5rem",
            }}
          >
            THE REFORM VITAL STANDARD
          </p>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.5vw, 2.6rem)",
              fontWeight: 900,
              marginBottom: "0.65rem",
              color: "var(--primary)",
            }}
          >
            Modern medicine. Personalized health. Real results.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {brandConfig.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="rv-pillar"
              data-animate="bounce"
              data-delay={String(index * 100)}
              data-tilt
              style={{
                textAlign: "center",
                padding: "1.75rem 1.25rem",
              }}
            >
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  margin: "0 auto 1rem",
                  borderRadius: "9999px",
                  background: "rgba(0, 168, 150, 0.12)",
                  border: "1px solid rgba(0, 168, 150, 0.35)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d={pillarIcons[index] || pillarIcons[0]}
                    fill="#00A896"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "0.55rem",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

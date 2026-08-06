import { brandConfig } from "@/brand.config";

const iconPaths: Record<string, string> = {
  shield: "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z",
  provider: "M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z",
  plan: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  pharmacy: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  support: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  consult: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
};

export default function TrustSignals() {
  return (
    <section className="rv-trust-signals" aria-label="Trust and security">
      <div className="container">
        <ul className="rv-trust-signals-grid">
          {brandConfig.trustSignals.map((signal, i) => (
            <li
              key={signal.label}
              className="rv-trust-signal"
              data-animate="rise"
              data-delay={String(i * 60)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A896"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={iconPaths[signal.icon] || iconPaths.shield} />
              </svg>
              <span>{signal.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

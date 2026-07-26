import { brandConfig } from "@/brand.config";

export default function TrustBar() {
  const items = brandConfig.trustProofs;

  return (
    <div className="rv-trust" aria-label="Trust signals">
      <div className="container rv-trust-inner">
        {items.map((proof) => (
          <div key={proof.label} className="rv-trust-item">
            <span
              className="rv-trust-dot"
              style={{ background: proof.color || "var(--accent)" }}
              aria-hidden
            />
            <span>{proof.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

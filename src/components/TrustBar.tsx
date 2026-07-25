import React from "react";
import { brandConfig } from "@/brand.config";

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  plus: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  truck: (
    <svg width="22" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

export default function TrustBar() {
  // Duplicate for seamless infinite marquee loop
  const items = [...brandConfig.trustProofs, ...brandConfig.trustProofs, ...brandConfig.trustProofs, ...brandConfig.trustProofs];

  return (
    <div className="trust-bar" aria-label="Trust proofs">
      <div className="trust-marquee">
        <div className="trust-marquee-track">
          {items.map((proof, i) => (
            <div className="trust-item" key={i}>
              <span style={{ color: proof.color }}>{iconMap[proof.icon] || iconMap.shield}</span>
              <span>{proof.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

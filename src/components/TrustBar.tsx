import React from "react";
import { brandConfig } from "@/brand.config";

export default function TrustBar() {
  const items = [...brandConfig.trustProofs, ...brandConfig.trustProofs, ...brandConfig.trustProofs, ...brandConfig.trustProofs];

  return (
    <div className="marquee" aria-label="Trust proofs">
      <div className="container">
        <ul className="marquee-track">
          {items.map((proof, i) => (
            <li key={i}>
              <span>{proof.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

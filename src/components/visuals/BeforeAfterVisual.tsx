"use client";

interface BeforeAfterProps {
  beforeWeight: string;
  afterWeight: string;
  lbsLost: number;
  timeframe: string;
  gradient: string;
}

export default function BeforeAfterVisual({
  beforeWeight,
  afterWeight,
  lbsLost,
  timeframe,
  gradient,
}: BeforeAfterProps) {
  return (
    <div
      style={{
        background: gradient,
        borderRadius: "1.25rem 1.25rem 0 0",
        padding: "1.5rem",
        color: "#FFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Floating Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 900, background: "rgba(0,0,0,0.3)", padding: "4px 12px", borderRadius: "9999px", letterSpacing: "0.06em" }}>
          BEFORE vs AFTER
        </span>
        <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#FFE600", background: "rgba(0,0,0,0.35)", padding: "4px 12px", borderRadius: "9999px" }}>
          -{lbsLost} LBS ({timeframe})
        </span>
      </div>

      {/* Split Comparison Graphic Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.85rem",
          background: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(10px)",
          padding: "1.25rem",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* Before Side */}
        <div style={{ textAlign: "center", borderRight: "1px solid rgba(255, 255, 255, 0.2)", paddingRight: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem", marginBottom: "0.3rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF6B6B" }} />
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", fontWeight: 800, letterSpacing: "0.08em" }}>
              BEFORE
            </span>
          </div>
          <strong style={{ fontSize: "1.5rem", fontWeight: 900, color: "rgba(255,255,255,0.85)", display: "block" }}>
            {beforeWeight}
          </strong>
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>Baseline Intake</span>
        </div>

        {/* After Side */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem", marginBottom: "0.3rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00F5D4" }} />
            <span style={{ fontSize: "0.72rem", color: "#00F5D4", fontWeight: 800, letterSpacing: "0.08em" }}>
              AFTER RESULT
            </span>
          </div>
          <strong style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FFF", display: "block" }}>
            {afterWeight}
          </strong>
          <span style={{ fontSize: "0.72rem", color: "#00F5D4", fontWeight: 700 }}>Target Achieved</span>
        </div>
      </div>

      {/* Progress Bar Graphic */}
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "0.25rem" }}>
          <span>Weight Reduction Progress</span>
          <span>100% Target Met</span>
        </div>
        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "9999px", overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #00F5D4, #FFE600)", borderRadius: "9999px" }} />
        </div>
      </div>
    </div>
  );
}

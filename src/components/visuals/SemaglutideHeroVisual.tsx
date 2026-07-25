import React from 'react';

export default function SemaglutideHeroVisual() {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '2px solid var(--border-dark)',
        boxShadow: 'var(--shadow-hover)',
        background: 'linear-gradient(135deg, #070E17 0%, #0D1B2A 50%, #00B4D8 100%)',
        padding: '2.5rem',
        color: '#FFF',
        minHeight: '340px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            background: 'var(--accent-cyan)',
            color: 'var(--primary)',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 900,
            letterSpacing: '0.06em',
          }}
        >
          SELECTIVE GLP-1 RECEPTOR AGONIST
        </span>
        <span style={{ fontSize: '0.8rem', color: '#FFF', fontWeight: 800 }}>VITAL WEIGHT LOSS</span>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.1em' }}>
          PHYSICIAN FORMULATION
        </div>
        <h3 style={{ fontSize: '2.2rem', color: '#FFF', fontWeight: 900, marginTop: '4px' }}>
          Semaglutide + Cyanocobalamin (B12)
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: "0.95rem", marginTop: '8px', maxWidth: '360px' }}>
          Gold-standard weekly subcutaneous GLP-1 injection for appetite regulation and metabolic re-calibration.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          padding: '1rem 1.25rem',
          borderRadius: '1rem',
          border: '1px solid rgba(0, 180, 216, 0.4)',
        }}
      >
        <div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>CLINICAL RESULT</span>
          <strong style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>Up to 15% Weight Reduction</strong>
        </div>
        <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.2)' }} />
        <div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>SHIPPING FREQUENCY</span>
          <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>Monthly Cold-Chain</strong>
        </div>
      </div>
    </div>
  );
}

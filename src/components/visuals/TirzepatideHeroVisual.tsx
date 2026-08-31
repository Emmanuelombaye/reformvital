import React from 'react';

export default function TirzepatideHeroVisual() {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '2px solid var(--border-dark)',
        boxShadow: 'var(--shadow-hover)',
        background: 'linear-gradient(135deg, #0D1B2A 0%, #162A45 60%, #00A896 100%)',
        padding: '2.5rem',
        color: '#FFF',
        minHeight: '340px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Background Molecule Pattern */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          opacity: 0.15,
          pointerEvents: 'none',
        }}
        width="320"
        height="320"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" stroke="#00A896" strokeWidth="2" fill="none" strokeDasharray="6 6" />
        <circle cx="100" cy="100" r="50" stroke="#00B4D8" strokeWidth="2" fill="none" />
        <circle cx="100" cy="20" r="8" fill="#00A896" />
        <circle cx="180" cy="100" r="8" fill="#00B4D8" />
        <circle cx="100" cy="180" r="8" fill="#D4AF37" />
        <circle cx="20" cy="100" r="8" fill="#00A896" />
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            background: 'var(--accent)',
            color: '#FFF',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 900,
            letterSpacing: '0.06em',
          }}
        >
          DUAL-ACTION WEIGHT-MANAGEMENT FORMULATION
        </span>
        <span style={{ fontSize: '0.8rem', color: '#00B4D8', fontWeight: 800 }}>503A PHARMACY COMPOUNDED</span>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.1em' }}>
          REFORM VITAL FORMULATION
        </div>
        <h3 style={{ fontSize: '2.2rem', color: '#FFF', fontWeight: 900, marginTop: '4px' }}>
          Tirzepatide + Vitamin B12
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', marginTop: '8px', maxWidth: '360px' }}>
          Compounded weekly subcutaneous injection providing dual-action appetite suppression & accelerated fat oxidation.
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
          border: '1px solid rgba(0, 168, 150, 0.4)',
        }}
      >
        <div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>CLINICAL EFFICACY</span>
          <strong style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>Up to 20.9% Fat Reduction</strong>
        </div>
        <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.2)' }} />
        <div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>DOSING FREQUENCY</span>
          <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>Once Weekly</strong>
        </div>
      </div>
    </div>
  );
}

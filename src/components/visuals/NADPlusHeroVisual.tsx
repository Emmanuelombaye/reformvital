import React from 'react';

export default function NADPlusHeroVisual() {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '2px solid var(--border-dark)',
        boxShadow: 'var(--shadow-hover)',
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1A2E40 60%, #D4AF37 100%)',
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
            background: 'var(--accent-gold)',
            color: '#0D1B2A',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 900,
            letterSpacing: '0.06em',
          }}
        >
          MITOCHONDRIAL ATP REJUVENATION
        </span>
        <span style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 800 }}>CELLULAR LONGEVITY</span>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.1em' }}>
          COENZYME INJECTION THERAPY
        </div>
        <h3 style={{ fontSize: '2.2rem', color: '#FFF', fontWeight: 900, marginTop: '4px' }}>
          NAD+ Cellular Energy Matrix
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', marginTop: '8px', maxWidth: '360px' }}>
          Nicotinamide Adenine Dinucleotide injection restoring mitochondrial energy, activating sirtuins & DNA repair.
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
          border: '1px solid rgba(212, 175, 55, 0.4)',
        }}
      >
        <div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>TARGET EFFECT</span>
          <strong style={{ fontSize: '1.15rem', color: 'var(--accent-gold)' }}>ATP Energy & Sirtuin Activation</strong>
        </div>
        <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.2)' }} />
        <div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>ADMINISTRATION</span>
          <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>2-3x Weekly</strong>
        </div>
      </div>
    </div>
  );
}

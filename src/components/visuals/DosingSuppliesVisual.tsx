import React from 'react';

export default function DosingSuppliesVisual() {
  return (
    <div
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        border: '2px solid var(--border-dark)',
        boxShadow: 'var(--shadow-card)',
        background: '#FFF',
        padding: '2rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
        <span className="badge" style={{ background: 'var(--accent-soft)', color: '#00695C' }}>INCLUDED IN SHIPMENT</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 800 }}>503A PHARMACY KIT</span>
      </div>

      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 900 }}>
        Complete Compounding Supplies Kit
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.2rem' }}>
        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>🧪</div>
          <strong style={{ fontSize: '0.92rem', color: 'var(--primary)', display: 'block' }}>Fresh Compounded Vial</strong>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Multi-dose sterile medication vial</span>
        </div>

        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>💉</div>
          <strong style={{ fontSize: '0.92rem', color: 'var(--primary)', display: 'block' }}>Sterile Syringes</strong>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Precision U-100 micro-needles</span>
        </div>

        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>🧼</div>
          <strong style={{ fontSize: '0.92rem', color: 'var(--primary)', display: 'block' }}>Alcohol Prep Swabs</strong>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Isopropyl antiseptic pads</span>
        </div>

        <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>📦</div>
          <strong style={{ fontSize: '0.92rem', color: 'var(--primary)', display: 'block' }}>Cold-Chain Box</strong>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Insulated expedited shipment</span>
        </div>
      </div>
    </div>
  );
}

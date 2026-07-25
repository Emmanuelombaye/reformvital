import React from 'react';

export default function MechanismVisual() {
  return (
    <div
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        border: '2px solid var(--border-dark)',
        boxShadow: 'var(--shadow-card)',
        background: '#0D1B2A',
        color: '#FFF',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <span className="badge" style={{ background: 'var(--accent)', color: '#FFF' }}>MECHANISM DIAGRAM</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 800 }}>RECEPTOR SIGNALING</span>
      </div>

      <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '1rem', fontWeight: 900 }}>
        GLP-1 & GIP Metabolic Pathways
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.2rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '0.85rem', borderLeft: '4px solid var(--accent)' }}>
          <strong style={{ color: 'var(--accent)', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
            1. Hypothalamic Appetite Suppression
          </strong>
          <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.8)' }}>
            Active GLP-1 peptides bind to appetite receptors in the hypothalamus, significantly dampening hunger signals.
          </span>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '0.85rem', borderLeft: '4px solid var(--accent-cyan)' }}>
          <strong style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
            2. Gastric Motility Moderation
          </strong>
          <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.8)' }}>
            Slows gastric emptying to extend satiety and prevent post-meal glucose spikes.
          </span>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '0.85rem', borderLeft: '4px solid var(--accent-gold)' }}>
          <strong style={{ color: 'var(--accent-gold)', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
            3. Adipose Fat Oxidation & Energy
          </strong>
          <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.8)' }}>
            GIP co-activation enhances insulin sensitivity, channeling fatty acids into mitochondrial breakdown.
          </span>
        </div>
      </div>
    </div>
  );
}

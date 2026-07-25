import React from 'react';

export default function DoctorAdvisoryVisual() {
  return (
    <div
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        border: '2px solid var(--border-dark)',
        boxShadow: 'var(--shadow-card)',
        background: 'linear-gradient(135deg, #070E17 0%, #0D1B2A 100%)',
        color: '#FFF',
        padding: '2.2rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
        <span className="badge" style={{ background: 'var(--accent)', color: '#FFF' }}>MEDICAL DIRECTORS</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 800 }}>BOARD CERTIFIED</span>
      </div>

      <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '0.8rem', fontWeight: 900 }}>
        Reform Vital Physician Panel
      </h3>
      <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Every treatment plan is reviewed and prescribed by state-licensed medical directors with ongoing biomarker tracking.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid rgba(0, 168, 150, 0.4)' }}>
          <strong style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '1.05rem' }}>Dr. Michael Wasef, MD</strong>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '0.4rem' }}>
            Internal Medicine Physician & Telemedicine Advisory
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
            Licensed in all 50 States • 10+ Years Telehealth Supervision
          </span>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid rgba(0, 168, 150, 0.4)' }}>
          <strong style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '1.05rem' }}>Dr. Andrew Sakla, DO</strong>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '0.4rem' }}>
            Regenerative Care & Peptide Therapy Director
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
            Endocrinology & Bioidentical Hormone Specialist
          </span>
        </div>
      </div>
    </div>
  );
}

// Partners.jsx
import React from 'react';

const partners = [
  'National Oil Company',
  'Global Refinery Group',
  'Maritime Logistics Partner',
  'Regional Government Agency',
  'Offshore Supplier Network',
  'International Energy Exchange',
  'National Oil Company',
  'Global Refinery Group',
  'Maritime Logistics Partner',
  'Regional Government Agency',
  'Offshore Supplier Network',
  'International Energy Exchange',
];

export default function Partners() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--color-bg)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-badge">Network</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            Trusted By
          </h2>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: 'linear-gradient(to right, var(--color-bg), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: 'linear-gradient(to left, var(--color-bg), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div className="marquee-track" style={{ display: 'flex', gap: 24, width: 'max-content' }}>
          {partners.map((partner, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                padding: '20px 32px',
                whiteSpace: 'nowrap',
                filter: 'grayscale(1)',
                transition: 'filter 0.3s, border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = 'grayscale(0)';
                e.currentTarget.style.borderColor = 'var(--color-green)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(46,125,100,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = 'grayscale(1)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--color-navy)',
                letterSpacing: '0.02em',
              }}>
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

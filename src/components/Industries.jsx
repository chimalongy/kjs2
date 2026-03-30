// Industries.jsx
import React from 'react';
import { FiZap, FiFlag, FiSettings, FiSun, FiHome, FiAnchor } from 'react-icons/fi';

const industries = [
  { icon: <FiZap size={26} />, label: 'Refineries & Petrochemicals' },
  { icon: <FiFlag size={26} />, label: 'Government & National Agencies' },
  { icon: <FiSettings size={26} />, label: 'Industrial Manufacturing Plants' },
  { icon: <FiSun size={26} />, label: 'Power Generation Companies' },
  { icon: <FiHome size={26} />, label: 'Construction & Infrastructure' },
  { icon: <FiAnchor size={26} />, label: 'Maritime & Logistics' },
];

export default function Industries() {
  return (
    <section style={{ padding: '100px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge">Sector Coverage</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            Industries We Serve
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}>
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} card-lift`}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                padding: '40px 32px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-green)';
                e.currentTarget.style.background = 'rgba(46,125,100,0.03)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-surface)';
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(46,125,100,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--color-green)',
                transition: 'background 0.3s',
              }}>
                {ind.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--color-navy)',
                lineHeight: 1.4,
              }}>
                {ind.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

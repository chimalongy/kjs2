// Infrastructure.jsx
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const services = [
  'EPC (Engineering, Procurement, Construction)',
  'Pipeline Installation & Maintenance',
  'Terminal & Depot Development',
  'Energy Infrastructure Modernization',
  'Quality Inspection & Certification',
];

export default function Infrastructure() {
  return (
    <section style={{ padding: '100px 24px', background: 'var(--color-surface)' }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}
        className="infra-grid"
      >
        {/* Left: Services list with vertical accent */}
        <div className="reveal" style={{ position: 'relative', paddingLeft: 28 }}>
          {/* Vertical green line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background: 'linear-gradient(to bottom, var(--color-green), var(--color-green-light))',
            borderRadius: 2,
          }} />

          <div className="section-badge">Infrastructure</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
            marginBottom: 36,
            lineHeight: 1.15,
          }}>
            Building the Backbone of Energy Economies.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {services.map((svc, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '16px 20px',
                  background: 'var(--color-bg)',
                  borderRadius: 6,
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-green)';
                  e.currentTarget.style.background = 'rgba(46,125,100,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'var(--color-bg)';
                }}
              >
                <FiCheckCircle size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--color-navy)',
                }}>
                  {svc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80"
              alt="Pipeline infrastructure"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15,43,61,0.6) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 32,
              left: 32,
              right: 32,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
              }}>
                85km+
              </div>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'var(--color-green-light)',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>
                Pipeline Installed
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            width: 100,
            height: 100,
            border: '3px solid var(--color-green)',
            borderRadius: 4,
            zIndex: -1,
            opacity: 0.4,
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .infra-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

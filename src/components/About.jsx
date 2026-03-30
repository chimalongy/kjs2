// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const highlights = [
  'Sovereign Partnerships',
  '$3.5B Traded',
  '18 Active Countries',
];

export default function About() {
  return (
    <section id="about" style={{
      padding: '100px 24px',
      background: 'var(--color-surface)',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}
        className="about-grid"
      >
        {/* Text */}
        <div className="reveal">
          <div className="section-badge">About KJS West Global</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
            marginBottom: 24,
            lineHeight: 1.15,
          }}>
            Built for Global Energy Markets.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-muted)',
            lineHeight: 1.8,
            marginBottom: 32,
          }}>
            KJS West Global Resources Enterprises is a premier Oil & Gas and General Contracting company headquartered in West Africa, with an international footprint spanning 18 countries across Africa, Europe, and the Middle East. We supply energy, execute contracts, and build the infrastructure that powers economies — combining deep regional expertise with global market reach.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
            {highlights.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <FiCheckCircle size={18} color="var(--color-green)" />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  color: 'var(--color-navy)',
                  fontSize: '0.95rem',
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--color-green)',
              fontFamily: 'var(--font-label)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1.5px solid var(--color-green)',
              padding: '11px 22px',
              borderRadius: 3,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-green)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-green)';
            }}
          >
            Read More About Us <FiArrowRight size={13} />
          </Link>
        </div>

        {/* Visual */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 8,
            overflow: 'hidden',
            aspectRatio: '4/3',
            position: 'relative',
          }}>
            <img
              src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=900&q=80"
              alt="Industrial operations"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Stat callout */}
            <div style={{
              position: 'absolute',
              bottom: 28,
              left: -32,
              background: 'var(--color-navy)',
              color: '#fff',
              padding: '20px 28px',
              borderRadius: 6,
              boxShadow: '0 8px 32px rgba(15,43,61,0.2)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1,
              }}>18+</div>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--color-green-light)',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>Countries Active</div>
            </div>
          </div>

          {/* Green accent bar */}
          <div style={{
            position: 'absolute',
            top: -16,
            right: -16,
            width: 64,
            height: 64,
            background: 'var(--color-green)',
            borderRadius: 4,
            zIndex: -1,
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

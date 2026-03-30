// CTA.jsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function CTA() {
  return (
    <section style={{
      background: 'var(--color-navy)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Green glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: 300,
        background: 'radial-gradient(ellipse, rgba(46,125,100,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Dot pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="reveal">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Looking for a Reliable Energy Supply Partner?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            marginBottom: 44,
            maxWidth: 560,
            margin: '0 auto 44px',
          }}>
            Let's discuss your supply needs, trading requirements, or infrastructure project.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                background: 'var(--color-green)',
                color: '#fff',
                fontFamily: 'var(--font-label)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-green-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-green)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Request a Quote <FiArrowRight size={14} />
            </a>
            <a
              href="#contact"
              style={{
                background: 'transparent',
                color: '#fff',
                fontFamily: 'var(--font-label)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: 4,
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.35)',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

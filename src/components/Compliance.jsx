// Compliance.jsx
import React from 'react';
import { FiShield, FiAlertOctagon, FiBook, FiAward } from 'react-icons/fi';

const pillars = [
  {
    icon: <FiShield size={26} />,
    title: 'HSE Policy',
    subtitle: 'Health, Safety & Environment',
    desc: 'Zero-harm commitment across all operations. Our Health, Safety & Environment framework governs every project, from procurement to delivery, ensuring worker safety and minimal environmental impact.',
  },
  {
    icon: <FiAlertOctagon size={26} />,
    title: 'Anti-Corruption',
    subtitle: 'FCPA & UK Bribery Act',
    desc: 'Full compliance with the Foreign Corrupt Practices Act and UK Bribery Act. Transparent dealings with all sovereign and commercial counterparties.',
  },
  {
    icon: <FiBook size={26} />,
    title: 'Regulatory Framework',
    subtitle: 'Multi-Jurisdiction Adherence',
    desc: 'Operating across 18 jurisdictions demands rigorous regulatory intelligence. We maintain active compliance frameworks in every market we operate within.',
  },
  {
    icon: <FiAward size={26} />,
    title: 'Quality Assurance',
    subtitle: 'ISO 9001-Aligned',
    desc: 'Our quality management system follows ISO 9001 principles — ensuring consistent, auditable, and traceable delivery standards across all service lines.',
  },
];

export default function Compliance() {
  return (
    <section id="compliance" style={{ padding: '100px 24px', background: '#F8FAFF' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-badge">Governance</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
            marginBottom: 16,
          }}>
            Compliance & Governance
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-muted)',
            fontSize: '1rem',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Our operations are built on a rigorous compliance framework — transparent, auditable, and aligned with international standards.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 28,
        }}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-lift`}
              style={{
                background: 'var(--color-surface)',
                borderRadius: 8,
                padding: '40px 36px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-navy)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 8,
                background: 'var(--color-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-green-light)',
                marginBottom: 24,
              }}>
                {pillar.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                marginBottom: 4,
              }}>
                {pillar.title}
              </h3>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-green)',
                marginBottom: 16,
              }}>
                {pillar.subtitle}
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
              }}>
                {pillar.desc}
              </p>

              {/* ISO badge for Quality Assurance */}
              {i === 3 && (
                <div style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '2px solid var(--color-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.5rem',
                    fontWeight: 700,
                    color: 'var(--color-green)',
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                  }}>ISO</div>
                  <div style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.42rem',
                    fontWeight: 700,
                    color: 'var(--color-green)',
                  }}>9001</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

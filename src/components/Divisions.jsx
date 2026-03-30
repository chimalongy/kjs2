// Divisions.jsx
import React from 'react';
import { MdOutlineOilBarrel } from 'react-icons/md';
import { FiTrendingUp, FiClipboard, FiLayers } from 'react-icons/fi';

const divisions = [
  {
    num: '01',
    icon: <MdOutlineOilBarrel size={28} />,
    title: 'Oil & Gas',
    desc: 'KJS West Global is a principal player in the upstream and midstream oil & gas sector. We source, trade, and supply crude oil and natural gas across West Africa, Europe, and the Gulf — backed by long-term offtake agreements and sovereign partnerships.',
  },
  {
    num: '02',
    icon: <FiTrendingUp size={28} />,
    title: 'Energy Trading',
    desc: 'We operate active energy trading desks with direct market access — executing crude, LNG, and refined product trades across sovereign and commercial counterparties.',
  },
  {
    num: '03',
    icon: <FiClipboard size={28} />,
    title: 'General Contracts',
    desc: 'We design, procure, and execute multi-sector contracts for industrial, public, and private clients — delivering on time, on budget, and to specification.',
  },
  {
    num: '04',
    icon: <FiLayers size={28} />,
    title: 'Infrastructure',
    desc: 'From pipeline installation to terminal development — we build the physical backbone of the energy economy.',
  },
];

export default function Divisions() {
  return (
    <section id="services" style={{ padding: '100px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 60, textAlign: 'center' }}>
          <div className="section-badge">Our Divisions</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            Four Specialised Divisions
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
        }}>
          {divisions.map((div, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-lift`}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                padding: '40px 36px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              {/* Large number */}
              <div style={{
                position: 'absolute',
                top: 20,
                right: 28,
                fontFamily: 'var(--font-display)',
                fontSize: '5rem',
                fontWeight: 800,
                color: 'rgba(46,125,100,0.08)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {div.num}
              </div>

              <div style={{
                color: 'var(--color-green)',
                marginBottom: 20,
              }}>
                {div.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                marginBottom: 14,
              }}>
                {div.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
              }}>
                {div.desc}
              </p>

              {/* Bottom accent */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: '100%',
                height: 3,
                background: 'var(--color-green)',
                transition: 'right 0.4s ease',
              }}
                className="division-underline"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .card-lift:hover .division-underline { right: 0 !important; }
      `}</style>
    </section>
  );
}

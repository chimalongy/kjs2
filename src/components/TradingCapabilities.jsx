// TradingCapabilities.jsx
import React from 'react';
import { FiDroplet, FiPackage, FiDatabase, FiAnchor, FiCalendar, FiBriefcase } from 'react-icons/fi';

const capabilities = [
  {
    icon: <FiDroplet size={24} />,
    title: 'Crude Sourcing & Offtake Agreements',
    desc: 'Long-term contracts and spot market access for upstream crude supply across West Africa.',
  },
  {
    icon: <FiPackage size={24} />,
    title: 'Bulk Petroleum Supply',
    desc: 'High-volume refined product supply chains serving refineries and national oil companies.',
  },
  {
    icon: <FiDatabase size={24} />,
    title: 'Storage & Terminal Access',
    desc: 'Proprietary and leased storage capacity at key regional terminals and port facilities.',
  },
  {
    icon: <FiAnchor size={24} />,
    title: 'Shipping & Vessel Chartering',
    desc: 'End-to-end maritime logistics — from VLCC tanker chartering to coastal barge operations.',
  },
  {
    icon: <FiCalendar size={24} />,
    title: 'Delivery Scheduling & Logistics',
    desc: 'Precision scheduling and last-mile coordination across multi-port, multi-jurisdiction routes.',
  },
  {
    icon: <FiBriefcase size={24} />,
    title: 'Government & Private Sector Partnerships',
    desc: 'Sovereign-level relationships with national oil companies and regulatory authorities.',
  },
];

export default function TradingCapabilities() {
  return (
    <section style={{
      background: 'var(--color-navy)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Green glow accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(46,125,100,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            fontFamily: 'var(--font-label)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-green-light)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
          }}>
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--color-green-light)' }} />
            Trading & Supply
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.15,
          }}>
            End-to-End Supply & Trading Capabilities
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} card-lift`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '36px 32px',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(46,125,100,0.12)';
                e.currentTarget.style.borderColor = 'rgba(61,168,130,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{
                color: 'var(--color-green-light)',
                marginBottom: 18,
                width: 48,
                height: 48,
                background: 'rgba(46,125,100,0.15)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {cap.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#fff',
                marginBottom: 12,
                lineHeight: 1.3,
              }}>
                {cap.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.72,
              }}>
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

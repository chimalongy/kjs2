// Markets.jsx
import React from 'react';
import { FaGlobeAfrica, FaGlobeEurope, FaGlobeAsia } from 'react-icons/fa';
import worldMapImg from '../assets/world_map.png';

const regions = [
  {
    icon: <FaGlobeAfrica size={32} />,
    title: 'West Africa',
    desc: 'Our primary hub — Nigeria, Ghana, Côte d\'Ivoire, and Senegal form the core of our upstream and supply operations. Deep government partnerships and production access.',
  },
  {
    icon: <FaGlobeEurope size={32} />,
    title: 'Western Europe',
    desc: 'Trading and distribution networks across the UK, Netherlands, and Mediterranean ports. Linked to major refinery groups and commodity exchanges.',
  },
  {
    icon: <FaGlobeAsia size={32} />,
    title: 'Middle East & Asia',
    desc: 'Active operations in the Gulf region with LNG trade facilitation and sovereign-backed agreements extending to Southeast Asian markets.',
  },
];

export default function Markets() {
  return (
    <section id="markets" style={{ padding: '100px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-badge">Global Footprint</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            Our Global Reach
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-muted)',
            fontSize: '1rem',
            marginTop: 16,
            maxWidth: 540,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Active across 18 countries — from West African oil fields to European trading hubs and Gulf LNG corridors.
          </p>
        </div>

        {/* SVG World Map Placeholder */}
        <div className="reveal" style={{
          background: 'var(--color-navy)',
          borderRadius: 12,
          padding: '64px 40px',
          marginBottom: 48,
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
          <div style={{
            position: 'relative',
            zIndex: 1,
          }}>
            <img src={worldMapImg} alt="KJS West Global Operations Map" style={{ width: '100%', maxWidth: 820, borderRadius: 8, opacity: 0.95, boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }} />

            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 24, flexWrap: 'wrap' }}>
              {[
                { color: 'var(--color-green)', label: 'Primary Operations' },
                { color: 'var(--color-green-light)', label: 'Active Markets' },
                { color: 'rgba(255,255,255,0.2)', label: 'Coverage Region' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: item.color }} />
                  <span style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                  }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Region Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 28,
        }}>
          {regions.map((region, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-lift`}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                padding: '36px 32px',
              }}
            >
              <div style={{ color: 'var(--color-green)', marginBottom: 18 }}>{region.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--color-navy)',
                marginBottom: 12,
              }}>{region.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
              }}>{region.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

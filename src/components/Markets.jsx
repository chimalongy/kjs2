// Markets.jsx
import React from 'react';
import { FaGlobeAfrica, FaGlobeEurope, FaGlobeAsia } from 'react-icons/fa';

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
            <svg viewBox="0 0 900 440" style={{ width: '100%', maxWidth: 820, opacity: 0.92 }} xmlns="http://www.w3.org/2000/svg">
              {/* Simplified world map continents */}
              {/* North America */}
              <ellipse cx="180" cy="170" rx="90" ry="70" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              {/* South America */}
              <ellipse cx="220" cy="300" rx="55" ry="75" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              {/* Europe */}
              <ellipse cx="430" cy="145" rx="55" ry="45" fill="rgba(61,168,130,0.25)" stroke="rgba(61,168,130,0.5)" strokeWidth="1.5" />
              {/* Africa - HIGHLIGHTED */}
              <ellipse cx="440" cy="280" rx="70" ry="90" fill="rgba(46,125,100,0.4)" stroke="var(--color-green)" strokeWidth="2" />
              {/* Middle East */}
              <ellipse cx="540" cy="220" rx="45" ry="35" fill="rgba(61,168,130,0.25)" stroke="rgba(61,168,130,0.5)" strokeWidth="1.5" />
              {/* Asia */}
              <ellipse cx="660" cy="170" rx="120" ry="80" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              {/* Southeast Asia */}
              <ellipse cx="730" cy="270" rx="55" ry="40" fill="rgba(61,168,130,0.2)" stroke="rgba(61,168,130,0.4)" strokeWidth="1.5" />
              {/* Australia */}
              <ellipse cx="740" cy="340" rx="55" ry="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              {/* Route lines */}
              <line x1="440" y1="230" x2="430" y2="165" stroke="var(--color-green-light)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" />
              <line x1="440" y1="230" x2="540" y2="210" stroke="var(--color-green-light)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" />
              <line x1="540" y1="210" x2="730" y2="265" stroke="var(--color-green-light)" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5" />

              {/* Location dots */}
              <circle cx="440" cy="260" r="6" fill="var(--color-green)" />
              <circle cx="430" cy="155" r="5" fill="var(--color-green-light)" />
              <circle cx="540" cy="215" r="5" fill="var(--color-green-light)" />
              <circle cx="730" cy="270" r="4" fill="var(--color-green-light)" opacity="0.8" />
            </svg>

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

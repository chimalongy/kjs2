// Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    quote: 'KJS West Global delivered consistent crude supply volumes with strict compliance standards — a dependable long-term partner.',
    name: 'Operations Director',
    org: 'National Refinery Group',
  },
  {
    quote: 'Their infrastructure execution on our pipeline project was flawless — on schedule, within budget, zero safety incidents.',
    name: 'Project Lead',
    org: 'Gulf Energy Authority',
  },
  {
    quote: "We've worked with KJS West across 3 continents. Their trading desk operates with exceptional market intelligence and speed.",
    name: 'Chief Procurement Officer',
    org: 'Industrial Conglomerate',
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 24px', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge">Client Voices</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            What Our Partners Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-lift`}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                padding: '44px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Large quote mark */}
              <div style={{
                position: 'absolute',
                top: 20,
                right: 28,
                fontFamily: 'var(--font-display)',
                fontSize: '8rem',
                lineHeight: 1,
                color: 'rgba(46,125,100,0.08)',
                userSelect: 'none',
                fontWeight: 800,
              }}>
                "
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--color-navy)',
                lineHeight: 1.7,
                marginBottom: 32,
                position: 'relative',
                zIndex: 1,
              }}>
                "{t.quote}"
              </p>

              <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: 20,
              }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--color-navy)',
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-green)',
                  marginTop: 4,
                }}>
                  {t.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

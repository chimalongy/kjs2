// Stats.jsx
import React, { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Operations' },
  { value: 18, suffix: '', label: 'Countries Active' },
  { value: 3.5, prefix: '$', suffix: 'B', label: 'Energy Traded' },
  { value: 5000, suffix: '+', label: 'Workforce Deployed' },
];

function Counter({ value, prefix = '', suffix = '', inView }) {
  const [count, setCount] = useState(0);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, isDecimal]);

  return (
    <span>
      {prefix}{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: 'var(--color-navy)',
      padding: '64px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '48px 32px',
        position: 'relative',
        zIndex: 1,
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
              marginBottom: 10,
              letterSpacing: '-0.02em',
            }}>
              <Counter value={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} inView={inView} />
            </div>
            <div style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-green-light)',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

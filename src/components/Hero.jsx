// Hero.jsx
import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const slides = [
  {
    tag: 'OIL & GAS DIVISION',
    headline: 'Energy. Contracts. Delivered.',
    sub: 'Premier crude oil sourcing, supply, and trading across West Africa, Europe, and the Gulf.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80',
  },
  {
    tag: 'ENERGY TRADING',
    headline: 'Global Markets. Local Expertise.',
    sub: 'We move energy across continents — backed by sovereign partnerships and long-term offtake agreements.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1600&q=80',
  },
  {
    tag: 'GENERAL CONTRACTS',
    headline: 'Built on Execution.',
    sub: 'From procurement to delivery — we manage multi-sector contracts with precision and accountability.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  {
    tag: 'INFRASTRUCTURE',
    headline: 'Engineering the Future.',
    sub: 'Pipeline construction, terminal development, and EPC services that power growing economies.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(15,43,61,0.92) 0%, rgba(15,43,61,0.55) 60%, rgba(15,43,61,0.2) 100%)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        <div style={{
          maxWidth: 680,
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 0.45s ease, transform 0.45s ease',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'var(--color-green)',
            color: '#fff',
            fontFamily: 'var(--font-label)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            padding: '5px 14px',
            borderRadius: 2,
            marginBottom: 24,
            textTransform: 'uppercase',
          }}>
            {slide.tag}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            {slide.headline}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 520,
            fontWeight: 300,
          }}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
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
                padding: '14px 28px',
                borderRadius: 3,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-green-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-green)'}
            >
              Request Supply <FiArrowRight size={14} />
            </a>
            <a
              href="#about"
              style={{
                background: 'transparent',
                color: '#fff',
                fontFamily: 'var(--font-label)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: 3,
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.5)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#fff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: 'max(24px, calc((100% - 1280px)/2 + 24px))',
        zIndex: 3,
        display: 'flex',
        gap: 8,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          >
            <div style={{
              width: i === current ? 40 : 20,
              height: 3,
              borderRadius: 2,
              background: i === current ? 'var(--color-green)' : 'rgba(255,255,255,0.35)',
              transition: 'all 0.3s ease',
            }} />
          </button>
        ))}
      </div>
    </section>
  );
}

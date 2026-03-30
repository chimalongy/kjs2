// Footer.jsx
import React from 'react';
import { FiLinkedin, FiTwitter, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';

const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Markets', 'Compliance', 'Contact'];
const serviceLinks = ['Oil & Gas Supply', 'Energy Trading', 'General Contracts', 'Infrastructure & EPC', 'Terminal Development', 'LNG Facilitation'];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-navy)',
      padding: '80px 24px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle dot pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* 4-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px 40px',
          marginBottom: 64,
        }}>
          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: '#fff',
              }}>KJS West </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.4rem',
                color: 'var(--color-green)',
              }}>Global</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.75,
              marginBottom: 28,
              maxWidth: 240,
            }}>
              Premier Oil & Gas and General Contracting company — powering economies across 18 countries.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <FiLinkedin size={16} />, label: 'LinkedIn' },
                { icon: <FiTwitter size={16} />, label: 'Twitter' },
                { icon: <FiInstagram size={16} />, label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'var(--color-green)';
                    e.currentTarget.style.background = 'rgba(46,125,100,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>
              Quick Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-green-light)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>
              Services
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceLinks.map(link => (
                <a
                  key={link}
                  href="#services"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-green-light)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a
                href="mailto:info@kjswestglobal.com"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-green-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                <FiMail size={15} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-green-light)' }} />
                info@kjswestglobal.com
              </a>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
              }}>
                <FiMapPin size={15} style={{ marginTop: 2, flexShrink: 0, color: 'var(--color-green-light)' }} />
                <div>
                  <div>West Africa (HQ)</div>
                  <div style={{ marginTop: 4, fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                    London · Dubai · Singapore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © 2025 KJS West Global Resources Enterprises. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Use', 'Compliance'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

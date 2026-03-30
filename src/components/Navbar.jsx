// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

// 'About' will link to /about page; all others scroll to #section on home
const links = ['Home', 'About', 'Services', 'Projects', 'Markets', 'Compliance', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smart link handler: scrolls on home page, navigates from other pages
  function handleNavClick(e, link) {
    e.preventDefault();
    if (link === 'About') {
      navigate('/about');
      return;
    }
    const sectionId = link === 'Home' ? 'root' : link.toLowerCase();
    if (location.pathname === '/') {
      // Already on home — scroll directly
      if (link === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On another page — navigate home then scroll
      if (link === 'Home') {
        navigate('/');
      } else {
        navigate(`/#${sectionId}`);
        // After navigation, scroll to section
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 99,
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'var(--color-surface)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(15,43,61,0.08)' : 'none',
        borderBottom: scrolled ? 'none' : '1px solid var(--color-border)',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
            onClick={() => handleNavClick({ preventDefault: () => {} }, 'Home')}
          >
            <img
              src={logoImg}
              alt="KJS West Global Logo"
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
            />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.35rem',
              color: 'var(--color-navy)',
              letterSpacing: '-0.01em',
            }}>KJS West </span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.35rem',
              color: 'var(--color-green)',
            }}>Global</span>
          </div>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {links.map(link => (
              <a
                key={link}
                href={link === 'About' ? '/about' : link === 'Home' ? '/' : `/#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  color: link === 'About' && location.pathname === '/about' ? 'var(--color-green)' : 'var(--color-navy)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-green)'}
                onMouseLeave={e => e.currentTarget.style.color = link === 'About' && location.pathname === '/about' ? 'var(--color-green)' : 'var(--color-navy)'}
              >
                {link}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'Contact')}
              style={{
                background: 'var(--color-green)',
                color: '#fff',
                fontFamily: 'var(--font-label)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '10px 22px',
                borderRadius: 4,
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-green-light)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-green)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Request a Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-navy)',
              padding: 4,
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--color-navy)',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: 20,
            right: 24,
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          <FiX size={28} />
        </button>
        {links.map((link, i) => (
          <a
            key={link}
            href={link === 'About' ? '/about' : link === 'Home' ? '/' : `/#${link.toLowerCase()}`}
            onClick={(e) => { handleNavClick(e, link); setOpen(false); }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
              transition: 'color 0.2s',
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-green-light)'}
            onMouseLeave={e => e.currentTarget.style.color = '#fff'}
          >
            {link}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={(e) => { handleNavClick(e, 'Contact'); setOpen(false); }}
          style={{
            background: 'var(--color-green)',
            color: '#fff',
            fontFamily: 'var(--font-label)',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '14px 36px',
            borderRadius: 4,
            textDecoration: 'none',
            marginTop: 8,
          }}
        >
          Request a Quote
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}

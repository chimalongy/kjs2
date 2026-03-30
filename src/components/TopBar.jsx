// TopBar.jsx
import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';

export default function TopBar() {
  return (
    <div style={{
      background: 'var(--color-navy)',
      padding: '8px 0',
      position: 'relative',
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <a
          href="mailto:info@kjswestglobal.com"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-label)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          <FiMail size={12} />
          info@kjswestglobal.com
        </a>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-label)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.6)',
        }}>
          <FiMapPin size={12} />
          West Africa &nbsp;·&nbsp; London &nbsp;·&nbsp; Dubai &nbsp;·&nbsp; Singapore
        </div>
      </div>
    </div>
  );
}

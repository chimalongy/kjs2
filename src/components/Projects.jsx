// Projects.jsx
import React, { useState } from 'react';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    category: 'Oil & Gas Supply',
    title: 'Crude Oil Supply Delivery',
    location: 'West Africa',
    service: 'Upstream Supply',
    status: 'Completed',
    result: 'Delivered 200,000 MT over 18-month contract.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80',
  },
  {
    category: 'Energy Trading',
    title: 'Petroleum Trading Operations',
    location: 'Europe',
    service: 'Energy Trading',
    status: 'Completed',
    result: '$480M offtake agreement executed over 12 months.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80',
  },
  {
    category: 'Infrastructure',
    title: 'Pipeline Development',
    location: 'Middle East',
    service: 'EPC',
    status: 'Completed',
    result: '85km pipeline installed on schedule.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
  },
  {
    category: 'General Contracts',
    title: 'EPC Contract Execution',
    location: 'Nigeria & Ghana',
    service: 'Multi-Sector EPC',
    status: 'Ongoing',
    result: '3 simultaneous contracts across Nigeria & Ghana.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
  },
  {
    category: 'Infrastructure',
    title: 'Terminal Infrastructure Build',
    location: 'West Africa',
    service: 'Terminal Development',
    status: 'Completed',
    result: '60,000 MT storage capacity commissioned.',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=700&q=80',
  },
  {
    category: 'Energy Trading',
    title: 'LNG Trade Facilitation',
    location: 'Gulf Region',
    service: 'LNG Trading',
    status: 'Ongoing',
    result: 'Sovereign-backed LNG supply agreement active.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80',
  },
];

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  const isCompleted = project.status === 'Completed';

  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{
        height: 260,
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.5s ease',
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
      }} />

      {/* Normal state */}
      <div style={{
        padding: '24px 28px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderTop: 'none',
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{
            background: 'rgba(46,125,100,0.1)',
            color: 'var(--color-green)',
            fontFamily: 'var(--font-label)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: 2,
          }}>
            {project.category}
          </span>
          <span style={{
            fontFamily: 'var(--font-label)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: isCompleted ? '#2E7D64' : '#B45309',
            background: isCompleted ? 'rgba(46,125,100,0.08)' : 'rgba(180,83,9,0.08)',
            padding: '4px 10px',
            borderRadius: 2,
          }}>
            {project.status}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--color-navy)',
          marginBottom: 8,
        }}>
          {project.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <FiMapPin size={12} color="var(--color-muted)" />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--color-muted)',
          }}>
            {project.location} · {project.service}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(15,43,61,0.97) 0%, rgba(15,43,61,0.75) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '36px 32px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }}>
        <span style={{
          background: 'var(--color-green)',
          color: '#fff',
          fontFamily: 'var(--font-label)',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: 2,
          display: 'inline-block',
          marginBottom: 16,
          width: 'fit-content',
        }}>
          {project.category}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: 12,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: 24,
          lineHeight: 1.6,
        }}>
          {project.result}
        </p>
        <a href="#contact" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: 'var(--color-green-light)',
          fontFamily: 'var(--font-label)',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          View Details <FiArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge">Portfolio</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            Projects & Deliveries
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-muted)',
            fontSize: '1rem',
            marginTop: 16,
            maxWidth: 500,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            A selection of landmark contracts, supply agreements, and infrastructure projects delivered across three continents.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

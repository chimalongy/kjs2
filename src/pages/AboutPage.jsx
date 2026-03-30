// AboutPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiTarget, FiEye, FiAward, FiGlobe } from 'react-icons/fi';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Staff imports
import imgCEO from '../assets/staffs/Mr Kelvin Israel Director CEO Kjswest Global Resources Enterprises.png';
import imgMD from '../assets/staffs/MD Mrs Glory Israel.png';
import imgHRM from '../assets/staffs/HRM Noppatsorn Sangthong.png';
import imgConstruction from '../assets/staffs/Director in charge of Construction  Marketing DR Iphie Texas.png';
import imgCopper from '../assets/staffs/Director in charge of copper cathode and Copper Concentrate Mr Michael Los Angels US.png';
import imgLogistics from '../assets/staffs/Director in charge of logistics Units Mr Sunny David.png';
import imgProcurement from '../assets/staffs/Dr  Divia Director  procurement Manager Mary land USA.png';
import imgCommodities from '../assets/staffs/Mr Mavin South Africa Director in charge of General Commodities.png';
import imgOilGas from '../assets/staffs/Mr Muhamed Director Oil and Gas Unit kingdom of Bahrain.png';

const leadership = [
  {
    name: 'Mr. Kelvin Israel',
    title: 'Director & CEO',
    location: 'KJS West Global Resources Enterprises',
    image: imgCEO,
    bio: 'A visionary leader with decades of experience in international energy markets, Mr. Kelvin Israel founded KJS West Global with the mission to bridge West African resources with global markets. Under his leadership, the company has grown to operate across 18 countries.',
  },
  {
    name: 'Mrs. Glory Israel',
    title: 'Managing Director (MD)',
    location: 'KJS West Global HQ',
    image: imgMD,
    bio: 'Mrs. Glory Israel oversees the day-to-day operations and strategic management of KJS West Global. Her expertise in corporate governance and energy sector management ensures the company maintains its position at the forefront of global energy trade.',
  },
  {
    name: 'Noppatsorn Sangthong',
    title: 'Head of Human Resources Management',
    location: 'Asia Pacific Region',
    image: imgHRM,
    bio: 'Leading talent acquisition, workforce development, and organizational culture across all KJS West Global offices worldwide, with a focus on building high-performing international teams.',
  },
  {
    name: 'Dr. Iphie',
    title: 'Director — Construction & Marketing',
    location: 'Texas, USA',
    image: imgConstruction,
    bio: 'Based in Texas, Dr. Iphie leads all construction project oversight and marketing strategy for KJS West Global. Her expertise spans infrastructure development, project execution, and international business development.',
  },
  {
    name: 'Mr. Michael',
    title: 'Director — Copper Cathode & Copper Concentrate',
    location: 'Los Angeles, USA',
    image: imgCopper,
    bio: 'Overseeing the sourcing, trading, and distribution of copper cathode and copper concentrate across global markets from our Los Angeles office. Deep expertise in metals commodity trading.',
  },
  {
    name: 'Mr. Sunny David',
    title: 'Director — Logistics Units',
    location: 'Global Operations',
    image: imgLogistics,
    bio: "Responsible for managing the company's logistics infrastructure, supply chain operations, and transport networks that support our global energy and commodities business.",
  },
  {
    name: 'Dr. Divia',
    title: 'Director — Procurement Manager',
    location: 'Maryland, USA',
    image: imgProcurement,
    bio: 'Based in Maryland, Dr. Divia leads all procurement operations for KJS West Global, ensuring optimal sourcing strategies, supplier relationships, and cost-effective acquisition of energy commodities and materials.',
  },
  {
    name: 'Mr. Mavin',
    title: 'Director — General Commodities',
    location: 'South Africa',
    image: imgCommodities,
    bio: 'From our South Africa office, Mr. Mavin manages the trading and distribution of general commodities across Sub-Saharan Africa and international markets, leveraging deep regional expertise.',
  },
  {
    name: 'Mr. Muhamed',
    title: 'Director — Oil & Gas Unit',
    location: 'Kingdom of Bahrain',
    image: imgOilGas,
    bio: 'Heading our Oil & Gas operations from the Kingdom of Bahrain, Mr. Muhamed oversees upstream and downstream energy activities across the Gulf region and extends our presence into international LNG markets.',
  },
];

const values = [
  { icon: <FiTarget size={28} />, title: 'Mission', text: 'To deliver reliable, scalable energy solutions and commodity trading services that power economic growth across Africa and beyond, through integrity, innovation, and global partnerships.' },
  { icon: <FiEye size={28} />, title: 'Vision', text: 'To be the foremost indigenous energy and commodities conglomerate, recognized globally for excellence, transparency, and its transformative impact on emerging markets.' },
  { icon: <FiAward size={28} />, title: 'Our Values', text: 'Integrity in every transaction. Commitment to our partners. Excellence in execution. Transparency with stakeholders. Sustainability at our core.' },
  { icon: <FiGlobe size={28} />, title: 'Global Reach', text: 'Operating across 18 countries with offices in West Africa, USA, UK, South Africa, the Middle East, and Southeast Asia — connecting energy supply with global demand.' },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <TopBar />
      <Navbar />

      {/* Page Hero */}
      <section style={{
        background: 'var(--color-navy)',
        padding: '100px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, transparent 60%, rgba(46,125,100,0.15))', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
            fontFamily: 'var(--font-label)', fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 36, transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-green-light)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <FiArrowLeft size={14} /> Back to Home
          </Link>

          <div className="section-badge" style={{ color: 'var(--color-green-light)' }}>About KJS West Global</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            maxWidth: 700,
            marginTop: 12,
          }}>
            Powering the World's Energy Future
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.8,
            maxWidth: 600,
            marginTop: 24,
          }}>
            KJS West Global Resources Enterprises is a premier Oil & Gas and General Contracting company headquartered in West Africa, with an international footprint spanning 18 countries across Africa, Europe, the Americas, and the Middle East.
          </p>

          {/* Key stats row */}
          <div style={{ display: 'flex', gap: 48, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              { value: '18+', label: 'Countries Active' },
              { value: '$3.5B', label: 'Volume Traded' },
              { value: '9', label: 'Leadership Offices' },
              { value: '20+', label: 'Years Experience' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-green-light)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ padding: '100px 24px', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
          <div className="reveal">
            <div className="section-badge">Our Story</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 24, lineHeight: 1.2 }}>
              Built to Bridge Africa's Resources with the World
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', lineHeight: 1.85, marginBottom: 20, fontSize: '0.97rem' }}>
              KJS West Global Resources Enterprises was founded with a singular purpose: to create a world-class indigenous energy company capable of competing at the highest global levels. Beginning in West Africa's oil fields, we have grown into a diversified commodity trading and general contracting powerhouse.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', lineHeight: 1.85, marginBottom: 20, fontSize: '0.97rem' }}>
              Through sovereign partnerships and deep government relationships, we have earned access to upstream production assets and secured long-term supply agreements that underpin our $3.5 billion trading volume. Our operations span crude oil, petroleum products, LNG, copper cathode, and general commodities.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', lineHeight: 1.85, fontSize: '0.97rem' }}>
              With offices across Nigeria, Ghana, the USA, UK, South Africa, Bahrain, Singapore, and beyond, we bring localised expertise to every market we operate in — combining the agility of a regional operator with the scale of a global enterprise.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
              {['Sovereign-backed upstream access', 'Multi-continent commodity trading', 'EPC and infrastructure contracts', 'LNG facilitation across Gulf & Asia'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <FiCheckCircle size={16} color="var(--color-green)" />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.93rem', color: 'var(--color-navy)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
                alt="KJS West Global operations"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: 32, left: -24,
              background: 'var(--color-navy)', color: '#fff',
              padding: '20px 28px', borderRadius: 8,
              boxShadow: '0 12px 40px rgba(15,43,61,0.25)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>2004</div>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-green-light)', textTransform: 'uppercase', marginTop: 4 }}>Founded</div>
            </div>
            <div style={{ position: 'absolute', top: -16, right: -16, width: 64, height: 64, background: 'var(--color-green)', borderRadius: 4, zIndex: -1 }} />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section style={{ padding: '100px 24px', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-badge">Our Foundation</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-navy)' }}>
              Mission, Vision & Values
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {values.map((v, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card-lift`} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 10, padding: '40px 32px',
                borderTop: '3px solid var(--color-green)',
              }}>
                <div style={{ color: 'var(--color-green)', marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 14 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding: '100px 24px', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-badge">Our People</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 16 }}>
              Leadership Team
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', fontSize: '1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
              A world-class team of industry leaders, each bringing deep expertise and regional authority to drive KJS West Global's global mission.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 36 }}>
            {leadership.map((person, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(15,43,61,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Photo */}
                <div style={{ width: '100%', height: 300, overflow: 'hidden', position: 'relative', background: 'var(--color-navy)' }}>
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(15,43,61,0.85) 0%, transparent 100%)',
                    height: '50%',
                  }} />
                </div>

                {/* Info */}
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6 }}>
                    {person.name}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-label)', fontSize: '0.7rem',
                    fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--color-green)', marginBottom: 6,
                  }}>
                    {person.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-muted)', marginBottom: 16 }}>
                    📍 {person.location}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px', background: 'var(--color-navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff', marginBottom: 20 }}>
            Partner With a Global Leader
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 40 }}>
            Get in touch with our team today to explore how KJS West Global can support your energy and commodity needs.
          </p>
          <Link to="/#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--color-green)', color: '#fff',
            fontFamily: 'var(--font-label)', fontSize: '0.82rem',
            fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '15px 36px', borderRadius: 4, textDecoration: 'none',
            transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-green-light)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-green)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  );
}

// Contact.jsx
import React, { useState } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiSend } from 'react-icons/fi';

const subjects = [
  'Crude Oil Supply',
  'Energy Trading',
  'General Contracting',
  'Infrastructure & EPC',
  'Partnership Inquiry',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-badge">Get In Touch</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-navy)',
          }}>
            Contact Us
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Form */}
          <div className="reveal" style={{
            background: 'var(--color-surface)',
            borderRadius: 10,
            padding: '48px 44px',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 24px rgba(15,43,61,0.06)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(46,125,100,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: 'var(--color-green)',
                }}>
                  <FiSend size={26} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  marginBottom: 12,
                }}>Message Sent</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}>
                  Thank you for reaching out. Our team will respond within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-row">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@company.com' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{
                        display: 'block',
                        fontFamily: 'var(--font-label)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-navy)',
                        marginBottom: 8,
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={form[field.name]}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 5,
                          border: '1.5px solid var(--color-border)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          color: 'var(--color-navy)',
                          background: 'var(--color-bg)',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--color-green)'}
                        onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-row">
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'var(--font-label)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-navy)',
                      marginBottom: 8,
                    }}>Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 5,
                        border: '1.5px solid var(--color-border)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--color-navy)',
                        background: 'var(--color-bg)',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-green)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'var(--font-label)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-navy)',
                      marginBottom: 8,
                    }}>Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 5,
                        border: '1.5px solid var(--color-border)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: form.subject ? 'var(--color-navy)' : 'var(--color-muted)',
                        background: 'var(--color-bg)',
                        outline: 'none',
                        appearance: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-green)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-navy)',
                    marginBottom: 8,
                  }}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Describe your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: 5,
                      border: '1.5px solid var(--color-border)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--color-navy)',
                      background: 'var(--color-bg)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-green)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--color-green)',
                    color: '#fff',
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '15px 28px',
                    borderRadius: 5,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--color-green-light)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--color-green)'}
                >
                  Send Message <FiSend size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="reveal reveal-delay-2">
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--color-navy)',
              marginBottom: 8,
            }}>
              Let's Connect
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--color-muted)',
              lineHeight: 1.7,
              marginBottom: 40,
            }}>
              Our team is ready to discuss your energy supply, trading, or infrastructure requirements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: 'rgba(46,125,100,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-green)',
                  flexShrink: 0,
                }}>
                  <FiMail size={18} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    marginBottom: 4,
                  }}>Email</div>
                  <a href="mailto:info@kjswestglobal.com" style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: 'var(--color-navy)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                  }}>
                    info@kjswestglobal.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: 'rgba(46,125,100,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-green)',
                  flexShrink: 0,
                }}>
                  <FiMapPin size={18} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    marginBottom: 4,
                  }}>Headquarters</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: 'var(--color-navy)',
                    fontSize: '0.95rem',
                  }}>
                    West Africa Regional Office
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-muted)',
                    fontSize: '0.85rem',
                    marginTop: 6,
                  }}>
                    Satellite Offices: London · Dubai · Singapore
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'var(--color-border)', margin: '36px 0' }} />

            <div>
              <div style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginBottom: 16,
              }}>Follow Us</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                  { icon: <FiTwitter size={18} />, label: 'Twitter' },
                  { icon: <FiInstagram size={18} />, label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      border: '1.5px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-navy)',
                      textDecoration: 'none',
                      transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-green)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = 'var(--color-green)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--color-navy)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

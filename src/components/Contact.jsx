import React, { useEffect, useRef } from 'react';
import './Contact.css';

const contacts = [
  { icon: '👤', label: 'Convenor',  name: 'Mr. Buddhadev Sasmal',    detail: '📞 9382048960',     href: 'tel:+919382048960' },
  { icon: '✉️', label: 'Email',     name: 'Official Email',           detail: 'mcccon@gmail.com',  href: 'mailto:mcccon@gmail.com' },
  { icon: '🌐', label: 'Website',   name: 'College Website',          detail: 'www.mcconline.org.in', href: 'https://www.mcconline.org.in' },
];

const Contact = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.12}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="section section--alt" ref={ref}>
      <div className="container">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section__label" style={{ justifyContent: 'center' }}>Get in Touch</p>
          <h2 className="section__title">Contact Us</h2>
          <span className="gold-rule" style={{ margin: '0 auto 1rem' }} />
          <p className="section__subtitle" style={{ margin: '0 auto' }}>
            Have questions about the seminar, paper submission, or registration? We're here to help.
          </p>
        </div>

        <div className="contact__layout">
          {/* ── Contact Cards ── */}
          <div className="contact__cards">
            {contacts.map(({ icon, label, name, detail, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact__card card reveal">
                <div className="contact__card-icon">{icon}</div>
                <div className="contact__card-body">
                  <span className="contact__card-label">{label}</span>
                  <strong className="contact__card-name">{name}</strong>
                  <span className="contact__card-detail">{detail}</span>
                </div>
                <span className="contact__card-arrow">→</span>
              </a>
            ))}
          </div>

          {/* ── Venue Map Block ── */}
          <div className="contact__venue card reveal">
            <div className="contact__venue-header">
              <span className="contact__venue-icon">📍</span>
              <div>
                <h3>Venue</h3>
                <p>A. P. J. Abdul Kalam Memorial Hall</p>
              </div>
            </div>
            <div className="contact__venue-address">
              <strong>Midnapore City College</strong>
              <span>Bhadutala, Midnapore, Paschim Medinipur</span>
              <span>West Bengal — 721129, India</span>
            </div>
            <div className="contact__venue-route">
              <div className="contact__route-item">
                <span className="contact__route-icon">🚆</span>
                <span><strong>6 km</strong> from Midnapore Railway Station</span>
              </div>
              <div className="contact__route-item">
                <span className="contact__route-icon">🚌</span>
                <span><strong>5 km</strong> from Midnapore Central Bus Stand via Keranichati</span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Midnapore+City+College"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ marginTop: '1.5rem', width: '100%' }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

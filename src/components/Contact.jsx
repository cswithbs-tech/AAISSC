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

        <div className="contact__split-card card reveal">
          
          {/* ── Left: Contact Details ── */}
          <div className="contact__split-left">
            <h3 className="contact__split-title">Get in Touch</h3>
            <p className="contact__split-desc">Have questions about the seminar, paper submission, or registration? We're here to help.</p>
            
            <ul className="contact__list">
              {contacts.map(({ icon, label, name, detail, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="contact__list-item">
                    <div className="contact__list-icon">{icon}</div>
                    <div className="contact__list-text">
                      <span className="contact__list-label">{label}</span>
                      <strong className="contact__list-name">{name}</strong>
                      <span className="contact__list-detail">{detail}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Map & Venue ── */}
          <div className="contact__split-right">
            <div className="contact__map-container">
              <iframe 
                src="https://maps.google.com/maps?q=Midnapore%20City%20College,%20Bhadutala,%20West%20Bengal&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Midnapore City College Map"
                className="contact__map-iframe"
              ></iframe>
            </div>
            
            <div className="contact__venue-info">
              <div className="contact__venue-main">
                <div className="contact__venue-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <strong>A. P. J. Abdul Kalam Memorial Hall</strong>
                  <span>Midnapore City College, Bhadutala, Paschim Medinipur, WB — 721129</span>
                </div>
              </div>
              
              <div className="contact__venue-routes">
                <div className="contact__route-badge">
                  <span className="route-icon">🚆</span> <span className="route-text"><strong>6 km</strong> from Midnapore Railway Station</span>
                </div>
                <div className="contact__route-badge">
                  <span className="route-icon">🚌</span> <span className="route-text"><strong>5 km</strong> from Midnapore Central Bus Stand</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

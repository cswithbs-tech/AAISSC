import React, { useEffect, useRef } from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.12}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="sponsors" className="section" ref={ref}>
      <div className="container">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section__label" style={{ justifyContent: 'center' }}>Supporters</p>
          <h2 className="section__title">Sponsors &amp; Partners</h2>
          <span className="gold-rule" style={{ margin: '0 auto 1.5rem' }} />
        </div>

        <div className="sponsors__stack">
          {/* ── Technical Sponsor (Large Horizontal) ── */}
          <div className="sponsor-card--large reveal">
            <div className="sponsor-card__left">
              <div className="sponsor-card__badge">Technical Sponsor</div>
              <div className="sponsor-card__logo-glow">
                <img src="/IEEE-CS_LogoTM-orange.png" alt="IEEE Computer Society" />
              </div>
            </div>
            <div className="sponsor-card__right">
              <h3>IEEE Computer Society</h3>
              <h4>Kolkata Section Chapter</h4>
              <p>
                This seminar is technically sponsored by the IEEE Computer Society — Kolkata Section, 
                a premier professional association for the global computing community committed to advancing 
                technology for the benefit of humanity.
              </p>
            </div>
          </div>

          {/* ── Organiser (Compact Horizontal) ── */}
          <div className="sponsor-card--compact reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="sponsor-card__left">
              <div className="sponsor-card__badge-alt">Organised By</div>
              <div className="sponsor-card__logo-glow-alt">
                <img src="/city_college_logo.png" alt="Midnapore City College" />
              </div>
            </div>
            <div className="sponsor-card__right">
              <h3>Department of Pure & Applied Sciences<br/>(Computer Science)</h3>
              <h4>MIDNAPORE CITY COLLEGE</h4>
              <p>
                Bhadutala, Midnapore, Paschim Medinipur<br />
                West Bengal — 721129
              </p>
              <a href="https://www.mcconline.org.in" target="_blank" rel="noopener noreferrer" className="sponsor-link-alt">
                www.mcconline.org.in →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;

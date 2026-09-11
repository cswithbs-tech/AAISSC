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

        {/* ── Technical Sponsor ── */}
        <div className="sponsors__featured card reveal">
          <div className="sponsors__featured-badge">Technical Sponsor</div>
          <div className="sponsors__ieee-logo">
            <div className="sponsors__ieee-icon">IEEE</div>
            <div className="sponsors__ieee-text">
              <strong>IEEE Computer Society</strong>
              <span>Kolkata Section Chapter</span>
            </div>
          </div>
          <p className="sponsors__ieee-desc">
            This seminar is technically sponsored by the IEEE Computer Society — Kolkata Section, 
            a premier professional association for the global computing community committed to advancing 
            technology for the benefit of humanity.
          </p>
        </div>

        {/* ── Organiser ── */}
        <div className="sponsors__org reveal">
          <div className="sponsors__org-block card">
            <div className="sponsors__org-icon">🏛️</div>
            <h3>Organised By</h3>
            <strong>Department of Computer Science</strong>
            <p>Midnapore City College<br />Bhadutala, Midnapore, Paschim Medinipur<br />West Bengal — 721129</p>
            <a href="https://www.mcconline.org.in" target="_blank" rel="noopener noreferrer" className="sponsors__link">
              www.mcconline.org.in →
            </a>
          </div>
          <div className="sponsors__org-block card">
            <div className="sponsors__org-icon">🤝</div>
            <h3>Become a Sponsor</h3>
            <p>
              We invite industry partners, research labs, and academic institutions to support AAISSC 2026. 
              Your sponsorship helps promote cutting-edge AI research and provides visibility to a targeted audience 
              of academicians, researchers, and students.
            </p>
            <a href="mailto:mcccon@gmail.com" className="btn btn--primary" style={{ marginTop: '1rem' }}>
              Contact for Sponsorship
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;

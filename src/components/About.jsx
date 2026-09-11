import React, { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { num: '2', lbl: 'Days' },
  { num: '7+', lbl: 'Speakers' },
  { num: '3', lbl: 'Categories' },
  { num: '100+', lbl: 'Expected Delegates' },
];

const About = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.12}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">

        {/* ── Header ── */}
        <div className="about__header reveal">
          <p className="section__label">About the Seminar</p>
          <span className="gold-rule" />
        </div>

        {/* ── Two column text ── */}
        <div className="about__grid">
          <div className="about__card card reveal from-left">
            <div className="about__card-icon">🎯</div>
            <h3>Rationale</h3>
            <p>
              Artificial Intelligence has been recognized as one of the most groundbreaking technologies of the 21st century, transforming the paradigm of designing, optimizing, and implementing computing systems. With the emergence of data-driven technologies, the need for sustainable and smart computing solutions has become more urgent than ever.
            </p>
            <p>
              This Two-Day National Seminar provides a common platform for academicians, researchers, industry professionals, and students to present the latest developments, applications, and future trends of AI-based sustainable computing systems.
            </p>
          </div>

          <div className="about__card card reveal from-right">
            <div className="about__card-icon">🌿</div>
            <h3>Relevance &amp; Thrust Areas</h3>
            <p>
              AI has become an important facilitator of sustainable and smart computing — improving system efficiency, simplifying computational complexity, and enabling intelligent automation. Advanced AI methods like machine learning, deep learning, optimization algorithms, and intelligent data analytics are being used to design energy-efficient computing systems.
            </p>
            <p>
              The seminar is aligned with major national initiatives: <strong>Digital India</strong>, <strong>Green Computing</strong>, <strong>Smart Systems</strong>, and the <strong>UN Sustainable Development Goals (SDGs)</strong>, all of which focus on responsible use of technology.
            </p>
          </div>
        </div>

        {/* ── Full Width About College Card ── */}
        <div className="about__card card reveal" style={{ marginTop: '2.5rem' }}>
          <h3>About Midnapore City College</h3>
          <p>
            Midnapore City College (MCC), located in the serene environment of Bhadutala, Paschim Medinipur, is a premier educational institution dedicated to providing quality, value-based higher education. Established by the Morine Human Resource Development Organization and affiliated with Vidyasagar University, the college offers a diverse array of undergraduate and postgraduate programs. With its commitment to holistic development and innovative learning, MCC fosters a vibrant culture of academic excellence and research.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;

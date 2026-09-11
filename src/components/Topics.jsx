import React, { useEffect, useRef } from 'react';
import './Topics.css';

const themes = [
  { icon: '🤖', title: 'AI & Machine Learning',     desc: 'Deep learning, neural networks, reinforcement learning, NLP' },
  { icon: '🌱', title: 'Sustainable Computing',      desc: 'Green algorithms, energy-efficient hardware & software' },
  { icon: '🏙️', title: 'Smart Computing Systems',   desc: 'IoT architectures, edge & fog computing, smart grids' },
  { icon: '⚡', title: 'Energy-Efficient AI',        desc: 'Low-power ML models, neuromorphic computing' },
  { icon: '📊', title: 'Data Analytics & DSS',       desc: 'Big data pipelines, decision support, predictive analytics' },
  { icon: '☁️', title: 'Cloud, Edge & Fog AI',       desc: 'Distributed inference, serverless AI, cloud orchestration' },
  { icon: '📡', title: 'IoT & Smart Systems',        desc: 'Sensor fusion, embedded AI, cyber-physical systems' },
  { icon: '🛡️', title: 'Responsible & Ethical AI',  desc: 'Fairness, explainability, bias mitigation, AI governance' },
];

const guidelines = [
  { label: 'Format',    value: 'MS Word — Times New Roman, 1.5 spacing' },
  { label: 'Title',     value: 'ALL CAPS, Bold, 14pt' },
  { label: 'Author(s)', value: 'Bold, 12pt; Affiliation in italics' },
  { label: 'Length',    value: 'Abstract ≤ 250 words' },
  { label: 'Submit to', value: 'mcccon@gmail.com' },
  { label: 'Last Date', value: '05 September 2026' },
];

const Topics = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.08}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="topics" className="section section--alt" ref={ref}>
      <div className="container">

        <div className="reveal">
          <p className="section__label">Call for Papers</p>
          <h2 className="section__title">Topics &amp; Sub-Themes</h2>
          <span className="gold-rule" />
          <p className="section__subtitle">
            We welcome original research papers on AI applications in sustainable and smart computing covering the following areas.
          </p>
        </div>

        {/* ── Theme Cards Grid ── */}
        <div className="topics__grid">
          {themes.map(({ icon, title, desc }, i) => (
            <div key={i} className="topics__card card reveal">
              <div className="topics__card-icon">{icon}</div>
              <h3 className="topics__card-title">{title}</h3>
              <p className="topics__card-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Objectives ── */}
        <div className="topics__objectives reveal">
          <div className="topics__obj-text">
            <h3>Seminar Objectives</h3>
            <ul>
              <li>Understand fundamental concepts and advancements in AI &amp; Sustainable Computing.</li>
              <li>Explore AI-enabled smart computing paradigms and intelligent system architectures.</li>
              <li>Provide a platform to present innovative research findings and ideas.</li>
              <li>Discuss current challenges, ethical considerations, and future directions.</li>
            </ul>
          </div>

          <div className="topics__guidelines">
            <h3>Submission Guidelines</h3>
            <div className="topics__guide-list">
              {guidelines.map(({ label, value }) => (
                <div key={label} className="topics__guide-row">
                  <span className="topics__guide-label">{label}</span>
                  <span className="topics__guide-value">{value}</span>
                </div>
              ))}
            </div>
            <a href="mailto:mcccon@gmail.com" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
              Submit Abstract
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Topics;

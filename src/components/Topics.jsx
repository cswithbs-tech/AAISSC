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

        {/* ── Top: Title (as it is) ── */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section__label">Call for Papers</p>
          <h2 className="section__title">Topics &amp; Sub-Themes</h2>
          <span className="gold-rule" />
        </div>

        {/* ── Split Layout ── */}
        <div className="topics__split">
          
          {/* ── Left Column: Intro Text, Objectives, Guidelines ── */}
          <div className="topics__left-col">
            
            <div className="topics__intro reveal">
              <p>
                We welcome original research papers on AI applications in sustainable and smart computing. 
                This seminar provides a premier interdisciplinary platform for researchers, practitioners, 
                and educators to present and discuss the most recent innovations, trends, and concerns, 
                as well as practical challenges encountered and solutions adopted in the fields of Smart Computing.
              </p>
            </div>

            <div className="topics__objectives-card reveal">
              <h3>Seminar Objectives</h3>
              <ul className="topics__obj-list">
                <li>Understand fundamental concepts and advancements in AI &amp; Sustainable Computing.</li>
                <li>Explore AI-enabled smart computing paradigms and intelligent system architectures.</li>
                <li>Provide a platform to present innovative research findings and ideas.</li>
                <li>Discuss current challenges, ethical considerations, and future directions.</li>
              </ul>
            </div>

            
          </div>

          {/* ── Right Column: The Topics List ── */}
          <div className="topics__right-col">
            <div className="topics__list">
              {themes.map(({ title, desc }, i) => (
                <div key={i} className="topics__list-item reveal">
                  <h3 className="topics__list-title">{title}</h3>
                  <p className="topics__list-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Full Width: Info & Submission Card ── */}
        <div className="topics__info-card reveal" style={{ marginTop: '4rem' }}>
          
          <div className="topics__info-section">
            <h3>Who Can Attend?</h3>
            <ul className="topics__attend-list">
              <li>Faculty members from technical institutions.</li>
              <li>Research scholars (PhD, M.Tech).</li>
              <li>UG/PG students of engineering &amp; science.</li>
              <li>Industry professionals &amp; practitioners.</li>
            </ul>
          </div>

          <hr className="topics__divider" />

          <div className="topics__info-section">
            <h3>Guidelines of Abstract Submission</h3>
            <p className="topics__info-highlight">
              Abstract for oral and poster presentation (within 250 words) may be sent by email to: <a href="mailto:mcccon@gmail.com" className="email-link">mcccon@gmail.com</a>
            </p>
            
            <h4 className="topics__info-subheading">Formatting Requirements</h4>
            <ul className="topics__req-list">
              <li><strong>Software:</strong> MS Word</li>
              <li><strong>Font:</strong> Times New Roman, 1.5 spacing</li>
              <li><strong>Title:</strong> All capital, bold, 14pt</li>
              <li><strong>Author(s):</strong> Bold, 12pt</li>
              <li><strong>Address:</strong> 11pt</li>
              <li><strong>Abstract body:</strong> 12pt, complete sentences, active verbs, past tense</li>
              <li><strong>Keywords:</strong> 6 to 8 (12pt)</li>
            </ul>

            <h3 style={{ marginTop: '2rem' }}>Guidelines of Poster Presentation</h3>
            <p className="topics__info-highlight">Poster size will be strict <strong>3ft. x 4ft.</strong> (Width/Height).</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Topics;

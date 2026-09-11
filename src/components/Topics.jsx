import React from 'react';
import Reveal from './Reveal';
import './Topics.css';

const Topics = () => {
  const subThemes = [
    "AI & Machine Learning",
    "Sustainable Computing",
    "Smart Computing Systems",
    "Energy-Efficient AI",
    "Data Analytics & DSS",
    "Cloud, Edge & Fog AI",
    "IoT & Smart Systems",
    "Responsible & Ethical AI"
  ];

  return (
    <section id="topics" className="section section-alt">
      <Reveal>
        <h2 className="section-title">Call For Papers</h2>
      </Reveal>
      
      <div className="bento-grid">
        <div className="bento-wrapper bento-large">
          <Reveal delay={100} className="h-100">
            <div className="bento-item glass h-100">
              <div className="bento-content">
                <h3>Objectives</h3>
                <ul>
                  <li>Understand fundamental concepts and recent advancements in AI and Sustainable Computing.</li>
                  <li>Explore AI-enabled smart computing paradigms and intelligent system architectures.</li>
                  <li>Provide a platform to present innovative ideas and research findings.</li>
                  <li>Discuss current challenges, ethical considerations, and future directions.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="bento-wrapper bento-tall">
          <Reveal delay={200} className="h-100">
            <div className="bento-item glass-dark h-100">
              <div className="bento-content">
                <h3 style={{color: 'var(--accent-color)'}}>Sub-Themes</h3>
                <div className="bento-tags">
                  {subThemes.map((theme, i) => (
                    <span key={i} className="bento-tag">{theme}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="bento-wrapper bento-wide">
          <Reveal delay={300} className="h-100">
            <div className="bento-item glass h-100">
              <div className="bento-content">
                <h3>Submission Guidelines</h3>
                <p>Email abstracts (within 250 words) to: <strong style={{color: 'var(--secondary-color)'}}>mcccon@gmail.com</strong></p>
                <div className="guideline-mini-grid">
                  <div><strong>Format:</strong> MS Word, Times New Roman, 1.5 spacing.</div>
                  <div><strong>Title:</strong> All capital, bold, 14pt.</div>
                  <div><strong>Author(s):</strong> Bold, 12pt.</div>
                  <div><strong>Abstract:</strong> Past tense, 12pt.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Topics;

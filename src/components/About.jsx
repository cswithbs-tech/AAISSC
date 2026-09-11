import React from 'react';
import Reveal from './Reveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-bg-shape"></div>
      <div className="about-container">
        <Reveal direction="up" delay={100}>
          <h2 className="section-title">About the Seminar</h2>
        </Reveal>
        
        <div className="about-grid">
          <Reveal direction="left" delay={200}>
            <div className="about-card glass">
              <h3>Rationale</h3>
              <p>
                Artificial Intelligence (AI) has been recognized as one of the most groundbreaking technologies of the 21st century, which has changed the paradigm of designing, optimizing, and implementing computing systems. With the emergence of data-driven technologies, the need for sustainable and smart computing solutions has become more urgent than ever before.
              </p>
              <p>
                The Two-Day National Seminar on Applications of Artificial Intelligence in Sustainable and Smart Computing aims to provide a common platform to academicians, researchers, industry professionals, and students to present the latest developments, applications, and future trends of AI-based sustainable computing systems.
              </p>
            </div>
          </Reveal>
          
          <Reveal direction="right" delay={400}>
            <div className="about-card glass">
              <h3>Relevance to Thrust Areas</h3>
              <p>
                AI has recently turned out to be an important facilitator of sustainable and smart computing by improving system efficiency, simplifying computational complexity, and enabling intelligent automation. Advanced AI methods like machine learning, deep learning, optimization algorithms, and intelligent data analytics are being increasingly used for designing energy-efficient computing systems.
              </p>
              <p>
                The proposed seminar is largely relevant to the major national focus areas and initiatives such as Digital India, Green Computing, Smart Systems, and the Sustainable Development Goals (SDGs), which all focus on the responsible use of technology and sustainable development.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;

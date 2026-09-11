import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-mesh">
      <div className="hero-content">
        <p className="hero-subtitle float-anim">Welcome to the Future of Computing</p>
        <h1 className="hero-title">
          <span className="text-glow">AAISSC 2026</span>
        </h1>
        <h2 className="hero-full-title">
          Applications of Artificial Intelligence in Sustainable and Smart Computing
        </h2>
        
        <div className="hero-meta glass">
          <div className="meta-item">
            <span className="icon">📅</span>
            <p>Sept 24-25, 2026</p>
          </div>
          <div className="meta-item">
            <span className="icon">📍</span>
            <p>Midnapore City College</p>
          </div>
        </div>
        
        <div className="hero-actions">
          <a href="#registration" className="btn">Register Now</a>
          <a href="#topics" className="btn btn-outline">Call for Papers</a>
        </div>
        
        <div className="hero-sponsors">
          <p>Technically Sponsored By</p>
          <div className="sponsor-glass">IEEE COMPUTER SOCIETY Kolkata Section Chapter</div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
    </section>
  );
};

export default Hero;

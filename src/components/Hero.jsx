import React from 'react';
import './Hero.css';
import heroImage from '../assets/Green Sprout on a Circuit Board.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      
      {/* ── Ambient Glowing Background ── */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
      </div>

      <div className="hero__inner container">
        {/* ── Left Content: Headline & Details ── */}
        <div className="hero__main">
          <div className="hero__sponsor-badge">
            <span className="sponsor-badge-text">Sponsored by</span>
            <strong className="sponsor-badge-highlight">IEEE Computer Society</strong>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-accent">AAISSC</span> 2026
          </h1>

          <h2 className="hero__subtitle">
            A two-day National seminar on
          </h2>

          <p className="hero__theme">
            <strong>Applications of Artificial Intelligence in Sustainable and Smart Computing</strong>
          </p>
          
          <div className="hero__meta-details">
            <div className="hero__meta-item">
              <span className="hero__meta-label">Date:</span>
              <span className="hero__meta-value">24<sup>th</sup> &amp; 25<sup>th</sup> September, 2026</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Venue:</span>
              <span className="hero__meta-value">A. P. J. Abdul Kalam Memorial Hall</span>
              
            </div>
          </div>

          <div className="hero__actions">
            <a href="#registration" className="btn btn--primary">Register Now</a>
          </div>
        </div>

        {/* ── Right Content: Visual/Brain Image ── */}
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            {/* Glowing backdrop for the image */}
            <div className="hero__image-glow"></div>
            
            {/* The actual image */}
            <img src={heroImage} alt="AI Brain Neural Network" className="hero__brain-img" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <span>Scroll to Explore</span>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

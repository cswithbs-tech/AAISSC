import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      
      {/* ── Premium SVG Background Layers ── */}
      <div className="hero__bg">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="hero__bg-svg">
          <defs>
            <linearGradient id="gradBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#480914" />
              <stop offset="100%" stopColor="#2f030a" />
            </linearGradient>

            <linearGradient id="gradShard" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5a422" />
              <stop offset="100%" stopColor="#d65717" />
            </linearGradient>

            <linearGradient id="gradRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d14d15" />
              <stop offset="40%" stopColor="#e55519" />
              <stop offset="100%" stopColor="#e6a120" />
            </linearGradient>
            
            <linearGradient id="gradRibbonHigh" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e6a120" />
              <stop offset="100%" stopColor="#f3c242" />
            </linearGradient>
          </defs>

          {/* Base */}
          <rect width="100%" height="100%" fill="url(#gradBase)" />

          {/* Top Right Geometric Shards */}
          <polygon points="1200,0 1500,0 1920,300 1920,500" fill="url(#gradShard)" opacity="0.9" />
          <polygon points="1400,0 1920,0 1920,200" fill="#750c18" opacity="0.8" />
          <polygon points="1600,0 1920,0 1920,100" fill="#d65717" opacity="0.7" />

          {/* Circuit Board Traces (Top Center) */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none">
            <path d="M 800 -10 L 800 150 L 950 300 L 1150 300" />
            <circle cx="1150" cy="300" r="3" fill="rgba(255,255,255,0.06)" />
            
            <path d="M 850 -10 L 850 130 L 1000 280 L 1200 280 L 1250 330" />
            <circle cx="1250" cy="330" r="3" fill="rgba(255,255,255,0.06)" />
            
            <path d="M 900 -10 L 900 100 L 1050 250 L 1200 250" />
            <rect x="1197" y="247" width="6" height="6" fill="rgba(255,255,255,0.06)" />

            <path d="M 950 150 L 1100 150 L 1150 200" />
            <circle cx="1150" cy="200" r="3" fill="rgba(255,255,255,0.06)" />
          </g>

          {/* Background Dark Red Sweep (Under the orange) */}
          <path d="M -100 600 C 500 500, 1200 300, 2000 100 L 2000 500 C 1200 600, 500 800, -100 900 Z" fill="#600916" />

          {/* The Main Orange Ribbon */}
          <path d="M -100 900 C 600 950, 1300 650, 2000 400 L 2000 650 C 1300 850, 600 1150, -100 1100 Z" fill="url(#gradRibbon)" />
          
          {/* Ribbon Inner Highlight Line */}
          <path d="M -100 900 C 600 950, 1300 650, 2000 400 L 2000 415 C 1300 665, 600 965, -100 915 Z" fill="url(#gradRibbonHigh)" opacity="0.6" />

          {/* Bottom Dark Red Sweep */}
          <path d="M 400 1100 C 1000 1050, 1500 850, 2000 600 L 2000 1100 Z" fill="#1d0104" />
          <path d="M 800 1100 C 1300 1050, 1700 900, 2000 700 L 2000 1100 Z" fill="#120002" />

          {/* Circuit Traces (Bottom Left) */}
          <g stroke="rgba(232, 160, 32, 0.08)" strokeWidth="1.5" fill="none">
            <path d="M -10 600 L 150 600 L 300 750 L 300 950 L 400 1050" />
            <circle cx="400" cy="1050" r="3" fill="rgba(232, 160, 32, 0.08)" />
            
            <path d="M -10 650 L 100 650 L 250 800 L 250 900 L 300 950" />
            <rect x="297" y="947" width="6" height="6" fill="rgba(232, 160, 32, 0.08)" />

            <path d="M 150 800 L 200 800 L 250 850" />
            <circle cx="250" cy="850" r="3" fill="rgba(232, 160, 32, 0.08)" />
          </g>
        </svg>

        <div className="hero__bg-dots hero__bg-dots--tl" />
        <div className="hero__bg-dots hero__bg-dots--br" />
        <div className="hero__bg-glow" />
      </div>

      <div className="hero__inner container">
        {/* ── Left Content ── */}
        <div className="hero__content">
          <div className="hero__badge">🏛️ National Seminar — 2026</div>

          <h1 className="hero__title">
            <span className="hero__title-accent">AAISSC</span>{' '}
            <span className="hero__title-year">2026</span>
          </h1>

          <p className="hero__tagline">
            Applications of Artificial Intelligence in<br />
            <strong>Sustainable and Smart Computing</strong>
          </p>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-icon">📅</span>
              <div>
                <span className="hero__meta-label">Date</span>
                <span className="hero__meta-value">September 24–25, 2026</span>
              </div>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-icon">📍</span>
              <div>
                <span className="hero__meta-label">Venue</span>
                <span className="hero__meta-value">A.P.J. Abdul Kalam Hall, Midnapore City College</span>
              </div>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#registration" className="btn btn--primary">Register Now</a>
            <a href="#topics"       className="btn btn--outline">Call for Papers</a>
          </div>

          <div className="hero__sponsor">
            <span>Technically Sponsored by</span>
            <strong>IEEE Computer Society — Kolkata Section</strong>
          </div>
        </div>

        {/* ── Right: Brain Image Card ── */}
        <div className="hero__visual">
          <div className="hero__visual-ring hero__visual-ring--outer" />
          <div className="hero__visual-ring hero__visual-ring--inner" />
          <div className="hero__visual-card">
            <img src="/brain.jpg" alt="AI Neural Network" className="hero__brain-img" />
          </div>
          <div className="hero__visual-stat hero__visual-stat--tl">
            <span className="hero__stat-num">7+</span>
            <span className="hero__stat-lbl">Expert Speakers</span>
          </div>
          <div className="hero__visual-stat hero__visual-stat--br">
            <span className="hero__stat-num">IEEE</span>
            <span className="hero__stat-lbl">Sponsored</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

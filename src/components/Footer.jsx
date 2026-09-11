import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">AI</div>
              <div>
                <strong>AAISSC 2026</strong>
                <span>Midnapore City College</span>
              </div>
            </div>
            <p className="footer__tagline">
              Two-Day National Seminar on Applications of Artificial Intelligence 
              in Sustainable and Smart Computing.
            </p>
            <div className="footer__ieee">
              <span>Technically Sponsored by</span>
              <strong>IEEE Computer Society — Kolkata Section</strong>
            </div>
          </div>

          <div className="footer__links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#topics">Call for Papers</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#registration">Register</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919382048960">📞 +91 9382048960</a></li>
              <li><a href="mailto:mcccon@gmail.com">✉️ mcccon@gmail.com</a></li>
              <li><a href="https://www.mcconline.org.in" target="_blank" rel="noopener noreferrer">🌐 mcconline.org.in</a></li>
            </ul>
            <div className="footer__venue-mini">
              <p>Bhadutala, Midnapore, Paschim Medinipur</p>
              <p>West Bengal — 721129, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} Midnapore City College. All rights reserved.</p>
          <p>
            Designed &amp; built by{' '}
            <a href="https://amarnathbera.in" target="_blank" rel="noopener noreferrer">
              Amarnath Bera
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__logos">
              <img src="/city_college_logo.png" alt="City College Logo" className="footer__logo-img footer__logo-img--college" />
              <div className="footer__logo-divider" />
              <img src="/AAISSC_logo.jpeg" alt="AAISSC Logo" className="footer__logo-img footer__logo-img--event" />
            </div>
            <div className="footer__brand-text">
              <strong>AAISSC 2026</strong>
              <span>Midnapore City College</span>
            </div>
            <p className="footer__tagline">
              Two-Day National Seminar on Applications of Artificial Intelligence 
              in Sustainable and Smart Computing.
            </p>
            <div className="footer__ieee">
              <span className="footer__ieee-text">Technically Sponsored by</span>
              <div className="footer__ieee-logo-box">
                <img src="/IEEE-CS_LogoTM-orange.png" alt="IEEE Computer Society" className="footer__ieee-logo" />
              </div>
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
            Designed &amp; Developed by{' '}
            <a href="https://amarnathbera.in" target="_blank" rel="noopener noreferrer" className="footer__author-link">
              Amarnath Bera (Dept. of BCA,MCC)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

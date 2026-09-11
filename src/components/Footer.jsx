import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="footer-container">
        <div className="footer-col">
          <h3>AAISSC 2026</h3>
          <p>Two-Day National Seminar on Applications of Artificial Intelligence in Sustainable and Smart Computing.</p>
          <p>September 24th & 25th, 2026</p>
        </div>
        
        <div className="footer-col">
          <h3>Venue</h3>
          <p>A. P. J. Abdul Kalam Memorial Hall</p>
          <p><strong>Midnapore City College</strong></p>
          <p>Bhadutala, Midnapore, Paschim Medinipur</p>
          <p>Pin- 721129, West Bengal, India</p>
        </div>

        <div className="footer-col">
          <h3>Route Map</h3>
          <p>Distance of the venue from Midnapore Railway Station is 6 Km.</p>
          <p>The distance between Midnapore Central bus stand via Keranichati near Bhadutola is 5 km.</p>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>For any query please contact:</p>
          <p className="highlight">Mr. Buddhadev Sasmal</p>
          <p className="highlight">📞 9382048960</p>
          <p>✉️ mcccon@gmail.com</p>
          <p>🌐 www.mcconline.org.in</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Midnapore City College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

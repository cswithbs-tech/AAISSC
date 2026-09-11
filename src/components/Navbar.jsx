import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Topics',     href: '#topics' },
  { label: 'Speakers',   href: '#speakers' },
  { label: 'Sponsors',   href: '#sponsors' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeLink, setActiveLink]   = useState('#home');
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* ── Brand / Logo ── */}
        <a href="#home" className="navbar__brand" onClick={() => handleNavClick('#home')}>
          <img src="/city_college_logo.png" alt="City College Logo" className="navbar__brand-logo" />
          <div className="navbar__brand-divider" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-sub">Midnapore City College</span>
            <span className="navbar__brand-title">AAISSC 2026</span>
            <div className="navbar__brand-accent" />
          </div>
        </a>

        {/* ── Desktop Links ── */}
        <ul className="navbar__menu">
          {links.map((item, index) => (
            <React.Fragment key={item.href}>
              <li>
                <a
                  href={item.href}
                  className={`navbar__link ${activeLink === item.href ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
              {/* Vertical pipe separator after every link including the last one before the button */}
              <li className="navbar__separator">|</li>
            </React.Fragment>
          ))}
          {/* ── CTA Button ── */}
          <li>
            <a href="#registration" className="navbar__register-btn" onClick={() => handleNavClick('#registration')}>
              Register
            </a>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`navbar__drawer-link ${activeLink === href ? 'active' : ''}`}
            onClick={() => handleNavClick(href)}
          >
            {label}
          </a>
        ))}
        <a href="#registration" className="navbar__drawer-btn" onClick={() => handleNavClick('#registration')}>
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

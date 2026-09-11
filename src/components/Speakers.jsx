import React, { useEffect, useRef } from 'react';
import './Speakers.css';

const speakers = [
  { initials: 'SC', name: 'Dr. Sandip Chakraborty',   role: 'Associate Professor & Head, Computer & Informatics Center', org: 'IIT Kharagpur', color: '#7B0D1E' },
  { initials: 'DS', name: 'Dr. Debdoot Sheet',         role: 'Associate Professor, Dept. of Electrical Engineering',      org: 'IIT Kharagpur', color: '#E8571A' },
  { initials: 'SB', name: 'Dr. Suparna Biswas',        role: 'Associate Professor, Dept. of Computer Science & Engineering', org: 'MAKAUT, West Bengal', color: '#C0392B' },
  { initials: 'BJ', name: 'Dr. Biswapati Jana',        role: 'Professor & Head, Dept. of Computer Science',               org: 'Vidyasagar University', color: '#E8A020' },
  { initials: 'CC', name: 'Dr. Chandreyee Chowdhury',  role: 'Professor',                                                  org: 'Jadavpur University',   color: '#7B0D1E' },
  { initials: 'RS', name: 'Dr. Ramesh Saha',           role: 'Assistant Professor, Dept. of CSE',                          org: 'IIIT Sonepat',          color: '#E8571A' },
  { initials: 'BB', name: 'Mr. Bijit Biswas',          role: 'Scientist D',                                                org: 'SAMEER Kolkata Center',  color: '#9E1C2E' },
];

const committee = [
  { role: 'Chief Patron',           name: 'Dr. Pradip Ghosh',           title: 'Founder Director' },
  { role: 'Patron',                 name: 'Dr. Sudipta Chakrabarti',    title: 'Principal & Associate Professor' },
  { role: 'Co-Patron',             name: 'Dr. Kuntal Ghosh',            title: 'Vice-Principal' },
  { role: 'Convenor',              name: 'Mr. Buddhadev Sasmal',        title: 'Asst. Professor' },
  { role: 'Organising Secretary',  name: 'Mr. Srimanta Santra',         title: 'Asst. Professor' },
  { role: 'Co-ordinator',          name: 'Mr. Narayan Chandra Maiti',   title: 'Asst. Professor' },
  { role: 'Joint Co-ordinator',    name: 'Mr. Subhankar Kundu',         title: 'Asst. Professor' },
  { role: 'Technical Chair',       name: 'Dr. Suparna Biswas',          title: 'Assoc. Professor, MAKAUT' },
  { role: 'Publicity Chairs',      name: 'Mr. S. K. Barman, Mr. D. Maity', title: 'Asst. Professors' },
];

const Speakers = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.1}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="speakers" className="section" ref={ref}>
      <div className="container">

        <div className="reveal">
          <p className="section__label">Resource Persons</p>
          <h2 className="section__title">Distinguished Speakers</h2>
          <span className="gold-rule" />
          <p className="section__subtitle">
            Leading researchers and practitioners from premier institutions across India.
          </p>
        </div>

        {/* ── Speaker Cards ── */}
        <div className="speakers__grid">
          {speakers.map((s, i) => (
            <div key={i} className="speaker-card card reveal">
              <div className="speaker-card__avatar" style={{ background: s.color }}>
                {s.initials}
                <div className="speaker-card__glow" style={{ background: s.color }} />
              </div>
              <div className="speaker-card__body">
                <h3 className="speaker-card__name">{s.name}</h3>
                <p className="speaker-card__role">{s.role}</p>
                <span className="speaker-card__org">{s.org}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Committee ── */}
        <div className="committee reveal">
          <div className="committee__header">
            <h2 className="section__title" style={{ marginBottom: 0 }}>Organising Committee</h2>
          </div>
          <div className="committee__grid">
            {committee.map(({ role, name, title }) => (
              <div key={role} className="committee__item">
                <span className="committee__role">{role}</span>
                <span className="committee__name">{name}</span>
                <span className="committee__title">{title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers;

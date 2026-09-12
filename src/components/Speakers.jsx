import React, { useEffect, useRef } from 'react';
import './Speakers.css';

// Add or edit speakers here. 
// For images, put your photos in the "public" folder (e.g. public/speaker1.jpg) 
// and reference them here as image: '/speaker1.jpg'
const speakers = [
  { 
    name: 'Dr. Paramartha Dutta',   
    role: 'Professor', 
    org: 'Department of Computer & System Sciences Siksha Bhavana (Institute of Science) Visva-Bharati Santiniketan, Birbhum, WB, India', 
    image: '/paramartha-dutta.jpeg' ,
    link: 'https://www.visvabharati.ac.in/ParamarthaDuttaCSS.html'
  },
  { 
    name: 'Dr. Biswapati Jana',         
    role: 'Professor',      
    org: 'Department of Computer Science, Vidyasagar University, Midnapore, West Bengal, India', 
    image: '/biswapati-jana.jpeg' ,
    link:'https://faculty.vidyasagar.ac.in/Faculties/Profile?fac_u_id=Fac-CS-25'
  },
  { 
    name: 'Dr. Suparna Biswas',        
    role: ' Professor', 
    org: ' Department of Computer Science & Engineering, Maulana Abul Kalam Azad University of Technology, WB, India', 
    image: '/suparna-biswas.jpg',
    link:'https://makautwb.ac.in/plug.php?e=WBUTtool&f=faculty_profile&user_id=38'
  },
  { 
    name: 'Dr. Saptarsi Goswami',        
    role: 'Assistant Professor',               
    org: 'Bangabasi Morning College, Calcutta University', 
    image: '/saptarshi-goswami.jpg', 
    link:'https://scholar.google.com/citations?user=_3RrFtEAAAAJ&hl=en'
  },
  { 
    name: 'Tuhin Kumar Mukherjee',        
    role: 'Data Architect',               
    org: 'Capgemini Technology Services India Limited', 
    image: '/tuhin-kumar-mukherjee.jpeg', 
    link:'https://www.linkedin.com/in/tuhinmukherjee?originalSubdomain=in',
    imgPosition: 'center center'
  },
  { 
    name: 'Dr. Ramesh Saha',        
    role: 'Assistant Professor',               
    org: 'Department of Computer Science and Engineering, IIIT Sonepat', 
    image: '/ramesh-saha.png', 
    link:'https://scholar.google.com/citations?user=jQQKGQ0AAAAJ&hl=en'
  },
  
];

const committee = [
  { role: 'Chief Patron',           name: 'Dr. Pradip Ghosh',           title: 'Founder Director', image: '/1.png' },
  { role: 'Patron',                 name: 'Dr. Sudipta Chakrabarti',    title: 'Principal & Associate Professor', image: '/47.png' },
  { role: 'Co-Patron',             name: 'Dr. Kuntal Ghosh',            title: 'Vice-Principal', image: '/91.png' },
  { role: 'Convenor',              name: 'Mr. Buddhadev Sasmal',        title: 'Asst. Professor', image: '/186.png' },
  { role: 'Organising Secretary',  name: 'Mr. Srimanta Santra',         title: 'Asst. Professor', image: '/145.png' },
  { role: 'Co-ordinator',          name: 'Mr. Narayan Chandra Maiti',   title: 'Asst. Professor', image: '/218.png' },
  { role: 'Joint Co-ordinator',    name: 'Mr. Subhankar Kundu',         title: 'Asst. Professor', image: '/190.png' },
  { role: 'Technical Chair',       name: 'Dr. Suparna Biswas',          title: 'Assoc. Professor, MAKAUT', image: '/suparna-biswas.jpg' },
  { role: 'Publicity Chairs',      name: 'Mr. S. K. Barman', title: 'Asst. Professors', image: '/177.png' },
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
            <div key={i} className="speaker-card reveal">
              <div className="speaker-card__image-container">
                <img 
                  src={s.image} 
                  alt={s.name} 
                  className="speaker-card__image" 
                  style={s.imgPosition ? { objectPosition: s.imgPosition } : undefined}
                />
              </div>
              <div className="speaker-card__body">
                <h3 className="speaker-card__name">{s.name}</h3>
                <p className="speaker-card__role">{s.role}</p>
                <span className="speaker-card__org">{s.org}</span>
                {s.link ? (
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="speaker-card__link">
                    View Profile
                  </a>
                ) : null}
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
            {committee.map(({ role, name, title, image }) => {
              const avatarSrc = image ? image : `https://ui-avatars.com/api/?name=${encodeURIComponent(name.replace('Dr. ', '').replace('Mr. ', ''))}&background=7b0d1e&color=fff&size=150&bold=true`;
              return (
                <div key={role} className="committee__item">
                  <div className="committee__avatar">
                    <img src={avatarSrc} alt={name} />
                  </div>
                  <div className="committee__item-text">
                    <span className="committee__role">{role}</span>
                    <span className="committee__name">{name}</span>
                    <span className="committee__title">{title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers;

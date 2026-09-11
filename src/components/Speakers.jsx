import React from 'react';
import Reveal from './Reveal';
import './Speakers.css';

const Speakers = () => {
  const resourcePersons = [
    {
      name: "Dr. Sandip Chakraborty",
      designation: "Associate Professor, Department of Computer Science and Engineering, and Head, Computer and Informatics Center, IIT Kharagpur, Kharagpur, WB-721302 India."
    },
    {
      name: "Dr. Debdoot Sheet",
      designation: "Associate Professor, Department of Electrical Engineering, IIT Kharagpur, Kharagpur, WB-721302 India."
    },
    {
      name: "Dr. Suparna Biswas",
      designation: "Associate Professor, Department of Computer Science and Engineering, Maulana Abul Kalam Azad University of Technology, Nadia, West Bengal, 741249, India."
    },
    {
      name: "Dr. Biswapati Jana",
      designation: "Professor and Head, Department of Computer Science, Vidyasagar University, West Bengal, India."
    },
    {
      name: "Dr. Chandreyee Chowdhury",
      designation: "Professor, Jadavpur University, 188, Raja S.C. Mallick Rd, Kolkata 700032."
    },
    {
      name: "Dr. Ramesh Saha",
      designation: "Assistant Professor, Department of Computer Science and Engineering, IIIT Sonepat, IIT Delhi Techno Park, Rajiv Gandhi Education City, Rai, Sonepat, Haryana-131001, India."
    },
    {
      name: "Mr. Bijit Biswas",
      designation: "Scientist D, SAMEER Kolkata Center."
    }
  ];

  const getInitial = (name) => {
    return name.replace('Dr. ', '').replace('Mr. ', '').charAt(0);
  };

  return (
    <section id="speakers" className="section">
      <Reveal>
        <h2 className="section-title">Resource Persons</h2>
      </Reveal>
      <div className="speakers-grid">
        {resourcePersons.map((speaker, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="speaker-card tilt-effect glass">
              <div className="speaker-avatar">
                {getInitial(speaker.name)}
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p>{speaker.designation}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="committee-section">
        <Reveal>
          <h2 className="section-title" style={{ marginTop: '6rem' }}>Organizing Committee</h2>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <div className="committee-list glass">
            <p><strong>Chief Patron:</strong> Dr. Pradip Ghosh, Founder Director</p>
            <p><strong>Patron:</strong> Dr. Sudipta Chakrabarti, Principal & Associate Professor</p>
            <p><strong>Co Patron:</strong> Dr. Kuntal Ghosh, Vice-Principal</p>
            <p><strong>Convenor:</strong> Mr. Buddhadev Sasmal, Asst. Professor</p>
            <p><strong>Organizing Secretary:</strong> Mr. Srimanta Santra, Asst. Professor</p>
            <p><strong>Co-ordinator:</strong> Mr. Narayan Chandra Maiti, Asst. Professor</p>
            <p><strong>Joint Co-ordinator:</strong> Mr. Subhankar Kundu, Asst. Professor</p>
            <p><strong>Technical Chair:</strong> Dr. Suparna Biswas, Assoc. Professor, MAKAUT</p>
            <p><strong>Publicity Chairs:</strong> Mr. Sanjoy Kumar Barman, Mr. Debaprasad Maity</p>
            <p><strong>Transport:</strong> Mr. Abhishek Das, Mr. Arindam Sahoo, Miss Moumita Nayak</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Speakers;

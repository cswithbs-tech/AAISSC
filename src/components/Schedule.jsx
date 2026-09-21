import React, { useState, useEffect, useRef } from 'react';
import './Schedule.css';

const scheduleData = {
  day1: {
    title: 'Day 1',
    date: '24th Sep 2026',
    events: [
      { time: '9:00 A.M. - 10:00 A.M.', title: 'Registration & Breakfast' },
      { 
        time: '10:00 A.M. - 11:30 A.M.', 
        title: 'Inauguration',
        desc: 'Inaugurator and Chief Guest: Prof. Suman Chakraborty (Director, IIT Kharagpur). Welcome address by Principal (Midnapore City College)',
        venue: 'A.P.J. Abdul Kalam Memorial Hall'
      },
      { 
        time: '11:30 A.M. - 12:00 P.M.', 
        title: 'Key Note Address',
        desc: 'Dr. Sabyasachi Pal (Associate Professor, Department of Pure & Applied Sciences, Midnapore City College)'
      },
      {
        time: 'Session 1',
        title: 'Technical Session 1',
        venue: 'A.P.J. Abdul Kalam Memorial Hall',
        chair: 'Dr. Biswapati Jana (Professor, HOD, Department of Computer Science, Vidyasagar University, Midnapore, West Bengal)',
        isSession: true
      },
      {
        time: '12:00 P.M. - 12:40 P.M.',
        title: 'Invited Lecture 1: Introduction To Artificial Intelligence and Machine Learning',
        desc: 'Dr. Paramartha Dutta (Professor, Department of Computer & System Sciences, Siksha Bhavana, Visva-Bharati University Santiniketan)'
      },
      {
        time: 'Session 2',
        title: 'Technical Session 2',
        venue: 'A.P.J. Abdul Kalam Memorial Hall',
        chair: 'Dr. Paramartha Dutta (Professor, Department of Computer & System Sciences, Siksha Bhavana, Visva-Bharati University Santiniketan)',
        isSession: true
      },
      {
        time: '12:40 P.M. - 01:20 P.M.',
        title: 'Invited Lecture 2: AI for Data Analysis: Trends and Innovations',
        desc: 'Dr. Biswapati Jana (Professor, HOD, Department of Computer Science, Vidyasagar University)'
      },
      { time: '01:20 P.M. - 02:30 P.M.', title: 'Lunch Break' },
      {
        time: 'Session 3',
        title: 'Technical Session 3',
        venue: 'A.P.J. Abdul Kalam Memorial Hall',
        chair: 'Dr. Sabyasachi Pal (Associate Professor, Department of Pure & Applied Sciences, Midnapore City College)',
        isSession: true
      },
      {
        time: '02:30 P.M. - 03:10 P.M.',
        title: 'Invited Lecture 3: Deep Learning for Sustainable Energy: A Journey',
        desc: 'Dr. Saptarsi Goswami (Assistant Professor, A.K. Choudhury school of IT, University of Calcutta)'
      },
      {
        time: '02:30 P.M. - 04:00 P.M.',
        title: 'Poster Sessions',
        desc: 'Poster Session for UG Students (2nd floor) & PG Students (3rd floor, Pure and applied sciences building)'
      },
      { time: '04:00 P.M. - 04:30 P.M.', title: 'Evening Snacks' },
      { time: '04:30 P.M. - 06:30 P.M.', title: 'Cultural Programme' },
    ]
  },
  day2: {
    title: 'Day 2',
    date: '25th Sep 2026',
    events: [
      { time: '9:00 A.M. - 10:30 A.M.', title: 'Registration & Breakfast' },
      {
        time: 'Session 4',
        title: 'Technical Session 4',
        venue: 'A.P.J. Abdul Kalam Memorial Hall',
        chair: 'Dr. Sabyasachi Pal (Associate Professor, Department of Pure & Applied Sciences, Midnapore City College)',
        isSession: true
      },
      {
        time: '10:30 A.M. - 11:10 A.M.',
        title: 'Invited Lecture 4: Role of Data Architecture in AI for Sustainability',
        desc: 'Mr. Tuhin Kumar Mukherjee (Associate Director and Senior Data Architect, Capgemini Technology Service India Pvt Ltd.)'
      },
      {
        time: '11:10 A.M. - 11:50 A.M.',
        title: 'Invited Lecture 5: AI-Powered Healthcare Innovation and Smart Med-Tech Solutions',
        desc: 'Dr. Debayan Ganguly (Deputy Director, Officer on Special Duty (OSD) & Ex-officio, Directorate of Technical Education, Government of West Bengal.)'
      },
      {
        time: 'Session 5',
        title: 'Technical Session 5',
        venue: 'A.P.J. Abdul Kalam Memorial Hall',
        chair: 'Dr. Sabyasachi Pal (Associate Professor, Department of Pure & Applied Sciences, Midnapore City College)',
        isSession: true
      },
      {
        time: '11:50 A.M. - 12:30 P.M.',
        title: 'Invited Lecture 6: Integration of Artificial Intelligence and Internet of Things (AIoT) in Healthcare: Smart Monitoring, Predictive Diagnostics, and Sustainable Digital Health Systems.',
        desc: 'Dr. Ramesh Saha (Assistant Professor, Department of Computer Science and Engineering, IIIT, Sonepat, Haryana, India)'
      },
      { time: '12:30 P.M. - 01:30 P.M.', title: 'Lunch Break' },
      {
        time: 'Session 6',
        title: 'ORAL PRESENTATION SESSION',
        venue: 'A.P.J. Abdul Kalam Memorial Hall',
        chair: 'Dr. Sabyasachi Pal (Associate Professor, Department of Pure & Applied Sciences, Midnapore City College)',
        isSession: true
      },
      { time: '01:30 P.M. - 03:30 P.M.', title: 'Oral Presentation by Faculties / Research Scholars / Students' },
      {
        time: '03:30 P.M. - 04:00 P.M.',
        title: 'Valedictory Session',
        venue: 'A.P.J. Abdul Kalam Memorial Hall'
      },
      { time: '04:30 P.M. - 05:00 P.M.', title: 'Prize Distribution Ceremony' },
      { time: '05:00 P.M. - 05:30 P.M.', title: 'Vote of Thanks' },
    ]
  }
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('day1');
  const currentData = scheduleData[activeTab];
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="schedule" className="section section--alt" ref={ref}>
      <div className="container">
        
        <div className="schedule__header reveal">
          <p className="section__label">Itinerary</p>
          <h2 className="section__title">Programme Schedule</h2>
          <span className="gold-rule" />
          <p className="section__subtitle">
            A comprehensive two-day event packed with insightful lectures, technical sessions, and presentations.
          </p>
        </div>

        <div className="schedule__tabs reveal">
          <button 
            className={`schedule__tab ${activeTab === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveTab('day1')}
          >
            <span className="tab-title">{scheduleData.day1.title}</span>
            <span className="tab-date">{scheduleData.day1.date}</span>
          </button>
          <button 
            className={`schedule__tab ${activeTab === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveTab('day2')}
          >
            <span className="tab-title">{scheduleData.day2.title}</span>
            <span className="tab-date">{scheduleData.day2.date}</span>
          </button>
        </div>

        <div className="schedule__timeline">
          {currentData.events.map((evt, idx) => (
            <div 
              key={`${activeTab}-${idx}`} 
              className={`schedule__item ${evt.isSession ? 'schedule__item--session' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="schedule__time">{evt.time}</span>
              <div className="schedule__content">
                <h3 className="schedule__title">{evt.title}</h3>
                {evt.desc && <p className="schedule__desc">{evt.desc}</p>}
                
                {(evt.venue || evt.chair) && (
                  <div className="schedule__meta">
                    {evt.venue && <span><strong>Venue:</strong> {evt.venue}</span>}
                    {evt.chair && <span><strong>Chair Person:</strong> {evt.chair}</span>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Schedule;

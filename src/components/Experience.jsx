import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'S.R.M Institute Of Science And Technology',
      role: 'B. Tech in Computer Science with Ai&Ml',
      date: 'Expected in July 2027',
      description: [
        'GPA: 8.5',
        'Chennai, Tamil Nadu'
      ]
    },
    {
      id: 2,
      company: 'Certifications',
      role: 'Various Platforms',
      date: 'Recent',
      description: [
        'Programming in Java, NPTEL',
        'Data Analyst, Trainity',
        'Data Analytics Essentials, CISCO',
        'Programming in C, Udemy'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="section experience-section">
      <div className="bg-glow-right"></div>
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Education & Certifications</span></h2>
        
        <div className="experience-container glass">
          <div className="experience-tabs">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`tab-btn ${activeTab === exp.id ? 'active' : ''}`}
                onClick={() => setActiveTab(exp.id)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          <div className="experience-content">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`tab-panel ${activeTab === exp.id ? 'active' : ''}`}
              >
                <h3 className="role">
                  {exp.role} <span className="company-name">@ {exp.company}</span>
                </h3>
                <p className="date">{exp.date}</p>
                <ul className="achievements">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

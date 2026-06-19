import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Harmony(AI Playlist Maker)',
      description: 'Developed a smart music playlist generator leveraging AI algorithms to analyse user preferences, mood, and genre inputs for personalised playlists.',
      techStack: ['AI/ML', 'External APIs'],
      githubLink: 'https://github.com/SriParth-alt/AI-PLAYLIST-MAKER',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'Built a desktop-based expense tracking system with Java Swing and MySQL for managing daily expenses. Implemented spending limit alerts and integrated interactive charts.',
      techStack: ['Java Swing', 'MySQL', 'JDBC'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Gridmind',
      description: 'An AI-based microgrid energy optimization system designed to manage, simulate, and optimize energy loads and storage. Integrates machine learning models for cost reduction and grid stability.',
      techStack: ['AI/ML', 'Python', 'React.js', 'Data Science'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Some Things I've Built</span></h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass">
              <div className="project-content">
                <div className="project-header">
                  <div className="folder-icon">📁</div>
                  <div className="project-links">
                    <a href={project.githubLink} aria-label="GitHub Link"><Code size={20} /></a>
                    <a href={project.liveLink} aria-label="Live Link"><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <ul className="project-tech-list">
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

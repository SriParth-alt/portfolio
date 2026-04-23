import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-in">Hi, my name is</p>
          <h1 className="hero-title animate-fade-in delay-100">
            <span className="gradient-text">Parth Srivastav.</span><br />
            I build things for the web.
          </h1>
          <p className="hero-description animate-fade-in delay-200">
            I'm a Third-year B.Tech student pursuing Computer Science with a solid academic foundation and a strong passion for technology and software development.
          </p>
          <div className="hero-actions animate-fade-in delay-300">
            <a href="#projects" className="btn btn-primary">
              Check out my work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Resume <Download size={18} />
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in delay-400">
          <div className="hero-image glass">
            {/* Using a placeholder since user didn't specify an image, but making it look nice */}
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

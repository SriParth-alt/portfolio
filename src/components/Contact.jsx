import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Get In Touch</span></h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper glass">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>psh2005.ps@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper glass">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>8459090301</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper glass">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <p>Built with React & Vite. Designed by Parth Srivastav.</p>
      </footer>
    </section>
  );
};

export default Contact;

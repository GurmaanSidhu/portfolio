import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
      </div>

      <div className="about-content">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="about-image-placeholder">
             <h2>A.</h2>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I'm Alex, a software engineer with a passion for building exceptional digital experiences. My journey in web development started back in 2018 when I decided to try editing custom themes — turns out hacking together HTML & CSS taught me a lot about design and structure!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <div className="stats-container">
            <div className="stat-item glass-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item glass-card">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item glass-card">
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

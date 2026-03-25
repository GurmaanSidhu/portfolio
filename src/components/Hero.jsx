import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            Building intelligent systems <br className="hide-mobile" />
            <span className="text-muted">with data and code</span>
          </h1>
          <p className="hero-subtitle">
            A data science-focused developer specializing in machine learning, analytics, and system design.
          </p>
          <div className="hero-intro">
            <p>
              I'm <strong>Gurmaanpreet Singh Insan</strong>. A Computer Science student focused on solving real-world problems using data, machine learning, and scalable systems.
            </p>
          </div>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/cv.pdf" download="Gurmaanpreet_CV.pdf" className="btn btn-secondary">
              Download CV <Download size={16} />
            </a>
            <div className="hero-socials">
              <a href="https://github.com/GurmaanSidhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gurmaan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="image-wrapper">
            <div className="image-frame"></div>
            <img src="/profile.jpeg" alt="Gurmaanpreet Singh" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

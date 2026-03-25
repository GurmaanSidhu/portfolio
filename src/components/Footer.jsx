import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a href="https://github.com/GurmaanSidhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/gurmaan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:gurmaansidhu1232006@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <p className="footer-copyright">
          Get in contact.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

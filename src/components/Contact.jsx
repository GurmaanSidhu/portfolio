import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Let's Connect.</h2>
          <p className="contact-subtitle">
            Open to collaborations, internships, and impactful projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:gurmaansidhu1232006@gmail.com" className="btn btn-primary btn-lg mt-8">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

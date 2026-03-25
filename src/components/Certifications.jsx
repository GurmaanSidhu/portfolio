import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: "Introduction to IoT",
    issuer: "NPTEL (IIT Kharagpur)"
  },
  {
    name: "Introduction to AI",
    issuer: "IBM (Coursera)"
  },
  {
    name: "PostgreSQL",
    issuer: "University of Michigan"
  },
  {
    name: "Object Oriented Programming",
    issuer: "Lovely Professional University"
  }
];

const Certifications = () => {
  return (
    <section className="section bg-secondary" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Continuous learning and professional development.</p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Award className="cert-icon" size={24} />
              <div>
                <h3 className="cert-title">{cert.name}</h3>
                <p className="cert-issuer text-muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

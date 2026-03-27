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
    issuer: "University of Michigan (Coursera)"
  },
  {
    name: "Object Oriented Programming",
    issuer: "Lovely Professional University"
  },
  {
    name: "Developing AI Applications with Python and Flask",
    issuer: "IBM (Coursera)"
  },
  {
    name: "Tailwind CSS Practice Projects",
    issuer: "Scrimba (Coursera)"
  },
  {
    name: "A Guide to Machine Learning with Data Science",
    issuer: "CipherSchools"
  },
  {
    name: "Java Programming",
    issuer: "iamNeo"
  },
  {
    name: "Master JavaScript from Basics to Advanced",
    issuer: "Udemy"
  },
  {
    name: "C Programming",
    issuer: "CipherSchools"
  },
  {
    name: "Computer Communications (4 courses)",
    issuer: "University of Colorado (Coursera)"
  },
  {
    name: "Introduction to Hardware and Operating System",
    issuer: "IBM (Coursera)"
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

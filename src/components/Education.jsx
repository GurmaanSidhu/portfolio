import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech CSE (Data Science)',
    score: 'CGPA: 7.26',
    duration: '2023–Present'
  },
  {
    institution: 'Sacred Hearts Convent School',
    degree: 'Intermediate (PCM)',
    score: '70.2%',
    duration: 'Completed'
  },
  {
    institution: 'Shah Satnam Ji Boys’ School',
    degree: 'Matriculation',
    score: '83.4%',
    duration: 'Completed'
  }
];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and formal qualifications.</p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.institution}</h3>
                  <span className="timeline-date">{item.duration}</span>
                </div>
                <p className="timeline-subtitle">{item.degree}</p>
                <p className="timeline-score text-muted">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

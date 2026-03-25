import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  "Solved 70+ SQL problems (joins, subqueries, aggregations) on various competitive programming platforms.",
  "Participated in a regional Hackathon and successfully built a Learning Management System (LMS) prototype using HTML, SASS, and Javascript."
];

const Achievements = () => {
  return (
    <section className="section bg-secondary" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones and extracurricular technical accomplishments.</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              className="achievement-card card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Trophy className="achievement-icon" size={28} />
              <p className="achievement-text">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

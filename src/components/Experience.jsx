import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Training</h2>
          <p className="section-subtitle">Practical applications of machine learning and data science.</p>
        </div>

        <motion.div 
          className="experience-card card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="exp-header">
            <h3 className="exp-title">Machine Learning Training</h3>
            <span className="exp-company">Cipher Schools</span>
          </div>
          <ul className="exp-list">
            <li>Covered comprehensive Exploratory Data Analysis (EDA) and robust feature engineering techniques.</li>
            <li>Studied and applied supervised learning algorithms to real-world datasets.</li>
            <li>Built and evaluated Machine Learning models focusing on optimizing evaluation metrics.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "C", "Java", "SQL", "JavaScript", "SASS", "Bash"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Flask", "Django"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Power BI", "Excel", "Git", "PostgreSQL", "MySQL"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Adaptability", "Attention to Detail", "Problem Solving"]
  }
];

const Skills = () => {
  return (
    <section className="section bg-secondary" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">Core competencies across programming languages, data science frameworks, and analytical tools.</p>
        </div>

        <div className="skills-layout">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="skill-cat-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

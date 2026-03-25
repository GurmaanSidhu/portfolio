import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cardiovascular Disease Prediction',
    description: 'Developed machine learning models to predict cardiovascular diseases. Worked on a 70K+ clinical dataset featuring engineered metrics like BMI and pulse pressure.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'SVM', 'Decision Tree'],
    highlight: 'Best ROC-AUC: 0.789 (SVM)',
    links: { github: 'https://github.com/GurmaanSidhu/cardio-health-prediction-ml.git', demo: 'https://github.com/GurmaanSidhu/cardio-health-prediction-ml.git' }
  },
  {
    title: 'Customer Analytics & Campaign Dashboard',
    description: 'Designed a comprehensive dashboard to analyze 2,240 customers and track a 14.91% campaign response rate using advanced segmentation via slicers and DAX KPIs.',
    tech: ['Power BI', 'DAX', 'Data Modeling'],
    highlight: 'Analyzed 2,240 customers',
    links: { github: 'https://github.com/GurmaanSidhu/Customer-Analytics-Campaign-Performance-Dashboard', demo: 'https://github.com/GurmaanSidhu/Customer-Analytics-Campaign-Performance-Dashboard' }
  },
  {
    title: 'Bank Marketing Analytics Dashboard',
    description: 'Created an Excel-based analytics dashboard utilizing advanced formulas and Pivot Tables to extract actionable insights on 45K+ customers and 5,289 subscriptions.',
    tech: ['Excel', 'Pivot Tables', 'Advanced Formulas'],
    highlight: 'Key Driver: Call Duration',
    links: { github: 'https://github.com/GurmaanSidhu/bank-marketing-analytics-dashboard', demo: 'https://github.com/GurmaanSidhu/bank-marketing-analytics-dashboard' }
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">A collection of case studies showcasing data analysis, machine learning models, and system design.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-highlight">
                  <span className="highlight-tag">{project.highlight}</span>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

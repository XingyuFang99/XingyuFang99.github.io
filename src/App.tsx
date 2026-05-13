import { motion, type Variants } from 'framer-motion';
import { Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { personalInfo } from './config';
import './App.css';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

function App() {
  return (
    <div className="container">
      <div className="bg-gradient" />
      
      {/* Slide 1: Hero */}
      <section className="slide">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p 
            className="accent-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            你好，我是
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2 
            className="accent-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {personalInfo.role}
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '2rem' }}
        >
          <ChevronDown size={32} color="var(--accent-color)" />
        </motion.div>
      </section>

      {/* Slide 2: About */}
      <section className="slide">
        <motion.div 
          className="glass-card"
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="accent-text">关于我</h2>
          <p style={{ fontSize: '1.1rem' }}>{personalInfo.about}</p>
        </motion.div>
      </section>

      {/* Slide 3: Skills */}
      <section className="slide">
        <motion.div 
          className="glass-card"
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <h2 className="accent-text">专业技能</h2>
          <div style={{ width: '100%' }}>
            {personalInfo.skills.map((skill, index) => (
              <motion.div 
                key={index} 
                style={{ marginBottom: '1rem' }}
                variants={fadeInUp}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{skill.name}</span>
                  <span className="accent-text">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div 
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Slide 4: Projects */}
      <section className="slide" style={{ height: 'auto', minHeight: '100vh', padding: '5rem 2rem' }}>
        <motion.h2 
          className="accent-text"
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          精选项目
        </motion.h2>
        <motion.div 
          className="grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {personalInfo.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10, borderColor: 'var(--accent-color)' }}
            >
              <h3>{project.title}</h3>
              <p style={{ margin: '1rem 0', opacity: 0.8, fontSize: '0.95rem' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <a href={project.link} className="accent-text" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  查看项目 <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Slide 5: Contact */}
      <section className="slide">
        <motion.div 
          className="glass-card"
          style={{ textAlign: 'center' }}
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="accent-text">联系我</h2>
          <p style={{ marginBottom: '2rem' }}>如果您对我的研究感兴趣或想进一步交流，欢迎随时联系。</p>
          <div className="contact-links">
            {personalInfo.contact.github && (
              <motion.a 
                whileHover={{ scale: 1.05, color: 'var(--accent-color)' }} 
                href={personalInfo.contact.github} 
                className="contact-link-item"
              >
                <GithubIcon size={24} />
                <span>GitHub</span>
              </motion.a>
            )}
            {personalInfo.contact.linkedin && (
              <motion.a 
                whileHover={{ scale: 1.05, color: 'var(--accent-color)' }} 
                href={personalInfo.contact.linkedin} 
                className="contact-link-item"
              >
                <LinkedinIcon size={24} />
                <span>LinkedIn</span>
              </motion.a>
            )}
            <motion.a 
              whileHover={{ scale: 1.05, color: 'var(--accent-color)' }} 
              href={`mailto:${personalInfo.contact.email}`} 
              className="contact-link-item"
            >
              <Mail size={24} />
              <span>Email</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;

import { motion, type Variants } from 'framer-motion';
import { Mail, ExternalLink, ChevronDown, Activity, Cpu, Database, Microscope } from 'lucide-react';
import { personalInfo } from './config';
import heroImage from './assets/hero.png';
import './App.css';

// --- Background Components ---

const DNAHelix = () => (
  <div className="dna-container">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="dna-dot"
        animate={{
          y: [0, 100, 0],
          x: [Math.sin(i * 0.5) * 50, Math.sin(i * 0.5 + Math.PI) * 50, Math.sin(i * 0.5) * 50],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut"
        }}
        style={{ top: `${i * 5}%` }}
      />
    ))}
  </div>
);

const FloatingParticles = () => (
  <div className="particles">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight 
        }}
        animate={{
          x: [null, Math.random() * window.innerWidth],
          y: [null, Math.random() * window.innerHeight],
        }}
        transition={{
          duration: 20 + Math.random() * 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

// --- Icons ---

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

// --- Animations ---

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } }
};

function App() {
  return (
    <div className="container">
      <div className="bg-gradient" />
      <FloatingParticles />
      <DNAHelix />
      
      {/* Slide 1: Hero */}
      <section className="slide hero-section">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Activity size={16} className="pulse" />
              <span>AI × Bio-Medicine Specialist</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {personalInfo.role}
            </motion.p>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="hex-border">
              <div className="hex-inner">
                <img src={heroImage} alt={personalInfo.name} className="profile-img" />
              </div>
            </div>
            {/* Decorative Elements */}
            <motion.div 
              className="floating-icon icon-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Cpu size={24} />
            </motion.div>
            <motion.div 
              className="floating-icon icon-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Microscope size={24} />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} color="var(--accent-color)" />
        </motion.div>
      </section>

      {/* Slide 2: About */}
      <section className="slide" id="about">
        <motion.div 
          className="glass-card bio-card"
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <Activity className="accent-text" />
            <h2 className="accent-text">科研背景</h2>
          </div>
          <p className="bio-text">{personalInfo.about}</p>
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
          <div className="card-header">
            <Database className="accent-text" />
            <h2 className="accent-text">技术栈</h2>
          </div>
          <div className="skills-grid">
            {personalInfo.skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                variants={fadeInUp}
              >
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Slide 4: Projects */}
      <section className="slide" id="projects">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="section-title"
        >
          <h2 className="accent-text">科研与开发项目</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {personalInfo.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="modern-project-card"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="project-tag">{project.tags[0]}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="tech-stack">
                  {project.tags.slice(1).map((tag, tIndex) => (
                    <span key={tIndex} className="tech-tag">{tag}</span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a href={project.link} className="project-link">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Slide 5: Contact */}
      <section className="slide" id="contact">
        <motion.div 
          className="glass-card contact-card"
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="accent-text">建立联系</h2>
          <p>如果您对 AI 赋能医疗感兴趣，或有合作意向，欢迎随时联络。</p>
          
          <div className="social-links">
            {personalInfo.contact.github && (
              <motion.a whileHover={{ y: -5 }} href={personalInfo.contact.github} className="social-btn">
                <GithubIcon size={24} />
                <span>GitHub</span>
              </motion.a>
            )}
            {personalInfo.contact.linkedin && (
              <motion.a whileHover={{ y: -5 }} href={personalInfo.contact.linkedin} className="social-btn">
                <LinkedinIcon size={24} />
                <span>LinkedIn</span>
              </motion.a>
            )}
            <motion.a whileHover={{ y: -5 }} href={`mailto:${personalInfo.contact.email}`} className="social-btn highlight">
              <Mail size={24} />
              <span>Email Me</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} {personalInfo.name} · Built with Bio-AI Aesthetics</p>
      </footer>
    </div>
  );
}

export default App;

export default App;

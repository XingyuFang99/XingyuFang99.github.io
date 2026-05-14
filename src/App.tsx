import { motion, type Variants } from 'framer-motion';
import { Mail, ExternalLink, ChevronDown, Activity, Cpu, Database, Microscope, Atom, Network, Dna, Waves, Beaker } from 'lucide-react';
import { personalInfo } from './config';
import heroImage from './assets/hero.png';
import './App.css';

// --- Immersive DNA Helix Component ---
const ImmersiveDNA = () => {
  const points = 40;
  return (
    <div className="dna-helix-bg">
      {[...Array(points)].map((_, i) => {
        const angle = (i / points) * Math.PI * 4;
        const x = Math.sin(angle) * 150;
        return (
          <motion.div
            key={i}
            className="dna-strand"
            animate={{
              y: [-500, 500],
              x: [x, -x, x],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear"
            }}
            style={{ 
              top: '50%',
              left: '50%',
              marginLeft: -2,
              marginTop: -2
            }}
          />
        );
      })}
    </div>
  );
};

// --- Specialized Biological Background Animations ---
const ProjectAnimation = ({ type }: { type: number }) => {
  if (type === 0) { // SELEX / Sequence Flow
    return (
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col gap-1 text-[10px] font-mono text-teal-500/40"
            initial={{ y: -100, x: `${i * 8}%` }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          >
            {"ATGC".split('').sort(() => Math.random() - 0.5).map((char, j) => (
              <span key={j}>{char}</span>
            ))}
          </motion.div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
            <Dna size={400} strokeWidth={0.5} className="text-teal-500/10 rotate-45" />
        </div>
      </div>
    );
  }
  if (type === 1) { // Protein / Graph Folding
    return (
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
           <Network size={500} strokeWidth={0.2} className="text-teal-400/20" />
        </motion.div>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-teal-400/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8 + i, repeat: Infinity }}
            style={{ left: `${15 + i * 12}%`, top: `${20 + (i % 3) * 20}%` }}
          />
        ))}
      </div>
    );
  }
  return ( // mRNA / mRNA Delivery / LLM Flow
    <div className="absolute inset-0 pointer-events-none opacity-30">
       <div className="scan-line" />
       <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
           <Waves size={600} strokeWidth={0.1} className="text-purple-500/20" />
        </motion.div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
        >
           <Beaker size={300} strokeWidth={0.5} className="text-teal-500/10" />
        </motion.div>
    </div>
  );
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
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
      <div className="grid-overlay" />
      <ImmersiveDNA />
      
      {/* Hero Section */}
      <section className="slide">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="fancy-badge">
              <Activity size={16} />
              <span>Bio-Computing & Algorithm Engineer</span>
            </div>
            
            <h1 className="hero-title">{personalInfo.name}</h1>
            
            <div className="hero-subtitle">
              {personalInfo.role}
            </div>
          </motion.div>

          <motion.div 
            className="photo-frame-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div className="photo-glow" />
            <div className="hex-outer">
              <div className="hex-inner">
                <img src={heroImage} alt={personalInfo.name} className="profile-img" />
              </div>
            </div>
            
            {/* Optimized Floating Icon Positions */}
            <motion.div className="floating-icon" 
              style={{ top: '10%', right: '-15%' }}
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }} 
              transition={{ duration: 4, repeat: Infinity }}>
              <Cpu size={28} />
            </motion.div>
            <motion.div className="floating-icon" 
              style={{ bottom: '15%', left: '-10%' }}
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }} 
              transition={{ duration: 5, repeat: Infinity }}>
              <Microscope size={28} />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          style={{ position: 'absolute', bottom: '3rem' }}
        >
          <ChevronDown size={40} color="var(--accent-color)" />
        </motion.div>
      </section>

      {/* Scientific Projects - One slide per project with bio-themed animations */}
      {personalInfo.projects.map((project, index) => (
        <section key={index} className="slide" id={`project-${index}`}>
          <ProjectAnimation type={index} />
          
          {index === 0 && (
            <motion.div className="section-title mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <span className="fancy-badge mx-auto">Selected Research</span>
              <h2 className="text-5xl font-bold mt-4">科研与开发项目</h2>
              <div className="title-underline"></div>
            </motion.div>
          )}

          <motion.div 
            className="modern-project-card"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="project-number">0{index + 1}</div>
            <span className="project-tag">{project.tags[0]}</span>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-footer">
              <div className="tech-stack">
                {project.tags.slice(1).map((tag, tIndex) => (
                  <span key={tIndex} className="tech-tag">{tag}</span>
                ))}
              </div>
              {project.link !== "#" && (
                <a href={project.link} className="project-link">
                  <ExternalLink size={28} />
                </a>
              )}
            </div>
          </motion.div>
        </section>
      ))}

      {/* About Section */}
      <section className="slide" id="about">
        <motion.div 
          className="glass-card"
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <Activity className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold">关于我</h2>
          </div>
          <p className="text-xl leading-relaxed text-slate-300">
            {personalInfo.about}
          </p>
        </motion.div>
      </section>

      {/* Skills Section with Progress Bar Animations */}
      <section className="slide">
        <motion.div 
          className="glass-card"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
           <div className="flex items-center gap-4 mb-12">
            <Database className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold">核心能力</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {personalInfo.skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex justify-between mb-3 font-medium">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-teal-400">{skill.level}%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="slide" id="contact">
        <motion.div 
          className="glass-card text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
        >
          <h2 className="text-5xl font-bold mb-6">建立联系</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            致力于利用人工智能技术推动精准医疗与药物开发。
            如果您有合作意向或技术交流，欢迎通过以下方式联络。
          </p>
          
          <div className="contact-btn-group">
            <motion.a whileHover={{ y: -5 }} href={personalInfo.contact.github} className="fancy-btn">
              <Activity size={24} />
              <span>GitHub</span>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={personalInfo.contact.linkedin} className="fancy-btn">
              <Activity size={24} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={`mailto:${personalInfo.contact.email}`} className="fancy-btn highlight" style={{ background: 'var(--accent-color)', color: '#020617' }}>
              <Mail size={24} />
              <span>Email Me</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
      
      <footer className="py-12 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.name} · Bio-AI Engineering Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

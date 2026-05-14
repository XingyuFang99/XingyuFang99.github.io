import { motion, type Variants } from 'framer-motion';
import { Mail, ExternalLink, ChevronDown, Activity, Cpu, Database, Microscope, Atom, Network } from 'lucide-react';
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
        const z = Math.cos(angle) * 150;
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

// --- Specialized Project Background Animation ---
const ProjectAnimation = ({ type }: { type: number }) => {
  if (type === 0) { // Molecular / Sequence
    return (
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-teal-500/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100]
            }}
            transition={{ duration: 5 + i, repeat: Infinity }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    );
  }
  if (type === 1) { // 3D Graph / Equivariant
    return (
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
           <Network size={400} strokeWidth={0.5} className="text-teal-500" />
        </motion.div>
      </div>
    );
  }
  return ( // Vaccine / Full chain
    <div className="absolute inset-0 pointer-events-none opacity-20">
       <div className="scan-line" />
       <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
           <Atom size={500} strokeWidth={0.3} className="text-purple-500" />
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
              <p className="mt-4 text-lg text-slate-400 font-normal">
                浙江省肿瘤医院 / 中国科学院杭州医学研究所
              </p>
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
            
            <motion.div className="floating-icon icon-1" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <Cpu size={28} />
            </motion.div>
            <motion.div className="floating-icon icon-2" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}>
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

      {/* Scientific Projects - One slide per project with specific animations */}
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

      {/* Skills Section */}
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
              <Github size={24} />
              <span>GitHub</span>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={personalInfo.contact.linkedin} className="fancy-btn">
              <Linkedin size={24} />
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
;
er>
    </div>
  );
}

export default App;

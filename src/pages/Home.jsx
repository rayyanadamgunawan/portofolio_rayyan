import React, { useContext, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython } from 'react-icons/si';
import { LangContext } from '../contexts/LangContext';

// Komponen FadeIn pengganti Parallax yang berat
const FadeInSection = ({ children, style, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', width: '100%', ...style }}
    >
      {children}
    </motion.section>
  );
};

const featuredProjects = [
  {
    title: 'Enterprise Validation',
    desc: 'Odoo Web System with XML customization.',
    icon: '🖥️',
    color: '#00E5FF',
    link: '/projects',
    tech: ['Odoo', 'Python', 'XML']
  },
  {
    title: 'DSS Dashboard',
    desc: 'Multi-criteria decision support calculation engine.',
    icon: '📊',
    color: '#7F52FF',
    link: '/projects',
    tech: ['React', 'Firebase', 'Tailwind']
  },
  {
    title: 'EduCounsel',
    desc: 'E-Counseling portal with strict RBAC.',
    icon: '🛡️',
    color: '#F43F5E',
    link: '/projects',
    tech: ['Laravel', 'MySQL']
  }
];

const featuredSkills = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
];

const Home = () => {
  const navigate = useNavigate();
  const { lang, t } = useContext(LangContext);

  const sectionStyle = {
    padding: '8rem 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh', background: 'var(--bg-color)' }}>
      
      {/* ===== HERO SECTION ===== */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 5%',
        overflow: 'hidden'
      }}>
        {/* Eclipse Glow (Static CSS Gradient instead of JS Tracking) */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(127, 82, 255, 0.15) 0%, rgba(0, 229, 255, 0.05) 40%, rgba(3, 3, 5, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '900px', 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center'
        }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '2rem' }}
          >
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.2rem',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--accent-color)',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              {lang === 'id' ? 'Selamat Datang di Portofolio Cosmic' : 'Welcome to Cosmic Portfolio'}
            </div>
            
            <h1 className="hero-title text-gradient-quantum" style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              lineHeight: 1.1, 
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Rayyan Adam<br/>Gunawan
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
              color: 'var(--text-muted)', 
              maxWidth: '600px', 
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}>
              {lang === 'id' 
                ? 'Saya adalah seorang Software Engineer yang membangun aplikasi enterprise dengan performa tinggi.' 
                : 'I am a Software Engineer building high-performance enterprise applications.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <button className="primary-btn" onClick={() => navigate('/projects')}>
              {lang === 'id' ? 'Lihat Proyek' : 'View Projects'} <FaCode />
            </button>
            <button className="secondary-btn" onClick={() => navigate('/about')}>
              {lang === 'id' ? 'Tentang Saya' : 'About Me'}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}
          >
            <a href="https://github.com/rayyanadamgunawan" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}><FaGithub /></a>
            <a href="#" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}><FaLinkedin /></a>
            <a href="mailto:rayyanadamgunawan@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}><FaEnvelope /></a>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <FadeInSection style={sectionStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              {lang === 'id' ? 'Sorotan Karya' : 'Featured Work'}
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              {lang === 'id' ? 'Proyek Terbaik' : 'Top Projects'}
            </h2>
          </div>
          <button className="secondary-btn" onClick={() => navigate('/projects')} style={{ fontSize: '0.9rem' }}>
            {lang === 'id' ? 'Lihat Semua →' : 'View All →'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              onClick={() => navigate(proj.link)}
              style={{
                display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem 2rem',
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle hover glow using pseudo element approach conceptually done via simple radial bg */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: `radial-gradient(circle, ${proj.color}15 0%, transparent 70%)`, filter: 'blur(20px)', opacity: 0.6 }} />
              
              <span style={{ fontSize: '2.5rem' }}>{proj.icon}</span>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', zIndex: 1 }}>{proj.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, flex: 1, zIndex: 1 }}>{proj.desc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', zIndex: 1 }}>
                {proj.tech.map(tech => (
                  <span key={tech} style={{
                    fontSize: '0.75rem', fontWeight: 600, padding: '0.3rem 0.8rem',
                    borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </FadeInSection>

      {/* ===== SKILLS PREVIEW ===== */}
      <FadeInSection style={sectionStyle} delay={0.2}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              {lang === 'id' ? 'Yang Saya Kuasai' : 'What I Use'}
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              {lang === 'id' ? 'Teknologi Utama' : 'Main Tech Stack'}
            </h2>
          </div>
          <button className="secondary-btn" onClick={() => navigate('/skills')} style={{ fontSize: '0.9rem' }}>
            {lang === 'id' ? 'Lihat Semua →' : 'View All →'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.5rem' }}>
          {featuredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
              onClick={() => navigate('/skills')}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '1rem', padding: '2rem 1rem', borderRadius: '1rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer'
              }}
            >
              <skill.Icon size={45} color={skill.color} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeInSection>

      {/* ===== CTA ===== */}
      <FadeInSection style={{ ...sectionStyle, paddingBottom: '8rem' }} delay={0.2}>
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 4rem)',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
          borderRadius: '1rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', bottom: '-50%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(127,82,255,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
          
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.5rem',
            color: 'var(--text-main)', lineHeight: 1.2, position: 'relative', zIndex: 1
          }}>
            {lang === 'id' ? 'Mari Berkolaborasi' : "Let's Collaborate"}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>
            {lang === 'id'
              ? 'Saya terbuka untuk proyek freelance, kolaborasi, atau kesempatan kerja baru. Yuk, ngobrol!'
              : "I'm open to freelance projects, collaborations, or new job opportunities. Let's talk!"}
          </p>
          <button className="primary-btn" onClick={() => navigate('/contact')} style={{ fontSize: '1rem', padding: '1rem 3rem', position: 'relative', zIndex: 1 }}>
            {lang === 'id' ? 'Kirim Pesan 🚀' : 'Send a Message 🚀'}
          </button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Home;

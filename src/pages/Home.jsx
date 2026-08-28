import React, { useContext, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython } from 'react-icons/si';
import { LangContext } from '../contexts/LangContext';

// Komponen FadeIn untuk animasi muncul perlahan saat di-scroll
const FadeInSection = ({ children, style, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', width: '100%', ...style }}
    >
      {children}
    </motion.section>
  );
};

// Tag melayang di atas planet
const FloatingTag = ({ text, top, left, right, delay, icon }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    style={{
      position: 'absolute',
      top, left, right,
      padding: '0.6rem 1.2rem',
      borderRadius: '100px',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      color: 'var(--text-muted)',
      fontSize: '0.85rem',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 10,
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}
  >
    {icon && <span style={{ color: 'var(--text-main)' }}>{icon}</span>}
    {text}
  </motion.div>
);

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
  const { lang } = useContext(LangContext);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);
  const planetY = useTransform(scrollY, [0, 1000], [0, 300]);
  const tagsY = useTransform(scrollY, [0, 1000], [0, 150]);

  const sectionStyle = {
    padding: '8rem 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh', background: '#000' }}>
      
      {/* ===== HERO SECTION (MOTO CARD STYLE) ===== */}
      <section style={{ 
        position: 'relative', 
        height: '100vh',
        minHeight: '800px',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: '20vh',
        overflow: 'hidden'
      }}>
        
        {/* Typografi Tengah Atas */}
        <motion.div style={{ 
          y: textY,
          position: 'relative', 
          zIndex: 20, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 5%'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              lineHeight: 1.1, 
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase'
            }}>
              {lang === 'id' ? 'Infrastruktur' : 'Infrastructure'}<br/>
              {lang === 'id' ? 'Untuk Masa Depan' : 'For How You Build'}
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', 
              color: '#888', 
              maxWidth: '500px', 
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
              fontWeight: 500
            }}>
              {lang === 'id' 
                ? 'Dari sistem enterprise hingga antarmuka modern. Rayyan membangun ekosistem digital yang tangguh.' 
                : 'From enterprise systems to modern interfaces. Rayyan builds resilient digital ecosystems.'}
            </p>

            {/* Pill Button ala Moto Card */}
            <button 
              onClick={() => navigate('/projects')}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '100px',
                background: '#fff',
                color: '#000',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: 'none',
                transition: 'transform 0.2s, opacity 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              className="hover-target"
            >
              {lang === 'id' ? 'Lihat Proyek' : 'View Projects'}
            </button>
          </motion.div>
        </motion.div>

        {/* Planet Raksasa di Bawah */}
        <motion.div style={{
          y: planetY,
          position: 'absolute',
          bottom: '-60vw',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150vw',
          height: '150vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 0%, rgba(15, 23, 42, 1) 0%, rgba(0, 0, 0, 1) 40%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: 'inset 0 5px 30px rgba(255, 255, 255, 0.05), 0 -20px 100px rgba(127, 82, 255, 0.1)',
          zIndex: 5
        }}>
          {/* Atmosfer planet (Glow luar) */}
          <div style={{
            position: 'absolute',
            top: '-20px', left: '0', right: '0', height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(to top, rgba(127, 82, 255, 0.2), transparent)',
            filter: 'blur(20px)', pointerEvents: 'none'
          }}/>
        </motion.div>

        {/* Floating Tags (Badge ala Moto Card) */}
        <motion.div style={{ y: tagsY, position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
          <FloatingTag top="55%" left="15%" text="Odoo ERP" icon={<FaCode />} delay={0} />
          <FloatingTag top="65%" right="20%" text="Laravel Systems" icon={<FaLaptopCode />} delay={1.5} />
          <FloatingTag top="75%" left="25%" text="React / Flutter" icon={<FaRocket />} delay={0.8} />
        </motion.div>

      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <FadeInSection style={{...sectionStyle, paddingTop: '10rem'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#fff' }}>
              {lang === 'id' ? 'Proyek Unggulan' : 'Featured Work'}
            </h2>
            <p style={{ color: '#888', marginTop: '0.5rem' }}>
              {lang === 'id' ? 'Sistem yang dibangun dengan standar industri.' : 'Systems built with industry standards.'}
            </p>
          </div>
          <button 
            onClick={() => navigate('/projects')} 
            style={{ 
              background: 'transparent', border: '1px solid #333', color: '#fff', 
              padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem' 
            }}
            className="hover-target"
          >
            {lang === 'id' ? 'Lihat Semua' : 'View All'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              onClick={() => navigate(proj.link)}
              style={{
                display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem 2rem',
                borderRadius: '1.25rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle hover glow */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: `radial-gradient(circle, ${proj.color}15 0%, transparent 70%)`, filter: 'blur(20px)', opacity: 0.6 }} />
              
              <span style={{ fontSize: '2.5rem' }}>{proj.icon}</span>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', zIndex: 1 }}>{proj.title}</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.7, flex: 1, zIndex: 1 }}>{proj.desc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', zIndex: 1 }}>
                {proj.tech.map(tech => (
                  <span key={tech} style={{
                    fontSize: '0.75rem', fontWeight: 600, padding: '0.3rem 0.8rem',
                    borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: '#bbb'
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
      <FadeInSection style={sectionStyle} delay={0.1}>
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#fff' }}>
            {lang === 'id' ? 'Ekosistem Teknologi' : 'Technology Ecosystem'}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.5rem' }}>
          {featuredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
              onClick={() => navigate('/skills')}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '1rem', padding: '2rem 1rem', borderRadius: '1.25rem',
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.03)',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            >
              <skill.Icon size={45} color={skill.color} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#aaa' }}>
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
          background: 'rgba(255,255,255,0.01)',
          border: '1px solid rgba(255,255,255,0.03)',
          textAlign: 'center',
          borderRadius: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.5rem',
            color: '#fff', lineHeight: 1.2, position: 'relative', zIndex: 1, letterSpacing: '-0.02em'
          }}>
            {lang === 'id' ? 'Siap Berkolaborasi?' : "Ready to Collaborate?"}
          </h2>
          <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>
            {lang === 'id'
              ? 'Mari diskusikan bagaimana kita bisa membangun solusi digital yang tangguh bersama.'
              : "Let's discuss how we can build resilient digital solutions together."}
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            style={{ 
              background: '#fff', color: '#000', padding: '1rem 3rem', borderRadius: '100px', 
              fontWeight: 600, fontSize: '1rem', border: 'none', position: 'relative', zIndex: 1 
            }}
            className="hover-target"
          >
            {lang === 'id' ? 'Mulai Percakapan' : 'Start a Conversation'}
          </button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Home;

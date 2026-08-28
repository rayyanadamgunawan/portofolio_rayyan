import React, { useContext, useRef, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiLaravel, SiFirebase, SiFlutter } from 'react-icons/si';
import { LangContext } from '../contexts/LangContext';
import { manualProjects } from './Projects';
import { skills } from './Skills';

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

const featuredProjects = manualProjects.slice(0, 3).map(p => ({
  titleId: p.title,
  titleEn: p.titleEn,
  descId: p.description,
  descEn: p.descriptionEn,
  icon: p.icon,
  color: p.id === 1 ? '#7F52FF' : p.id === 2 ? '#00E5FF' : '#F43F5E',
  link: '/projects',
  tech: p.tech.slice(0, 3) // Hanya ambil 3 tekno pertama agar tidak terlalu penuh
}));

const featuredSkills = skills;

const Home = () => {
  const navigate = useNavigate();
  const { lang } = useContext(LangContext);
  
  const { scrollYProgress, scrollY } = useScroll();
  
  // Teks Hero menjauh dan menghilang
  const textY = useTransform(scrollY, [0, 800], [0, -200]);
  const textScale = useTransform(scrollY, [0, 800], [1, 0.8]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Planet Bumi (Earth) - Zoom out dan geser ke KANAN, tetap terlihat
  const earthScale = useTransform(scrollY, [0, 800], [1, 0.2]);
  const earthX = useTransform(scrollY, [0, 800], ["-50%", "30%"]);
  const earthY = useTransform(scrollY, [0, 800], ["60vh", "10vh"]);
  const earthOpacity = useTransform(scrollY, [0, 800], [1, 0.6]);
  
  // Bulan (Moon) - Muncul dari KIRI ke TENGAH, lalu Zoom out menetap di KIRI atas
  const moonScale = useTransform(scrollY, [400, 1200, 2000], [0.1, 1, 0.15]);
  const moonX = useTransform(scrollY, [400, 1200, 2000], ["-150%", "-50%", "-130%"]);
  const moonY = useTransform(scrollY, [400, 1200, 2000], ["100vh", "30vh", "-10vh"]);
  const moonOpacity = useTransform(scrollY, [400, 1000, 1600, 2000], [0, 1, 1, 0.7]);

  // Matahari (Sun) - Muncul terakhir di CTA
  const sunScale = useTransform(scrollY, [1600, 2500], [0.5, 1]);
  const sunY = useTransform(scrollY, [1600, 2500], ["100vh", "40vh"]);
  const sunOpacity = useTransform(scrollY, [1800, 2200], [0, 1]);

  const sectionStyle = {
    padding: '8rem 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden', minHeight: '100vh', background: '#000' }}>
      
      {/* ===== FIXED 3D SOLAR SYSTEM BACKGROUND ===== */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>

        {/* Matahari (Sun) - Paling Belakang */}
        <motion.div 
          style={{
            position: 'absolute', top: 0, left: '50%', x: '-50%', y: sunY,
            scale: sunScale, opacity: sunOpacity,
            width: '80vw', height: '80vw', maxWidth: '800px', maxHeight: '800px',
            zIndex: 1
          }} 
        >
          {/* Efek Solar Flare yang Berputar */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(255, 150, 0, 0.2) 0deg, rgba(255, 60, 0, 0.8) 90deg, rgba(255, 200, 0, 0.2) 180deg, rgba(255, 60, 0, 0.8) 270deg, rgba(255, 150, 0, 0.2) 360deg)',
              filter: 'blur(20px)',
            }}
          />
          {/* Inti Matahari */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 220, 100, 1) 0%, rgba(255, 120, 0, 0.8) 20%, rgba(200, 30, 0, 0.3) 50%, transparent 70%)',
            boxShadow: '0 -20px 150px rgba(255, 100, 0, 0.6), inset 0 20px 100px rgba(255, 200, 0, 0.8)',
          }} />
        </motion.div>

        {/* Bulan (Moon) - Tengah */}
        <motion.div style={{
          position: 'absolute', top: 0, left: '50%', x: moonX, y: moonY,
          scale: moonScale, opacity: moonOpacity,
          width: '60vw', height: '60vw', maxWidth: '600px', maxHeight: '600px',
          zIndex: 2,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          mixBlendMode: 'screen'
        }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Full_Moon_Luc_Viatour.jpg" 
            alt="Moon"
            style={{
              width: '100%', height: '100%', objectFit: 'contain',
              filter: 'contrast(1.2) brightness(0.9) drop-shadow(0 0 40px rgba(255,255,255,0.2))',
              WebkitMaskImage: 'radial-gradient(closest-side, black 96%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 96%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Planet Bumi (Earth) - Paling Depan */}
        <motion.div style={{
          position: 'absolute', top: 0, left: '50%', x: earthX, y: earthY,
          scale: earthScale, opacity: earthOpacity,
          width: '120vw', height: '120vw', maxWidth: '1000px', maxHeight: '1000px',
          zIndex: 3,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" 
            alt="Earth"
            style={{
              width: '110%', height: '110%', objectFit: 'contain',
              filter: 'drop-shadow(0 0 80px rgba(127, 82, 255, 0.8))'
            }}
          />
        </motion.div>
      </div>

      {/* ===== HERO SECTION (MOTO CARD STYLE) ===== */}
      <section style={{ 
        position: 'relative', 
        height: '100vh',
        minHeight: '800px',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: '20vh'
      }}>
        
        {/* Typografi Tengah Atas */}
        <motion.div style={{ 
          y: textY,
          scale: textScale,
          opacity: textOpacity,
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
              textTransform: 'uppercase',
              overflow: 'hidden'
            }}>
              <motion.span 
                initial={{ y: '100%' }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
                style={{ display: 'block' }}
              >
                {lang === 'id' ? 'Infrastruktur' : 'Infrastructure'}
              </motion.span>
              <motion.span 
                initial={{ y: '100%' }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} 
                style={{ display: 'block' }}
              >
                {lang === 'id' ? 'Untuk Masa Depan' : 'For How You Build'}
              </motion.span>
            </h1>
            
            <p style={{ 
              color: '#aaa', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', 
              maxWidth: '600px', lineHeight: 1.8,
              fontWeight: 500,
              margin: '0 auto 2.5rem',
              textAlign: 'center'
            }}>
              {lang === 'id' 
                ? 'Dari sistem enterprise hingga antarmuka modern. Membantu membangun & siap berkolaborasi untuk ekosistem digital yang tangguh.' 
                : 'From enterprise systems to modern interfaces. Helping build & ready to collaborate for resilient digital ecosystems.'}
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

      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <FadeInSection style={{...sectionStyle, paddingTop: '10rem'}}>
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
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

        <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
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
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', zIndex: 1 }}>{lang === 'id' ? proj.titleId : proj.titleEn}</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.7, flex: 1, zIndex: 1 }}>{lang === 'id' ? proj.descId : proj.descEn}</p>
              
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
      <FadeInSection style={{ ...sectionStyle, paddingBottom: '8rem', position: 'relative' }} delay={0.2}>
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 4rem)',
          background: 'rgba(255,255,255,0.01)',
          border: '1px solid rgba(255,255,255,0.03)',
          textAlign: 'center',
          borderRadius: '2rem',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10,
          backdropFilter: 'blur(10px)'
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
              fontWeight: 600, fontSize: '1rem', border: 'none', position: 'relative', zIndex: 1,
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#FF8C00';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 140, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = 'none';
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

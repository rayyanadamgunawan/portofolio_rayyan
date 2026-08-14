import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../contexts/LangContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiPhp, SiLaravel,
  SiNodedotjs, SiPython, SiMysql, SiKotlin, SiFirebase,
  SiGit, SiDocker, SiPostgresql, SiOdoo, SiFlutter,
} from 'react-icons/si';

// ===== Reusable Parallax Section wrapper =====
const ParallaxSection = ({ children, yRange = [60, -60], style = {} }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity, ...style }}
    >
      {children}
    </motion.section>
  );
};

// ===== Data =====
const featuredSkills = [
  { name: 'HTML', color: '#E34F26', Icon: SiHtml5 },
  { name: 'CSS', color: '#1572B6', Icon: SiCss },
  { name: 'Laravel', color: '#FF2D20', Icon: SiLaravel },
  { name: 'PHP', color: '#777BB4', Icon: SiPhp },
  { name: 'Odoo', color: '#714B67', Icon: SiOdoo },
  { name: 'Firebase', color: '#FFCA28', Icon: SiFirebase },
  { name: 'Flutter', color: '#02569B', Icon: SiFlutter },
];

const featuredProjects = [
  {
    title: 'Portofolio Rayyan',
    desc: 'Website portofolio interaktif bergaya Cosmic Aurora dengan animasi Framer Motion, parallax, dan live GitHub integration.',
    tech: ['React', 'Vite', 'Framer Motion'],
    color: '#a855f7',
    icon: '🌌',
    link: 'https://github.com/rayyanadamgunawan/portofolio_rayyan',
  },
  {
    title: 'Android App',
    desc: 'Aplikasi mobile native Android yang dikembangkan menggunakan Kotlin dengan arsitektur modern dan UI yang responsif.',
    tech: ['Kotlin', 'Android', 'Firebase'],
    color: '#7F52FF',
    icon: '📱',
    link: 'https://github.com/rayyanadamgunawan',
  },
  {
    title: 'Sistem ERP Odoo',
    desc: 'Kustomisasi modul ERP berbasis Odoo untuk manajemen bisnis, inventaris, dan keuangan perusahaan.',
    tech: ['Odoo', 'Python', 'PostgreSQL'],
    color: '#06b6d4',
    icon: '🏢',
    link: 'https://github.com/rayyanadamgunawan',
  },
];

const stats = [
  { value: '15+', label: 'Teknologi', labelEn: 'Technologies' },
  { value: '3.8', label: 'IPK', labelEn: 'GPA' },
  { value: '2+', label: 'Tahun Belajar', labelEn: 'Years Learning' },
  { value: '∞', label: 'Semangat', labelEn: 'Passion' },
];

// ===== Main Component =====
const Home = () => {
  const { lang, t } = useContext(LangContext);
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const { scrollY } = useScroll();
  const yOrb = useTransform(scrollY, [0, 1000], [0, 400]);
  const yTitle = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  const skills = [
    { name: 'HTML', color: '#E34F26', Icon: SiHtml5 },
    { name: 'CSS', color: '#1572B6', Icon: SiCss },
    { name: 'React.js', color: '#61DAFB', Icon: SiReact },
    { name: 'TailwindCSS', color: '#38B2AC', Icon: SiTailwindcss },
    { name: 'PHP', color: '#777BB4', Icon: SiPhp },
    { name: 'Laravel', color: '#FF2D20', Icon: SiLaravel },
    { name: 'Node.js', color: '#339933', Icon: SiNodedotjs },
    { name: 'Python', color: '#3776AB', Icon: SiPython },
    { name: 'Odoo', color: '#714B67', Icon: SiOdoo },
    { name: 'MySQL', color: '#4479A1', Icon: SiMysql },
    { name: 'PostgreSQL', color: '#336791', Icon: SiPostgresql },
    { name: 'Firebase', color: '#FFCA28', Icon: SiFirebase },
    { name: 'Git', color: '#F05032', Icon: SiGit },
    { name: 'Docker', color: '#2496ED', Icon: SiDocker },
    { name: 'Kotlin', color: '#7F52FF', Icon: SiKotlin },
    { name: 'Flutter', color: '#02569B', Icon: SiFlutter },
  ];
  const marqueeSkills = [...skills, ...skills, ...skills];

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const sectionStyle = {
    padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    willChange: 'transform',
  };

  return (
    <div className="home-page">
      <div className="noise-overlay"></div>

      {/* ===== HERO ===== */}
      <div className="hero-container">
        <div className="hero-orb-container">
          <motion.div
            className="hero-orb"
            animate={{ left: `calc(${mousePos.x}vw)`, top: `calc(${mousePos.y}vh)` }}
            style={{ y: yOrb }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1.5 }}
          />
        </div>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: yTitle }}
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            {lang === 'id' ? 'Halo, Saya Rayyan Adam Gunawan.' : 'Hello, I am Rayyan Adam Gunawan.'}
          </motion.div>
          <motion.h1 variants={itemVariants} className="hero-title">
            Web &amp; Mobile Developer
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-desc">
            {t('description1')}
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <button className="primary-btn hover-target" onClick={() => navigate('/skills')}>
              {lang === 'id' ? 'Jelajahi' : 'Explore'}
            </button>
            <button onClick={() => navigate('/contact')} className="secondary-btn hover-target">
              {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== MARQUEE ===== */}
      <div id="skills" className="skills-section">
        <motion.div
          className="marquee-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="marquee-content"
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          >
            {marqueeSkills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <skill.Icon size={18} color={skill.color} style={{ flexShrink: 0 }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ===== STATS ===== */}
      <ParallaxSection yRange={[80, -40]} style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 'clamp(1rem, 2vw, 2rem)' }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: 'easeOut' }}
              style={{
                textAlign: 'center', padding: 'clamp(1.2rem, 3vw, 2rem) 1rem',
                borderRadius: '1.5rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
            >
              <div style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontFamily: 'var(--font-heading)', fontWeight: 800,
                background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                {lang === 'id' ? stat.label : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>

      {/* ===== FEATURED PROJECTS ===== */}
      <ParallaxSection yRange={[100, -50]} style={sectionStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ color: 'var(--accent-secondary)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem' }}
            >
              {lang === 'id' ? 'Beberapa Karya' : 'Featured Work'}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              {lang === 'id' ? 'Proyek Terbaik' : 'Top Projects'}
            </motion.h2>
          </div>
          <button className="secondary-btn hover-target" onClick={() => navigate('/projects')} style={{ fontSize: '0.9rem' }}>
            {lang === 'id' ? 'Lihat Semua →' : 'View All →'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          {featuredProjects.map((proj, idx) => (
            <motion.a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="hover-target"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.14, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${proj.color}30` }}
              style={{
                display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem',
                borderRadius: '1.5rem',
                background: `radial-gradient(circle at 20% 20%, ${proj.color}12, rgba(var(--bg-main-rgb), 0.9))`,
                border: '1px solid var(--card-border)',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none', cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '2.5rem' }}>{proj.icon}</span>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>{proj.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>{proj.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {proj.tech.map(tech => (
                  <span key={tech} style={{
                    fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.8rem',
                    borderRadius: '999px', background: `${proj.color}18`, border: `1px solid ${proj.color}40`, color: proj.color,
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </ParallaxSection>

      {/* ===== SKILLS PREVIEW ===== */}
      <ParallaxSection yRange={[100, -50]} style={sectionStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ color: 'var(--accent-secondary)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem' }}
            >
              {lang === 'id' ? 'Yang Saya Kuasai' : 'What I Use'}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              {lang === 'id' ? 'Teknologi Utama' : 'Main Tech Stack'}
            </motion.h2>
          </div>
          <button className="secondary-btn hover-target" onClick={() => navigate('/skills')} style={{ fontSize: '0.9rem' }}>
            {lang === 'id' ? 'Lihat Semua →' : 'View All →'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '0.85rem' }}>
          {featuredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: `0 0 30px ${skill.color}50` }}
              transition={{ delay: idx * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hover-target"
              onClick={() => navigate('/skills')}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '0.75rem', padding: '1.8rem 1rem', borderRadius: '1.2rem',
                background: `radial-gradient(circle at 30% 30%, ${skill.color}18, rgba(var(--bg-main-rgb),0.9))`,
                border: `1px solid var(--card-border)`,
              }}
            >
              <span style={{ fontSize: '2.5rem', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <skill.Icon size={40} color={skill.color} style={{ filter: `drop-shadow(0 0 8px ${skill.color})` }} />
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.04em', textAlign: 'center' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>

      {/* ===== CTA ===== */}
      <ParallaxSection yRange={[80, -30]} style={{ ...sectionStyle, paddingBottom: '8rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem)',
            background: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.12), rgba(6,182,212,0.06), rgba(var(--bg-main-rgb),0.9))',
            border: '1px solid var(--border-color)',
            boxShadow: '0 0 80px rgba(168,85,247,0.08)',
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'var(--accent-secondary)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            {lang === 'id' ? 'Tertarik Bekerja Sama?' : 'Interested in Working Together?'}
          </p>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, var(--text-main), var(--accent-color))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1,
          }}>
            {lang === 'id' ? 'Mari Berkolaborasi' : "Let's Collaborate"}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            {lang === 'id'
              ? 'Saya terbuka untuk proyek freelance, kolaborasi, atau kesempatan kerja baru. Yuk, ngobrol!'
              : "I'm open to freelance projects, collaborations, or new job opportunities. Let's talk!"}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="primary-btn hover-target" onClick={() => navigate('/contact')} style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              {lang === 'id' ? 'Kirim Pesan 🚀' : 'Send a Message 🚀'}
            </button>
          </div>
        </motion.div>
      </ParallaxSection>
    </div>
  );
};

export default Home;

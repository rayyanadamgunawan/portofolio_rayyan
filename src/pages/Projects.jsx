import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const manualProjects = [
  {
    id: 1,
    title: 'Portofolio Cosmic Aurora',
    titleEn: 'Cosmic Aurora Portfolio',
    description: 'Website portofolio interaktif dengan animasi WebGL/Framer Motion, mode Gelap/Terang, dan performa tinggi.',
    descriptionEn: 'Interactive portfolio website with WebGL/Framer Motion animations, Dark/Light modes, and high performance.',
    features: ['Smooth fluid background', 'Glassmorphism UI', 'Bilingual Support (ID/EN)'],
    featuresEn: ['Smooth fluid background', 'Glassmorphism UI', 'Bilingual Support (ID/EN)'],
    tech: ['React.js', 'Framer Motion', 'TailwindCSS', 'Vite'],
    link: 'https://github.com/rayyanadamgunawan/portofolio_rayyan',
    demo: 'https://rayyan-portfolio-82b30.web.app/'
  },
  {
    id: 2,
    title: 'Sistem Manajemen ERP (Odoo)',
    titleEn: 'ERP Management System (Odoo)',
    description: 'Pengembangan dan kustomisasi modul ERP berbasis Odoo untuk mengelola inventaris, penjualan, dan akuntansi bisnis secara terintegrasi.',
    descriptionEn: 'Development and customization of Odoo-based ERP modules to manage business inventory, sales, and accounting in an integrated manner.',
    features: ['Custom Module Creation', 'Automated Workflows', 'PostgreSQL Database Integration'],
    featuresEn: ['Custom Module Creation', 'Automated Workflows', 'PostgreSQL Database Integration'],
    tech: ['Odoo', 'Python', 'PostgreSQL', 'XML'],
    link: 'https://github.com/rayyanadamgunawan'
  },
  {
    id: 3,
    title: 'Aplikasi Mobile Keuangan',
    titleEn: 'Financial Mobile App',
    description: 'Aplikasi pencatatan keuangan native berbasis Android untuk melacak pemasukan, pengeluaran, dan visualisasi grafik secara real-time.',
    descriptionEn: 'Native Android financial tracking app for tracking income, expenses, and real-time chart visualizations.',
    features: ['Real-time Sync', 'Authentication', 'Interactive Charts'],
    featuresEn: ['Real-time Sync', 'Authentication', 'Interactive Charts'],
    tech: ['Kotlin', 'Android Studio', 'Firebase', 'Material UI'],
    link: 'https://github.com/rayyanadamgunawan'
  }
];

const Projects = () => {
  const { lang, t } = useContext(LangContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <div className="page-content projects-page">
      <motion.h1 
        className="section-title text-gradient-quantum"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('projects')}
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {lang === 'id' 
          ? 'Kumpulan proyek terbaik yang pernah saya bangun.'
          : 'A collection of my best crafted projects.'}
      </motion.p>

      <motion.div 
        className="projects-grid mt-12"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          width: '100%',
          padding: '1rem 0'
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {manualProjects.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card glass-panel hover-target"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.05, pointerEvents: 'none' }}>
              <FaRocket size={120} />
            </div>

            <h3 style={{ 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: 'var(--text-main)', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              {lang === 'id' ? project.title : project.titleEn}
            </h3>
            
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              flexGrow: 1
            }}>
              {lang === 'id' ? project.description : project.descriptionEn}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lang === 'id' ? 'Fitur Utama:' : 'Key Features:'}
              </h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {(lang === 'id' ? project.features : project.featuresEn).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem', 
              marginBottom: '1.5rem' 
            }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  borderRadius: '100px',
                  backgroundColor: 'rgba(127, 82, 255, 0.1)',
                  color: 'var(--accent-color)',
                  border: '1px solid rgba(127, 82, 255, 0.2)',
                  fontWeight: 600
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              marginTop: 'auto', 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '1.25rem' 
            }}>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-target"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: 'var(--text-main)', 
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  <FaGithub size={18} /> GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-target"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: 'var(--accent-secondary)', 
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

import React, { useContext, useState } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaTimes, FaBookOpen, FaUserCircle } from 'react-icons/fa';

const manualProjects = [
  {
    id: 1,
    title: 'Bintang Baca',
    titleEn: 'Bintang Baca (Reading Star)',
    icon: <FaBookOpen size={40} />,
    description: 'Platform literasi digital interaktif yang dirancang untuk meningkatkan minat baca. Dibangun dengan ekosistem React modern dan database real-time.',
    descriptionEn: 'An interactive digital literacy platform designed to foster a love for reading. Built with a modern React ecosystem and a real-time database.',
    fullDesc: 'Aplikasi Bintang Baca adalah platform komprehensif yang menjembatani pengguna dengan berbagai materi literasi. Sistem ini menggunakan Firebase untuk sinkronisasi data real-time dan autentikasi yang aman. Arsitektur front-end dikembangkan menggunakan Vite + React untuk performa maksimal, sementara Framer Motion memberikan transisi animasi yang sangat mulus antar halaman. Antarmukanya menggunakan TailwindCSS untuk memastikan pengalaman responsif yang konsisten di perangkat desktop maupun mobile.',
    fullDescEn: 'The Bintang Baca app is a comprehensive platform bridging users with various literacy materials. The system utilizes Firebase for real-time data synchronization and secure authentication. The front-end architecture is developed using Vite + React for maximum performance, while Framer Motion provides silky-smooth animated transitions between pages. The interface uses TailwindCSS to ensure a consistently responsive experience across desktop and mobile devices.',
    features: ['Sistem Autentikasi Pengguna Firebase', 'Sinkronisasi Data Real-time', 'Animasi UI/UX Tingkat Lanjut', 'Responsive Layout'],
    featuresEn: ['Firebase User Authentication System', 'Real-time Data Synchronization', 'Advanced UI/UX Animations', 'Responsive Layout'],
    tech: ['React.js', 'Vite', 'Firebase', 'Framer Motion', 'TailwindCSS'],
    link: 'https://github.com/rayyanadamgunawan/bintang-baca',
    demo: null
  },
  {
    id: 2,
    title: 'Portofolio Cosmic',
    titleEn: 'Cosmic Portfolio',
    icon: <FaUserCircle size={40} />,
    description: 'Website personal branding dengan performa tinggi. Menampilkan fluid background animation dan efek glassmorphism tingkat lanjut.',
    descriptionEn: 'High-performance personal branding website featuring fluid background animations and advanced glassmorphism effects.',
    fullDesc: 'Proyek portofolio ini adalah kanvas digital untuk memamerkan keterampilan teknis dan artistik. Inti dari website ini adalah optimasi rendering grafis menggunakan CSS dan Framer Motion tanpa membebani thread utama (menghindari lag). Dilengkapi dengan dukungan dua bahasa (Internasionalisasi) dan sistem tema (Gelap/Terang) yang dikelola melalui React Context API.',
    fullDescEn: 'This portfolio project is a digital canvas to showcase technical and artistic skills. The core of this website is the optimization of graphics rendering using CSS and Framer Motion without blocking the main thread (preventing lag). It is fully equipped with bilingual support (Internationalization) and a theme system (Dark/Light) managed via React Context API.',
    features: ['Custom Fluid WebGL-like Background', 'Sistem Multi-bahasa (ID/EN)', 'Peralihan Tema Dinamis (Dark/Light)'],
    featuresEn: ['Custom Fluid WebGL-like Background', 'Multi-language System (ID/EN)', 'Dynamic Theme Switching (Dark/Light)'],
    tech: ['React.js', 'TailwindCSS', 'Framer Motion', 'Vite'],
    link: 'https://github.com/rayyanadamgunawan/portofolio_rayyan',
    demo: 'https://rayyan-portfolio-82b30.web.app/'
  }
];

const Projects = () => {
  const { lang, t } = useContext(LangContext);
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = manualProjects.find(p => p.id === selectedId);

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
          ? 'Kumpulan proyek dari repositori saya. Klik kartu untuk melihat rincian arsitektur sistemnya.'
          : 'A collection of projects from my repositories. Click a card to read the system architecture details.'}
      </motion.p>

      {/* Grid Utama */}
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
            layoutId={`project-container-${project.id}`}
            key={project.id} 
            className="project-card glass-panel hover-target"
            variants={itemVariants}
            onClick={() => setSelectedId(project.id)}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <motion.div layoutId={`project-iconbg-${project.id}`} style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.05, pointerEvents: 'none' }}>
              <div style={{ transform: 'scale(3)' }}>{project.icon}</div>
            </motion.div>

            <motion.h3 layoutId={`project-title-${project.id}`} style={{ 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: 'var(--text-main)', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              {lang === 'id' ? project.title : project.titleEn}
            </motion.h3>
            
            <motion.p layoutId={`project-desc-${project.id}`} style={{ 
              fontSize: '0.95rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              flexGrow: 1
            }}>
              {lang === 'id' ? project.description : project.descriptionEn}
            </motion.p>

            <motion.div layoutId={`project-tech-${project.id}`} style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem', 
              marginTop: 'auto' 
            }}>
              {project.tech.slice(0,3).map((t, i) => (
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
              {project.tech.length > 3 && (
                <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>+{project.tech.length - 3}</span>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Modal (Layar Melebar) */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <React.Fragment>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                zIndex: 999,
                cursor: 'pointer'
              }}
            />
            
            <div style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              pointerEvents: 'none'
            }}>
              <motion.div
                layoutId={`project-container-${selectedId}`}
                className="glass-panel"
                style={{
                  width: '90%',
                  maxWidth: '800px',
                  maxHeight: '85vh',
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  overflowY: 'auto',
                  pointerEvents: 'auto',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    padding: '8px',
                    zIndex: 10
                  }}
                >
                  <FaTimes size={24} />
                </button>

                <motion.div layoutId={`project-iconbg-${selectedProject.id}`} style={{ position: 'absolute', top: '10%', right: '-5%', opacity: 0.03, pointerEvents: 'none' }}>
                  <div style={{ transform: 'scale(10)' }}>{selectedProject.icon}</div>
                </motion.div>

                <motion.h2 layoutId={`project-title-${selectedProject.id}`} style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  fontWeight: 800, 
                  color: 'var(--text-main)', 
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-heading)',
                  paddingRight: '40px'
                }}>
                  {lang === 'id' ? selectedProject.title : selectedProject.titleEn}
                </motion.h2>

                <motion.p layoutId={`project-desc-${selectedProject.id}`} style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--accent-secondary)', 
                  fontWeight: 500,
                  marginBottom: '2rem'
                }}>
                  {lang === 'id' ? selectedProject.description : selectedProject.descriptionEn}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'id' ? 'Arsitektur & Penjelasan:' : 'Architecture & Explanation:'}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                      {lang === 'id' ? selectedProject.fullDesc : selectedProject.fullDescEn}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'id' ? 'Fitur Utama:' : 'Key Features:'}
                    </h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                      {(lang === 'id' ? selectedProject.features : selectedProject.featuresEn).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Tech Stack:
                    </h4>
                    <motion.div layoutId={`project-tech-${selectedProject.id}`} style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.75rem'
                    }}>
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} style={{
                          padding: '0.4rem 1rem',
                          fontSize: '0.85rem',
                          borderRadius: '100px',
                          backgroundColor: 'rgba(127, 82, 255, 0.1)',
                          color: 'var(--accent-color)',
                          border: '1px solid rgba(127, 82, 255, 0.2)',
                          fontWeight: 600
                        }}>
                          {t}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem',
                    marginTop: '1rem', 
                    borderTop: '1px solid var(--border-color)', 
                    paddingTop: '2rem' 
                  }}>
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-target primary-btn"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                      >
                        <FaGithub size={20} /> View Source Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-target secondary-btn"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                      >
                        <FaExternalLinkAlt size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../contexts/LangContext';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { lang, t } = useContext(LangContext);
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); // Center initial position
  
  // Setup Scroll hooks for parallax
  const { scrollY } = useScroll();
  // Orb moves up slower than the page scrolls
  const yOrb = useTransform(scrollY, [0, 1000], [0, 400]);
  // Title moves up faster than page scroll (parallax depth)
  const yTitle = useTransform(scrollY, [0, 500], [0, -150]);

  // Handle mouse move for Aurora Blob
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate cursor position as a percentage of the screen
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
  };

  const skills = [
    { name: 'HTML', color: '#E34F26', icon: '🔥' },
    { name: 'CSS', color: '#1572B6', icon: '💧' },
    { name: 'React.js', color: '#61DAFB', icon: '⚛️' },
    { name: 'TailwindCSS', color: '#38B2AC', icon: '💨' },
    { name: 'PHP', color: '#777BB4', icon: '🐘' },
    { name: 'Laravel', color: '#FF2D20', icon: '🌶️' },
    { name: 'Node.js', color: '#339933', icon: '🟩' },
    { name: 'Python', color: '#3776AB', icon: '🐍' },
    { name: 'Odoo', color: '#714B67', icon: '🟣' },
    { name: 'MySQL', color: '#4479A1', icon: '🐬' },
    { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
    { name: 'Firebase', color: '#FFCA28', icon: '🔥' },
    { name: 'Git', color: '#F05032', icon: '📦' },
    { name: 'Docker', color: '#2496ED', icon: '🐳' },
    { name: 'VS Code', color: '#007ACC', icon: '💻' },
    { name: 'Kotlin', color: '#7F52FF', icon: '📱' }
  ];

  // Marquee double array for infinite scrolling effect
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <div className="home-page">
      {/* Background Noise & Orb */}
      <div className="noise-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-orb-container">
          <motion.div 
            className="hero-orb"
            animate={{
              left: `calc(${mousePos.x}vw)`,
              top: `calc(${mousePos.y}vh)`,
            }}
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
            Web & Mobile Developer
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

      <div id="skills" className="skills-section">
        <motion.div 
          className="marquee-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="marquee-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {marqueeSkills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

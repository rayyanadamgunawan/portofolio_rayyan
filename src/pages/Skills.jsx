import React, { useContext, useState } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiPhp, SiLaravel,
  SiNodedotjs, SiPython, SiMysql, SiKotlin, SiFirebase,
  SiGit, SiDocker, SiPostgresql, SiOdoo, SiFlutter, SiGitea
} from 'react-icons/si';

export const skills = [
  { name: 'HTML', level: 90, color: '#E34F26', Icon: SiHtml5, desc: 'Semantic markup & structure' },
  { name: 'CSS', level: 85, color: '#1572B6', Icon: SiCss, desc: 'Layouts, animations & responsive design' },
  { name: 'React.js', level: 85, color: '#61DAFB', Icon: SiReact, desc: 'Component-based UI development' },
  { name: 'TailwindCSS', level: 82, color: '#38B2AC', Icon: SiTailwindcss, desc: 'Utility-first CSS framework' },
  { name: 'PHP', level: 80, color: '#777BB4', Icon: SiPhp, desc: 'Server-side scripting & APIs' },
  { name: 'Laravel', level: 80, color: '#FF2D20', Icon: SiLaravel, desc: 'MVC framework for PHP backends' },
  { name: 'Node.js', level: 75, color: '#339933', Icon: SiNodedotjs, desc: 'JavaScript runtime for servers' },
  { name: 'Python', level: 75, color: '#3776AB', Icon: SiPython, desc: 'Data processing & scripting' },
  { name: 'MySQL', level: 80, color: '#4479A1', Icon: SiMysql, desc: 'Relational database management' },
  { name: 'Kotlin', level: 70, color: '#7F52FF', Icon: SiKotlin, desc: 'Native Android app development' },
  { name: 'Firebase', level: 75, color: '#FFCA28', Icon: SiFirebase, desc: 'Realtime DB & authentication' },
  { name: 'Odoo', level: 70, color: '#714B67', Icon: SiOdoo, desc: 'ERP system development' },
  { name: 'Git', level: 80, color: '#F05032', Icon: SiGit, desc: 'Version control & collaboration' },
  { name: 'Gitea', level: 75, color: '#609926', Icon: SiGitea, desc: 'Self-hosted Git service' },
  { name: 'Docker', level: 65, color: '#2496ED', Icon: SiDocker, desc: 'Containerization & deployment' },
  { name: 'PostgreSQL', level: 78, color: '#336791', Icon: SiPostgresql, desc: 'Advanced relational database' },
  { name: 'Flutter', level: 70, color: '#02569B', Icon: SiFlutter, desc: 'Cross-platform mobile development' },
];

const CircularProgress = ({ level, color, size = 160 }) => {
  const r = 58;
  const circ = 2 * Math.PI * r;
  const offset = circ - (level / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 130 130" style={{ overflow: 'visible' }}>
      <circle cx="65" cy="65" r={r} fill="none" stroke="var(--card-border)" strokeWidth="6" />
      <motion.circle
        cx="65" cy="65" r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{ transformOrigin: '65px 65px', rotate: '-90deg', filter: `drop-shadow(0 0 10px ${color})` }}
      />
      <text x="65" y="58" textAnchor="middle" fill="var(--text-main)" fontSize="24" fontWeight="800" fontFamily="Montserrat, sans-serif">
        {level}%
      </text>
      <text x="65" y="76" textAnchor="middle" fill="var(--text-muted)" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="2">
        MASTERY
      </text>
    </svg>
  );
};

const Skills = () => {
  const { lang, t } = useContext(LangContext);
  const [selected, setSelected] = useState(null);

  const marqueeSkills = [...skills, ...skills];

  const handleSelect = (skill) => {
    setSelected(prev => prev?.name === skill.name ? null : skill);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const orbColumns = isMobile ? 3 : null;

  const { scrollY } = useScroll();
  const planetY = useTransform(scrollY, [0, 1500], [0, -300]);

  const ORB_SIZE = isMobile ? 80 : 120;

  return (
    <div className="page-content" style={{ position: 'relative' }}>
      {/* Latar Belakang Planet (Neptunus) */}
      <motion.img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg" 
        alt="Neptunus"
        initial={{ x: 200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.4, scale: 1, rotate: -360 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 1, type: "spring", delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          rotate: { duration: 220, repeat: Infinity, ease: "linear" }
        }}
        style={{
          position: 'absolute',
          top: '40%',
          right: '-25%',
          y: planetY,
          width: '70vw',
          maxWidth: '800px',
          zIndex: -1,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 50px rgba(0,100,255,0.3))',
          willChange: 'transform, filter',
          transform: 'translateZ(0)'
        }}
      />

      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('skills')}
      </motion.h1>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {lang === 'id'
          ? 'Klik salah satu skill untuk melihat detail penguasaannya.'
          : 'Click a skill bubble to reveal its mastery details.'}
      </motion.p>

      <div style={{ display: 'flex', gap: isMobile ? '2rem' : '3rem', alignItems: isMobile ? 'center' : 'flex-start', marginTop: '2rem', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>

        {/* ===== Orbs Grid ===== */}
        <motion.div
          layout
          style={{
            flex: 1,
            minWidth: isMobile ? '100%' : '320px',
            display: 'grid',
            gridTemplateColumns: isMobile
              ? `repeat(3, 1fr)`
              : `repeat(auto-fill, minmax(${ORB_SIZE}px, 1fr))`,
            gap: isMobile ? '1rem' : '2rem',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          {skills.map((skill, idx) => {
            const isSelected = selected?.name === skill.name;
            const hasSelection = selected !== null;
            const { Icon } = skill;

            return (
              <motion.div
                key={skill.name}
                onClick={() => handleSelect(skill)}
                className="hover-target"
                animate={{
                  scale: isSelected ? 0 : hasSelection ? 0.82 : 1,
                  opacity: isSelected ? 0 : hasSelection ? 0.45 : 1,
                  y: [0, -(8 + (idx % 4) * 5), 0, (4 + (idx % 2) * 3), 0],
                }}
                transition={{
                  scale: { duration: 0.35, ease: 'backIn' },
                  opacity: { duration: 0.3 },
                  y: { duration: 3.5 + (idx % 4) * 0.8, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.18 },
                }}
                whileHover={{ scale: isSelected ? 0 : hasSelection ? 0.9 : 1.12 }}
                style={{
                  width: `${ORB_SIZE}px`,
                  height: `${ORB_SIZE}px`,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: `radial-gradient(circle at 35% 35%, ${skill.color}35, rgba(var(--bg-main-rgb),0.92))`,
                  border: `2px solid ${skill.color}55`,
                  boxShadow: `0 0 24px ${skill.color}35, 0 0 50px ${skill.color}15`,
                  backdropFilter: 'blur(10px)',
                  pointerEvents: isSelected ? 'none' : 'auto',
                  userSelect: 'none',
                }}
              >
                <Icon size={36} color={skill.color} style={{ filter: `drop-shadow(0 0 6px ${skill.color})` }} />
                <span style={{
                  fontSize: '0.62rem',
                  color: 'var(--text-main)',
                  marginTop: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  padding: '0 10px',
                }}>
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===== Detail Panel ===== */}
        <div style={{ width: '300px', flexShrink: 0, minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, x: 60, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.85 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '100%',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  background: `radial-gradient(circle at 30% 20%, ${selected.color}22, rgba(var(--bg-main-rgb),0.95))`,
                  border: `1.5px solid ${selected.color}55`,
                  boxShadow: `0 0 60px ${selected.color}30, 0 0 120px ${selected.color}10`,
                  backdropFilter: 'blur(24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.2rem',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                {/* Big real icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 14 }}
                  style={{ filter: `drop-shadow(0 0 20px ${selected.color})` }}
                >
                  <selected.Icon size={72} color={selected.color} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, textAlign: 'center' }}
                >
                  {selected.name}
                </motion.h2>

                <CircularProgress level={selected.level} color={selected.color} size={160} />

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}
                >
                  {selected.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  style={{
                    padding: '0.3rem 1.2rem', borderRadius: '999px',
                    background: `${selected.color}22`, border: `1px solid ${selected.color}55`,
                    color: selected.color, fontSize: '0.8rem', fontWeight: 700,
                    letterSpacing: '0.08em', fontFamily: 'var(--font-heading)',
                  }}
                >
                  {selected.level >= 85 ? 'ADVANCED' : selected.level >= 75 ? 'PROFICIENT' : 'INTERMEDIATE'}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setSelected(null)}
                  style={{
                    background: 'var(--card-bg)', border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)', borderRadius: '999px',
                    padding: '0.4rem 1.4rem', cursor: 'pointer',
                    fontSize: '0.8rem', fontFamily: 'var(--font-body)', marginTop: '0.3rem',
                  }}
                >
                  ✕ {lang === 'id' ? 'Tutup' : 'Close'}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  width: '100%', height: '360px', borderRadius: '2rem',
                  border: '1.5px dashed var(--border-color)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '1rem', color: 'var(--text-secondary)',
                }}
              >
                <span style={{ fontSize: '3rem' }}>👆</span>
                <p style={{ textAlign: 'center', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                  {lang === 'id' ? 'Pilih skill untuk melihat detail' : 'Select a skill to see details'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;

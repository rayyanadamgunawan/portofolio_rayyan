import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { lang, t } = useContext(LangContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  const skillGroups = [
    {
      title: lang === 'id' ? 'Pengembangan Frontend' : 'Frontend Development',
      skills: [
        { name: 'HTML & CSS', level: 90, color: '#E34F26' },
        { name: 'React.js', level: 85, color: '#61DAFB' },
        { name: 'TailwindCSS', level: 85, color: '#38B2AC' },
      ]
    },
    {
      title: lang === 'id' ? 'Backend & Basis Data' : 'Backend & Database',
      skills: [
        { name: 'PHP & Laravel', level: 80, color: '#FF2D20' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Python', level: 75, color: '#3776AB' },
        { name: 'MySQL / PostgreSQL', level: 80, color: '#4479A1' },
      ]
    },
    {
      title: lang === 'id' ? 'Mobile & Alat Lainnya' : 'Mobile & Other Tools',
      skills: [
        { name: 'Kotlin (Android)', level: 70, color: '#7F52FF' },
        { name: 'Firebase', level: 75, color: '#FFCA28' },
        { name: 'Odoo ERP', level: 70, color: '#714B67' },
        { name: 'Git & Docker', level: 80, color: '#F05032' },
      ]
    }
  ];

  return (
    <div className="page-content">
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
          ? 'Teknologi dan alat yang saya gunakan untuk mewujudkan ide menjadi kenyataan.' 
          : 'Technologies and tools I use to bring ideas to reality.'}
      </motion.p>

      <div className="skills-layout mt-12" style={{ display: 'grid', gap: '4rem' }}>
        {skillGroups.map((group, groupIdx) => (
          <motion.div 
            key={groupIdx}
            className="skill-group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              variants={itemVariants} 
              style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}
            >
              {group.title}
            </motion.h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {group.skills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  className="glass-panel skill-card hover-target"
                  variants={itemVariants}
                  style={{ padding: '1.5rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar-bg" style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      style={{ height: '100%', backgroundColor: skill.color, borderRadius: '4px', boxShadow: `0 0 10px ${skill.color}80` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

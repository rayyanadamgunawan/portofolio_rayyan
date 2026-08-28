import React, { useContext, useEffect, useState } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const { lang, t } = useContext(LangContext);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/rayyanadamgunawan/repos?sort=updated&per_page=9');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Exclude forks or specific repos if needed, but here we just take the recent 9
        const filteredRepos = data.filter(repo => !repo.fork);
        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

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

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', options);
  };

  return (
    <div className="page-content projects-page">
      <motion.h1 
        className="section-title"
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
        {t('projectsSubtitle')}
      </motion.p>

      {loading && (
        <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)' }}>
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{ display: 'inline-block', marginBottom: '1rem' }}
          >
            <FaGithub size={40} />
          </motion.div>
          <p>{t('loading')}</p>
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#ef4444' }}>
          <p>{t('errorFetching')}</p>
        </div>
      )}

      {!loading && !error && (
        <motion.div 
          className="projects-grid mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}
        >
          {repos.map((repo) => (
            <motion.div 
              key={repo.id} 
              className="glass-panel hover-target"
              variants={itemVariants}
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <FaGithub size={32} style={{ color: 'var(--accent-secondary)' }} />
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
                {repo.name}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                {repo.description || t('noDescription')}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {repo.language && (
                    <span style={{ display: 'inline-block', marginRight: '8px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', verticalAlign: 'middle' }}></span>
                  )}
                  {repo.language || 'Code'}
                </span>
                
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}
                  className="hover-target"
                >
                  {t('visitRepo')}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;

import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../contexts/LangContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { lang, toggleLang, t } = useContext(LangContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/education', label: t('education') },
    { path: '/skills', label: t('skills') },
    { path: '/projects', label: t('projects') },
    { path: '/achievements', label: t('achievements') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <>
      <nav className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
        <NavLink to="/" className="nav-brand">
          Rayyan Adam Gunawan<span style={{color: 'var(--accent-secondary)'}}>.</span>
        </NavLink>

        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'id' ? 'ID' : 'EN'}
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              width: '100%',
              background: 'rgba(5, 8, 24, 0.95)',
              backdropFilter: 'blur(20px)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 99,
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                onClick={() => setMobileOpen(false)}
                className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                style={{ fontSize: '1.2rem' }}
              >
                {item.label}
              </NavLink>
            ))}
            <button className="lang-toggle" onClick={toggleLang} style={{ width: 'max-content' }}>
              <Globe size={16} style={{display: 'inline', marginRight: '8px'}}/>
              {lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

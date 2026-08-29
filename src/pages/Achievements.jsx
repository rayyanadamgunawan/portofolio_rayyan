import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion } from 'framer-motion';

const Achievements = () => {
  const { t } = useContext(LangContext);
  return (
    <div className="page-content" style={{ position: 'relative' }}>
      {/* Latar Belakang Planet (Venus) */}
      <motion.img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg" 
        alt="Venus"
        initial={{ x: -200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.4, scale: 1, rotate: -360 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 1, type: "spring", delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          rotate: { duration: 200, repeat: Infinity, ease: "linear" }
        }}
        style={{
          position: 'absolute',
          top: '25%',
          left: '-25%',
          width: '65vw',
          maxWidth: '750px',
          zIndex: -1,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 50px rgba(255,200,150,0.3))',
          willChange: 'transform, filter',
          transform: 'translateZ(0)'
        }}
      />

      <h1>{t('achievements')}</h1><p>My certificates and awards.</p>
    </div>
  );
};

export default Achievements;

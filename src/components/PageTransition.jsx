import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, direction = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 1 ? '100vw' : '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === 1 ? '-100vw' : '100vw' }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }}
      className="page-transition-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

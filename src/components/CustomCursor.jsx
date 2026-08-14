import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 1,
      backgroundColor: 'var(--text-main)',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 4,
      backgroundColor: 'var(--text-main)',
      mixBlendMode: 'difference'
    }
  };

  return (
    <>
      {/* Background Interactive Glow */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(127, 82, 255, 0.04) 0%, rgba(97, 218, 251, 0.02) 40%, rgba(var(--bg-main-rgb), 0) 60%)',
          filter: 'blur(70px)',
          zIndex: 0, // Behind everything
          pointerEvents: 'none',
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ 
          type: 'tween', 
          ease: 'easeOut', 
          duration: 1.5 // Smooth, lagging effect
        }}
      />
      
      {/* Small Solid Cursor */}
      <motion.div
        className="custom-cursor-solid"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ 
          type: 'tween', 
          ease: 'backOut', 
          duration: 0.15 
        }}
      />
    </>
  );
};

export default CustomCursor;

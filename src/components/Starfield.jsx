import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Starfield = () => {
  // Generate Bintang (Stars) statis
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.1
    }));
  }, []);

  // Generate Asteroid/Meteor animasi
  const asteroids = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 20
    }));
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: -1, background: '#000' }}>
      
      {/* Background Stars (Statis) */}
      {stars.map(star => (
        <div key={`star-${star.id}`} style={{
          position: 'absolute',
          left: `${star.x}vw`,
          top: `${star.y}vh`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          backgroundColor: '#fff',
          borderRadius: '50%',
          opacity: star.opacity,
          zIndex: 0
        }} />
      ))}

      {/* Asteroids (Animasi Turun) */}
      {asteroids.map(ast => (
        <motion.div key={`ast-${ast.id}`}
          initial={{ y: '-10vh', x: `${ast.x}vw`, opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 1, 1, 0] }}
          transition={{ duration: ast.duration, delay: ast.delay, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', 
            width: `${ast.size}px`, 
            height: `${ast.size}px`, 
            background: '#888', 
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255,255,255,0.4)',
            zIndex: 0
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
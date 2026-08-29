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

      {/* Asteroids (Animasi Turun / Shooting stars) */}
      {asteroids.map(ast => (
        <motion.div key={`ast-${ast.id}`}
          initial={{ y: '-10vh', x: `${ast.x}vw`, opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 1, 1, 0] }}
          transition={{ duration: ast.duration, delay: ast.delay, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: `${ast.size}px`, height: `${ast.size * 3}px`,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
            zIndex: 0
          }}
        />
      ))}

      {/* Asteroid Raksasa Mengambang Global */}
      <motion.img
        src="/asteroid.jpg"
        alt="Asteroid 1"
        animate={{ 
          y: ["120vh", "-50vh"], 
          rotate: [0, -180],
          x: ["-10vw", "20vw"]
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', left: '5%',
          width: '200px', height: '200px', objectFit: 'contain',
          zIndex: 1, opacity: 0.8, mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.8)) brightness(0.6)',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      <motion.img
        src="/asteroid.jpg"
        alt="Asteroid 2"
        animate={{ 
          y: ["150vh", "-80vh"], 
          rotate: [0, 360],
          x: ["20vw", "-10vw"]
        }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear", delay: 10 }}
        style={{
          position: 'absolute', right: '5%',
          width: '350px', height: '350px', objectFit: 'contain',
          zIndex: 1, opacity: 0.7, mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.8)) brightness(0.5)',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
    </div>
  );
};

export default Starfield;
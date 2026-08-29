import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { lang, t } = useContext(LangContext);

  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150]);

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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
  };
  
  return (
    <div className="page-content" style={{ position: 'relative' }}>
      {/* Latar Belakang Planet (Saturnus) */}
      <motion.img 
        src="/saturn.jpg" 
        alt="Saturnus"
        initial={{ x: 200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.6, scale: 1, rotate: 360 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 1, type: "spring", delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          rotate: { duration: 200, repeat: Infinity, ease: "linear" }
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '-20%',
          width: '70vw',
          maxWidth: '800px',
          zIndex: -1,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 50px rgba(255,200,100,0.3))',
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
        {t('about')}
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {lang === 'id' ? 'Kenali saya lebih dekat secara personal dan profesional.' : 'Get to know me better personally and professionally.'}
      </motion.p>
      
      <div className="about-layout mt-12">
        {/* Left Side: Photo */}
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: yImage }}
        >
          <img src="/foto-profil.jpeg" alt="Rayyan Adam Gunawan" className="about-image" />
          <div className="about-image-overlay"></div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div 
          className="about-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants}>
            {lang === 'id' 
              ? 'Halo! Saya Rayyan Adam Gunawan, seorang mahasiswa Sistem Informasi di Universitas Jambi yang memiliki passion mendalam di dunia rekayasa perangkat lunak (Software Engineering) dan pengembangan web. Sejak awal perjalanan akademis saya, saya selalu terpesona dengan bagaimana barisan kode dapat diubah menjadi sebuah solusi digital yang memecahkan masalah kompleks di dunia nyata.'
              : 'Hello! I am Rayyan Adam Gunawan, an Information Systems student at Universitas Jambi with a deep passion for software engineering and web development. Since the beginning of my academic journey, I have always been fascinated by how lines of code can be transformed into digital solutions that solve complex real-world problems.'}
          </motion.p>
          <motion.p variants={itemVariants}>
            {lang === 'id'
              ? 'Sebagai seorang Web & Mobile Developer, fokus utama saya adalah merancang arsitektur perangkat lunak yang tidak hanya berfungsi dengan baik, tetapi juga bersih (clean code), aman, dan mudah diskalakan. Saya memiliki keahlian yang komprehensif dalam membangun sistem backend yang tangguh menggunakan PHP dan Laravel, pengembangan antarmuka modern dengan React.js, serta merancang aplikasi mobile Native Android menggunakan Kotlin.'
              : 'As a Web & Mobile Developer, my main focus is designing software architectures that not only function well but are also clean, secure, and scalable. I have comprehensive expertise in building robust backend systems using PHP and Laravel, developing modern frontends with React.js, and designing Native Android mobile applications using Kotlin.'}
          </motion.p>
          <motion.p variants={itemVariants}>
            {lang === 'id'
              ? 'Selain itu, saya juga aktif menggunakan Python untuk kebutuhan pemrosesan data. Belakangan ini, saya secara intensif mendalami pengembangan dan kustomisasi sistem Enterprise Resource Planning (ERP) menggunakan Odoo. Mempelajari Odoo memberikan saya wawasan yang lebih luas tentang bagaimana perangkat lunak terintegrasi secara langsung dengan alur bisnis perusahaan.'
              : 'Additionally, I actively use Python for data processing. Recently, I have been intensively exploring the development and customization of Enterprise Resource Planning (ERP) systems using Odoo. Learning Odoo has given me broader insights into how software integrates directly with corporate business workflows.'}
          </motion.p>
          <motion.p variants={itemVariants}>
            {lang === 'id'
              ? 'Di luar keseharian saya menulis kode, saya adalah penikmat olahraga seperti bola voli, futsal, dan bulu tangkis. Saya sangat percaya bahwa pikiran dan logika yang tajam harus diimbangi dengan tubuh yang sehat serta eksplorasi di dunia luar. Keseimbangan inilah yang menjaga kreativitas saya tetap menyala saat kembali bekerja memecahkan bug.'
              : 'Outside my daily routine of writing code, I am a sports enthusiast, actively playing volleyball, futsal, and badminton. I strongly believe that a sharp mind and logic must be balanced with a healthy body and outdoor exploration. This balance is what keeps my creativity burning when I return to squash bugs.'}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

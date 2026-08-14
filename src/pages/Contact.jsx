import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';
import { Send } from 'lucide-react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
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

  const socials = [
    {
      id: 'email',
      title: lang === 'id' ? 'Tetap Terhubung' : 'Stay Connected',
      desc: lang === 'id' ? 'Hubungi saya melalui email untuk pertanyaan atau kolaborasi.' : 'Contact me via email for inquiries or collaborations.',
      link: 'mailto:rayanadamgunawan@gmail.com',
      platform: 'Email',
      icon: <FaEnvelope size={40} />,
      textClass: 'text-email',
    },
    {
      id: 'instagram',
      title: lang === 'id' ? 'Ikuti Perjalanan Saya' : 'Follow My Journey',
      desc: lang === 'id' ? 'Ikuti perjalanan kreatif saya.' : 'Follow my creative journey.',
      link: 'https://instagram.com/rayyanadam05',
      platform: 'Instagram',
      icon: <FaInstagram size={40} />,
      textClass: 'text-ig',
    },
    {
      id: 'linkedin',
      title: lang === 'id' ? 'Mari Terhubung' : 'Let\'s Connect',
      desc: lang === 'id' ? 'Terhubung dengan saya secara profesional.' : 'Connect with me professionally.',
      link: 'https://linkedin.com/in/rayyanadam',
      platform: 'LinkedIn',
      icon: <FaLinkedin size={40} />,
      textClass: 'text-li',
    },
    {
      id: 'github',
      title: lang === 'id' ? 'Jelajahi Kode' : 'Explore Code',
      desc: lang === 'id' ? 'Jelajahi karya sumber terbuka saya.' : 'Explore my open-source work.',
      link: 'https://github.com/rayyanadamgunawan',
      platform: 'GitHub',
      icon: <FaGithub size={40} />,
      textClass: 'text-gh',
    },
  ];

  return (
    <div className="page-content contact-page">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('contact')}
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {lang === 'id' ? 'Mari saling terhubung.' : 'Let\'s get in touch.'}
      </motion.p>

      <motion.div 
        className="contact-grid mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {socials.map((social) => (
          <motion.a 
            href={social.link} 
            target="_blank" 
            rel="noreferrer"
            key={social.id} 
            className="contact-card hover-target"
            variants={itemVariants}
            style={{ textDecoration: 'none' }}
          >
            <div className="contact-icon" style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>
              {social.icon}
            </div>

            <div className="contact-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div>
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{social.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{social.desc}</p>
              </div>

              <div className="contact-link" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                <span style={{ color: 'var(--accent-secondary)' }}>
                  {lang === 'id' ? 'Pergi ke' : 'Go to'} {social.platform}
                </span>
                <span className="contact-btn-icon" style={{ marginLeft: '0.5rem', color: 'var(--accent-secondary)' }}>↗</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        className="contact-form-section mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>
            {lang === 'id' ? 'Kirimkan Pesan Langsung' : 'Send a Direct Message'}
          </h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label>{lang === 'id' ? 'Nama' : 'Name'}</label>
                <input type="text" placeholder={lang === 'id' ? 'Masukkan nama Anda' : 'Enter your name'} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder={lang === 'id' ? 'Masukkan email Anda' : 'Enter your email'} required />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label>{lang === 'id' ? 'Pesan' : 'Message'}</label>
              <textarea rows="5" placeholder={lang === 'id' ? 'Tulis pesan Anda di sini...' : 'Write your message here...'} required></textarea>
            </div>
            <button type="submit" className="primary-btn hover-target">
              {lang === 'id' ? 'Kirim Pesan' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

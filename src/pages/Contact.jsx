import React, { useContext, useRef, useState } from 'react';
import { LangContext } from '../contexts/LangContext';
import { Send } from 'lucide-react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { lang, t } = useContext(LangContext);
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Masukkan ID EmailJS di sini
    const serviceId = 'service_c5xislu'; 
    const templateId = 'template_1jyca3f'; 
    const publicKey = 'LfTPQCDaL8aSGMJoK'; 

    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey,
    })
      .then((result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          form.current.reset();
      }, (error) => {
          setIsSubmitting(false);
          alert(lang === 'id' ? 'Gagal mengirim pesan, coba lagi.' : 'Failed to send message, try again.');
          console.error(error.text);
      });
  };

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
      link: '#',
      platform: 'LinkedIn',
      icon: <FaLinkedin size={40} />,
      textClass: 'text-linkedin',
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
    <div className="page-content contact-page" style={{ position: 'relative' }}>
      {/* Latar Belakang Planet (Mars) */}
      <motion.img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_23_aug_2003_hubble.jpg" 
        alt="Mars"
        initial={{ x: -200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.5, scale: 1, rotate: 360 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 1, type: "spring", delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          rotate: { duration: 180, repeat: Infinity, ease: "linear" }
        }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '-20%',
          width: '60vw',
          maxWidth: '700px',
          zIndex: -1,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 50px rgba(255,50,0,0.3))',
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
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ 
                padding: '2rem', 
                borderRadius: '1rem', 
                backgroundColor: 'rgba(0, 229, 255, 0.1)', 
                border: '1px solid rgba(0, 229, 255, 0.3)',
                textAlign: 'center',
                color: '#00E5FF'
              }}
            >
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{lang === 'id' ? 'Pesan Terkirim!' : 'Message Sent!'}</h4>
              <p>{lang === 'id' ? 'Terima kasih, pesan Anda telah berhasil dikirim ke email Rayyan.' : 'Thank you, your message has been successfully sent to Rayyan\'s email.'}</p>
              <button 
                onClick={() => setIsSuccess(false)}
                style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', borderRadius: '100px', background: '#00E5FF', color: '#000', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
              >
                {lang === 'id' ? 'Kirim Lagi' : 'Send Another'}
              </button>
            </motion.div>
          ) : (
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label>{lang === 'id' ? 'Nama' : 'Name'}</label>
                  <input type="text" name="name" placeholder={lang === 'id' ? 'Masukkan nama Anda' : 'Enter your name'} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder={lang === 'id' ? 'Masukkan email Anda' : 'Enter your email'} required />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label>{lang === 'id' ? 'Pesan' : 'Message'}</label>
                <textarea name="message" rows="5" placeholder={lang === 'id' ? 'Tulis pesan Anda di sini...' : 'Write your message here...'} required></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="primary-btn hover-target" style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                {isSubmitting ? (lang === 'id' ? 'Mengirim...' : 'Sending...') : (lang === 'id' ? 'Kirim Pesan' : 'Send Message')} 
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

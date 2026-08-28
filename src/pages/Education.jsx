import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { lang, t } = useContext(LangContext);

  const educationData = [
    {
      level: lang === 'id' ? 'Perguruan Tinggi' : 'University',
      school: 'Universitas Jambi',
      major: lang === 'id' ? 'Sistem Informasi' : 'Information Systems',
      period: '2023 – Sekarang',
      status: lang === 'id' ? 'Aktif' : 'Active',
      gpa: '3.8',
      logo: '/Logo_Universitas_Jambi.png',
      description: lang === 'id'
        ? 'Fokus pada rekayasa perangkat lunak, pengembangan web, basis data, dan kecerdasan buatan. Aktif dalam berbagai proyek akademis dan organisasi kampus.'
        : 'Focused on software engineering, web development, databases, and artificial intelligence. Active in various academic projects and campus organizations.',
    },
    {
      level: lang === 'id' ? 'Sekolah Menengah Atas' : 'Senior High School',
      school: 'SMA N 3 Merangin',
      major: lang === 'id' ? 'Ilmu Pengetahuan Alam (IPA)' : 'Natural Sciences (IPA)',
      period: '2020 – 2023',
      status: lang === 'id' ? 'Lulus' : 'Graduated',
      logo: '/Logo_SMA3MERANGIN.jpg',
      description: lang === 'id'
        ? 'Mengembangkan fondasi ilmu pengetahuan dan logika yang kuat. Aktif dalam kegiatan ekstrakurikuler dan olimpiade sains.'
        : 'Developed a strong foundation in sciences and logical thinking. Active in extracurricular activities and science olympiads.',
    },
    {
      level: lang === 'id' ? 'Sekolah Menengah Pertama' : 'Junior High School',
      school: 'SMPN 23 Merangin',
      major: lang === 'id' ? 'Umum' : 'General',
      period: '2017 – 2020',
      status: lang === 'id' ? 'Lulus' : 'Graduated',
      logo: '/Logo_SMP23MERANGIN.jpg',
      description: lang === 'id'
        ? 'Membangun karakter akademis dan sosial yang baik. Aktif dalam kegiatan sekolah dan mulai mengenal dunia teknologi.'
        : 'Built solid academic and social character. Active in school activities and started exploring the world of technology.',
    },
    {
      level: lang === 'id' ? 'Sekolah Dasar' : 'Elementary School',
      school: 'SD Negeri 249/VI Rawa Jaya',
      major: lang === 'id' ? 'Umum' : 'General',
      period: '2011 – 2017',
      status: lang === 'id' ? 'Lulus' : 'Graduated',
      icon: '🏡',
      description: lang === 'id'
        ? 'Tahap awal pendidikan formal dengan fondasi belajar membaca, menulis, dan berhitung yang kuat.'
        : 'Early formal education stage with strong foundations in reading, writing, and arithmetic.',
    },
    {
      level: lang === 'id' ? 'Taman Kanak-Kanak' : 'Kindergarten',
      school: 'TK Negeri Kartika',
      major: lang === 'id' ? 'Umum' : 'General',
      period: '2009 – 2011',
      status: lang === 'id' ? 'Lulus' : 'Graduated',
      icon: '🌱',
      description: lang === 'id'
        ? 'Awal mula perjalanan pendidikan. Mengembangkan kemampuan sosial, kreativitas, dan rasa ingin tahu sejak dini.'
        : 'The very beginning of the educational journey. Developing social skills, creativity, and curiosity from an early age.',
    },
  ];

  return (
    <div className="page-content">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('education')}
      </motion.h1>
      
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {lang === 'id' ? 'Perjalanan akademis yang membentuk fondasi logika dan pemikiran sistematis saya.' : 'The academic journey that built my foundation in logic and systematic thinking.'}
      </motion.p>

      <div className="timeline-container mt-12">
        {educationData.map((edu, idx) => (
          <motion.div 
            key={idx} 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="timeline-dot" />
            
            <div className="timeline-content glass-panel">
              {edu.logo ? (
                <img src={edu.logo} alt={edu.school} className="timeline-logo" />
              ) : (
                <div className="timeline-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                  {edu.icon}
                </div>
              )}
              
              <div className="timeline-details flex-1">
                <span className="text-sm font-bold tracking-widest uppercase text-muted mb-2 block" style={{ color: 'var(--text-muted)' }}>
                  {edu.level}
                </span>
                <h3>{edu.school}</h3>
                <div className="timeline-degree">{edu.major}</div>
                
                <div className="flex flex-wrap gap-3 mt-3 mb-4">
                  <span className="timeline-year">{edu.period}</span>
                  <span className="timeline-year" style={{ borderColor: edu.status === 'Aktif' || edu.status === 'Active' ? 'var(--accent-secondary)' : 'var(--border-color)' }}>
                    {edu.status}
                  </span>
                  {edu.gpa && (
                    <span className="timeline-year" style={{ color: '#fbbf24', borderColor: 'rgba(251, 191, 36, 0.3)' }}>
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

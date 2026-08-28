import React, { useContext, useState } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaTimes, FaBookOpen, FaUserCircle, FaBriefcase, FaChartBar, FaUserMd, FaStore, FaMobileAlt, FaDesktop } from 'react-icons/fa';

const manualProjects = [
  {
    id: 1,
    title: 'Bintang Baca',
    titleEn: 'Bintang Baca (Reading Star)',
    icon: <FaBookOpen size={40} />,
    description: 'Platform literasi digital interaktif yang dirancang untuk meningkatkan minat baca dengan ekosistem modern.',
    descriptionEn: 'Interactive digital literacy platform designed to foster a love for reading with a modern ecosystem.',
    fullDesc: 'Aplikasi ini adalah platform komprehensif yang menjembatani pengguna dengan berbagai materi literasi. Arsitektur front-end dikembangkan untuk performa maksimal dengan transisi animasi yang sangat mulus antar halaman. Fungsionalitas utamanya meliputi pembacaan dokumen, manajemen pengguna, dan sinkronisasi kemajuan membaca secara real-time.',
    fullDescEn: 'This app is a comprehensive platform bridging users with various literacy materials. The front-end architecture is developed for maximum performance with silky-smooth animated transitions. Core functionalities include document reading, user management, and real-time reading progress synchronization.',
    features: [
      'Manajemen Autentikasi: Sistem login dan pendaftaran yang aman untuk melacak progres tiap pengguna.',
      'Sinkronisasi Real-time: Data bacaan pengguna tersimpan dan tersinkronisasi antar perangkat tanpa delay.',
      'Antarmuka Responsif: Desain UI/UX yang dapat menyesuaikan dengan berbagai ukuran layar secara mulus.'
    ],
    featuresEn: [
      'Authentication Management: Secure login and registration to track individual user progress.',
      'Real-time Synchronization: User reading data is saved and synced across devices without delay.',
      'Responsive Interface: UI/UX design that seamlessly adapts to various screen sizes.'
    ],
    tech: ['React.js', 'Vite', 'Firebase', 'Framer Motion', 'TailwindCSS'],
    link: 'https://github.com/rayyanadamgunawan/bintang-baca',
    demo: null
  },
  {
    id: 2,
    title: 'Portofolio Cosmic',
    titleEn: 'Cosmic Portfolio',
    icon: <FaUserCircle size={40} />,
    description: 'Website personal branding dengan performa tinggi menampilkan fluid background animation dan efek glassmorphism.',
    descriptionEn: 'High-performance personal branding website featuring fluid background animations and glassmorphism.',
    fullDesc: 'Proyek portofolio ini adalah kanvas digital untuk memamerkan keterampilan teknis dan artistik. Fungsionalitas aplikasi difokuskan pada penyajian informasi yang dinamis, optimasi rendering grafis WebGL-like menggunakan CSS murni dan Framer Motion, serta sistem lokalisasi multibahasa (Internasionalisasi) tanpa proses loading ulang halaman.',
    fullDescEn: 'This portfolio project is a digital canvas showcasing technical skills. App functionality is focused on dynamic information delivery, WebGL-like graphic rendering optimization using pure CSS, and a multi-language localization system without page reloads.',
    features: [
      'Sistem Multibahasa (i18n): Pergantian bahasa Indonesia dan Inggris secara instan menggunakan React Context.',
      'Optimasi Animasi Hardware: Animasi background berjalan di GPU sehingga tidak membebani thread utama.',
      'Tema Dinamis: Dukungan mode Gelap dan Terang yang menyesuaikan palet warna secara otomatis.'
    ],
    featuresEn: [
      'Multi-language System (i18n): Instant switching between Indonesian and English using React Context.',
      'Hardware Animation Optimization: Background animations run on GPU to prevent blocking the main thread.',
      'Dynamic Theming: Dark and Light mode support that automatically adjusts the color palette.'
    ],
    tech: ['React.js', 'TailwindCSS', 'Framer Motion', 'Vite'],
    link: 'https://github.com/rayyanadamgunawan/portofolio_rayyan',
    demo: 'https://rayyan-portfolio-82b30.web.app/'
  },
  {
    id: 3,
    title: 'Enterprise Operations Web',
    titleEn: 'Enterprise Operations Web',
    icon: <FaDesktop size={40} />,
    description: 'Dashboard manajemen operasional skala besar (proprietary) berbasis Web untuk administrasi terpusat.',
    descriptionEn: 'Large-scale Web-based operational management dashboard (proprietary) for centralized administration.',
    fullDesc: 'Sistem operasional web ini dirancang khusus untuk memenuhi standar industri enterprise berisiko tinggi. Fungsionalitas utamanya mencakup pemantauan data operasional harian secara real-time, manajemen aset, serta rekapitulasi data dari lapangan. Proyek ini bersifat rahasia (confidential).',
    fullDescEn: 'This web operational system is specifically designed to meet high-risk enterprise industry standards. Its main functionality includes real-time daily operational data monitoring, asset management, and field data recapitulation. This project is confidential.',
    features: [
      'Dashboard Web Terpusat: Memvisualisasikan seluruh data operasional lapangan dalam satu layar pemantauan interaktif.',
      'Sistem Otorisasi Berjenjang: Hak akses kompleks (Role-based Access Control) dari level operator hingga manajemen atas.',
      'Laporan Otomatis: Generator dokumen (PDF/Excel) untuk pelaporan operasional harian dan bulanan.'
    ],
    featuresEn: [
      'Centralized Web Dashboard: Visualizes all field operational data in a single interactive monitoring screen.',
      'Multi-tier Authorization: Complex Role-based Access Control (RBAC) from operator to upper management.',
      'Automated Reporting: Document generator (PDF/Excel) for daily and monthly operational reporting.'
    ],
    tech: ['React / Vue', 'Node.js / PHP', 'PostgreSQL', 'REST API'],
    link: null,
    demo: null
  },
  {
    id: 4,
    title: 'Enterprise Operations App',
    titleEn: 'Enterprise Operations App',
    icon: <FaMobileAlt size={40} />,
    description: 'Aplikasi Android pendamping untuk petugas lapangan (proprietary) dengan sinkronisasi ke server pusat.',
    descriptionEn: 'Companion Android app for field workers (proprietary) with synchronization to the central server.',
    fullDesc: 'Aplikasi mobile ini ditujukan untuk petugas lapangan di lingkungan operasional enterprise. Sistem ini berfokus pada kemudahan input data dalam kondisi mobilitas tinggi. Dibekali kemampuan bekerja secara offline ketika konektivitas terputus, dan otomatis sinkronisasi (sync) saat jaringan kembali stabil. Proyek ini bersifat rahasia.',
    fullDescEn: 'This mobile app is intended for field workers in an enterprise operational environment. The system focuses on easy data input under high mobility conditions. Equipped with offline capabilities when connectivity drops, and automatically syncs when the network stabilizes. This project is confidential.',
    features: [
      'Mobile Field Input: Form pencatatan data harian yang dioptimalkan untuk perangkat mobile.',
      'Offline-First Sync: Data tetap bisa diinput tanpa internet dan otomatis terkirim saat online.',
      'Geotagging & Kamera: Pencatatan bukti lapangan yang mengikat kordinat GPS dan waktu.'
    ],
    featuresEn: [
      'Mobile Field Input: Daily data logging form optimized for mobile devices.',
      'Offline-First Sync: Data can be logged without internet and automatically sends when online.',
      'Geotagging & Camera: Field evidence logging tied to GPS coordinates and time.'
    ],
    tech: ['Kotlin / Flutter', 'SQLite / Room', 'REST API Client', 'Geolocation'],
    link: null,
    demo: null
  },
  {
    id: 5,
    title: 'Sistem Pendukung Keputusan (SPK)',
    titleEn: 'Decision Support System (DSS)',
    icon: <FaChartBar size={40} />,
    description: 'Aplikasi berbasis web untuk analisis data multi-kriteria guna membantu penentuan keputusan manajerial.',
    descriptionEn: 'Web-based application for multi-criteria data analysis to assist in managerial decision making.',
    fullDesc: 'Aplikasi SPK ini berfungsi sebagai alat bantu kalkulasi matematis untuk menentukan peringkat atau kelayakan suatu entitas berdasarkan banyak kriteria (Multi-Criteria Decision Making). Fungsionalitas sistem memungkinkan admin memasukkan alternatif data, mengatur bobot setiap kriteria, lalu mesin algoritma akan menghitung secara otomatis dan menyajikan rekomendasi terbaik berdasarkan skor akhir.',
    fullDescEn: 'This DSS application serves as a mathematical calculation tool to determine the ranking or feasibility of an entity based on multiple criteria. System functionality allows admins to input alternatives, set criteria weights, and the algorithm engine automatically calculates and presents the best recommendation based on final scores.',
    features: [
      'Mesin Kalkulasi Algoritma: Mengubah parameter data mentah menjadi matriks perhitungan dengan metode matematis yang valid.',
      'Manajemen Kriteria Dinamis: Admin dapat menambah, mengubah bobot, atau menghapus kriteria penilaian kapan saja.',
      'Visualisasi Peringkat: Menampilkan hasil akhir berupa grafik dan tabel peringkat dari skor tertinggi ke terendah.'
    ],
    featuresEn: [
      'Algorithm Calculation Engine: Transforms raw data parameters into calculation matrices using valid mathematical methods.',
      'Dynamic Criteria Management: Admins can add, change weights, or remove assessment criteria at any time.',
      'Ranking Visualization: Displays final results as charts and ranking tables from highest to lowest score.'
    ],
    tech: ['PHP', 'Laravel / CodeIgniter', 'MySQL', 'Bootstrap / Tailwind'],
    link: null,
    demo: null
  },
  {
    id: 6,
    title: 'EduCounsel - Portal Konseling',
    titleEn: 'EduCounsel - Counseling Portal',
    icon: <FaUserMd size={40} />,
    description: 'Platform layanan bimbingan dan konseling berbasis web untuk menjembatani komunikasi privat yang aman.',
    descriptionEn: 'Web-based guidance and counseling service platform to bridge secure private communication.',
    fullDesc: 'Proyek ini merupakan sistem informasi manajemen dan layanan e-konseling. Fungsionalitas aplikasi memfasilitasi penjadwalan sesi konsultasi antara klien dan konselor, manajemen rekam jejak sesi, serta ruang komunikasi virtual. Privasi adalah prioritas utama, sehingga sistem dilengkapi dengan lapisan enkripsi pada data riwayat konsultasi.',
    fullDescEn: 'This project is a management information system and e-counseling service. Application functionality facilitates scheduling consultation sessions between clients and counselors, session track record management, and virtual communication rooms. Privacy is top priority, featuring encryption on consultation history data.',
    features: [
      'Penjadwalan Pintar (Smart Scheduling): Sistem booking kalender otomatis yang mencegah bentrok jadwal antara konselor.',
      'Manajemen Rekam Medis: Penyimpanan catatan sesi konsultasi yang dienkripsi dan hanya dapat diakses oleh pihak berwenang.',
      'Notifikasi Otomatis: Pengingat sesi konsultasi via email atau notifikasi sistem untuk mengurangi tingkat ketidakhadiran.'
    ],
    featuresEn: [
      'Smart Scheduling: Automated calendar booking system preventing schedule conflicts among counselors.',
      'Medical Record Management: Encrypted storage of consultation session notes accessible only to authorized parties.',
      'Automated Notifications: Consultation session reminders via email or system notifications to reduce no-show rates.'
    ],
    tech: ['Web Framework', 'Database SQL', 'REST API', 'Socket/Real-time Tech'],
    link: null,
    demo: null
  },
  {
    id: 7,
    title: 'CEMAS (Community E-Marketplace)',
    titleEn: 'CEMAS (Community E-Marketplace)',
    icon: <FaStore size={40} />,
    description: 'Platform e-commerce komunitas lokal untuk mempertemukan penjual dan pembeli secara terpusat (Community E-Marketplace Aston Villa).',
    descriptionEn: 'Local community e-commerce platform to centrally connect buyers and sellers (Community E-Marketplace Aston Villa).',
    fullDesc: 'Aplikasi CEMAS (Community E-Marketplace Aston Villa) dirancang khusus sebagai ekosistem jual-beli digital untuk komunitas atau perumahan. Fungsionalitas utamanya meliputi manajemen etalase produk bagi warga, sistem keranjang belanja, proses checkout, dan pemantauan status pesanan. Sistem ini bertujuan untuk mendigitalisasi ekonomi lokal dengan antarmuka yang sangat mudah digunakan (user-friendly).',
    fullDescEn: 'The CEMAS (Community E-Marketplace Aston Villa) application is specifically designed as a digital trading ecosystem for local communities. Its core functionality includes product storefront management for residents, a shopping cart system, checkout processes, and order status tracking. This system aims to digitalize the local economy with a highly user-friendly interface.',
    features: [
      'Manajemen Etalase Warga: Fasilitas bagi anggota komunitas untuk membuka toko dan mengelola stok inventaris mereka sendiri.',
      'Sistem Checkout Seamless: Alur transaksi dan pemesanan yang dioptimalkan agar mudah dipahami oleh pengguna dari berbagai kalangan usia.',
      'Dashboard Pemantauan Pesanan: Panel khusus untuk melacak status transaksi dari pemesanan hingga pengiriman.'
    ],
    featuresEn: [
      'Resident Storefront Management: Facility for community members to open stores and manage their own inventory stock.',
      'Seamless Checkout System: Transaction and ordering flow optimized for ease of use across all age groups.',
      'Order Tracking Dashboard: Dedicated panel to track transaction status from ordering to delivery.'
    ],
    tech: ['Web Framework', 'Database SQL', 'REST API', 'Payment/Cart System'],
    link: null,
    demo: null
  }
];

const Projects = () => {
  const { lang, t } = useContext(LangContext);
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = manualProjects.find(p => p.id === selectedId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  return (
    <div className="page-content projects-page">
      <motion.h1 
        className="section-title text-gradient-quantum"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('projects')}
      </motion.h1>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {lang === 'id' 
          ? 'Kumpulan proyek dari repositori saya. Klik kartu untuk melihat rincian arsitektur sistemnya.'
          : 'A collection of projects from my repositories. Click a card to read the system architecture details.'}
      </motion.p>

      {/* Grid Utama */}
      <motion.div 
        className="projects-grid mt-12"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          width: '100%',
          padding: '1rem 0'
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {manualProjects.map((project) => (
          <motion.div 
            layoutId={`project-container-${project.id}`}
            key={project.id} 
            className="project-card glass-panel hover-target"
            variants={itemVariants}
            onClick={() => setSelectedId(project.id)}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <motion.div layoutId={`project-iconbg-${project.id}`} style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.05, pointerEvents: 'none' }}>
              <div style={{ transform: 'scale(3)' }}>{project.icon}</div>
            </motion.div>

            <motion.h3 layoutId={`project-title-${project.id}`} style={{ 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: 'var(--text-main)', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              {lang === 'id' ? project.title : project.titleEn}
            </motion.h3>
            
            <motion.p layoutId={`project-desc-${project.id}`} style={{ 
              fontSize: '0.95rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              flexGrow: 1
            }}>
              {lang === 'id' ? project.description : project.descriptionEn}
            </motion.p>

            <motion.div layoutId={`project-tech-${project.id}`} style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem', 
              marginTop: 'auto' 
            }}>
              {project.tech.slice(0,3).map((t, i) => (
                <span key={i} style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  borderRadius: '100px',
                  backgroundColor: 'rgba(127, 82, 255, 0.1)',
                  color: 'var(--accent-color)',
                  border: '1px solid rgba(127, 82, 255, 0.2)',
                  fontWeight: 600
                }}>
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>+{project.tech.length - 3}</span>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Modal (Layar Melebar) */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <React.Fragment>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                zIndex: 999,
                cursor: 'pointer'
              }}
            />
            
            <div style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              pointerEvents: 'none'
            }}>
              <motion.div
                layoutId={`project-container-${selectedId}`}
                className="glass-panel"
                style={{
                  width: '90%',
                  maxWidth: '800px',
                  maxHeight: '85vh',
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  overflowY: 'auto',
                  pointerEvents: 'auto',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    padding: '8px',
                    zIndex: 10
                  }}
                >
                  <FaTimes size={24} />
                </button>

                <motion.div layoutId={`project-iconbg-${selectedProject.id}`} style={{ position: 'absolute', top: '10%', right: '-5%', opacity: 0.03, pointerEvents: 'none' }}>
                  <div style={{ transform: 'scale(10)' }}>{selectedProject.icon}</div>
                </motion.div>

                <motion.h2 layoutId={`project-title-${selectedProject.id}`} style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  fontWeight: 800, 
                  color: 'var(--text-main)', 
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-heading)',
                  paddingRight: '40px'
                }}>
                  {lang === 'id' ? selectedProject.title : selectedProject.titleEn}
                </motion.h2>

                <motion.p layoutId={`project-desc-${selectedProject.id}`} style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--accent-secondary)', 
                  fontWeight: 500,
                  marginBottom: '2rem'
                }}>
                  {lang === 'id' ? selectedProject.description : selectedProject.descriptionEn}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'id' ? 'Arsitektur & Penjelasan Fungsionalitas:' : 'Architecture & Functional Explanation:'}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                      {lang === 'id' ? selectedProject.fullDesc : selectedProject.fullDescEn}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'id' ? 'Fitur Utama:' : 'Key Features:'}
                    </h4>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {(lang === 'id' ? selectedProject.features : selectedProject.featuresEn).map((feature, idx) => {
                        const [title, desc] = feature.split(': ');
                        return (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <div style={{ marginTop: '0.4rem', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', flexShrink: 0 }} />
                            <div style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                              <strong style={{ color: 'var(--text-main)' }}>{title}: </strong>
                              <span style={{ color: 'var(--text-muted)' }}>{desc}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'id' ? 'Tech Stack & Bahasa Pemrograman:' : 'Tech Stack & Languages Used:'}
                    </h4>
                    <motion.div layoutId={`project-tech-${selectedProject.id}`} style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.75rem'
                    }}>
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} style={{
                          padding: '0.4rem 1rem',
                          fontSize: '0.85rem',
                          borderRadius: '100px',
                          backgroundColor: 'rgba(127, 82, 255, 0.1)',
                          color: 'var(--accent-color)',
                          border: '1px solid rgba(127, 82, 255, 0.2)',
                          fontWeight: 600
                        }}>
                          {t}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Tampilkan Tombol Link / Demo hanya jika ada (Public) */}
                  {(selectedProject.link || selectedProject.demo) && (
                    <div style={{ 
                      display: 'flex', 
                      gap: '1.5rem',
                      marginTop: '1rem', 
                      borderTop: '1px solid var(--border-color)', 
                      paddingTop: '2rem' 
                    }}>
                      {selectedProject.link && (
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover-target primary-btn"
                          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                        >
                          <FaGithub size={20} /> View Source Code
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover-target secondary-btn"
                          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                        >
                          <FaExternalLinkAlt size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

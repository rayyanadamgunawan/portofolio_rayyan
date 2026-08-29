import React, { useContext, useState } from 'react';
import { LangContext } from '../contexts/LangContext';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaTimes, FaBookOpen, FaUserCircle, FaBriefcase, FaChartBar, FaUserMd, FaStore, FaMobileAlt, FaDesktop, FaQrcode } from 'react-icons/fa';

export const manualProjects = [
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
    title: 'Enterprise Validation Web',
    titleEn: 'Enterprise Validation Web',
    icon: <FaDesktop size={40} />,
    description: 'Sistem informasi operasional dan dashboard validasi berskala enterprise berbasis framework Odoo.',
    descriptionEn: 'Enterprise-scale operational information system and validation dashboard based on the Odoo framework.',
    fullDesc: 'Sistem operasional web ini dirancang khusus untuk memenuhi standar industri enterprise. Proyek ini dibangun di atas framework Odoo dengan kustomisasi mendalam menggunakan Python dan XML (mencakup pengembangan add-on khusus). Fungsionalitas utamanya berpusat pada pemantauan data secara terpusat, otorisasi transaksi operasional, pengelolaan riwayat (history) aktivitas, dan penyediaan API endpoints khusus bagi integrasi aplikasi mobile. Proyek ini bersifat konfidensial.',
    fullDescEn: 'This web operational system is specifically designed to meet enterprise industry standards. Built on the Odoo framework with deep customization using Python and XML (including custom add-on development). Its main functionality revolves around centralized data monitoring, operational transaction authorization, activity history management, and providing custom API endpoints for mobile app integration. This project is confidential.',
    features: [
      'Dashboard Sentral: Memvisualisasikan seluruh data operasional dengan modul pelaporan dan riwayat transaksi (history/reason log).',
      'Kustomisasi XML & Odoo: Antarmuka internal (backend) yang dirombak total menggunakan custom patch XML dan controller Python.',
      'Custom API Endpoints: Menyiapkan jembatan (API) aman untuk proses upload foto dan validasi bagi perangkat mobile eksternal.'
    ],
    featuresEn: [
      'Central Dashboard: Visualizes all operational data with reporting modules and transaction history (reason logs).',
      'XML & Odoo Customization: Completely overhauled internal backend interface using custom XML patches and Python controllers.',
      'Custom API Endpoints: Secure bridge (APIs) prepared for photo uploads and validation processes from external mobile devices.'
    ],
    tech: ['Odoo', 'Python', 'XML', 'PostgreSQL', 'Docker'],
    link: null,
    demo: null
  },
  {
    id: 4,
    title: 'Enterprise Mobile Scanner',
    titleEn: 'Enterprise Mobile Scanner',
    icon: <FaQrcode size={40} />,
    description: 'Aplikasi mobile validasi (proprietary) dengan fitur pemindaian QR Code dan autentikasi biometrik/foto.',
    descriptionEn: 'Proprietary mobile validation app featuring QR Code scanning and biometric/photo authentication.',
    fullDesc: 'Aplikasi mobile ini ditujukan khusus untuk eksekusi operasional di lapangan. Dibangun menggunakan framework cross-platform Flutter yang terhubung langsung ke backend Odoo. Fungsionalitas utamanya sangat krusial, meliputi pemindaian QR Code (QR Scanner Overlay) untuk validasi instan, pengambilan bukti foto dari kamera secara langsung, serta antarmuka (UI/UX) khusus yang dioptimalkan untuk kecepatan kerja operasional.',
    fullDescEn: 'This mobile application is strictly tailored for field operational execution. Built using the cross-platform Flutter framework, it connects directly to the Odoo backend. Its main functionality is crucial, including QR Code scanning (QR Scanner Overlay) for instant validation, direct camera photo evidence capturing, and a specialized UI/UX optimized for high-speed operational work.',
    features: [
      'QR Code Validation Overlay: Modul kamera khusus untuk memindai kode unik dengan proses validasi sepersekian detik.',
      'Direct Photo Uploads: Pengambilan dan pengiriman bukti foto secara real-time ke sistem terpusat.',
      'Flutter-to-Odoo Integration: Manajemen state yang kompleks untuk sinkronisasi data dari aplikasi mobile ke database PostgreSQL.'
    ],
    featuresEn: [
      'QR Code Validation Overlay: Specialized camera module for scanning unique codes with split-second validation processing.',
      'Direct Photo Uploads: Real-time capturing and submission of photo evidence to the centralized system.',
      'Flutter-to-Odoo Integration: Complex state management for data synchronization from the mobile app to the PostgreSQL database.'
    ],
    tech: ['Flutter / Dart', 'Dart HTTP', 'Camera API', 'REST API (Odoo)'],
    link: null,
    demo: null
  },
  {
    id: 5,
    title: 'Sistem Pendukung Keputusan (SPK)',
    titleEn: 'Decision Support System (DSS)',
    icon: <FaChartBar size={40} />,
    description: 'Dashboard kalkulasi untuk analisis data multi-kriteria berbasis React dan Firebase.',
    descriptionEn: 'Calculation dashboard for multi-criteria data analysis based on React and Firebase.',
    fullDesc: 'Aplikasi SPK (Sistem Pendukung Keputusan) ini dibangun menggunakan ekosistem React modern (Vite) yang dipadukan dengan Firebase untuk operasional backend-less. Fungsionalitas utamanya memampukan pemilik bisnis memasukkan variabel/kriteria penentuan, lalu sistem akan memproses perhitungan matematis rumit di sisi client-side untuk memberikan hasil akhir (ranking) secara instan. UI-nya dipercantik menggunakan TailwindCSS dan SweetAlert2.',
    fullDescEn: 'This DSS (Decision Support System) application is built using a modern React ecosystem (Vite) combined with Firebase for backend-less operations. Its core functionality enables business owners to input determining variables/criteria, then the system processes complex mathematical calculations client-side to instantly provide final results (rankings). The UI is enhanced using TailwindCSS and SweetAlert2.',
    features: [
      'Kalkulasi Multi-Kriteria Client-side: Memproses algoritma pembobotan langsung di browser pengguna tanpa jeda waktu server.',
      'Integrasi Firebase Berkelanjutan: Manajemen penyimpanan data terdesentralisasi namun dapat diakses kapan saja.',
      'Notifikasi Interaktif: Umpan balik (feedback) visual instan menggunakan SweetAlert2 ketika ada perubahan data krusial.'
    ],
    featuresEn: [
      'Client-side Multi-Criteria Calculation: Processes weighting algorithms directly in the user browser without server latency.',
      'Continuous Firebase Integration: Decentralized data storage management accessible at any time.',
      'Interactive Notifications: Instant visual feedback using SweetAlert2 when crucial data changes occur.'
    ],
    tech: ['React.js', 'Vite', 'Firebase', 'TailwindCSS', 'SweetAlert2'],
    link: null,
    demo: null
  },
  {
    id: 6,
    title: 'EduCounsel - Portal Konseling',
    titleEn: 'EduCounsel - Counseling Portal',
    icon: <FaUserMd size={40} />,
    description: 'Sistem informasi manajemen layanan e-konseling terintegrasi dengan arsitektur Role-Based Control tingkat lanjut.',
    descriptionEn: 'Integrated e-counseling service management information system with advanced Role-Based Control architecture.',
    fullDesc: 'Proyek ini adalah web aplikasi berskala besar yang dibangun menggunakan framework PHP Laravel. Sistem ini melayani alur layanan bimbingan psikologis/konseling dengan arsitektur keamanan tingkat tinggi (multi-middleware). Fungsionalitas aplikasi memisahkan ruang kerja secara spesifik untuk masing-masing hak akses: Publik/Mahasiswa, Operator, Konselor, Kepala, hingga Admin. Hal ini menjamin privasi absolut bagi setiap entri rekam medis konsultasi.',
    fullDescEn: 'This project is a large-scale web application built using the PHP Laravel framework. The system serves psychological/counseling guidance workflows with high-level security architecture (multi-middleware). Application functionality specifically separates workspaces for different access rights: Public/Students, Operators, Counselors, Head, and Admins. This guarantees absolute privacy for every consultation medical record entry.',
    features: [
      'Multi-Level Authentication: Penerapan middleware ketat untuk 5 tingkat hak akses (Public, Admin, Operator, Counselor, Kepala).',
      'Manajemen Sesi Konseling Terjadwal: Sistem rute dinamis (dashboard/counseling routes) yang mencegah bentrokan jadwal.',
      'Sistem Laporan Pimpinan: Modul khusus bagi jabatan manajerial (Kepala) untuk meninjau efektivitas layanan secara statistik menyeluruh.'
    ],
    featuresEn: [
      'Multi-Level Authentication: Strict middleware implementation for 5 access tiers (Public, Admin, Operator, Counselor, Head).',
      'Scheduled Counseling Session Management: Dynamic route system (dashboard/counseling routes) preventing schedule conflicts.',
      'Executive Reporting System: Dedicated module for managerial roles (Head) to review service effectiveness via comprehensive statistics.'
    ],
    tech: ['Laravel (PHP)', 'Blade Templating', 'MySQL', 'Bootstrap / CSS', 'Composer'],
    link: null,
    demo: null
  },
  {
    id: 7,
    title: 'CEMAS (Community E-Marketplace)',
    titleEn: 'CEMAS (Community E-Marketplace)',
    icon: <FaStore size={40} />,
    description: 'Platform e-commerce khusus komunitas lokal untuk mempertemukan penjual dan pembeli secara terpusat.',
    descriptionEn: 'Dedicated local community e-commerce platform to centrally connect buyers and sellers.',
    fullDesc: 'Aplikasi CEMAS (Community E-Marketplace Aston Villa) dirancang khusus sebagai ekosistem jual-beli digital untuk warga perumahan atau komunitas internal. Fungsionalitas utamanya meliputi manajemen etalase produk bagi warga, sistem keranjang belanja, proses checkout, dan pemantauan status pesanan. Sistem ini bertujuan untuk mendigitalisasi ekonomi lokal dengan antarmuka yang sangat ramah pengguna (user-friendly).',
    fullDescEn: 'The CEMAS (Community E-Marketplace Aston Villa) application is designed as a digital trading ecosystem for residential or internal communities. Its core functionality includes product storefront management for residents, a shopping cart system, checkout processes, and order status tracking. This system aims to digitalize the local economy with a highly user-friendly interface.',
    features: [
      'Manajemen Etalase Warga: Fasilitas mandiri bagi anggota komunitas untuk membuka toko dan mengelola stok inventaris mereka sendiri.',
      'Sistem Checkout Seamless: Alur transaksi dan pemesanan yang dioptimalkan agar mudah dipahami oleh pengguna dari berbagai rentang usia.',
      'Dashboard Pemantauan Pesanan: Panel manajemen pesanan untuk melacak status transaksi secara terpusat dari pemesanan hingga pengiriman.'
    ],
    featuresEn: [
      'Resident Storefront Management: Self-service facility for community members to open stores and manage their own inventory stock.',
      'Seamless Checkout System: Transaction and ordering flow optimized for easy understanding across all age ranges.',
      'Order Tracking Dashboard: Order management panel to centrally track transaction status from order to delivery.'
    ],
    tech: ['Laravel (PHP)', 'MySQL', 'Blade Templating', 'Payment Gateway'],
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

  const { scrollY } = useScroll();
  const planetY = useTransform(scrollY, [0, 1500], [0, -300]);

  return (
    <div className="page-content projects-page" style={{ position: 'relative' }}>
      {/* Latar Belakang Planet (Jupiter) */}
      <motion.img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" 
        alt="Jupiter"
        initial={{ x: -200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.5, scale: 1, rotate: 360 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 1, type: "spring", delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          rotate: { duration: 250, repeat: Infinity, ease: "linear" }
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '-30%',
          y: planetY,
          width: '80vw',
          maxWidth: '900px',
          zIndex: -1,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 50px rgba(255,100,50,0.3))',
          willChange: 'transform, filter',
          transform: 'translateZ(0)'
        }}
      />

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
            whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            whileTap={{ scale: 0.95 }}
            layout
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
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
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
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.15 }}
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

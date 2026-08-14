import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('id'); // Default: Indonesian

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'id' ? 'en' : 'id'));
  };

  // Define translations here for simplicity, or put them in a separate file later
  const translations = {
    id: {
      home: 'Beranda',
      about: 'Tentang',
      education: 'Pendidikan',
      projects: 'Proyek',
      skills: 'Keahlian',
      achievements: 'Pencapaian',
      dashboard: 'Dasbor',
      contact: 'Kontak',
      guestbook: 'Buku Tamu',
      greeting: 'Halo, saya Rayyan Adam',
      role: 'Web & Mobile Developer',
      description1: 'Seorang Web Developer yang berdedikasi untuk membangun solusi digital yang berdampak. Saya spesialis dalam pengembangan arsitektur web yang tangguh dan aplikasi modern menggunakan tech stack seperti PHP, Laravel, React, Python, serta pengembangan sistem ERP berbasis Odoo.',
      description2: 'Fokus saya adalah merancang sistem perangkat lunak yang terstruktur dengan baik, aman, dan mudah diskalakan. Sebagai mahasiswa Sistem Informasi, saya memadukan pemahaman logika bisnis dengan keahlian teknis untuk memastikan setiap proyek tidak hanya berfungsi optimal, tapi juga memberikan dampak nyata di dunia nyata.',
      settings: 'Pengaturan',
      projectsSubtitle: 'Koleksi repositori GitHub saya, ditarik secara real-time.',
      loading: 'Memuat data...',
      errorFetching: 'Gagal memuat repositori.',
      visitRepo: 'Lihat Kode ↗',
      noDescription: 'Tidak ada deskripsi tersedia.',
    },
    en: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      achievements: 'Achievements',
      dashboard: 'Dashboard',
      contact: 'Contact',
      guestbook: 'Guestbook',
      greeting: 'Hello, I am Rayyan Adam',
      role: 'Web & Mobile Developer',
      description1: 'A Web Developer dedicated to building impactful digital solutions. I specialize in developing robust web architectures and modern applications using tech stacks like PHP, Laravel, React, Python, and ERP system development with Odoo.',
      description2: 'My focus is on designing software systems that are well-structured, secure, and easily scalable. As an Information Systems student, I blend business logic understanding with technical expertise to ensure every project not only functions optimally but also delivers real-world impact.',
      settings: 'Settings',
      projectsSubtitle: 'A collection of my GitHub repositories, fetched in real-time.',
      loading: 'Loading data...',
      errorFetching: 'Failed to load repositories.',
      visitRepo: 'View Code ↗',
      noDescription: 'No description available.',
    }
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

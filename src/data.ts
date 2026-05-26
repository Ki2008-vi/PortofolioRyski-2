/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, Experience } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Ganes Riski P",
  title: "Junior Web Developer",
  tagline: "MEMBANGUN APLIKASI WEB YANG ELEGAN DAN BERDAMPAK.",
  description: "Seorang Software Engineer lulusan baru yang bersemangat dalam membangun aplikasi web responsif, efisien, dan berorientasi pada pengguna menggunakan teknologi Full-Stack modern.",
  location: "Pacitan, Jawa Timur (Terbuka untuk Remote Global)",
  email: "ganesriskipratama@gmail.com",
};

export const HIGH_IMPACT_PROJECTS: Project[] = [
  {
    id: "Membuat E-Commerce",
    title: "Membuat E-Commerce",
    role: "Pengembang Web Full-Stack",
    company: "RysWpsite",
    category: "Web Experience",
    summary: "Merancang dan membangun platform e-commerce premium dengan fitur keranjang belanja dinamis, variasi produk, dan alur pembayaran kustom.",
    details: {
      challenge: "Alur pembayaran standar sering kali rumit dan tidak responsif, serta kurangnya verifikasi pembayaran yang aman, sehingga menyebabkan tingginya tingkat pengabaian keranjang oleh pengguna.",
      action: "Membangun antarmuka toko satu halaman (Single-Page Application) yang responsif menggunakan React, mengintegrasikan backend Laravel yang kuat, serta merancang skema database MySQL yang optimal.",
      outcome: "Menghasilkan performa yang cepat, alur konfigurasi produk yang lancar, dan waktu muat halaman di bawah 1,2 detik, yang meningkatkan retensi pengguna sebesar 24%.",
    },
    impactMetrics: [
      { id: "cm-01", value: "100%", label: "Responsif Seluler", subtext: "Tanpa masalah tata letak" },
      { id: "cm-02", value: "< 1.2s", label: "Kecepatan Muat Halaman", subtext: "Kueri yang sangat dioptimalkan" },
      { id: "cm-03", value: "24%", label: "Peningkatan Retensi", subtext: "Pengalaman pengguna yang ditingkatkan" }
    ],
    technologies: ["React", "MySQL", "HTML5", "JavaScript"],
    imagePrompt: "A sleek luxury e-commerce interface mockup hovering in front of glowing gold background grids, premium UI elements, high visual fidelity",
    featured: true,
    liveUrl: "https://aicostore27.com"
  },
  {
    id: "qrpay-verification",
    title: "Membuat Profil Perusahaan",
    role: "Pengembang Sistem Front End",
    company: "RysWpsite",
    category: "Web Experience",
    summary: "Membangun website profil perusahaan profesional untuk para company guna menampilkan informasi, produk, dan layanan perusahaan kepada calon klien.",
    details: {
      challenge: "Perusahaan membutuhkan kehadiran online yang modern dan profesional untuk menarik klien internasional dan menampilkan katalog produk mereka secara efektif.",
      action: "Membuat situs web profil perusahaan profesional untuk perusahaan, menampilkan informasi perusahaan, produk, dan layanan kepada calon klien.",
      outcome: "Berhasil meluncurkan situs web ke tahap produksi."
    },
    impactMetrics: [
      { id: "gp-qr-01", value: "< 5s", label: "Waktu Verifikasi", subtext: "Konfirmasi otomatis sepenuhnya" },
      { id: "gp-qr-02", value: "100%", label: "Akurasi Verifikasi", subtext: "Sesuai standar EMVCo & CRC-16" },
      { id: "gp-qr-03", value: "0", label: "Langkah Manual Diperlukan", subtext: "Alur kerja sepenuhnya otomatis" }
    ],
    technologies: ["HTML-5", "MySQL", "JavaScript", "Tailwind CSS"],
    imagePrompt: "A glowing futuristic digital QR code hovering in a dark room with subtle gold (#977e45) and deep charcoal neon particles floating around, sleek modern financial developer dashboard aesthetics",
    featured: true,
    liveUrl: "https://globalproductionponorogo.com"
  },
  {
    id: "apexstudio-portfolio",
    title: "Sistem Kustom",
    role: "Pengembang Full Stack",
    company: "RysWpsite",
    category: "Backend Platform",
    summary: "Membuat sistem kustom untuk berbagai kebutuhan perusahaan.",
    details: {
      challenge: "Perusahaan membutuhkan sistem yang dapat membantu mereka dalam mengelola data dan informasi perusahaan secara efisien.",
      action: "Membuat sistem kustom untuk perusahaan, menampilkan informasi perusahaan, produk, dan layanan kepada calon klien.",
      outcome: "Sistem berhasil divalidasi dan dijalankan dalam jaringan internal perusahaan untuk operasional harian.",
    },
    impactMetrics: [
      { id: "re-01", value: "Laravel", label: "Sistem Kustom", subtext: "Interaksi yang sangat mulus" },
      { id: "re-02", value: "100%", label: "Peran Admin dan Pengguna", subtext: "Struktur heading & tag yang sempurna" },
      { id: "re-03", value: "5", label: "Akses Jaringan Perusahaan", subtext: "Penyesuai tema dinamis" }
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Motion"],
    imagePrompt: "Elegant golden clock gears floating and deconstructing mid-air over a polished obsidian floor, glowing amber and brass lines, high depth-of-field",
    featured: true,
    liveUrl: "https://contoh-link-sistem-kustom.com"
  }
];

export const TECHNICAL_SKILLS: Skill[] = [
  {
    name: "HTML5",
    percentage: 95,
    category: "Distributed Frontend",
    description: "Membangun struktur halaman web modern menggunakan elemen semantik, optimasi SEO, dan aksesibilitas yang baik.",
    yearsOfExperience: 2
  },
  {
    name: "CSS3 & Desain Responsif",
    percentage: 90,
    category: "Distributed Frontend",
    description: "Membuat tata letak yang sangat responsif, animasi yang indah, dan desain UI modern menggunakan gaya kustom.",
    yearsOfExperience: 2
  },
  {
    name: "JavaScript (ES6+)",
    percentage: 88,
    category: "Distributed Frontend",
    description: "Menulis skrip sisi klien yang bersih, memanipulasi DOM, dan menangani integrasi data asinkron secara efisien.",
    yearsOfExperience: 2
  },
  {
    name: "React.js",
    percentage: 85,
    category: "Distributed Frontend",
    description: "Membangun aplikasi Single-Page (SPA) yang responsif menggunakan hook kustom, komponen reusable, dan manajemen state global.",
    yearsOfExperience: 1
  },
  {
    name: "PHP",
    percentage: 82,
    category: "Core Systems",
    description: "Mengembangkan logika backend yang kuat, penanganan sesi, integrasi sisi server, dan API RESTful yang aman.",
    yearsOfExperience: 1.5
  },
  {
    name: "Laravel",
    percentage: 80,
    category: "Core Systems",
    description: "Membangun aplikasi web yang terstruktur menggunakan arsitektur MVC, Eloquent ORM, Blade templating, dan sistem migrasi database.",
    yearsOfExperience: 1
  },
  {
    name: "MySQL",
    percentage: 85,
    category: "Core Systems",
    description: "Merancang struktur database relasional yang efisien, menulis kueri SQL yang dioptimalkan, dan menangani persistensi data.",
    yearsOfExperience: 1.5
  }
];

export const DETAILED_EXPERIENCE: Experience[] = [
  {
    id: "exp-fullstack",
    role: "Pengembang Full Stack",
    company: "Mandiri",
    location: "Remote",
    period: "2026 - Sekarang",
    description: [
      "Saat ini aktif sebagai pengembang Full Stack, membangun aplikasi web end-to-end dari perancangan hingga implementasi.",
      "Mengembangkan solusi frontend dan backend menggunakan teknologi web modern untuk performa optimal."
    ],
    customMetrics: ["Solusi Full-Stack", "Pengembangan End-to-End"],
    skillsUsed: ["React", "Laravel", "MySQL", "JavaScript"]
  },
  {
    id: "exp-grad",
    role: "Siswa",
    company: "SMK PGRI 2 Ponorogo",
    location: "Ponorogo, Jawa Timur",
    period: "2024-2025",
    description: [
      "Menempuh pendidikan menengah kejuruan dengan fokus pada pengembangan perangkat lunak.",
      "Mempelajari dasar-dasar teknologi web, algoritma, dan arsitektur sistem dasar."
    ],
    customMetrics: ["Keunggulan Akademik", "Penelitian Lanjutan"],
    skillsUsed: ["Siswa", "Software Engineering", "System Architecture"]
  },
  {
    id: "exp-swe",
    role: "Software Engineer",
    company: "Awal Karir",
    location: "Remote",
    period: "2022 - 2023",
    description: [
      "Mulai belajar tentang rekayasa perangkat lunak.",
      "Membangun dan memelihara aplikasi web dasar dan antarmuka pengguna.",
    ],
    customMetrics: ["Fondasi Terbentuk", "Keterampilan Inti Diperoleh"],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "PHP"]
  }
];


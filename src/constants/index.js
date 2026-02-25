import { 
  MonitorSmartphone, Settings, Cloud, Link2
} from 'lucide-react';


export const NAV_LINKS = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
];

export const SERVICES_DATA = [
  { icon: MonitorSmartphone, title: "Web dan Software Custom", desc: "Solusi software yang dirancang khusus sesuai kebutuhan bisnis Anda." },
  { icon: Settings, title: "Sistem Internal dan Otomatisasi", desc: "Meningkatkan efisiensi operasional dengan sistem terintegrasi." },
  { icon: Cloud, title: "Platform SaaS dan Sistem Scalable", desc: "Software yang siap berkembang bersama bisnis Anda." },
  { icon: Link2, title: "Integrasi dan Arsitektur Sistem", desc: "Menghubungkan semua sistem bisnis menjadi satu solusi terpadu." },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Discovery & Perencanaan", desc: "Kami memulai dengan memahami visi, tujuan bisnis, dan tantangan Anda untuk merumuskan strategi pengembangan yang tepat.", position: "top" },
  { number: "02", title: "Perancangan Arsitektur", desc: "Tim ahli kami merancang arsitektur sistem yang solid, aman, dan scalable yang menjadi fondasi utama produk.", position: "bottom" },
  { number: "03", title: "Pengembangan", desc: "Proses coding menggunakan praktik terbaik dan teknologi modern, diubah menjadi perangkat lunak fungsional.", position: "top" },
  { number: "04", title: "Testing dan Validasi", desc: "Kami memastikan fungsionalitas, performa, dan keamanan berjalan sesuai spesifikasi di berbagai kondisi.", position: "bottom" },
  { number: "05", title: "Deployment", desc: "Produk diluncurkan ke lingkungan produksi dengan transisi mulus dan minim gangguan pada operasi bisnis.", position: "top" },
  { number: "06", title: "Dukungan Lanjutan", desc: "Kami menyediakan dukungan teknis, perbaikan bug, dan pemeliharaan untuk memastikan stabilitas dan performa jangka panjang.", position: "bottom" },
];

export const FOOTER_LINKS = {
  blog: ['Optimizing Mobile User Experience', 'The Future of AI Apps', 'Why Cloud Native is Here', 'Legacy System Migration'],
  company: ['Job Offers', 'Media and Press', 'CEO', 'Careers'],
  social: ['Online Resources', 'Free Resources', 'Design Hub', 'Online Meeting']
};
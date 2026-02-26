import { 
  MonitorSmartphone, Settings, Cloud, Link2
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
];

export const SERVICES_DATA = [
  { icon: MonitorSmartphone, title: "Website & Aplikasi Custom", desc: "Software yang dirancang sesuai alur kerja bisnis Anda, bukan template yang dipaksakan untuk muat ke kebutuhan Anda." },
  { icon: Settings, title: "Sistem Internal & Otomatisasi", desc: "Proses yang berulang dan memakan waktu bisa dijalankan secara otomatis, sehingga tim Anda bisa fokus pada pekerjaan yang lebih bernilai." },
  { icon: Cloud, title: "Platform SaaS & Sistem Scalable", desc: "Arsitektur yang dirancang untuk tumbuh bersama bisnis Anda, dari pengguna pertama hingga ribuan pengguna aktif." },
  { icon: Link2, title: "Integrasi & Arsitektur Sistem", desc: "Sistem yang terfragmentasi membuat data tidak konsisten dan tim tidak efisien. Kami satukan semua tools Anda menjadi satu ekosistem yang kohesif." },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Pahami & Rencanakan", desc: "Kami mulai dengan memahami bisnis, tujuan, dan tantangan yang ingin Anda selesaikan, sebelum satu baris kode pun ditulis." },
  { number: "02", title: "Desain & Arsitektur", desc: "Bersama Anda, kami merancang solusi dan arsitektur sistem yang paling sesuai sebagai fondasi yang solid sebelum pembangunan dimulai." },
  { number: "03", title: "Bangun & Uji", desc: "Tim kami membangun setiap fitur dengan standar kualitas tinggi dan mengujinya secara menyeluruh sebelum sampai ke tangan pengguna." },
  { number: "04", title: "Luncurkan & Dukung", desc: "Produk go-live dengan transisi yang mulus. Kami tetap hadir setelah peluncuran untuk memastikan semuanya berjalan sesuai harapan." },
];

export const FOOTER_LINKS = {
  blog: ['Optimizing Mobile User Experience', 'The Future of AI Apps', 'Why Cloud Native is Here', 'Legacy System Migration'],
  company: ['Job Offers', 'Media and Press', 'CEO', 'Careers'],
  social: ['Online Resources', 'Free Resources', 'Design Hub', 'Online Meeting']
};
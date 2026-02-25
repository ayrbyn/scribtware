import { 
  MonitorSmartphone, Settings, Cloud, Link2
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
];

export const SERVICES_DATA = [
  { icon: MonitorSmartphone, title: "Web dan Software Custom", desc: "Kompetitor sudah online. Saatnya Anda hadir dengan software yang benar-benar bekerja untuk bisnis Anda, bukan template generik." },
  { icon: Settings, title: "Sistem Internal dan Otomatisasi", desc: "Hentikan pekerjaan manual yang membuang waktu. Kami bangun sistem yang bekerja otomatis sehingga tim Anda fokus pada hal yang penting." },
  { icon: Cloud, title: "Platform SaaS dan Sistem Scalable", desc: "Mulai dari 10 pengguna, siap untuk 10.000. Kami rancang arsitektur yang tumbuh bersama ambisi bisnis Anda tanpa perlu rebuild dari nol." },
  { icon: Link2, title: "Integrasi dan Arsitektur Sistem", desc: "Punya banyak tools tapi tidak tersambung satu sama lain? Kami satukan semua sistem Anda menjadi satu ekosistem yang efisien dan terpadu." },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Pahami & Rencanakan", desc: "Kami mulai dengan memahami visi, tujuan bisnis, dan tantangan yang Anda hadapi, lalu merancang strategi dan arsitektur sistem yang tepat sebagai fondasi produk." },
  { number: "02", title: "Bangun", desc: "Tim engineer kami mengubah rencana menjadi produk nyata menggunakan teknologi modern dan praktik terbaik, dengan komunikasi terbuka di setiap langkahnya." },
  { number: "03", title: "Uji & Sempurnakan", desc: "Setiap fitur diuji secara menyeluruh dari sisi fungsionalitas, performa, dan keamanan sebelum siap dihadirkan ke pengguna." },
  { number: "04", title: "Luncurkan & Dukung", desc: "Produk diluncurkan ke lingkungan produksi dengan transisi mulus, dan kami tetap hadir memberikan dukungan teknis jangka panjang setelah go-live." },
];

export const FOOTER_LINKS = {
  blog: ['Optimizing Mobile User Experience', 'The Future of AI Apps', 'Why Cloud Native is Here', 'Legacy System Migration'],
  company: ['Job Offers', 'Media and Press', 'CEO', 'Careers'],
  social: ['Online Resources', 'Free Resources', 'Design Hub', 'Online Meeting']
};
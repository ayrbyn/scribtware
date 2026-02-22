import { 
  MonitorSmartphone, Settings, Briefcase, Cloud, Server, 
  MessageCircle, Link2, RefreshCw 
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
];

export const SERVICES_DATA = [
  { icon: MonitorSmartphone, title: "Pengembangan Aplikasi Web", desc: "Membangun aplikasi web custom dengan performa tinggi, responsif, dan aman untuk operasi bisnis yang kompleks." },
  { icon: Settings, title: "Pengembangan Sistem Custom", desc: "Menyediakan solusi end-to-end yang disesuaikan dengan kebutuhan unik bisnis Anda untuk meningkatkan efisiensi operasional." },
  { icon: Briefcase, title: "Pengembangan Sistem Enterprise", desc: "Membangun sistem terpusat berskala besar untuk mendukung fungsionalitas yang kompleks dan lintas departemen." },
  { icon: Cloud, title: "Pengembangan Platform SaaS", desc: "Merancang dan membangun arsitektur Software as a Service yang scalable, andal, dan siap melayani ribuan pengguna." },
  { icon: Server, title: "Pengembangan Sistem Internal", desc: "Membuat dashboard, sistem manajemen, dan tools internal untuk mendukung operasional bisnis." },
  { icon: MessageCircle, title: "Konsultasi Gratis", desc: "Kami menyediakan sesi konsultasi gratis untuk mendiskusikan kebutuhan, mengeksplorasi ide, dan memberikan saran strategis." },
  { icon: Link2, title: "Integrasi Sistem Eksternal", desc: "Mengintegrasikan berbagai platform, API, dan layanan pihak ketiga ke dalam sistem utama Anda secara mulus." },
  { icon: RefreshCw, title: "Private and Secure Solutions", desc: "Membangun sistem software yang aman, private, dan terlindungi untuk melindungi data dan operasional bisnis Anda dari risiko." },
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
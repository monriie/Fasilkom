// frontend/src/data/dummyData.js

export const programstudi = [
  {
    ID: 1,
    jurusan: "Teknik Informatika",
    deskripsi: "Program studi yang mempelajari tentang algoritma, pemrograman, basis data, kecerdasan buatan, dan teknologi informasi untuk mengembangkan sistem perangkat lunak.",
    akreditasi: "A",
    jenjang: "S1"
  },
  {
    ID: 2,
    jurusan: "Sistem Informasi",
    deskripsi: "Program studi yang fokus pada perancangan dan pengelolaan sistem informasi untuk mendukung kebutuhan bisnis dan organisasi.",
    akreditasi: "A",
    jenjang: "S1"
  },
  {
    ID: 3,
    jurusan: "Sistem Komputer",
    deskripsi: "Program studi yang mengintegrasikan perangkat keras dan perangkat lunak komputer untuk menciptakan sistem komputer yang efisien.",
    akreditasi: "B",
    jenjang: "S1"
  },
  {
    ID: 4,
    jurusan: "Teknik Informatika",
    deskripsi: "Program magister yang mendalami riset dan pengembangan teknologi informasi tingkat lanjut dengan fokus pada inovasi dan penelitian.",
    akreditasi: "B",
    jenjang: "S2"
  }
];

export const akademik = [
  {
    ID: 1,
    img: "/assets/akademik1.png",
    tanggal: "6 Agustus 2025",
    judul: "PEMGUMUMAN ! PENGISIAN KRS SEMESTER GANJIL 2025/2026"
  },
  {
    ID: 2,
    img: "/assets/akademik2.png",
    tanggal: "10 Juli 2024",
    judul: "Informasi Pembayaran UKT Semester Ganjil 2025/2026"
  },
  {
    ID: 3,
    img: "/assets/akademik3.png",
    tanggal: "8-9 Juli 2024",
    judul: "Lokakarya Penyusunan Portofolio dan Pemutakhiran RPS"
  }
];

export const berita = [
  {
    ID: 1,
    img: "/assets/berita1.png",
    judul: "Universitas Sriwijaya menyambut kedatangan delapan mahasiswa dari Faculty of Electrical Technology and Engineering, Universiti Teknikal Malaysia Melaka (UTeM)",
    tanggal: ""
  },
  {
    ID: 2,
    img: "/assets/berita2.png",
    judul: "Pengumuman ! Pengisian KRS...",
    tanggal: "6 Agustus 2025"
  },
  {
    ID: 3,
    img: "/assets/berita3.png",
    judul: "Dies Natalis ke-19 Fasilkom Unsri",
    tanggal: "31 Juli 2025"
  },
];

export const agenda = [
  {
    ID: 1,
    img: "/assets/agenda1.png"
  },
  {
    ID: 2,
    img: "/assets/agenda2.png"
  },
  {
    ID: 3,
    img: "/assets/agenda3.png"
  }
];

export const mahasiswa = [
  {
    ID: 1,
    img: "/assets/mahasiswa1.png",
    judul: "Universitas Sriwijaya menyambut kedatangan 8 mahasiswa dari Universiti Teknikal Malaysia Melaka",
  },
  {
    ID: 2,
    img: "/assets/mahasiswa2.png",
    judul: "Kuliah Umum AI and Research Trends oleh Dr. Suhaila Binti Mohammad Yusuf Universiti Teknologi Malaysia",
  },
  {
    ID: 3,
    img: "/assets/mahasiswa3.png",
    judul: "Fasilkom Universitas Sriwijaya bekerja sama dengan JAIST membuka kesempatan melalui JUMP",
  },
  {
    ID: 4,
    img: "/assets/mahasiswa4.png",
    judul: "Kunjungan kerja Fasilkom Unsri ke IPB University untuk studi banding dan penjajakan kerja sama strategis",
  }
];

export const beasiswa = [
  {
    ID: 1,
    img: "/assets/beasiswa1.png",
    judul: "Beasiswa Bakti BCA"
  },
  {
    ID: 2,
    img: "/assets/beasiswa2.png",
    judul: "Beasiswa Unggulan"
  },
  {
    ID: 3,
    img: "/assets/beasiswa3.png",
    judul: "Bidikmisi / KIP-K"
  },
  {
    ID: 4,
    img: "/assets/beasiswa4.png",
    judul: "Beasiswa Bank Indonesia"
  }
];

// Fungsi untuk mensimulasikan API response
export const getDummyData = (data) => {
  switch(data) {
    case 'programstudi':
      return  programstudi ;
    case 'akademik':
      return  akademik ;
    case 'berita':
      return  berita ;
    case 'agenda':
      return  agenda ;
    case 'mahasiswa':
      return  mahasiswa ;
    case 'beasiswa':
      return  beasiswa ;
    default:
      return [];
  }
};
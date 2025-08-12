import BeritaCard from "../../components/card/BeritaCard";

const Berita = () => {
  const newsItems = [
    {
      id: 1,
      title: "Kunjungan Fakultas Ilmu Komputer Universitas Sriwijaya ke IPB University Studi Banding SPMI dan Pengembangan Unit Usaha di Fasilkom",
      image: "/api/placeholder/400/250",
      type: "featured"
    },
    {
      id: 2,
      title: "Pelatihan & Sertifikasi Oracle...",
      date: "6 Agustus 2025",
      image: "/api/placeholder/300/200",
      type: "training"
    },
  ];
  const featuredItem = newsItems[0];
  const regularItems = newsItems.slice(1, 3); // Ambil maksimal 2 item untuk card biasa

  return (
    <section className="font-[inter] mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:mb-0 border-b-2 pr-20 pb-2 border-[#D3D3D3]">
          Berita
        </h2>
      </div>

      {/* Mobile & Tablet Layout: Featured + Button saja */}
      <div className="flex flex-row lg:hidden">
        <div className="grid grid-cols-4 gap-2">
          {/* Featured News */}
          {featuredItem && (
            <BeritaCard item={featuredItem} featured={true} />
          )}
          
          {/* Button Lihat berita lainnya */}
          <BeritaCard isPlaceholder={true} />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-6">
          {/* Featured News (Kolom 1) */}
          {featuredItem && (
            <div className="col-span-2 flex">
              <BeritaCard item={featuredItem} featured={true} />
            </div>
          )}
          
          {/* Regular News Cards (Kolom 2) */}
          <div className="col-span-1">
              {regularItems.map((item) => (
                <BeritaCard key={item.id} item={item} />
              ))}
          </div>
          
          {/* Button Lihat berita lainnya (Kolom 3) */}
          <div className="col-span-1">
            <BeritaCard isPlaceholder={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
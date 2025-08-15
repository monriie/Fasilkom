import { useEffect, useState } from "react";
import BeritaCard from "../../components/card/BeritaCard";
import Loading from "../../services/Loading";
import { getData } from "../../services/api";
import { getDummyData } from "../../data/dummyData";

const Berita = () => {
  const [beritaData, setBeritaData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchBerita = async () => {
        try {
          setLoading(true);
          const data = await getData("berita");
          setBeritaData(data.berita);
          console.log(data.berita);
        } catch (err) {
          const data = getDummyData("berita");
          setBeritaData(data);
          console.error('Error fetching Berita data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBerita();
    },[])
  
    
    const featuredItem = beritaData[0];
    const regularItems = beritaData.slice(1, 3); // Ambil maksimal 2 item untuk card biasa
    
    if(loading) return <Loading/>

  return (
    <section className="font-[inter] mt-4 w-full">
      <div className="flex flex-col text-left my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-2 sm:mb-0 border-b-2 border-[#D3D3D3]">
          Berita
        </h2>
      </div>

      {/* Mobile & Tablet Layout: Featured + Button saja */}
      <div className="flex flex-row lg:hidden">
        <div className="grid grid-cols-3 gap-2">
          {/* Featured News */}
          {featuredItem && (
            <BeritaCard className="col-span-2"
            img={featuredItem.img} 
            judul={featuredItem.judul}
            featured={true} />
          )}
          
          {/* Button Lihat berita lainnya */}
          <BeritaCard isPlaceholder={true} />
        </div>
      </div>

      <div className="hidden lg:flex lg:justify-center">
        <div className="flex flex-row gap-6">
          {/* Featured News (Kolom 1) */}
          {featuredItem && (
            <div className="w-150">
              <BeritaCard 
              img={featuredItem.img} 
              judul={featuredItem.judul}
              featured={true}
              />
            </div>
          )}

          <div className="flex flex-row justify-around gap-6">
            {/* Regular News Cards (Kolom 2) */}
            <div className="flex flex-row justify-around gap-6">
                {regularItems.map((berita) => (
                  <BeritaCard
                  key={berita.id}
                  img={berita.img}
                  judul={berita.judul}
                  tanggal={berita.tanggal}
                  />
                ))}
            </div>
            
            {/* Button Lihat berita lainnya (Kolom 3) */}
            <div className="col-span-1">
              <BeritaCard isPlaceholder={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
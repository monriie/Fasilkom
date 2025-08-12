const MahasiswaCard = () => {
  return (
    <article className="font-[inter] flex items-center p-4 w-full lg:max-w-4xl border-b border-gray-300 cursor-pointer transition-colors">
      <img 
        className="w-16 h-16 lg:w-64 lg:h-36 object-cover rounded"
      />
      <div className="ml-3 lg:ml-4 flex-1">
        <h3 className="text-black text-sm lg:text-3xl font-medium leading-relaxed">
          Kuliah Umum AI and Research Trends oleh Dr. Suhaila Binti Mohammad Yusuf
          <span className="block text-black text-xs lg:text-xl mt-1">
            (Universiti Teknologi Malaysia)
          </span>
        </h3>
      </div>
    </article>
    
  );
};

export default MahasiswaCard;
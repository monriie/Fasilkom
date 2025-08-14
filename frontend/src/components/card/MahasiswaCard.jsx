const MahasiswaCard = ({img, judul, upload}) => {
  return (
    <article className="font-[inter] w-85 lg:w-160 flex items-center py-2 lg:py-4 border-b border-gray-300 cursor-pointer transition-colors">
      <img 
        src={img}
        className="w-16 h-16 lg:w-64 lg:h-36 object-cover rounded"
      />
      <div className="ml-3 lg:ml-4 flex-1">
        <h3 className="text-black text-sm lg:text-3xl font-medium leading-relaxed line-clamp-2">
          {judul}
        </h3>
        <span className="block text-black text-xs lg:text-xl mt-1 line-clamp-1">
          ({upload})
        </span>
      </div>
    </article>
  );
};

export default MahasiswaCard;
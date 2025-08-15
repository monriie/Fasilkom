const MahasiswaCard = ({img, judul}) => {
  return (
    <article className="font-[inter] w-85 lg:w-128 flex items-center py-2 lg:py-4 lg:px-1 border-b border-gray-300 cursor-pointer transition-colors">
      <div className="ml-3 lg:ml-4 flex-1">
        <h3 className="text-black text-sm lg:text-2xl font-normal leading-relaxed">
          {judul}
        </h3>
      </div>
      <img 
        src={img}
        className="w-16 h-16 lg:w-40 lg:h-30 object-cover rounded"
      />
    </article>
  );
};

export default MahasiswaCard;
const MahasiswaCard = ({data}) => {
  return (
    <article className="font-[inter] flex min-h-60 items-center py-2 lg:py-4 lg:px-1 border-b border-gray-300 cursor-pointer transition-colors">
      <div className="flex-1">
        <h3 className="max-w-80 text-black text-sm lg:text-2xl font-normal leading-relaxed">
          {data.judul}
        </h3>
      </div>
      <img 
        src={data.img}
        className="w-16 h-16 md:w-25 lg:w-40 lg:h-30 object-cover rounded"
      />
    </article>
  );
};

export default MahasiswaCard;
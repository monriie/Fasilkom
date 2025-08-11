

const ProdiCard = () => {
  return (
    <article className="font-[inter] bg-white flex flex-col justify-between p-4 rounded-2xl transition duration-300 w-[428px] shadow-md">
      <header className="flex items-center justify-between p-2">
        <img
          src="./prodi.png"
          className="w-[40px] h-[40px] object-contain"
        />
        <ul className="flex gap-1">
          <li className="px-4 bg-[#FFFF00] text-sm font-medium rounded-2xl border">
            A
          </li>
          <li className="px-3 bg-[#FFFF00] text-sm font-medium rounded-2xl border">
            D3
          </li>
        </ul>
      </header>

      {/* Konten teks */}
      <div className="px-2 pb-4 flex-1">
        <h3 className="font-semibold mt-2 text-[32px] text-black">
          Teknik Komputer
        </h3>
        <p className="font-extralight text-xl text-justify text-black mt-1">
          Teknik Komputer adalah ilmu yang kokoh berdiri pada teori dan prinsip
          komputasi, matematika, serta rekayasa.
        </p>
      </div>

        <button
          type="button"
          className="text-start px-4 py-2 text-xl rounded-full font-medium text-black transition w-full"
        >
          Pelajari Lebih Lanjut
        </button>
    </article>
  );
};

export default ProdiCard;

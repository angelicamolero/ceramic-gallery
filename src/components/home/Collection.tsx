import { pieces } from "@/lib/pieces";
import PieceCard from "./PieceCard";

export default function Collection() {
  return (
    <section className="pt-4 pb-6 md:pt-10 md:pb-10">
      <div className="px-6 flex items-baseline justify-between mb-10">
        <h2 className="text-4xl font-medium italic text-black">Collection</h2>
        <span className="bg-[#7A2533] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
          {pieces.length} pieces
        </span>
      </div>

      {/* Mobile: slider con peek de la siguiente card */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-6 pb-2 md:hidden [&::-webkit-scrollbar]:hidden [scroll-padding-left:24px]">
        {pieces.map((piece, index) => (
          <div key={piece.id} className="flex-none w-[88%] snap-start">
            <PieceCard piece={piece} index={index} />
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid px-6 grid-cols-3 gap-x-4 gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
        {pieces.map((piece, index) => (
          <PieceCard key={piece.id} piece={piece} index={index} />
        ))}
      </div>

      <div className="mt-10 px-6 flex justify-center md:justify-end">
        <button className="group flex items-center gap-2 bg-[#7A2533] text-white text-sm px-6 py-2.5 rounded-full hover:bg-[#611D28] transition-colors duration-300">
          See all
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}

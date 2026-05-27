import { pieces } from "@/lib/pieces";
import PieceCard from "./PieceCard";

export default function Collection() {
  return (
    <section className="pt-6 pb-10 md:py-16">
      <div className="px-6 flex items-baseline justify-between mb-10">
        <h2 className="text-4xl font-medium italic text-black">Collection</h2>
        <span className="text-xs text-black/40 uppercase tracking-widest">
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
        <button className="group border border-neutral-300 bg-transparent px-6 py-2.5 text-sm font-normal text-neutral-400 rounded-full hover:text-black hover:border-black transition-colors duration-300">
          <span className="relative">
            See all
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </span>
        </button>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Piece } from "@/lib/pieces";

type Props = {
  piece: Piece;
  index: number;
};

export default function PieceCard({ piece, index }: Props) {
  const isNew = piece.collections.includes("new");
  const isSale = piece.collections.includes("sale");

  return (
    <div
      className="group cursor-pointer animate-fade-up rounded-xl overflow-hidden border border-black/10"
      style={{ animationDelay: `${Math.min(index, 9) * 100}ms` }}
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={piece.image}
          alt={piece.name}
          fill
          priority={index < 2}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Collection tags */}
        {(isNew || isSale) && (
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {isNew && (
              <span className="bg-[#B07D2A] text-white shadow-sm text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                New
              </span>
            )}
            {isSale && (
              <span className="bg-[#B07D2A] text-white shadow-sm text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                Sale
              </span>
            )}
          </div>
        )}

        <button
          type="button"
          aria-label="Add to cart"
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#7A2533] hover:text-white"
        >
          +
        </button>
      </div>

      <div className="px-4 py-3 bg-white border-t border-black/10 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-black leading-snug">{piece.name}</p>
          <span className="inline-block mt-1 bg-[#7A2533] text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">
            {piece.category}
          </span>
        </div>

        <div className="text-right shrink-0">
          {isSale && piece.salePrice ? (
            <>
              <p className="text-sm font-bold text-[#7A2533]">${piece.salePrice}</p>
              <p className="text-xs text-black/60 line-through">${piece.price}</p>
            </>
          ) : (
            <p className="text-sm text-black/60">${piece.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

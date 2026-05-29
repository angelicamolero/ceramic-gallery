import Image from "next/image";
import { Piece } from "@/lib/pieces";

type Props = {
  piece: Piece;
  index: number;
};

export default function PieceCard({ piece, index }: Props) {
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
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="px-4 py-3 bg-white border-t border-black/10 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-black leading-snug">{piece.name}</p>
          <span className="inline-block mt-1 bg-[#7A2533] text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">{piece.category}</span>
        </div>
        <p className="text-sm text-black/60 shrink-0">${piece.price}</p>
      </div>
    </div>
  );
}

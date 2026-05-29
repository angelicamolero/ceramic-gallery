import Image from "next/image";
import { Piece } from "@/lib/pieces";

type Props = {
  piece: Piece;
};

export default function FeaturedCard({ piece }: Props) {
  if (!piece?.image) return null;

  return (
    <div className="border border-black/10 bg-white p-3 w-[180px] shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
      <div className="relative h-[140px] w-full">
        <Image
          src={piece.image}
          alt={piece.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-2 text-sm text-black">
        {piece.name}
      </div>

      <div className="text-sm text-black/70">
        ${piece.price}
      </div>
    </div>
  );
}

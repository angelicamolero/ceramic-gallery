import Image from "next/image";
import Link from "next/link";
import { Piece } from "@/lib/pieces";

type Props = {
  piece: Piece;
};

export default function PieceHero({ piece }: Props) {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
      <Image
        src={piece.heroImage ?? piece.image}
        alt={piece.name}
        fill
        priority
        className="object-cover"
        style={{ objectPosition: `${piece.hotspot.x}% ${piece.hotspot.y}%` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <Link
        href="/gallery"
        className="absolute top-6 left-6 text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors"
      >
        ← Gallery
      </Link>
    </div>
  );
}

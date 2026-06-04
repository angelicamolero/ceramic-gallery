"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Piece } from "@/lib/pieces";

type Props = {
  currentSlug: string;
};

export default function RelatedPieces({ currentSlug }: Props) {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pieces")
      .then((res) => res.json())
      .then((data: Piece[]) => {
        setPieces(data.filter((p) => p.slug !== currentSlug));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [currentSlug]);

  return (
    <section className="px-6 py-14 border-t border-black/10">
      <h2 className="text-sm uppercase tracking-widest text-black mb-6">You may also like</h2>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl bg-black/5 animate-pulse" />
            ))
          : pieces.map((piece) => (
              <Link
                key={piece.id}
                href={`/piece/${piece.slug}`}
                className="group rounded-xl overflow-hidden border border-black/10 block"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 py-2 bg-white border-t border-black/10">
                  <p className="text-[11px] font-medium text-black truncate">{piece.name}</p>
                  <p className="text-[11px] text-black/50 mt-0.5">
                    {piece.salePrice ? (
                      <><span className="text-[#7A2533] font-bold">${piece.salePrice}</span>{" "}<span className="line-through">${piece.price}</span></>
                    ) : (
                      `$${piece.price}`
                    )}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Piece } from "@/lib/pieces";
import PieceCard from "@/components/home/PieceCard";

type Props = {
  pieces: Piece[];
};

export default function GalleryView({ pieces }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Extraemos las categorías únicas de las piezas
  const categories = ["All", ...Array.from(new Set(pieces.map((p) => p.category)))];

  const filtered = activeFilter === "All"
    ? pieces
    : pieces.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filtros */}
      <div className="px-6 mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={[
              "text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors duration-200",
              activeFilter === cat
                ? "bg-[#7A2533] text-white"
                : "border border-black/20 text-black/60 hover:border-black/50 hover:text-black",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="px-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-16">
        {filtered.map((piece, index) => (
          <PieceCard key={piece.id} piece={piece} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="px-6 py-20 text-center text-sm text-black/40 italic">
          No pieces in this category yet.
        </p>
      )}
    </div>
  );
}

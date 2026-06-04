"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Piece } from "@/lib/pieces";
import PieceCard from "@/components/home/PieceCard";

type Props = {
  pieces: Piece[];
};

export default function GalleryView({ pieces }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";
  const activeCategory = searchParams.get("category") || "All";
  const collection = searchParams.get("collection") || "";

  const categories = ["All", ...Array.from(new Set(pieces.map((p) => p.category)))];

  const filtered = pieces.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesCollection = !collection || p.collections.includes(collection);
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesCollection && matchesSearch;
  });

  const handleCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/gallery?${params.toString()}`);
  };

  const title = query
    ? `Results for "${query}"`
    : collection
    ? collection.charAt(0).toUpperCase() + collection.slice(1)
    : "Gallery";

  return (
    <div>
      <div className="px-6 pt-16 pb-6 flex items-baseline justify-between">
        <h1 className="text-4xl font-medium italic text-black">{title}</h1>
        <span className="bg-[#7A2533] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
          {filtered.length} pieces
        </span>
      </div>

      {/* Filters */}
      <div className="px-6 mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={[
              "text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer",
              activeCategory === cat
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
          No pieces found.
        </p>
      )}
    </div>
  );
}

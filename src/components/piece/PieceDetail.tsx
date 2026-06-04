"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Piece } from "@/lib/pieces";
import RelatedPieces from "./RelatedPieces";

type Tab = "detail" | "process" | "ambientes";

type Props = {
  piece: Piece;
};

export default function PieceDetail({ piece }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("detail");

  return (
    <div className="min-h-screen">
      {/* Hero */}
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

      {/* Tabs */}
      <div className="border-b border-black/10">
        <div className="max-w-2xl mx-auto px-6 flex gap-8">
          {(["detail", "process", "ambientes"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                "text-xs uppercase tracking-widest py-5 border-b-2 transition-colors cursor-pointer",
                activeTab === tab
                  ? "border-[#7A2533] text-black font-bold"
                  : "border-transparent text-black/40 hover:text-black",
              ].join(" ")}
            >
              {tab === "detail" ? "Details" : tab === "process" ? "Process" : "Ambientes"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "detail" && (
        <div className="px-6 pt-12 pb-16 max-w-2xl mx-auto">
          <div className="flex gap-2 mb-4">
            {piece.collections.includes("new") && (
              <span className="bg-[#B07D2A] text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">New</span>
            )}
            {piece.collections.includes("sale") && (
              <span className="bg-[#B07D2A] text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">Sale</span>
            )}
          </div>

          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl font-medium italic text-black">{piece.name}</h1>
            <div className="text-right shrink-0 pt-1">
              {piece.salePrice ? (
                <>
                  <p className="text-xl font-bold text-[#7A2533]">${piece.salePrice}</p>
                  <p className="text-sm text-black/50 line-through">${piece.price}</p>
                </>
              ) : (
                <p className="text-xl text-black/70">${piece.price}</p>
              )}
            </div>
          </div>

          <span className="inline-block mb-6 bg-[#7A2533] text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full">
            {piece.category}
          </span>

          <p className="text-base text-black/70 leading-7 mb-10 italic">{piece.description}</p>

          <div className="border-t border-black/10 pt-6 grid grid-cols-2 gap-4">
            {[
              { label: "Year", value: piece.year },
              { label: "Technique", value: piece.technique },
              { label: "Material", value: piece.material },
              { label: "Dimensions", value: piece.dimensions },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">{label}</p>
                <p className="text-sm text-black/80">{value}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-10 w-full py-4 bg-[#7A2533] text-white text-xs uppercase tracking-widest rounded-full hover:bg-[#5e1c27] transition-colors cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      )}

      {activeTab === "process" && (
        <div className="px-6 py-20 max-w-2xl mx-auto text-center">
          <p className="text-sm text-black/40 italic">Process coming soon.</p>
        </div>
      )}

      {activeTab === "ambientes" && (
        <div className="px-6 py-20 max-w-2xl mx-auto text-center">
          <p className="text-sm text-black/40 italic">Ambientes coming soon.</p>
        </div>
      )}

      {/* Related pieces — only shown on detail tab */}
      {activeTab === "detail" && <RelatedPieces currentSlug={piece.slug} />}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Piece } from "@/lib/pieces";
import PieceHero from "./PieceHero";
import PieceInfo from "./PieceInfo";
import ProcessCarousel from "./ProcessCarousel";
import RelatedPieces from "./RelatedPieces";

type Tab = "detail" | "process" | "environments";

type Props = {
  piece: Piece;
};

export default function PieceDetail({ piece }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("detail");

  return (
    <div className="min-h-screen">
      <PieceHero piece={piece} />

      <div className="border-b border-black/10">
        <div className="max-w-2xl mx-auto px-6 flex gap-8">
          {(["detail", "process", "environments"] as Tab[]).map((tab) => (
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
              {tab === "detail" ? "Details" : tab === "process" ? "Process" : "Environments"}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "detail" && <PieceInfo piece={piece} />}

      {activeTab === "process" && (
        piece.process ? (
          <ProcessCarousel steps={piece.process} pieceName={piece.name} totalSteps={piece.process.length} />
        ) : (
          <div className="px-6 py-20 max-w-2xl mx-auto text-center">
            <p className="text-sm text-black/40 italic">Process coming soon.</p>
          </div>
        )
      )}

      {activeTab === "environments" && (
        <div className="px-6 py-20 max-w-2xl mx-auto text-center">
          <p className="text-sm text-black/40 italic">Ambientes coming soon.</p>
        </div>
      )}

      {activeTab === "detail" && <RelatedPieces currentSlug={piece.slug} />}
    </div>
  );
}

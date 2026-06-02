import { getPieces } from "@/lib/api";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata = {
  title: "Gallery — Ceramic Gallery",
};

export default async function GalleryPage() {
  const pieces = await getPieces();

  return (
    <main className="min-h-screen">
      <div className="px-6 pt-16 pb-6 flex items-baseline justify-between">
        <h1 className="text-4xl font-medium italic text-black">Gallery</h1>
        <span className="bg-[#7A2533] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
          {pieces.length} pieces
        </span>
      </div>

      <GalleryView pieces={pieces} />
    </main>
  );
}

import { Suspense } from "react";
import { getPieces } from "@/lib/api";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata = {
  title: "Gallery — Ceramic Gallery",
};

export default async function GalleryPage() {
  const pieces = await getPieces();

  return (
    <main className="min-h-screen">
      <Suspense>
        <GalleryView pieces={pieces} />
      </Suspense>
    </main>
  );
}

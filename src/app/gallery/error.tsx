"use client";

export default function GalleryError() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-4xl font-medium italic text-black">Something broke.</p>
      <p className="mt-3 text-sm text-black/50">The pieces couldn't be loaded. Try refreshing the page.</p>
    </main>
  );
}

export default function GalleryLoading() {
  return (
    <main className="min-h-screen">
      <div className="px-6 pt-16 pb-6 flex items-baseline justify-between">
        <div className="h-9 w-32 bg-black/8 rounded-lg animate-pulse" />
        <div className="h-6 w-20 bg-black/8 rounded-full animate-pulse" />
      </div>

      {/* Filter chips skeleton */}
      <div className="px-6 mb-8 flex gap-2">
        {[80, 60, 70, 90, 65].map((w, i) => (
          <div
            key={i}
            className="h-8 rounded-full bg-black/8 animate-pulse"
            style={{ width: w }}
          />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="px-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <div className="aspect-[4/5] bg-black/8 animate-pulse" />
            <div className="p-3 space-y-2">
              <div className="h-4 w-3/4 bg-black/8 rounded animate-pulse" />
              <div className="h-3 w-1/3 bg-black/8 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

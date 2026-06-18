"use client";

import { useState } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export default function Carousel<T>({ items, renderItem }: Props<T>) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div>
      {renderItem(items[current], current)}

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={prev}
          className="text-xs uppercase tracking-widest text-black/40 hover:text-black transition-colors cursor-pointer"
        >
          ← Prev
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={[
                "w-1.5 h-1.5 rounded-full transition-colors cursor-pointer",
                i === current ? "bg-[#7A2533]" : "bg-black/20",
              ].join(" ")}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="text-xs uppercase tracking-widest text-black/40 hover:text-black transition-colors cursor-pointer"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

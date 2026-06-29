"use client";

import { useState } from "react";

const categories = ["الكل", "أدب عربي", "أدب عالمي", "نقد ومنهج"];

function CategoryFilter() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <div className="flex flex-wrap items-center justify-start gap-3">
      {categories.map((cat) => (
        <button
          onClick={() => setCategory(cat)}
          key={cat}
          className={`rounded-full border px-5 py-2 text-sm transition ${
            category === cat
              ? "border-(--color-amber) bg-(--color-amber) text-white"
              : "border-(--color-border) bg-white hover:border-(--color-amber)"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;

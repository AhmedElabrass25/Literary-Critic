"use client";
import { useState } from "react";
const categories = [
  "الكل",
  "بوليسية",
  "تاريخية",
  "كلاسيكيات",
  "رواية عالمية",
  "رواية عربية",
];
const CategoryFilter = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat, index) => (
          <button
            onClick={() => setCategory(cat)}
            key={cat}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              cat === category
                ? "bg-(--color-amber) text-white"
                : "bg-(--color-bg-secondary) text-(--color-text-secondary) hover:bg-(--color-border-light)"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;

import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    <div className="mt-12 flex items-center justify-center gap-3">
      <button className="flex h-11 items-center gap-2 rounded-(--radius-button) border border-(--color-border) bg-white px-5 transition hover:bg-(--color-bg-secondary)">
        <ChevronRight size={18} />
        السابق
      </button>

      <button className="flex h-11 w-11 items-center justify-center rounded-(--radius-button) bg-(--color-amber) text-white">
        1
      </button>

      <button className="flex h-11 w-11 items-center justify-center rounded-(--radius-button) border border-(--color-border) bg-white transition hover:bg-(--color-bg-secondary)">
        2
      </button>

      <button className="flex h-11 w-11 items-center justify-center rounded-(--radius-button) border border-(--color-border) bg-white transition hover:bg-(--color-bg-secondary)">
        3
      </button>

      <span className="px-2 text-(--color-text-muted)">...</span>

      <button className="flex h-11 w-11 items-center justify-center rounded-(--radius-button) border border-(--color-border) bg-white transition hover:bg-(--color-bg-secondary)">
        12
      </button>

      <button className="flex h-11 items-center gap-2 rounded-(--radius-button) border border-(--color-border) bg-white px-5 transition hover:bg-(--color-bg-secondary)">
        التالي
        <ChevronLeft size={18} />
      </button>
    </div>
  );
}
export default Pagination;

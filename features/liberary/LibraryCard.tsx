import Image from "next/image";
import Link from "next/link";
import LibraryCardActions from "./LibraryCardActions";
import { LibraryItem } from "@/types/type";
interface Props {
  item: LibraryItem;
}
function LibraryCard({ item }: Props) {
  return (
    <article className="overflow-hidden rounded-(--radius-card) border border-(--color-border) bg-white shadow-sm">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="relative h-60 w-full md:h-auto md:w-52 shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-5 flex items-start justify-between">
            <span className="inline-flex rounded-full bg-(--color-warning-bg) px-3 py-1 text-xs font-medium text-(--color-warning)">
              {item.category}
            </span>

            <LibraryCardActions type={item.type} />
          </div>
          <h3 className="mb-3 text-2xl font-bold leading-snug">{item.title}</h3>
          <p className="mb-6 line-clamp-2 leading-8 text-(--color-text-secondary)">
            {item.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between text-sm text-(--color-text-muted)">
            <span>{item.author}</span>
          </div>
          <Link
            href={`/articles/${item.id}`}
            className="mt-6 text-sm font-medium text-(--color-amber)"
          >
            متابعة القراءة ←
          </Link>
        </div>
      </div>
    </article>
  );
}
export default LibraryCard;

import { Article } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { BsBookmark, BsCalendar3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <article className="w-full flex h-full flex-col overflow-hidden rounded-(--radius-card) border border-(--color-border) bg-white shadow-sm">
      {/* Article Image */}
      <div className="relative h-64 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full bg-(--color-warning-bg) px-4 py-2 text-sm font-medium text-(--color-warning)">
          {article.category}
        </span>

        <h3 className="mt-5 line-clamp-2 text-3xl font-bold leading-snug">
          {article.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-8 text-(--color-text-secondary)">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-8">
          <div className="mb-6 flex items-center justify-between text-sm text-(--color-text-muted)">
            <div className="w-full flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FiUser />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsCalendar3 />
                <span>{article.publishedAt}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href={`/articles/${article.slug}`}
              className="btn-primary flex flex-1 items-center justify-center"
            >
              اقرأ المقالة
            </Link>

            <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--color-border) transition-colors hover:bg-(--color-bg-secondary)">
              <BsBookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

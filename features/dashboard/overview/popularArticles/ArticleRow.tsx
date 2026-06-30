import { Eye } from "lucide-react";

interface Props {
  title: string;
  views: string;
}

function ArticleRow({ title, views }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-(--color-border) py-4 last:border-none">
      <div className="flex items-center gap-4">
        <h4 className="max-w-xs font-semibold leading-7">{title}</h4>
      </div>
      <div className="flex items-center gap-5 text-sm text-(--color-text-muted)">
        <div className="flex items-center gap-1">
          <Eye size={16} />
          {views}
        </div>
      </div>
    </div>
  );
}
export default ArticleRow;

import { LucideIcon, TrendingUp } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
}

function StatCard({ title, value, change, icon: Icon }: Props) {
  return (
    <article className="rounded-(--radius-card) border border-(--color-border) bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-(--color-text-muted)">{title}</p>

          <h3 className="mt-3 text-4xl font-bold text-(--color-text-primary)">
            {value}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-bg-secondary)">
          <Icon size={22} className="text-(--color-text-primary)" />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm text-green-600">
        <TrendingUp size={16} />
        <span>{change}</span>
        <span className="text-(--color-text-muted)">مقارنة بالشهر الماضي</span>
      </div>
    </article>
  );
}
export default StatCard;

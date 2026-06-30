import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

function ActionCard({ title, description, href, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      className="group rounded-(--radius-card) border border-(--color-border) bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--color-amber) hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-bg-secondary)">
          <Icon size={22} className="text-(--color-text-primary)" />
        </div>
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />
      </div>
      <h3 className="mt-6 text-xl font-bold text-(--color-text-primary)">
        {title}
      </h3>
      <p className="mt-2 leading-7 text-(--color-text-secondary)">
        {description}
      </p>
    </Link>
  );
}
export default ActionCard;

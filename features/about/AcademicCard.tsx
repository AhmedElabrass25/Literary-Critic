import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  university: string;
  description: string;
}

export default function AcademicCard({
  icon: Icon,
  title,
  university,
  description,
}: Props) {
  return (
    <div className="rounded-(--radius-card) border border-(--color-border) bg-white p-8 shadow-(--shadow-sm)">
      <div className="mb-6 flex justify-center">
        <Icon size={24} className="text-(--color-text-primary)" />
      </div>

      <h3 className="text-center text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-center text-sm text-(--color-text-muted)">
        {university}
      </p>

      <p className="mt-6 text-center leading-8 text-(--color-text-secondary)">
        {description}
      </p>
    </div>
  );
}

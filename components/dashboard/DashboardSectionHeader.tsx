interface Props {
  title: string;
  actionText?: string;
  onAction?: () => void;
}
export default function DashboardSectionHeader({
  title,
  actionText,
  onAction,
}: Props) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-bold text-(--color-text-primary)">{title}</h3>
      {actionText && (
        <button
          onClick={onAction}
          className="text-sm font-medium text-(--color-text-primary) underline"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

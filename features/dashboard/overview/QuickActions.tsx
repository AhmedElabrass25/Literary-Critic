import DashboardSectionHeader from "@/components/dashboard/DashboardSectionHeader";
import ActionCard from "./ActionCard";
import { quickActions } from "../dashboard";
export default function QuickActions() {
  return (
    <section>
      <DashboardSectionHeader title="إجراءات سريعة" />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <ActionCard
            key={action.id}
            title={action.title}
            description={action.description}
            href={action.href}
            icon={action.icon}
          />
        ))}
      </div>
    </section>
  );
}

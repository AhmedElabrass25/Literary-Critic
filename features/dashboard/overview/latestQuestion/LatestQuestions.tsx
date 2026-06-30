import DashboardSectionHeader from "@/components/dashboard/DashboardSectionHeader";
import { latestQuestions } from "../../dashboard";
import QuestionRow from "./QuestionRow";

export default function LatestQuestions() {
  return (
    <section className="rounded-(--radius-card) border border-(--color-border) bg-white p-6 shadow-sm">
      <DashboardSectionHeader title="آخر الأسئلة" actionText="عرض الكل" />
      <div>
        {latestQuestions.map((question) => (
          <QuestionRow
            key={question.id}
            title={question.title}
            author={question.author}
            status={question.status}
          />
        ))}
      </div>
    </section>
  );
}

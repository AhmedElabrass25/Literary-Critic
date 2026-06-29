import CategoryFilter from "./CategoryFilter";
import SearchQuestions from "./SearchQuestions";
export default function QuestionFilters() {
  return (
    <div className="mb-10">
      <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl font-medium">أسئلة وإجابات</h2>
        <SearchQuestions />
      </div>
      <CategoryFilter />
    </div>
  );
}

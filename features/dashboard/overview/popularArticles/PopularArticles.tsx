import DashboardSectionHeader from "@/components/dashboard/DashboardSectionHeader";
import ArticleRow from "./ArticleRow";
import { popularArticles } from "../../dashboard";
function PopularArticles() {
  return (
    <section className="rounded-(--radius-card) border border-(--color-border) bg-white p-6 shadow-sm">
      <DashboardSectionHeader
        title="المقالات الأكثر قراءة"
        actionText="عرض الكل"
      />
      <div>
        {popularArticles.map((article) => (
          <ArticleRow
            key={article.id}
            title={article.title}
            views={article.views}
          />
        ))}
      </div>
    </section>
  );
}
export default PopularArticles;

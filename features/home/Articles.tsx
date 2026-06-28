import ArticleCard from "@/components/article-card/ArticleCard";
import { articlesData } from "@/components/article-card/articledata";

const Articles = () => {
  return (
    <section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articlesData.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;

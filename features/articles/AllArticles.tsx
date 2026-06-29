import ArticleCard from "@/components/article-card/ArticleCard";
import { articlesData } from "@/components/article-card/articledata";
import React from "react";

const AllArticles = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articlesData.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default AllArticles;

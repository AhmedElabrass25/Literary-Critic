import SectionHeader from "@/components/common/SectionHeader";
import AllArticles from "@/features/articles/AllArticles";
import ArticlesFilter from "@/features/articles/ArticlesFilters";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="container mt-24">
        <SectionHeader title="المقالات" description="٤٧ مقالة منشورة" />
        <ArticlesFilter />
        <AllArticles />
      </div>
    </section>
  );
};

export default page;

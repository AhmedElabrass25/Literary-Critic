"use client";
import SectionHeader from "@/components/common/SectionHeader";
import LatestArticles from "./LatestArticles";
const Articles = () => {
  return (
    <section className="">
      {/*  the latest articles */}
      <LatestArticles />
      {/* the most rating articles */}
      <div className="mb-12">
        <SectionHeader
          title="الأكثر تقييما "
          buttonText="عرض المزيد"
          buttonHref="/articles"
        />
      </div>
      {/* from the authors */}
      <div>
        <SectionHeader
          title=" من إختيار المحرر "
          buttonText="عرض المزيد"
          buttonHref="/articles"
        />
      </div>
    </section>
  );
};

export default Articles;

import AboutContent from "@/features/about/AboutContent";
import AcademicSection from "@/features/about/AcademicSection";
import AuthorCard from "@/features/about/AuthorCard";
import FAQSection from "@/features/about/FAQSection";
import QuoteSection from "@/features/about/QuoteSection";
import EditorChoiceArticles from "@/features/home/articles/EditorChoiceArticles";
import React from "react";

const page = () => {
  return (
    <section className="">
      <QuoteSection />
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
          <main className="order-2 space-y-16 lg:order-1">
            <AboutContent />
            <FAQSection />
          </main>
          <aside className="order-1 lg:order-2">
            <AuthorCard />
          </aside>
        </div>
      </div>
      <AcademicSection />
      <EditorChoiceArticles />
    </section>
  );
};

export default page;

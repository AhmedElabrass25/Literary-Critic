import AskForm from "@/features/ask-me/AskForm";
import AskHeader from "@/features/ask-me/AskHeader";
import LoadMoreButton from "@/features/ask-me/LoadMoreButton";
import QuestionFilters from "@/features/ask-me/QuestionFilters";
import QuestionsList from "@/features/ask-me/QuestionsList";
import React from "react";

const page = () => {
  return (
    <section className="py-24">
      <div className="container">
        <AskHeader />
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_380px]">
          <main>
            <QuestionFilters />
            <QuestionsList />
            <LoadMoreButton />
          </main>
          <aside>
            <AskForm />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default page;

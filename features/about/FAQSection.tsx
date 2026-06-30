import { personalQuestions } from "./personalQuestions";
import QuestionCard from "./QuestionCard";

function FAQSection() {
  return (
    <section className="mb-24">
      <h2 className="mb-10 pb-4 text-3xl font-bold text-(--color-text-primary) border-b-2 border-(--color-border)">
        أسئلة شخصية
      </h2>

      <div className="space-y-6">
        {personalQuestions.map((item) => (
          <QuestionCard
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}
export default FAQSection;

import { BsCalendar3, BsHandThumbsUp, BsPatchCheck } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

interface Props {
  question: {
    id: number;
    category: string;
    question: string;
    answer: string;
    author: string;
    critic: string;
    publishedAt: string;
    answeredAt: string;
    helpful: number;
  };
}

function QuestionCard({ question }: Props) {
  return (
    <article className="rounded-(--radius-card) border border-(--color-border) bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full bg-(--color-warning-bg) px-4 py-2 text-sm font-medium text-(--color-warning)">
          {question.category}
        </span>
        <div className="flex items-center gap-2 text-sm text-(--color-text-muted)">
          <BsCalendar3 />
          <span>{question.publishedAt}</span>
        </div>
      </div>
      <h3 className="mb-3 text-2xl font-bold">{question.question}</h3>
      <div className="mb-8 flex items-center gap-2 text-sm text-(--color-text-muted)">
        <FiUser />
        <span>{question.author}</span>
      </div>
      <hr className="mb-8 border-(--color-border)" />
      <div className="mb-4 flex items-center gap-2">
        <BsPatchCheck className="text-(--color-success)" />

        <h4 className="font-semibold text-(--color-text-primary)">
          إجابة الناقد
        </h4>
      </div>
      <p className="leading-8 text-(--color-text-secondary)">
        {question.answer}
      </p>
      <div className="mt-8 flex flex-col gap-4 border-t border-(--color-border) pt-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-(--color-text-muted)">
          <span>{question.critic}</span>
          <span className="mx-2">•</span>
          <span>{question.answeredAt}</span>
        </div>
      </div>
    </article>
  );
}
export default QuestionCard;

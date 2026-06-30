interface QuestionCardProps {
  question: string;
  answer: string;
}

function QuestionCard({ question, answer }: QuestionCardProps) {
  return (
    <div className="border-r-4 border-(--color-amber) pr-5">
      <h3 className="mb-4 text-2xl font-bold text-(--color-text-primary)">
        {question}
      </h3>
      <p className="leading-9 text-(--color-text-secondary)">{answer}</p>
    </div>
  );
}
export default QuestionCard;

interface FAQCardProps {
  question: string;
  answer: string;
}

function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <article className="rounded-(--radius-card) border border-(--color-border) bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <h3 className="mb-5 text-3xl font-bold leading-snug">{question}</h3>
      <p className="leading-8 text-(--color-text-secondary)">{answer}</p>
    </article>
  );
}
export default FAQCard;

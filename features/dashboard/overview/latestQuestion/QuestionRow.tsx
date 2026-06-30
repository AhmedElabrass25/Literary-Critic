interface Props {
  title: string;
  author: string;
  status: string;
}

function QuestionRow({ title, author, status }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-(--color-border) py-4 last:border-none">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-(--color-text-muted)">{author}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          status === "answered"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status === "answered" ? "تمت الإجابة" : "بانتظار الرد"}
      </span>
    </div>
  );
}
export default QuestionRow;

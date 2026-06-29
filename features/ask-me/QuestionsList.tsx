import QuestionCard from "./QuestionCard";
import { questionsData } from "./questions";

export default function QuestionsList() {
  return (
    <div className="space-y-8">
      {questionsData.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

import { faqData } from "./ContactInfo/faq";
import FAQCard from "./FAQCard";

export default function FAQSection() {
  return (
    <section className="py-24 bg-(--color-bg-secondary)">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">أسئلة شائعة</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {faqData.map((faq) => (
            <FAQCard key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

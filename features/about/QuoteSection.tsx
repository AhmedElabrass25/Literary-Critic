function QuoteSection() {
  return (
    <section className="bg-(--color-amber) py-20 my-16">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <blockquote className="text-4xl font-bold leading-relaxed text-white md:text-5xl">
            "الرواية التي غيرت حياتي كانت الجريمة والعقاب؛ أدركت حينها أن الأدب
            قادر على إعادة تشكيل الإنسان ."
          </blockquote>

          <p className="mt-8 text-lg font-medium text-white/80">
            — د. إبراهيم محمود
          </p>
        </div>
      </div>
    </section>
  );
}
export default QuoteSection;

function LibraryHeader() {
  return (
    <header className="mb-14 border-b border-(--color-border) pb-10">
      <h1 className="mb-4">مكتبتي</h1>
      <p className="mb-6 max-w-2xl leading-8 text-(--color-text-secondary)">
        كل ما حفظته من مقالات وتحليلات وملاحظات للرجوع إليها لاحقًا.
      </p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-(--color-text-muted)">
        <span>٨ مقالات محفوظة</span>
        <span>•</span>
        <span>١٣ تحليل</span>
        <span>•</span>
        <span>١٢ ملاحظة</span>
      </div>
    </header>
  );
}
export default LibraryHeader;

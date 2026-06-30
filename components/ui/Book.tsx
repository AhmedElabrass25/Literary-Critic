"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import BookPage from "./BookPage";

export default function BookReview() {
  const flipBookRef = useRef<any>(null);

  return (
    <div className="relative flex justify-center items-center gap-[32px] py-30">
      <button
        onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
        className="absolute right-50 z-10 flex w-full max-w-[48px] h-[48px] border border-[#CBC6BC] bg-[#FCF9F380] items-center justify-center rounded-full shadow-lg hover:scale-110 transition backdrop-blur-md"
      >
        <ChevronRight size={24} />
      </button>

      <HTMLFlipBook
        ref={flipBookRef}
        width={470}
        height={600}
        size="fixed"
        minWidth={470}
        maxWidth={470}
        minHeight={600}
        maxHeight={600}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-[0px_20px_50px_-10px_#0000001F]"
        style={{}}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <BookPage
          title="مقدمة المراجعة"
          paragraph={`في  قلب السرد الملحمي لرواية "الحرب والسلام"، نجد أنفسنا أمام مرآة
            تعكس الروح الإنسانية في حالاتها الأكثر تعقيداً.`}
          pageNumber={1}
        />

        <BookPage
          title="مقدمة المراجعة"
          paragraph={`ي قلب السرد الملحمي لرواية "الحرب والسلام"، نجد أنفسنا أمام مرآة
            تعكس الروح الإنسانية في حالاتها الأكثر تعقيداً.`}
          pageNumber={2}
        />

        <BookPage
          paragraph="الجمال هنا ليس في المعارك الكبرى، بل في اللحظات"
          pageNumber={3}
        />
      </HTMLFlipBook>

      <button
        onClick={() => flipBookRef.current?.pageFlip().flipNext()}
        className="absolute left-50 z-10 flex w-full max-w-[48px] h-[48px] border border-[#CBC6BC] bg-[#FCF9F380] items-center justify-center rounded-full shadow-lg hover:scale-110 transition backdrop-blur-md"
      >
        <ChevronLeft size={24} />
      </button>
    </div>
  );
}

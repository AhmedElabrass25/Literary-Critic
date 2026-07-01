import { forwardRef } from "react";

interface BookPageProps {
  title?: string;
  paragraph: string;
  pageNumber: number;
}

const BookPage = forwardRef<HTMLDivElement, BookPageProps>(
  ({ title, paragraph, pageNumber }, ref) => {
    return (
      <div ref={ref} className="relative w-full h-[600px] px-[50px] py-[40px] shadow-[-4px_0_8px_rgba(0,0,0,0.15)] bg-(--color-bg-primary)">
        <div className="w-full h-[45px] border-b border-[#CBC6BC] pb-[12px] pl-[174.2px]">
          <h3 className="w-full max-w-[173.8px] h-[32px] font-bold text-[24px] leading-[32px] text-(--color-text-primary)">
            {title}
          </h3>
        </div>

        <p className="text-[18px] leading-[34.2px] font-(family-name:--font-amiri)">
          {paragraph}
        </p>

        <div
          className={`absolute bottom-5 text-[12px] leading-[18px] text-[#959189] ${
            pageNumber % 2 === 0 ? "left-5" : "left-5"
          }`}
        >
          {pageNumber.toLocaleString("ar-EG")}
        </div>
      </div>
    );
  },
);

BookPage.displayName = "BookPage";

export default BookPage;

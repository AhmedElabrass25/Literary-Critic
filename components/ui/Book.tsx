"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import BookPage from "./BookPage";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Share2 } from "lucide-react";
import { Languages } from "lucide-react";

export default function BookReview() {
  const flipBookRef = useRef<any>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({
    top: 0,
    left: 0,
  });

  const highlightSelection = () => {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();

    if (!selectedText) return;

    const span = document.createElement("span");
    span.style.backgroundColor = "#FDE68A";
    span.style.padding = "2px";
    span.style.borderRadius = "4px";

    try {
      range.surroundContents(span);

      const savedHighlights = JSON.parse(
        localStorage.getItem("highlights") || "[]",
      );

      if (!savedHighlights.includes(selectedText)) {
        savedHighlights.push(selectedText);

        localStorage.setItem("highlights", JSON.stringify(savedHighlights));
      }

      const rect = range.getBoundingClientRect();

      setPopupPosition({
        top: rect.top + window.scrollY - 50,
        left: rect.left + window.scrollX,
      });

      setShowPopup(true);

      selection.removeAllRanges();
    } catch (error) {
      console.log("Cannot highlight this selection", error);
    }
  };

  return (
    <div className="container">
      <div>
        <div className="w-full max-w-[225px] h-[56px] rounded-full p-[8px] flex justify-center items-center m-auto gap-[12px] bg-(--color-amber) mt-35 text-white">
          <button onClick={highlightSelection}>Highlight</button>

          <button>
            <Languages />
          </button>
          <Separator
            orientation="horizontal"
            className="w-full max-w-[1px] h-[40px]"
          />
          <button>
            <Share2 />
          </button>
        </div>

        <div className="relative flex justify-center items-center gap-[32px] pt-10">
          <button
            onClick={() => flipBookRef.current?.pageFlip().flipNext()}
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
            maxShadowOpacity={0}
            showCover={false}
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
            useMouseEvents={false}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={true}
          >
            <BookPage
              title="مقدمة المراجعة"
              paragraph={`في  قلب السرد الملحمي لرواية "الحرب والسلام"، نجد أنفسنا أمام مرآة
            تعكس الروح الإنسانية في حالاتها الأكثر تعقيداً.`}
              pageNumber={2}
            />

            <BookPage
              title="مقدمة المراجعة"
              paragraph={`في  قلب السرد الملحمي لرواية "الحرب والسلام"، نجد أنفسنا أمام مرآة
            تعكس الروح الإنسانية في حالاتها الأكثر تعقيداً.`}
              pageNumber={1}
            />

            <BookPage
              paragraph="الجمال هنا ليس في المعارك الكبرى، بل في اللحظات"
              pageNumber={3}
            />
          </HTMLFlipBook>

          <button
            onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
            className="absolute left-50 z-10 flex w-full max-w-[48px] h-[48px] border border-[#CBC6BC] bg-[#FCF9F380] items-center justify-center rounded-full shadow-lg hover:scale-110 transition backdrop-blur-md"
          >
            <ChevronLeft size={24} />
          </button>

          <Dialog open={showPopup} onOpenChange={setShowPopup}>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>إضافة ملاحظة</DialogTitle>
                <DialogDescription>
                  أضف ملاحظة أو تعليقًا على النص المحدد ليتم حفظه والرجوع إليه
                  لاحقًا.
                </DialogDescription>
              </DialogHeader>

              <FieldGroup>
                <Field>
                  <Input
                    id="note"
                    name="note"
                    placeholder="أضف ملاحظتك هنا"
                    className="w-full max-w-[340px]"
                  />
                </Field>
              </FieldGroup>

              <DialogFooter>
                <Button variant="outline" onClick={() => setShowPopup(false)}>
                  إلغاء
                </Button>

                <Button type="submit">حفظ</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

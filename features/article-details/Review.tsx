import React from "react";
import { Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import AmberButton from "@/components/ui/AmberButton";

export default function Review() {
  return (
    <div className="container py-16">
      <div className="flex flex-col justify-center m-auto w-full max-w-[900px] px-[24px] gap-[32px]">
        <div className="flex flex-col gap-[4px] justify-center items-center">
          <p className="font-bold text-[28px] leading-[42px] text-[--color-text-primary]">
            ما رأيك في هذه المقالة؟
          </p>
          <p className="text-[14px] leading-[21px] text-(--color-text-muted)">
            شارك تقييمك أو اترك تعليقاً لمساعدة القراء الآخرين
          </p>
        </div>
        <div className="w-full max-w-[852px] h-[501.02px] rounded-[16px] border p-[48px] border-(--color-border) bg-white m-auto">
          <div className="flex flex-col gap-[4px] text-center">
            <p className="font-semibold text-[18px] leading-[27px] text-(--color-text-primary)">
              قيّم المقالة
            </p>
            <div className="pt-[8px] gap-[8px] flex justify-center items-center text-(--color-border)">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="text-[14px] leading-[21px] text-(--color-text-muted)">
              اختر تقييمك
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-semibold text-[16px] leading-[22.5px] text-(--color-text-primary)">
              أضف تعليقك
            </p>
            <Textarea
              placeholder="اكتب انطباعك هنا..."
              className="w-full max-w-[754px] h-[180px] min-h-[180px] rounded-[12px] border pt-[16px] pb-[138px] px-[16px] text-(--color-bg-primary) border-(-color-border) bg-(--color-bg-secondary)"
            />
            <div className="pt-[1px] pl-[570.33px]">
              <AmberButton text="إرسال التقييم" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

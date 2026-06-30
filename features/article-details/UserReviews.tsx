import React from "react";
import { Star } from "lucide-react";

export default function UserReviews() {
  return (
    <div className="container">
      <div className="w-full max-w-[852px] h-[436px] pt-[48px] flex flex-col gap-[24px] m-auto">
        <div className="border-b w-full max-w-[852px] h-[59px] flex justify-between pb-[16px] border-(--color-border)">
          <p className="font-bold text-[28px] leading-[42px] text-( --color-text-primary)">
            آراء القراء
          </p>
          <div className="flex gap-[12px]">
            <div className="flex text-(--color-amber-light)">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="font-bold text-[18px] leading-[27px] text-(-color-text-primary)">
              4.3
            </p>
            <p className="text-[16px] leading-[21px] text-(--color-text-muted)">
              (128 تقييم)
            </p>
          </div>
        </div>
        <div className="w-full max-w-[852px] h-[158px] rounded-[14px] border p-[24px] gap-[12px] bg-white border-(--color-border)">
          <div className="w-full max-w-[802px] h-[42px] flex justify-between">
            <div className="flex gap-[12px] w-full">
              <span className="w-full max-w-[40px] h-[40px] rounded-full bg-[#F1EDE8] font-bold text-[16px] leading-[24px] text-(--color-text-primary) text-center">
                ع
              </span>
              <div className="w-full  h-[42px">
                <p className="font-semibold text-[16px] leading-[24px] text-(--color-text-primary)">
                  عبدالله الحربي
                </p>
                <p className="text-[12px] leading-[18px] text-(--color-text-muted)">
                  منذ يومين
                </p>
              </div>
              <div></div>
            </div>
            <div className="flex text-(--color-amber-light)">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <div className="w-full max-w-[802px] h-[54px]">
            <p className="text-[15px] leading-[27px] text-(color-text-primary)">
              تحليل رائع ومميز، خاصة الجزء المتعلق برؤية تولستوي للفن كأداة لنقل
              الشعور. تجربة القراءة من خلال المتصفح هنا فريدة جداً وتحاكي
              الواقع.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

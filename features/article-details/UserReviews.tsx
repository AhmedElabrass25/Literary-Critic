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
      </div>
    </div>
  );
}

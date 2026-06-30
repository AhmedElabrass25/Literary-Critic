import React from "react";
import Image from "next/image";

export default function ArticleDetails() {
  return (
    <div className="container pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[32px]">
        <div className="w-full gap-[16px] flex flex-col justify-center items-center">
          <div className="w-full gap-[8.01px] flex items-center">
              <span className="p-3 rounded-full flex items-center justify-center bg-[#FAC77533] text-[#604100] text-[11px] leading-[16.5px]">
                تحليل أدبي
              </span>
            <p className="text-[11px] leading-[16.5px] text-[#49473F]">
              أكتوبر 2024
            </p>
          </div>
          <div className="w-full">
            <p className="font-bold text-[36px] leading-[45px] text-[#171610]">
              فلسفة الفن في الأدب الكلاسيكي: رحلة في عمق المعنى
            </p>
          </div>
          <div className="w-full h-[59px]">
            <p className="text-[18px] leading-[29.25px] text-[#5F5E5B]">
              نستعرض في هذا العدد تحليلاً معمقاً لرواية "الحرب والسلام" وكيف
              استطاع تولستوي صياغة مفهوم الإنسان عبر التناقضات الكبرى.
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/avater.jpg"
                fill
                priority
                className="rounded-full border border-[#CBC6BC] object-cover"
                alt="avatar-img"
              />
            </div>
            <div className="w-full h-[39px]">
              <p className="font-semibold text-[14px] leading-[21px] text-[#171610]">
                د. إبراهيم محمود
              </p>
              <p className="text-[12px] leading-[18px] texr-[#49473F]">
                ناقد أدبي كبير
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="rounded-[8px]">
            <Image
              src="/assets/pen.jpg"
              width={256}
              height={384}
              priority
              className="object-cover"
              alt="pen-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

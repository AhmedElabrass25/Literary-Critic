"use client";

import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { Image as ImageIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { FieldLabel } from "@/components/ui/field";

import { DatePickerInput } from "@/components/ui/DatePickerInput";

export default function page() {
  return (
    <div className="container">
      <div className="w-full max-w-[1150px] h-[1797px] px-[48px] py-[80px] flex flex-col gap-[32px]">
        <div className="grid w-full max-w-[924px] h-[428.8px] rounded-[24px] border bg-white border-[#CBC6BC4D] gap-[48px] relative">
          <div className="col-start-5 col-span-8 w-full max-w-[557.33px] h-[366.8px] flex flex-col gap-[24px] absolute top-[32px] left-[334.67px]">
            <div className="w-full max-w-[557.33px] h-[71.3px] flex flex-col gap-[8.5px]">
              <div className="w-full h-[16px]">
                <p className="font-semibold text-[12px] leading-[16px] text-[#49473F] tracking-[0.6px]">
                  عنوان المقالة
                </p>
              </div>
              <div className="w-full h-[46.8px]">
                <p className="text-[36px] text-[#CBC6BC]">
                  أدخل عنواناً جذاباً وهادفاً...
                </p>
              </div>
            </div>
            <div className="w-full max-w-[557.33px] h-[62.5px] flex flex-col gap-[8.5px]">
              <FieldLabel
                htmlFor="article-slug"
                className="font-semibold text-[12px] leading-[16px] tracking-[0.6px] text-[#49473F]"
              >
                الرابط الثابت (Slug)
              </FieldLabel>
              <Input
                id="article-slug"
                placeholder="literary.admin/articles/ عنوان-المقالة-هنا"
                className="w-full max-w-[557.33px] h-[38px] rounded-[8px] px-[12px] py-[8px] flex gap-[8px] placeholder:text-[14px] placeholder:leading-[20px]"
              />
            </div>
            <div className="w-full max-w-[557.33px] h-[110.5px] flex flex-col gap-[8.5px]">
              <FieldLabel
                htmlFor="article-brief-description"
                className="font-semibold text-[12px] leading-[16px] tracking-[0.6px] text-[#49473F]"
              >
                وصف مختصر
              </FieldLabel>
              <Input
                id="article-brief-description"
                placeholder="اكتب ملخصاً موجزاً للمقالة يظهر في نتائج البحث..."
                className="w-full max-w-[557.33px] h-[86px] rounded-[8px] px-[12px] pt-[12px] pb-[52px] placeholder:text-[14px] placeholder:leading-[20px]"
              />
            </div>
            <div className="w-full max-w-[557.33px] h-[50.5px] flex flex-col gap-[8.5px]">
              <FieldLabel
                htmlFor="article-tags"
                className="font-semibold text-[12px] leading-[16px] tracking-[0.6px] text-[#49473F]"
              >
                الوسوم
              </FieldLabel>
              <div className="w-full max-w-[557.33px] h-[26px] flex gap-[8px] pl-[223.33px]">
                <div className="w-full max-w-[98.31px] h-[26px] rounded-full border border-[#CBC6BC4D] px-[16px] pt-[3.5px] pb-[4.5px] flex items-center gap-[4px] bg-[#E5E2DD]">
                  <p className="font-semibold text-[12px] leading-[16px] text-[#656461]">
                    أدب مقارن
                  </p>
                  <button>
                    <X size={8.17} />
                  </button>
                </div>
                <div className="w-full max-w-[98.31px] h-[26px] rounded-full border border-[#CBC6BC4D] px-[16px] pt-[3.5px] pb-[4.5px] flex items-center gap-[4px] bg-[#E5E2DD]">
                  <p className="font-semibold text-[12px] leading-[16px] text-[#656461]">
                    نقد ثقافي
                  </p>
                  <button>
                    <X size={8.17} />
                  </button>
                </div>
                <button className="w-full max-w-[105.12px] h-[26px] rounded-full border border-[#CBC6BC4D] px-[16px] py-[4px] flex items-center gap-[4px] bg-[#FCF9F3]">
                  <button>
                    <Plus size={8.17} />
                  </button>
                  <p className="font-semibold text-[12px] leading-[16px] text-[#171610]">
                    إضافة وسم
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4 w-full max-w-[254.67px] h-[364.8px] rounded-[12px] flex flex-col text-center gap-[16px] border-[2px] border-[#CBC6BC80] bg-gradient-to-br from-[#E9DFC9] to-[#D6C3A5] absolute top-[32px] left-[32px] pb-[4.8px]">
            <label
              htmlFor="cover-image"
              className="w-full h-[364.8px] flex flex-col items-center justify-center gap-4 cursor-pointer"
            >
              <ImageIcon className="text-[#171610B2]" size={36} />

              <div className="flex flex-col items-center gap-1">
                <p className="text-[14px] font-semibold leading-5 text-[#171610B2]">
                  رفع صورة الغلاف
                </p>
                <p className="text-[12px] leading-4 text-[#171610B2]">
                  يفضل أبعاد 280×360 بكسل
                </p>
              </div>
            </label>

            <Input
              id="cover-image"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
        <div className="w-full max-w-[924px] h-[134px] rounded-[24px] border bg-white border-[#CBC6BC] p-[32px]">
          <div className="grid grid-cols-4 w-full h-[70px] gap-[48px]">
            <div className="w-full h-[70.5px] flex flex-col gap-[8.5px]">
              <p className="font-semibold text-[12px] leading-[16px] text-black">
                التصنيف الرئيسي
              </p>
              <Select>
                <SelectTrigger
                  className="w-full max-w-[179px] h-[46px] rounded-[8px] border border-[#CBC6BC] p-[12px] bg-[#F6F3EE]"
                  dir="rtl"
                >
                  <SelectValue placeholder="اختر التصنيف" />
                </SelectTrigger>
                <SelectContent className="text-[14px] leading-[20px] text-[#1C1C19]">
                  <SelectGroup
                    className="w-full border border-[#CBC6BC] bg-[#F6F3EE]"
                    dir="rtl"
                  >
                    <SelectItem value="naqd-adaby">نقد أدبي</SelectItem>
                    <SelectItem value="naqd-moqarn">نقد مقارن</SelectItem>
                    <SelectItem value="naqd-thaqafy">نقد ثقافي</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full h-[70.5px] flex flex-col gap-[8.5px] pb-[4px]">
              <p className="font-semibold text-[12px] leading-[16px] text-black">
                حالة النشر
              </p>
              <ToggleGroup
                type="single"
                defaultValue="all"
                dir="rtl"
                className="w-full max-w-[179px] h-[42px] rounded-[8px] p-[4px] border border-[#CBC6BC] flex justify-between items-center gap-[4px] bg-[#F6F3EE]"
              >
                <ToggleGroupItem
                  value="all"
                  aria-label="Toggle all"
                  className="w-full max-w-[82.34px] h-[32px] rounded-[6px] py-[8px] text-[12px] leading-[16px] font-semibold"
                >
                  مسودة
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="missed"
                  aria-label="Toggle missed"
                  className="w-full max-w-[82.34px] h-[32px] rounded-[6px] py-[8px] text-[12px] leading-[16px] font-semibold"
                >
                  مجدولة
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="w-full h-[70.5px] flex flex-col gap-[8.5px]">
              <p className="font-semibold text-[12px] leading-[16px] text-black">
                مدة القراءة (دقيقة)
              </p>
              <Input
                id="reading-time"
                type="number"
                placeholder="مدة القراءة"
                className="w-full max-w-[179px] h-[46px] rounded-[8px] border p-[12px] border-[#CBC6BC4D]"
              />
            </div>
            <div className="w-full h-[70.5px] flex flex-col gap-[8.5px]">
              <p className="font-semibold text-[12px] leading-[16px] text-black">
                تاريخ النشر
              </p>
              <DatePickerInput/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

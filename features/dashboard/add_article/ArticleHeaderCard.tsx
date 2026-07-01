import { FieldLabel } from "@/components/ui/field";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ArticleHeaderCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[924px] rounded-[24px] border border-[#CBC6BC4D] bg-white gap-8 lg:gap-12 p-6 md:p-8">
      <div className="lg:col-span-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#49473F]">
            عنوان المقالة
          </p>

          <p className="text-2xl md:text-3xl lg:text-[36px] text-[#CBC6BC]">
            أدخل عنواناً جذاباً وهادفاً...
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel
            htmlFor="article-slug"
            className="font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#49473F]"
          >
            الرابط الثابت (Slug)
          </FieldLabel>

          <Input
            id="article-slug"
            placeholder="literary.admin/articles/ عنوان-المقالة-هنا"
            className="w-full rounded-[8px] px-3 py-2 placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel
            htmlFor="article-brief-description"
            className="font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#49473F]"
          >
            وصف مختصر
          </FieldLabel>

          <Textarea
            id="article-brief-description"
            placeholder="اكتب ملخصاً موجزاً للمقالة يظهر في نتائج البحث..."
            className="min-h-[86px] resize-none rounded-[8px] px-3 py-3 placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel
            htmlFor="article-tags"
            className="font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#49473F]"
          >
            الوسوم
          </FieldLabel>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 rounded-full border border-[#CBC6BC4D] bg-[#E5E2DD] px-4 py-1">
              <span className="text-xs font-semibold text-[#656461]">
                أدب مقارن
              </span>

              <button type="button">
                <X size={8} />
              </button>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-[#CBC6BC4D] bg-[#E5E2DD] px-4 py-1">
              <span className="text-xs font-semibold text-[#656461]">
                نقد ثقافي
              </span>

              <button type="button">
                <X size={8} />
              </button>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 rounded-full border border-[#CBC6BC4D] bg-[#FCF9F3] px-4 py-1"
            >
              <Plus size={8} />

              <span className="text-xs font-semibold text-[#171610]">
                إضافة وسم
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4">
        <label
          htmlFor="cover-image"
          className="flex min-h-[300px] md:min-h-[365px] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-[12px] border-2 border-[#CBC6BC80] bg-gradient-to-br from-[#E9DFC9] to-[#D6C3A5]"
        >
          <ImageIcon className="text-[#171610B2]" size={36} />

          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-semibold text-[#171610B2]">
              رفع صورة الغلاف
            </p>

            <p className="text-xs text-[#171610B2]">يفضل أبعاد 280×360 بكسل</p>
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
  );
}

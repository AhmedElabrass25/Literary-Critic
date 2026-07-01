import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DatePickerInput } from "@/components/ui/DatePickerInput";
import { Input } from "@/components/ui/input";

export default function ArticleSettingsCard() {
  return (
    <div className="w-full max-w-[924px] rounded-[24px] border border-[#CBC6BC] bg-white p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-12">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[12px] leading-4 text-black">
            التصنيف الرئيسي
          </p>

          <Select>
            <SelectTrigger
              dir="rtl"
              className="w-full h-[46px] rounded-[8px] border border-[#CBC6BC] bg-[#F6F3EE]"
            >
              <SelectValue placeholder="اختر التصنيف" />
            </SelectTrigger>

            <SelectContent
              dir="rtl"
              className="text-[14px] leading-5 text-[#1C1C19]"
            >
              <SelectGroup>
                <SelectItem value="naqd-adaby">نقد أدبي</SelectItem>
                <SelectItem value="naqd-moqarn">نقد مقارن</SelectItem>
                <SelectItem value="naqd-thaqafy">نقد ثقافي</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[12px] leading-4 text-black">
            حالة النشر
          </p>

          <ToggleGroup
            type="single"
            defaultValue="all"
            dir="rtl"
            className="w-full h-[46px] rounded-[8px] border border-[#CBC6BC] bg-[#F6F3EE] p-1"
          >
            <ToggleGroupItem
              value="all"
              className="flex-1 h-[36px] rounded-[6px] text-[12px] font-semibold"
            >
              مسودة
            </ToggleGroupItem>

            <ToggleGroupItem
              value="missed"
              className="flex-1 h-[36px] rounded-[6px] text-[12px] font-semibold"
            >
              مجدولة
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[12px] leading-4 text-black">
            مدة القراءة (دقيقة)
          </p>

          <Input
            id="reading-time"
            type="number"
            placeholder="مدة القراءة"
            className="w-full h-[46px] rounded-[8px] border border-[#CBC6BC4D]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[12px] leading-4 text-black">
            تاريخ النشر
          </p>

          <DatePickerInput />
        </div>
      </div>
    </div>
  );
}

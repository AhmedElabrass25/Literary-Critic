"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SlelectFilter = () => {
  return (
    <>
      <Select defaultValue="latest" dir="rtl">
        <SelectTrigger className="w-full h-12 sm:w-40 bg-(--color-bg-secondary)">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="w-full bg-(--color-bg-secondary)">
          <SelectItem value="latest">الأحدث</SelectItem>
          <SelectItem value="oldest">الأقدم</SelectItem>
          <SelectItem value="popular">الأكثر قراءة</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default SlelectFilter;

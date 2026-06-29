"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const InputSearch = () => {
  return (
    <>
      <div className="w-full relative">
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-muted)"
          size={18}
        />
        <Input
          placeholder="ابحث في الأرشيف..."
          className="w-full pr-10 sm:w-80"
        />
      </div>
    </>
  );
};

export default InputSearch;

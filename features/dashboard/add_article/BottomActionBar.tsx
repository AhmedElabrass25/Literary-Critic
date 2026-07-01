import { CloudCheck } from "lucide-react";
import WhiteButton from "@/components/ui/WhiteButton";
import AmberButton from "@/components/ui/AmberButton";

export default function BottomActionBar() {
  return (
    <div className="w-full border-t border-[#CBC6BC] bg-[#FCF9F3D9] backdrop-blur-[12px] px-4 md:px-12 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <CloudCheck
            width={12.833}
            height={9.333}
            className="text-[#49473F] shrink-0"
          />
          <p className="text-sm md:text-base leading-6 text-[#49473F]">
            تم الحفظ تلقائياً في 12:45 م
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="w-full sm:w-auto h-11 rounded-lg px-6">
            معاينة
          </button>

          <WhiteButton
            text="حفظ كمسودة"
            className="w-full sm:w-auto h-11 rounded-lg border border-[#CBC6BC] px-6"
          />

          <AmberButton
            text="نشر المقالة"
            className="w-full sm:w-auto h-11 rounded-lg px-8"
          />
        </div>
      </div>
    </div>
  );
}

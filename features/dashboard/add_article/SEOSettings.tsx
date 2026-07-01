import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function SEOSettings() {
  return (
    <div className="w-full max-w-[924px] rounded-[24px] border border-[#CBC6BC] bg-white px-6 py-4">
      <Accordion
        type="single"
        collapsible
        defaultValue="seo"
        className="w-full"
      >
        <AccordionItem value="seo" className="border-none">
          <AccordionTrigger className="flex items-center gap-3 py-2 hover:no-underline">
            <div className="flex items-center gap-3">
              <Search size={18} className="text-[#49473F]" />

              <h3 className="font-bold text-[18px] leading-[28px] text-[#1C1C19]">
                إعدادات تحسين محركات البحث (SEO)
              </h3>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pt-6">
            <div className="flex flex-col gap-4">
              <Input placeholder="عنوان SEO (مثال: مراجعة كتاب الخيميائي - باولو كويلو)" />
              <Textarea
                placeholder="الوصف التعريفي الذي سيظهر في نتائج البحث..."
                className="min-h-[120px] bg-[#F6F3EE]"
              />
              <Input placeholder="الكلمات المفتاحية (مثال: الخيميائي، باولو كويلو، روايات)" />

              <Input placeholder="رابط الصفحة (مثال: alchemist-review)" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

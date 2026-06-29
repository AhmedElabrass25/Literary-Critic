"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function AskForm() {
  return (
    <>
      <div className="rounded-(--radius-card) border border-(--color-border) bg-white p-6 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold">اطرح سؤالك</h2>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="category">التصنيف</Label>
            <Select dir="rtl">
              <SelectTrigger id="category" className="h-12 w-full">
                <SelectValue placeholder="اختر التصنيف" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="arabic">أدب عربي</SelectItem>
                <SelectItem value="world">أدب عالمي</SelectItem>
                <SelectItem value="criticism">نقد ومنهج</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <Label htmlFor="question">سؤالك</Label>
              <span className="text-(--color-text-muted)">٠ / ٥٠٠</span>
            </div>
            <Textarea
              id="question"
              placeholder="اكتب سؤالك هنا بوضوح..."
              maxLength={500}
              className="min-h-44 resize-none"
            />
          </div>
          <button type="submit" className="btn-primary h-12 w-full">
            إرسال السؤال
          </button>
        </form>
      </div>
      <div className="relative mt-8 border-r-4 border-(--color-amber) pr-5">
        <blockquote className="leading-8 text-(--color-text-secondary)">
          "الناقد الحقيقي هو الذي يرى في السؤال نافذة لا مجرد علامة استفهام ."
        </blockquote>
      </div>
    </>
  );
}
export default AskForm;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="w-full rounded-(--radius-card) border border-(--color-border) bg-white p-8 shadow-sm">
      <form className="w-full space-y-6">
        <div className="w-full space-y-2">
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input
            id="name"
            placeholder="اكتب اسمك هنا..."
            className="w-full h-12"
          />
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">موضوع الرسالة</Label>
          <Input
            id="subject"
            placeholder="اقتراح مقال أو مراجعة"
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">رسالتك</Label>
          <Textarea
            id="message"
            placeholder="اكتب تفاصيل رسالتك هنا..."
            className="min-h-40 resize-none bg-(--color-bg-secondary)"
          />
        </div>

        <button
          type="submit"
          className="btn-primary flex h-12 w-full items-center justify-center gap-2 bg-(--color-amber) text-white"
        >
          <SendHorizontal size={18} />
          إرسال الرسالة
        </button>
      </form>
    </div>
  );
}

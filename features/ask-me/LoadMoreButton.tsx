import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function LoadMoreButton() {
  return (
    <div className="mt-12 flex justify-center">
      <Button
        variant="outline"
        className="h-12 rounded-(--radius-button) px-8 transition hover:bg-(--color-bg-secondary)"
      >
        <ChevronDown className="ml-2 h-4 w-4" />
        تحميل المزيد
      </Button>
    </div>
  );
}

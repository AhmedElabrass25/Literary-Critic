import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchQuestions() {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-text-muted)"
      />
      <Input placeholder="ابحث في الأسئلة..." className="h-12 pr-12" />
    </div>
  );
}
export default SearchQuestions;

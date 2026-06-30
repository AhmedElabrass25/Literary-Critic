import { Input } from "@/components/ui/input";
import { Search, Plus, Bell } from "lucide-react";
import MobileSidebar from "../sidebar/MobileSidebar";
function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b bg-(--color-bg-primary) px-4 lg:px-8">
      <div className="flex items-center gap-6">
        <MobileSidebar />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-50 lg:w-80">
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-text-muted)"
          />
          <Input placeholder="ابحث في المقالات..." className="pr-11" />
        </div>
        <button className="relative">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>
        <button className="flex items-center gap-2 bg-(--color-text-primary) text-white h-11 rounded-md lg:rounded-full px-3 lg:px-6">
          <Plus size={18} />
          <span className="hidden lg:block"> مقال جديد</span>
        </button>
      </div>
    </header>
  );
}
export default DashboardTopbar;

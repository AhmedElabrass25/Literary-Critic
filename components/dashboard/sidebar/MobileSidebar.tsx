"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardSidebar from "./DashboardSidebar";
function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-0">
        <DashboardSidebar mobile />
      </SheetContent>
    </Sheet>
  );
}
export default MobileSidebar;

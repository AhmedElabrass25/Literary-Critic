"use client";
import { BookOpenCheck, Settings, X } from "lucide-react";
import { sidebarLinks } from "../sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
interface DashboardSidebarProps {
  mobile?: boolean;
}
function DashboardSidebar({ mobile }: DashboardSidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={`fixed top-0 right-0 z-50
    ${mobile ? "w-full" : "hidden lg:flex w-72 shrink-0"}
    flex-col
    min-h-screen
    bg-(--color-bg-secondary)
    border-l
    border-(--color-border)
  `}
    >
      {/*(vip) use SheetClose to close the sidebar in mobile */}
      {mobile && (
        <div className="absolute top-5 left-4">
          <SheetClose>
            <X size={28} />
          </SheetClose>
        </div>
      )}
      <div className="flex items-center gap-3 border-b border-(--color-border) p-6">
        <span className="bg-(--color-text-primary) text-white p-2 rounded-sm">
          <BookOpenCheck size={28} />
        </span>
        <div>
          <h2 className="text-2xl font-bold">لوحة التحكم</h2>
          <p className="text-sm text-(--color-text-muted)">نقد أدبي</p>
        </div>
      </div>
      {/* all links in sidebar */}
      <nav className="flex-1 px-5 py-8 space-y-2">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between rounded-md px-4 py-3 transition ${
                isActive
                  ? "bg-[#cecdcc] text-black border-r-4 border-(--color-text-primary)"
                  : "text-(--color-text-primary)"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={20}
                  className={isActive ? "text-(--color-text-primary)" : ""}
                />
                <span className="font-medium">{item.title}</span>
              </div>
              {item.badge && (
                <span className="rounded-full bg-(--color-text-primary) px-2 py-0.5 text-xs text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-(--color-border) p-5">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white"
        >
          <Settings size={20} />
          <span>الإعدادات</span>
        </Link>
      </div>
    </aside>
  );
}
export default DashboardSidebar;

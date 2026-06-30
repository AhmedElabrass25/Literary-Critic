import {
  LayoutDashboard,
  FileText,
  FilePenLine,
  MessageSquareText,
  Users,
  Megaphone,
  ChartColumn,
  Settings,
} from "lucide-react";
export const sidebarLinks = [
  {
    title: "نظرة عامة",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "المقالات",
    href: "/dashboard/articles",
    icon: FileText,
  },
  {
    title: "المسودات",
    href: "/dashboard/drafts",
    icon: FilePenLine,
  },
  {
    title: "الأسئلة",
    href: "/dashboard/questions",
    icon: MessageSquareText,
    badge: 9,
  },
  {
    title: "المستخدمون",
    href: "/dashboard/users",
    icon: Users,
  },
  //   {
  //     title: "الإعلانات",
  //     href: "/dashboard/ads",
  //     icon: Megaphone,
  //   },
  //   {
  //     title: "الإحصائيات",
  //     href: "/dashboard/statistics",
  //     icon: ChartColumn,
  //   },
  //   {
  //     title: "الاعدادات",
  //     href: "/dashboard/settings",
  //     icon: Settings,
  //   },
];

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "نقد أدبي",
  description: "منصة للنقد الأدبي والمقالات",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      {/* <Sidebar /> */}

      <div className="container">
        {/* <Topbar /> */}
        {children}
      </div>
    </div>
  );
}

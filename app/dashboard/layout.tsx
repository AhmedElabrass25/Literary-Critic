import type { Metadata } from "next";
import "../globals.css";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/toolbar/DashboardTopbar";

export const metadata: Metadata = {
  title: "لوحة التحكم",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-(--color-bg-primary)">
      {/* <div className="flex"> */}
      <DashboardSidebar />
      <main className="min-h-screen lg:mr-72">
        <DashboardTopbar />
        <div className="p-8">{children}</div>
      </main>
      {/* </div> */}
    </div>
  );
}

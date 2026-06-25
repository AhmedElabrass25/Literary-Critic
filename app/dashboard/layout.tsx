import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

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

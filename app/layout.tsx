import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Amiri } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});
export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "نقد أدبي",
  description: "منصة للنقد الأدبي والمقالات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn("h-full", cairo.variable, "font-sans")}
    >
      <body className="bg-(--color-bg-primary)">{children} </body>
    </html>
  );
}

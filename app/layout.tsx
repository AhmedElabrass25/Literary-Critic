import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
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
      className={cn("h-full", cairo.variable, "font-sans", geist.variable)}
    >
      <body className="bg-(--color-bg-primary)">
        {/* <Navbar /> */}
        <main className="container">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

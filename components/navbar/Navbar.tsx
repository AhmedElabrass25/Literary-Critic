"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "المقالات", href: "/articles" },
    { name: "اسألني", href: "/ask-me" },
    { name: "عن الناقد", href: "/about" },
  ];

  return (
    <nav className="w-full py-4 border-b border-(--color-border)">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-(--color-text-primary)"
          >
            نقد أدبي
          </Link>
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`pb-2 text-[15px] transition-colors duration-300 ${
                      isActive
                        ? "text-(--color-text-primary) font-bold"
                        : "text-(--color-text-secondary) font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.75 w-full rounded-full bg-(--color-amber)" />
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <button className="rounded-(--radius-button) px-4 py-2 text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary) cursor-pointer">
              <IoIosSearch size={20} />
            </button>

            <Link
              href="/login"
              className="rounded-(--radius-button) border border-(--color-border) px-6 py-2 text-[13px] font-medium text-(--color-text-primary) transition-all duration-300 hover:bg-(--color-bg-secondary) cursor-pointer"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

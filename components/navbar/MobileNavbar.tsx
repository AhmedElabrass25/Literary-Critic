"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiX } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { navLinks } from "./navLinks";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
export default function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          نقد أدبي
        </Link>

        <button onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <IoMenu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="container bg-(--color-bg-secondary) absolute top-[49px] right-0 py-10 w-full z-50"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
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
            </div>

            <div className="flex items-center justify-center pt-3">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

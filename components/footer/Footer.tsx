"use client";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaShareAlt } from "react-icons/fa";
import { footerLinks } from "./footer";
const Footer = () => {
  return (
    <footer className="border-t border-(--color-border) mt-24">
      <div className="container py-16">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Logo of website */}
          <div className="max-w-sm text-center lg:text-right">
            <h2 className="text-3xl font-bold text-(--color-text-primary)">
              نقد أدبي
            </h2>

            <p className="mt-4 leading-8 text-(--color-text-secondary)">
              عبر النقد الأدبي الجاد... نقرأ الروايات كما تستحق أن تُقرأ.
            </p>
          </div>

          {/* All links in website */}
          <div className="text-center">
            <h3 className="mb-6 font-bold text-(--color-text-primary)">
              روابط سريعة
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-(--color-amber)"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enter your email */}
          <div className="w-full max-w-md">
            <h3 className="text-right font-bold text-(--color-text-primary)">
              اشترك في النيوزليتر
            </h3>

            <p className="mt-2 text-right text-sm text-(--color-text-secondary)">
              احصل على مقالاتنا الجديدة في بريدك مباشرة
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full rounded-(--radius-input) border border-(--color-border) px-4 py-3 outline-none focus:border-(--color-amber)"
              />

              <button type="submit" className="btn-primary w-full">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
        <div className="my-10 h-px bg-(--color-border)" />
        {/*social media icons */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 lg:flex-row">
          <p className="text-sm text-(--color-text-secondary)">
            © ٢٠٢٦ نقد أدبي. جميع الحقوق محفوظة.{" "}
          </p>
          <div className="flex items-center gap-5 text-xl">
            <Link href="#">
              <FaShareAlt />
            </Link>

            <Link href="#">
              <FaInstagram />
            </Link>

            <Link href="#">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

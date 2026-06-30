import Image from "next/image";
import Link from "next/link";
import { FiAtSign } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";
import { RiQuillPenLine } from "react-icons/ri";
function AuthorCard() {
  return (
    <div className="rounded-(--radius-card) border border-(--color-border) bg-white p-8 shadow-(--shadow-sm)">
      <div className="flex justify-center">
        <Image
          src="/images/author.svg"
          alt="Author"
          width={120}
          height={120}
          className="h-30 w-30 rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold text-(--color-text-primary)">
          د. إبراهيم محمود
        </h2>

        <p className="mt-2 font-medium text-(--color-warning)">
          ناقد أدبي متخصص في الرواية
        </p>

        <p className="mt-5 leading-8 text-(--color-text-secondary)">
          أبحث في ثنايا النصوص عن الروح الإنسانية المفقودة.
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-(--color-border)" />

      {/* Statistics */}
      <div className="grid grid-cols-2 divide-x divide-(--color-border)">
        <div className="text-center">
          <p className="text-4xl font-bold text-(--color-text-primary)">١٥</p>
          <span className="text-sm text-(--color-text-muted)">سنوات النقد</span>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-(--color-text-primary)">٤٧ </p>

          <span className="text-sm text-(--color-text-muted)">
            مقالة منشورة
          </span>
        </div>
      </div>
      <Link href="/contact" className="btn-primary mt-8 flex justify-center">
        تواصل معي
      </Link>
      {/* social icons */}
      <div className="mt-8 flex justify-center gap-6 text-(--color-text-secondary)">
        <Link href={"#"} className="transition hover:text-(--color-warning)">
          <RiQuillPenLine size={20} />
        </Link>

        <Link href={"#"} className="transition hover:text-(--color-warning)">
          <LuShare2 size={20} />
        </Link>

        <Link href={"#"} className="transition hover:text-(--color-warning)">
          <FiAtSign size={20} />
        </Link>
      </div>
    </div>
  );
}
export default AuthorCard;

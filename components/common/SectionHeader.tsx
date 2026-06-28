"use client";
import Link from "next/link";
interface SectionHeaderProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}
export default function SectionHeader({
  title,
  description,
  buttonText,
  buttonHref,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-4xl font-bold text-(--color-text-primary)">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-2xl text-(--color-text-secondary)">
            {description}
          </p>
        )}
      </div>
      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="w-fit rounded-(--radius-button) border border-(--color-border) px-6 py-3 text-sm font-medium text-(--color-text-primary) transition-colors duration-300 hover:bg-(--color-bg-secondary)"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}

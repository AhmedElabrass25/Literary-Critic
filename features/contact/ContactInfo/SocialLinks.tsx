import Link from "next/link";
import { socialLinks } from "../contact";

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border) transition-all duration-300 hover:border-(--color-warning) hover:bg-(--color-warning) hover:text-white"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}
export default SocialLinks;

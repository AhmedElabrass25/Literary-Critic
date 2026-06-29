import { contactInfo } from "../contact";
import ContactItem from "./ContactItem";
import SocialLinks from "./SocialLinks";
import { CircleAlert } from "lucide-react";

function ContactInfo() {
  return (
    <div className="space-y-10">
      {contactInfo.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
        />
      ))}

      <div>
        <h3 className="mb-5 text-center text-lg font-semibold">
          تفاعل على المنصات
        </h3>

        <SocialLinks />
      </div>

      <div className="flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-bg-secondary) p-5">
        <CircleAlert
          size={22}
          className="mt-1 shrink-0 text-(--color-warning)"
        />

        <p className="text-sm leading-7 text-(--color-text-secondary)">
          نسعى للرد على جميع الاستفسارات خلال 24 إلى 48 ساعة. شكراً لاهتمامكم
          بالتواصل معنا.
        </p>
      </div>
    </div>
  );
}
export default ContactInfo;

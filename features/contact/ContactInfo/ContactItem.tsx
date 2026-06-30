import { LucideIcon } from "lucide-react";
interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}
const ContactItem = ({ icon: Icon, title, value }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--color-border)">
        <Icon size={20} />
      </div>

      <div>
        <p className="text-sm text-(--color-text-muted)">{title}</p>

        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;

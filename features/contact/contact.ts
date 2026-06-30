import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const contactInfo = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "contact@critic-site.com",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: "+20 123 456 7890",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "القاهرة، جمهورية مصر العربية",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaFacebookF,
    href: "#",
  },
  {
    id: 2,
    icon: FaInstagram,
    href: "#",
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    href: "#",
  },
];

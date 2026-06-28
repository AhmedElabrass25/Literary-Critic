import Image from "next/image";

export default function AuthImage() {
  return (
    <div className="fixed top-0 left-0 hidden h-screen w-full max-w-[760px] lg:block">
      <Image
        src="/assets/book.jpg"
        alt="رفوف كتب في مكتبة"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}

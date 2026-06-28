import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}
import Articles from "@/features/home/Articles";
import Hero from "@/features/home/Hero";
const page = () => {
  return (
    <div>
      <Hero />
      <Articles />
    </div>
  );
};

export default page;

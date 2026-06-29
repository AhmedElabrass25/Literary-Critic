"use client";
import SectionHeader from "@/components/common/SectionHeader";
import LatestArticles from "./LatestArticles";
import { MoonStar } from "lucide-react";
import MoastRatedArticles from "./MoastRatedArticles";
import EditorChoiceArticles from "./EditorChoiceArticles";
const Articles = () => {
  return (
    <section className="">
      <LatestArticles />
      <MoastRatedArticles />
      <EditorChoiceArticles />
    </section>
  );
};

export default Articles;

import ArticleHeaderCard from "@/features/dashboard/add_article/ArticleHeaderCard";
import ArticleSettingsCard from "@/features/dashboard/add_article/ArticleSettingsCard";
import ArticleEditorCard from "@/features/dashboard/add_article/ArticleEditorCard";
import SEOSettings from "@/features/dashboard/add_article/SEOSettings";
import BottomActionBar from "@/features/dashboard/add_article/BottomActionBar";

export default function page() {
  return (
    <div className="w-full">
      <div className="lg:container">
        <div className="w-full max-w-[1150px] px-[48px] pb-[80px] flex flex-col gap-[32px] items-center">
          <ArticleHeaderCard />
          <ArticleSettingsCard />
          <ArticleEditorCard />
          <SEOSettings />
        </div>
      </div>
      <BottomActionBar />
    </div>
  );
}

import LatestQuestions from "@/features/dashboard/overview/latestQuestion/LatestQuestions";
import PopularArticles from "@/features/dashboard/overview/popularArticles/PopularArticles";
import QuickActions from "@/features/dashboard/overview/QuickActions";
import StatsGrid from "@/features/dashboard/overview/StatsGrid";
import WelcomeSection from "@/features/dashboard/overview/WelcomeSection";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="space-y-10">
        <WelcomeSection />
        <StatsGrid />
        <div className="grid gap-8 xl:grid-cols-2">
          <LatestQuestions />
          <PopularArticles />
        </div>
        <QuickActions />
      </div>
    </div>
  );
};

export default page;

"use client";
import LibraryHeader from "@/features/liberary/LibraryHeader";
import LibraryList from "@/features/liberary/LibraryList";
import LibraryTabs from "@/features/liberary/LibraryTabs";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("saved");

  return (
    <section className="py-24">
      <div className="container">
        <LibraryHeader />
        <LibraryTabs activeTab={activeTab} onChange={setActiveTab} />
        <LibraryList activeTab={activeTab} />
      </div>
    </section>
  );
};

export default page;

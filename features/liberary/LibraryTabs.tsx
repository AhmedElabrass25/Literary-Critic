"use client";
interface LibraryTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  {
    id: "saved",
    label: "محفوظاتي",
  },
  {
    id: "analysis",
    label: "التحليلات",
  },
  {
    id: "notes",
    label: "الملاحظات",
  },
];

function LibraryTabs({ activeTab, onChange }: LibraryTabsProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-start gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`rounded-full border px-6 py-2 text-sm transition-all duration-300 ${
            activeTab === tab.id
              ? "border-(--color-amber) bg-(--color-amber) text-white"
              : "border-(--color-border) bg-white text-(--color-text-primary) hover:border-(--color-amber)"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
export default LibraryTabs;

import { LibraryItem } from "@/types/type";
import { libraryData } from "./library";
import LibraryCard from "./LibraryCard";

interface Props {
  activeTab: string;
}

export default function LibraryList({ activeTab }: Props) {
  const filtered: LibraryItem[] =
    activeTab === "saved"
      ? libraryData.filter((item) => item.type === "saved")
      : libraryData.filter((item) => item.type === activeTab);

  return (
    <div className="space-y-6">
      {filtered.map((item) => (
        <LibraryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

import InputSearch from "./InputSearch";
import CategoryFilter from "./CategoryFilter";
import SlelectFilter from "./SlelectFilter";

function ArticlesFilter() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row items-center">
        <SlelectFilter />
        <InputSearch />
      </div>
      <CategoryFilter />
    </div>
  );
}
export default ArticlesFilter;

import Search from "../../common/Search";
import BedsBath from "./BedsBath";
import Filter from "./Filter";
import KindCategory from "./KindCategory";
import PriceCategory from "./PriceCategory";
import PropertTtype from "./PropertTtype";

function OptionSections({ activeType, onTypeChange }) {
  return (
    <div className="z-20 flex shrink-0 flex-col bg-white lg:flex-row lg:items-end lg:gap-5 mt-13">

      {/* Search */}
      <div className="sticky top-0 z-30 flex w-full justify-center bg-white px-5 py-2 lg:static lg:w-auto lg:flex-1 lg:py-0">
        <div className="w-full max-w-[500px] lg:max-w-none">
          <Search size="small" />
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-10 z-20 flex w-full items-center justify-center gap-5 overflow-x-auto bg-white px-5 py-2 lg:static lg:w-auto lg:overflow-visible lg:py-0">
        <KindCategory
          activeType={activeType}
          onTypeChange={onTypeChange}
        />
        <PriceCategory />
        <BedsBath />
        <PropertTtype />
        <Filter />
      </div>
    </div>
  );
}

export default OptionSections;
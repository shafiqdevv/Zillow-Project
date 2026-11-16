import Search from "../../common/Search";
import BedsBath from "./BedsBath";
import Filter from "./Filter";
import KindCategory from "./KindCategory";
import PriceCategory from "./PriceCategory";
import PropertTtype from "./PropertTtype";

function OptionSections({ activeType, onTypeChange }) {
  return (
    <div className="z-20 flex shrink-0 items-end gap-5 bg-white px-5 py-3 max-lg:flex-col max-lg:items-center max-lg:gap-4 md:pt-15 lg:pt-0">

      {/* Search */}
      <div className="flex w-full justify-center [&>*]:w-full [&>*]:max-w-[500px]">
        <Search size="small" />
      </div>

      {/* Filters */}
      <div className="flex w-full items-center justify-center gap-5">
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
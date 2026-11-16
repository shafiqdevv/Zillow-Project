import Search from "../../common/Search";
import BedsBath from "./BedsBath";
import Filter from "./Filter";
import KindCategory from "./KindCategory";
import PriceCategory from "./PriceCategory";
import PropertTtype from "./PropertTtype";

function OptionSections() {
  return (
    <div className="z-20 flex shrink-0 items-end gap-5 bg-white px-5 py-3">
      <Search size="small" />
      <KindCategory />
      <PriceCategory />
      <BedsBath />
      <PropertTtype />
      <Filter />
    </div>
  );
}

export default OptionSections;
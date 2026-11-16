import Search from "../../common/Search";
import BedsBath from "./BedsBath";
import Filter from "./Filter";

import KindCategory from "./KindCategory";
import PriceCategory from "./PriceCategory";
import PropertTtype from "./PropertTtype";

function OptionSections() {
  return (
    <div className="flex items-center gap-5">
      <Search size="small" />
      <KindCategory/>
      <PriceCategory/>
      <BedsBath/>
      <PropertTtype/>
      <Filter/>
    </div>
  );
}

export default OptionSections;
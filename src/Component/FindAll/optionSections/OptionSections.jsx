import Search from "../../common/Search";
import BedsBaths from "./BedsBaths.JSX";

import KindCategory from "./KindCategory";
import PriceCategory from "./PriceCategory";

function OptionSections() {
  return (
    <div className="flex items-center gap-5">
      <Search size="small" />
      <KindCategory/>
      <PriceCategory/>
     
    </div>
  );
}

export default OptionSections;
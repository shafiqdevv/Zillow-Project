
import { useLocation } from "react-router-dom";
import { useState } from "react";

import findAllData from "../Component/FindAll/findAllData";

import MapSection from "../Component/FindAll/MapSection";
import OptionSections from "../Component/FindAll/optionSections/OptionSections";
import RightSection from "../Component/FindAll/RightSection/RightSection";

function FindRentals() {
  const location = useLocation();

  const [activeType, setActiveType] = useState(
    location.state?.type || "rent"
  );

  const filteredData = findAllData.filter(
    (item) => item.listingType === activeType
  );

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 overflow-hidden">
      <OptionSections
        activeType={activeType}
        onTypeChange={setActiveType}
      />

      <main className="grid min-h-0 flex-1 grid-cols-[55fr_45fr] overflow-hidden">
        <MapSection />

        <RightSection
          results={filteredData}
          activeType={activeType}
        />
      </main>
    </div>
  );
}

export default FindRentals;

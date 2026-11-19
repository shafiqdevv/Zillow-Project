
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Map, List, ArrowUpDown } from "lucide-react";

import findAllData from "../Component/FindAll/findAllData";

import MapSection from "../Component/FindAll/MapSection";
import OptionSections from "../Component/FindAll/optionSections/OptionSections";
import RightSection from "../Component/FindAll/RightSection/RightSection";

function FindRentals() {
  const location = useLocation();

  const [activeType, setActiveType] = useState(
    location.state?.type || "rent"
  );

  const [showMap, setShowMap] = useState(false);

  const filteredData = findAllData.filter(
    (item) => item.listingType === activeType
  );
 
  return (
    <div className="flex h-full min-h-0 flex-col px-1">

      <OptionSections
        activeType={activeType}
        onTypeChange={setActiveType}
      />

      {/* Mobile & Tablet Map / List Controls */}
      <div className="flex shrink-0 justify-center lg:hidden">
        <div className="fixed bottom-17 z-10 flex items-center overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm">
          <button
            onClick={() => setShowMap(!showMap)}
            className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            {showMap ? (
              <>
                <List size={18} />
                List
              </>
            ) : (
              <>
                <Map size={18} />
                Map
              </>
            )}
          </button>

          {!showMap && (
            <>
              <div className="h-6 w-px bg-gray-700" />
              <button className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100">
                <ArrowUpDown size={18} />
                Sort
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[55fr_45fr]">

        {/* Map */}
        <div className={`${showMap ? "flex" : "hidden"} min-h-0 lg:flex`}>
          <MapSection />
        </div>

        {/* Listings */}
        <div className={`${showMap ? "hidden" : "flex"} min-h-0 flex-col lg:flex`}>
          <RightSection
            results={filteredData}
            activeType={activeType}
          />
        </div>

      </main>
    </div>
  );
}

export default FindRentals;

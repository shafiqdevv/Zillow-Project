import MapSection from "../Component/FindAll/MapSection";
import OptionSections from "../Component/FindAll/optionSections/OptionSections";
import RightSection from "../Component/FindAll/RightSection/RightSection";

function FindRentals() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 overflow-hidden">
      <OptionSections />

      <main className="grid min-h-0 flex-1 grid-cols-[55fr_45fr] overflow-hidden">
        <MapSection />
        <RightSection />
      </main>
    </div>
  );
}

export default FindRentals;
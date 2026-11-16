
import { useState } from "react";
import {
  SlidersHorizontal,
  X,
  CalendarDays,
  Info,
  Dog,
  Cat,
  PawPrint,
  WashingMachine,
  Snowflake,
  CarFront,
  ArrowUpDown,
  Waves,
  Sofa,
  Wifi,
  Warehouse,
  Zap,
  Dumbbell,
  Bike,
  Trees,
  Building2,
} from "lucide-react";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const [moveInDate, setMoveInDate] = useState("");
  const [hideNoDate, setHideNoDate] = useState(false);

  const [selectedPets, setSelectedPets] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedOtherFilters, setSelectedOtherFilters] = useState([]);
  const [selectedViews, setSelectedViews] = useState([]);

  const pets = [
    { label: "Allows small dogs", icon: Dog },
    { label: "Allows large dogs", icon: Dog },
    { label: "Allows cats", icon: Cat },
    { label: "No pets allowed", icon: PawPrint },
  ];

  const popularAmenities = [
    { label: "In-unit laundry", icon: WashingMachine, featured: true },
    { label: "Must have A/C", icon: Snowflake, featured: true },
    { label: "On-site parking", icon: CarFront, featured: true },
    { label: "Elevator", icon: ArrowUpDown },
    { label: "Pool", icon: Waves },
    { label: "Waterfront", icon: Trees },
    { label: "Furnished", icon: Sofa },
    { label: "High speed internet", icon: Wifi },
    { label: "Basement", icon: Warehouse },
    { label: "Utilities included", icon: Zap },
    { label: "Hardwood floors", icon: Warehouse },
    { label: "Fitness center", icon: Dumbbell },
    { label: "Outdoor space", icon: Trees },
    { label: "Dishwasher", icon: WashingMachine },
    { label: "Bike storage", icon: Bike },
  ];

  const otherFilters = [
    "Disabled Access",
    "Income restricted",
    "Apartment Community",
    "Controlled access",
    "Dishwasher",
    "For rent by owner",
  ];

  const views = [
    { label: "City", icon: Building2 },
    { label: "Mountain", icon: Trees },
    { label: "Park", icon: Trees },
    { label: "Water", icon: Waves },
  ];

  const toggleItem = (item, setSelected) => {
    setSelected((previous) =>
      previous.includes(item)
        ? previous.filter((value) => value !== item)
        : [...previous, item]
    );
  };

  const resetFilters = () => {
    setMoveInDate("");
    setHideNoDate(false);
    setSelectedPets([]);
    setSelectedAmenities([]);
    setSelectedOtherFilters([]);
    setSelectedViews([]);
  };

  function SelectionButton({ item, selected, onClick }) {
    const Icon = item.icon;

    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center gap-2 rounded-xl border text-center transition
          ${
            selected
              ? "border-2 border-blue-600 bg-blue-50"
              : "border-gray-400 bg-white hover:bg-gray-100"
          }
          ${
            item.featured
              ? "h-[62px] flex-col gap-1"
              : "rounded-full px-3 py-2"
          }`}
      >
        <Icon
          size={item.featured ? 21 : 16}
          strokeWidth={2.3}
          className="shrink-0 text-black"
        />

        <span className="text-xs font-semibold text-gray-900">
          {item.label}
        </span>
      </button>
    );
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-11 items-center gap-2 rounded-xl border border-gray-400 bg-white px-4 text-sm font-semibold hover:bg-gray-50"
      >
        <SlidersHorizontal size={17} />
        Filters
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-3"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex h-[85vh] max-h-[730px] w-full max-w-[740px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header */}
            <header className="relative flex h-[62px] shrink-0 items-center justify-center border-b border-gray-300 bg-white">
              <h2 className="text-xl font-extrabold text-gray-900">
                More filters
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 rounded-full p-2 hover:bg-gray-100"
              >
                <X size={21} strokeWidth={2.5} />
              </button>
            </header>

            {/* Scrollable Body */}
            <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">

              {/* Availability */}
              <section>
                <h3 className="mb-5 text-xl font-extrabold">
                  Availability
                </h3>

                <div className="mb-2 flex items-center gap-2">
                  <label className="text-sm font-semibold">
                    Move in date
                  </label>
                  <Info size={15} className="text-blue-600" />
                </div>

                <input
                  type="date"
                  value={moveInDate}
                  onChange={(e) => setMoveInDate(e.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-400 px-4 text-sm outline-none focus:border-blue-600"
                />

                <p className="mt-1 text-xs text-gray-700">
                  MM/DD/YYYY
                </p>

                <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-500">
                  <input
                    type="checkbox"
                    checked={hideNoDate}
                    onChange={(e) => setHideNoDate(e.target.checked)}
                    className="h-5 w-5 accent-blue-600"
                  />
                  Hide listings with no date provided
                </label>
              </section>

              {/* Top Amenities */}
              <section className="mt-5">
                <h3 className="mb-4 text-xl font-extrabold">
                  Top amenities
                </h3>

                {/* Pets */}
                <h4 className="mb-2 text-sm font-semibold">
                  Pets
                </h4>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {pets.map((item) => (
                    <SelectionButton
                      key={item.label}
                      item={{ ...item, featured: true }}
                      selected={selectedPets.includes(item.label)}
                      onClick={() =>
                        toggleItem(item.label, setSelectedPets)
                      }
                    />
                  ))}
                </div>

                {/* Popular Amenities */}
                <h4 className="mb-3 mt-5 text-sm font-semibold">
                  Popular amenities
                </h4>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {popularAmenities
                    .filter((item) => item.featured)
                    .map((item) => (
                      <SelectionButton
                        key={item.label}
                        item={item}
                        selected={selectedAmenities.includes(item.label)}
                        onClick={() =>
                          toggleItem(item.label, setSelectedAmenities)
                        }
                      />
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {popularAmenities
                    .filter((item) => !item.featured)
                    .map((item) => (
                      <SelectionButton
                        key={item.label}
                        item={item}
                        selected={selectedAmenities.includes(item.label)}
                        onClick={() =>
                          toggleItem(item.label, setSelectedAmenities)
                        }
                      />
                    ))}
                </div>
              </section>

              {/* Additional Filters */}
              <section className="mt-8 space-y-4">
                {otherFilters.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-2 text-base text-gray-900"
                  >
                    <input
                      type="checkbox"
                      checked={selectedOtherFilters.includes(item)}
                      onChange={() =>
                        toggleItem(item, setSelectedOtherFilters)
                      }
                      className="h-7 w-7 accent-blue-600"
                    />

                    {item}

                    {[
                      "Disabled Access",
                      "Income restricted",
                      "Apartment Community",
                    ].includes(item) && (
                      <Info size={16} className="text-blue-600" />
                    )}
                  </label>
                ))}
              </section>

              {/* Views */}
              <section className="mt-6">
                <h4 className="mb-3 text-sm font-bold">
                  Views
                </h4>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {views.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.label}
                        onClick={() =>
                          toggleItem(item.label, setSelectedViews)
                        }
                        className={`flex h-[76px] flex-col items-center justify-center gap-1 rounded-xl border transition
                          ${
                            selectedViews.includes(item.label)
                              ? "border-2 border-blue-600 bg-blue-50"
                              : "border-gray-400 bg-white hover:bg-gray-100"
                          }`}
                      >
                        <Icon size={23} className="text-black" />

                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Property Details */}
              <section className="mt-5 pb-5">
                <h3 className="text-xl font-extrabold">
                  Property details
                </h3>

                <h4 className="mt-5 text-sm font-bold">
                  Home size
                </h4>
              </section>
            </main>

            {/* Fixed Footer */}
            <footer className="flex shrink-0 items-center gap-3 border-t border-gray-200 bg-white px-4 py-3 sm:px-5">
              <button
                onClick={resetFilters}
                className="shrink-0 text-sm font-bold text-blue-700 hover:underline"
              >
                Reset all filters
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="h-12 flex-1 rounded-xl bg-blue-700 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                See 0 rentals available
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default Filter;

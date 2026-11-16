
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Import your two components here
// import ComponentOne from "./ComponentOne";
// import ComponentTwo from "./ComponentTwo";

function RightSection() {
  const [sortBy, setSortBy] = useState("Homes for You");
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    "Homes for You",
    "Price (Low to High)",
    "Price (High to Low)",
    "Newest",
    "Bedrooms",
    "Bathrooms",
  ];

  return (
    <div className="w-full">

      {/* Header */}
      <header className="flex items-center justify-between gap-4 border-b border-gray-200 pb-5">

        {/* Left Section */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            South Dakota Rental Listings
          </h1>

          <p className="mt-1 text-sm font-medium text-gray-600">
            3,742 rentals available
          </p>
        </div>

        {/* Right Section - Sort Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-[200px] items-center justify-between rounded-xl border border-gray-400 bg-white px-3 text-sm hover:border-gray-700"
          >
            <span>
              <span className="font-semibold">Sort: </span>
              {sortBy}
            </span>

            <ChevronDown size={18} />
          </button>

          {isOpen && (
            <div className="absolute right-0 top-14 z-50 h-80 w-50 overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100
                    ${
                      sortBy === option
                        ? "bg-blue-50 font-bold text-blue-700"
                        : "text-gray-800"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Your Two Components */}
      <div className="mt-5">
        {/* <ComponentOne /> */}
        {/* <ComponentTwo /> */}
      </div>

    </div>
  );
}

export default RightSection;


import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import useClickOutside from "../../../Hooks/useClickOutside";
import ResultList from "./ResultList";

function RightSection({ results = [], activeType = "rent" }) {
  const [sortBy, setSortBy] = useState("Homes for You");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  function closeDropdown() {
    setIsOpen(false);
  }

  useClickOutside(dropdownRef, closeDropdown);

  const sortOptions = [
    "Homes for You",
    "Price (Low to High)",
    "Price (High to Low)",
    "Newest",
    "Bedrooms",
    "Bathrooms",
  ];

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-white px-2">
      <header className="z-10 flex shrink-0 items-center justify-between gap-4 border-b border-gray-200 bg-white py-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {activeType === "buy"
              ? "South Dakota Homes for Sale"
              : "South Dakota Rental Listings"}
          </h1>

          <p className="mt-1 text-sm font-medium text-gray-600">
            {results.length}{" "}
            {activeType === "buy" ? "homes" : "rentals"} available
          </p>
        </div>

        <div ref={dropdownRef} className="relative shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-10 min-w-50 items-center justify-center gap-2 rounded-xl border-2 font-semibold transition-all ${
              isOpen
                ? "border-[#0059FF] bg-blue-50"
                : "border-gray-400 bg-white hover:border-gray-600"
            }`}
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
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 ${
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

      <div className="min-h-0 flex-1 overflow-y-auto py-5">
        <ResultList results={results} />
      </div>
    </div>
  );
}

export default RightSection;

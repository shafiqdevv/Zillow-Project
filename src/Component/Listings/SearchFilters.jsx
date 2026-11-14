// Phase 2: only the For sale / For rent switch works.
// Phase 3 adds the location search, Price, Beds and baths, Property type,
// More filters and Save search.

const listingTypeOptions = [
  { value: "sale", label: "For sale" },
  { value: "rent", label: "For rent" },
];

function SearchFilters({ listingType, onListingTypeChange }) {
  return (
    <div className="relative z-30 shrink-0 border-b border-gray-300 bg-white px-4 py-3 lg:px-5">
      <div className="scrollbar-hidden flex items-center gap-4 overflow-x-auto">
        <div
          role="group"
          aria-label="Listing type"
          className="flex shrink-0 gap-1 rounded-xl border border-gray-300 p-1"
        >
          {listingTypeOptions.map((option) => {
            const isActive = option.value === listingType;

            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => onListingTypeChange(option.value)}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <p className="hidden shrink-0 text-sm text-gray-500 md:block">
          Location, price, beds and baths, property type and more filters are
          added in Phase 3.
        </p>
      </div>
    </div>
  );
}

export default SearchFilters;

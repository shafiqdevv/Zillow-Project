
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function BedsBath() {
  const [isOpen, setIsOpen] = useState(false);
  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");
  const [exactMatch, setExactMatch] = useState(false);

  const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
  const bathroomOptions = ["Any", "1+", "1.5+", "2+", "3+", "4+"];

  const renderOptions = (options, selected, setSelected) => (
    <div className="grid grid-cols-6 overflow-hidden rounded-lg border border-gray-300">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`h-9 border-r border-gray-300 text-xs font-semibold last:border-r-0
            ${
              selected === option
                ? "border-2 border-blue-600 bg-blue-50 text-gray-900"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative w-[300px] max-w-[calc(100vw-14px)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 items-center gap-2 rounded-lg border border-gray-400 px-3 text-sm font-semibold"
      >
        Beds & baths
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-11 z-50 w-full overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-[#dedee2] px-3 py-2">
            <h3 className="text-sm font-bold text-gray-600">
              Number of Bedrooms
            </h3>
          </div>

          <div className="px-3 py-3">
            <h4 className="mb-2 text-sm font-semibold">Bedrooms</h4>

            {renderOptions(bedroomOptions, bedrooms, setBedrooms)}

            <label className="mt-2 flex cursor-pointer items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={exactMatch}
                onChange={(e) => setExactMatch(e.target.checked)}
                className="h-4 w-4 accent-blue-600"
              />
              Use exact match
            </label>
          </div>

          <div className="bg-[#dedee2] px-3 py-2">
            <h3 className="text-sm font-bold text-gray-600">
              Number of Bathrooms
            </h3>
          </div>

          <div className="px-3 pb-3 pt-3">
            <h4 className="mb-2 text-sm font-semibold">Bathrooms</h4>

            {renderOptions(bathroomOptions, bathrooms, setBathrooms)}

            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 h-10 w-full rounded-lg bg-blue-700 text-sm font-bold text-white hover:bg-blue-800"
            >
              See 0 rentals available
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BedsBath;

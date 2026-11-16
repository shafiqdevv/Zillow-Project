
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "../../../Hooks/useClickOutside";

function PriceCategory() {
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  // click outside for closing dropdown
  const dropdownRef = useRef(null);
  function closeDropdown(){
    setIsOpen(false)
  }
  useClickOutside(dropdownRef,closeDropdown);
  

  const histogram = [
    4, 8, 13, 25, 40, 55, 62, 75, 90, 100,
    98, 96, 94, 87, 85, 70, 65, 62, 60, 52,
    42, 40, 38, 35, 30, 25, 22, 18, 15, 12,
    10, 8, 6, 4, 3, 2, 12, 42, 20, 9,
    7, 5, 3, 2, 1
  ];

  const handleMinChange = (value) => {
    setMinPrice(
      Math.max(0, Math.min(Number(value), maxPrice - 100))
    );
  };

  const handleMaxChange = (value) => {
    setMaxPrice(
      Math.min(10000, Math.max(Number(value), minPrice + 100))
    );
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  const minPercent = (minPrice / 10000) * 100;
  const maxPercent = (maxPrice / 10000) * 100;

  return (
    <div ref={dropdownRef} className="relative w-fit">

      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-10 min-w-30 items-center justify-center gap-2 rounded-xl border-2 font-semibold ${
          isOpen
            ? "border-[#0054E8] bg-blue-50"
            : "border-gray-400 bg-white hover:border-gray-600"
        }`}
      >
        Price

        {isOpen ? (
          <ChevronUp size={22} strokeWidth={2.5}/>
        ) : (
          <ChevronDown size={22} strokeWidth={2.5}/>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[300px] max-w-[calc(100vw-24px)] overflow-hidden rounded-2xl bg-white shadow-xl">

          {/* Header */}
          <div className="bg-[#E0E0E4] px-3 py-2.5">
            <p className="text-xs font-bold text-[#555968]">
              Price Range
            </p>
          </div>

          <div className="px-3 pb-3 pt-4">

            {/* Histogram */}
            <div className="flex h-[65px] items-end gap-[2px]">
              {histogram.map((height, index) => {
                const position =
                  ((index + 0.5) / histogram.length) * 100;

                const active =
                  position >= minPercent &&
                  position <= maxPercent;

                return (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-[2px] transition-colors duration-150 ${
                      active ? "bg-[#004FE8]" : "bg-gray-300"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>

            {/* Slider - Separate Space */}
            <div className="relative h-7 ">

              {/* Background Track */}
              <div className="absolute left-3 right-3 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-gray-300" />

              {/* Active Track */}
              <div
                className="absolute top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#004FE8]"
                style={{
                  left: `calc(12px + (100% - 24px) * ${minPrice / 10000})`,
                  right: `calc(12px + (100% - 24px) * ${1 - maxPrice / 10000})`,
                }}
              />

              {/* Min Slider */}
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={minPrice}
                onChange={(e) => handleMinChange(e.target.value)}
                className="price-slider"
                aria-label="Minimum price"
                style={{ zIndex: minPrice > 9000 ? 5 : 3 }}
              />

              {/* Max Slider */}
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={maxPrice}
                onChange={(e) => handleMaxChange(e.target.value)}
                className="price-slider"
                aria-label="Maximum price"
                style={{ zIndex: 4 }}
              />
            </div>

            {/* Price Labels */}
            <div className="mt-1 flex justify-between text-sm text-gray-900">
              <span>${minPrice.toLocaleString()}</span>
              <span>
                {maxPrice === 10000
                  ? "$10K+"
                  : `$${maxPrice.toLocaleString()}`}
              </span>
            </div>

            {/* Min / Max Inputs */}
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-end gap-2">

              <div>
                <label className="mb-1.5 block text-xs font-semibold">
                  Min
                </label>

                <input
                  type="number"
                  placeholder="No min"
                  value={minPrice === 0 ? "" : minPrice}
                  onChange={(e) =>
                    e.target.value === ""
                      ? setMinPrice(0)
                      : handleMinChange(e.target.value)
                  }
                  className="h-10 w-full rounded-lg border border-gray-400 px-2.5 text-sm outline-none focus:border-[#0054E8]"
                />
              </div>

              <span className="mb-4 text-sm">–</span>

              <div>
                <label className="mb-1.5 block text-xs font-semibold">
                  Max
                </label>

                <input
                  type="number"
                  placeholder="No max"
                  value={maxPrice === 10000 ? "" : maxPrice}
                  onChange={(e) =>
                    e.target.value === ""
                      ? setMaxPrice(10000)
                      : handleMaxChange(e.target.value)
                  }
                  className="h-10 w-full rounded-lg border border-gray-400 px-2.5 text-sm outline-none focus:border-[#0054E8]"
                />
              </div>

            </div>

            {/* Apply Button */}
            <button
              onClick={handleApply}
              className="mt-4 h-10 w-full rounded-lg bg-[#004FE8] text-sm font-bold text-white transition hover:bg-[#003FC0]"
            >
              See 0 rentals available
            </button>

          </div>
        </div>
      )}

      {/* Slider Styling */}
      <style>{`
        .price-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 28px;
          margin: 0;
          background: transparent;
          appearance: none;
          -webkit-appearance: none;
          pointer-events: none;
          outline: none;
        }

        .price-slider::-webkit-slider-runnable-track {
          height: 4px;
          background: transparent;
        }

        .price-slider::-moz-range-track {
          height: 4px;
          background: transparent;
        }

        .price-slider::-webkit-slider-thumb {
          appearance: none;
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          margin-top: -9px;
          border: none;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          pointer-events: auto;
          cursor: grab;
        }

        .price-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border: none;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          pointer-events: auto;
          cursor: grab;
        }
      `}</style>

    </div>
  );
}

export default PriceCategory;

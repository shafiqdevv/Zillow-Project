
import { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "../../../Hooks/useClickOutside";

function KindCategory({ activeType, onTypeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(activeType);

  const options = [
    { label: "For sale", value: "buy" },
    { label: "For rent", value: "rent" },
    { label: "Sold", value: "sold" },
  ];

  useEffect(() => {
    setSelected(activeType);
  }, [activeType]);

  const dropdownRef = useRef(null);

  function closeDropdown() {
    setIsOpen(false);
  }

  useClickOutside(dropdownRef, closeDropdown);

  const handleApply = () => {
    onTypeChange(selected);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((option) => option.value === activeType)?.label;

  return (
    <div ref={dropdownRef} className="relative w-fit z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-10 min-w-35 items-center justify-center gap-2 rounded-xl border-2 font-semibold transition-all ${
          isOpen
            ? "border-[#0059FF] bg-blue-50"
            : "border-gray-400 bg-white hover:border-gray-600"
        }`}
      >
        {selectedLabel}

        {isOpen ? (
          <ChevronUp size={22} strokeWidth={2.5} />
        ) : (
          <ChevronDown size={22} strokeWidth={2.5} />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-60 max-w-[calc(100vw-24px)] rounded-[28px] bg-white px-[22px] py-6 shadow-xl">
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelected(option.value)}
                className="flex w-full items-center gap-3 text-left"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[2.5px] ${
                    selected === option.value
                      ? "border-[#0054E8]"
                      : "border-gray-400"
                  }`}
                >
                  {selected === option.value && (
                    <span className="h-3 w-3 rounded-full bg-[#0054E8]" />
                  )}
                </span>

                <span className="text-xl text-gray-900">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={handleApply}
            className="mt-10 h-10 w-full rounded-2xl bg-[#004FE8] text-lg font-bold text-white transition-colors hover:bg-[#003FC0] active:scale-[0.99]"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

export default KindCategory;

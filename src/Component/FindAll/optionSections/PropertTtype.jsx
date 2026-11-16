
import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Building2,
  House,
  Building,
  BedDouble,
  DoorOpen,
} from "lucide-react";
import useClickOutside from "../../../Hooks/useClickOutside";

function PropertTtype() {
  const [isOpen, setIsOpen] = useState(false);
  const [homeType, setHomeType] = useState("Any");
  const [space, setSpace] = useState("Entire place");

  // click outside for closing dropdown
    const dropdownRef = useRef(null);
    function closeDropdown(){
      setIsOpen(false)
    }
    useClickOutside(dropdownRef,closeDropdown);
  

  const homeOptions = [
    { label: "Any", icon: Building2 },
    { label: "Houses", icon: House },
    { label: "Apartments/Condos", icon: Building },
    { label: "Townhomes", icon: House },
  ];

  const spaceOptions = [
    { label: "Any", icon: BedDouble },
    { label: "Entire place", icon: House },
    { label: "Room for rent", icon: DoorOpen },
  ];

  const OptionButton = ({ option, selected, onClick }) => {
    const Icon = option.icon;

    return (
      <button
        onClick={onClick}
        className={`flex h-[65px] flex-col items-center justify-center gap-1 rounded-xl border text-center transition
          ${
            selected
              ? "border-2 border-blue-600 bg-blue-100"
              : "border-gray-400 bg-white hover:bg-gray-100"
          }`}
      >
        <Icon size={22} strokeWidth={2.5} className="text-black" />
        <span className="text-xs font-semibold text-gray-900">
          {option.label}
        </span>
      </button>
    );
  };

  return (
    <div ref={dropdownRef} className="relative max-w-[calc(100vw-14px)]">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-10 min-w-40 justify-center items-center gap-2 rounded-xl border-2 font-semibold ${
          isOpen
            ? "border-[#0054E8] bg-blue-50"
            : "border-gray-400 bg-white hover:border-gray-600"
        }`}
      >
        Property type
        {isOpen ? <ChevronUp size={22} strokeWidth={2.5}/> : <ChevronDown size={22} strokeWidth={2.5}/>}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-11 z-50 overflow-hidden rounded-2xl bg-white shadow-xl w-75">

          {/* Header */}
          <div className="bg-[#dedee2] px-3 py-3">
            <h3 className="text-sm font-bold text-gray-600">
              Property type
            </h3>
          </div>

          <div className="px-3 pb-3 pt-4">

            {/* Home Type */}
            <h4 className="mb-2 text-sm font-bold text-gray-900">
              Home type
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {homeOptions.map((option) => (
                <OptionButton
                  key={option.label}
                  option={option}
                  selected={homeType === option.label}
                  onClick={() => setHomeType(option.label)}
                />
              ))}
            </div>

            {/* Space */}
            <h4 className="mb-2 mt-5 text-sm font-bold text-gray-900">
              Space
            </h4>

            <div className="grid grid-cols-3 gap-2">
              {spaceOptions.map((option) => (
                <OptionButton
                  key={option.label}
                  option={option}
                  selected={space === option.label}
                  onClick={() => setSpace(option.label)}
                />
              ))}
            </div>

            {/* Apply */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 h-11 w-full rounded-xl bg-blue-700 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              See 0 rentals available
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertTtype;


import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  titles,
  dropDownsContents,
} from "../SeeYourOption/LastSectionData";

function LastSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("none");

  const dropdownRef = useRef(null);

  const activeContent = dropDownsContents[activeItem];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setActiveItem("none");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClick(item) {
    if (activeItem === item && isOpen) {
      setIsOpen(false);
      setActiveItem("none");
    } else {
      setActiveItem(item);
      setIsOpen(true);
    }
  }

  return (
    <div>
      {/* Recommendations */}
      <div className="border-b border-gray-300 px-4 py-8 text-center">
        <h3 className="mb-3 text-base font-bold text-gray-900">
          About Zillow's Recommendations
        </h3>

        <p className="mx-auto max-w-6xl text-sm leading-6 text-gray-600 sm:text-base">
          Recommendations are based on your location and search activity, such
          as the homes you've viewed and saved and the filters you've used. We
          use this information to bring similar homes to your attention, so you
          don't miss out.
        </p>
      </div>

      {/* Main Navigation */}
      <div
        ref={dropdownRef}
        className="border-gray-300 px-4 py-8"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 p-3 sm:grid-cols-4 sm:gap-0">
          {titles.map((title, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${
                index !== 0 ? "sm:border-l sm:border-gray-300" : ""
              }`}
            >
              <button
                onClick={() => handleClick(title)}
                type="button"
                className="z-[1] flex cursor-pointer items-center gap-1 rounded-lg bg-blue-100 px-2 py-1 text-base font-medium text-gray-900 transition-colors hover:text-[#006AFF]"
              >
                {title}

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-100 ${
                    activeItem === title && isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {activeItem === title && isOpen && (
                <ul className="absolute top-9 z-[2] flex h-100 flex-col items-center gap-1 overflow-y-auto overscroll-contain bg-white shadow-lg">
                  {activeContent?.map((dropDown, dropdownIndex) => (
                    <div
                      key={dropdownIndex}
                      className="flex flex-col items-center py-5"
                    >
                      <h1 className="mb-5 text-xl font-bold text-gray-700">
                        {dropDown.title}
                      </h1>

                      {dropDown.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="mx-8 cursor-pointer text-blue-700 underline hover:text-black"
                        >
                          {link}
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastSection;

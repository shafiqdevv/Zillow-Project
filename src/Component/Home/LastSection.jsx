import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { titles, dropDownsContents, footerLinks, companyLinks } from "../SeeYourOption/LastSectionData";


function LastSection() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("none");
  const activeContent = dropDownsContents[activeItem];

  function handleClick(item) {
    setActiveItem(item);
    setIsOpen((prev) => !prev);
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
      <div className="border-gray-300 px-4 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0 p-3">
          {titles.map((title, index) => (
            <div
              key={index}
              className={`flex flex-col items-center relative ${
                index !== 0 ? "sm:border-l sm:border-gray-300" : ""
              }`}
            >
              <button
                onClick={() => handleClick(title)}
                type="button"
                className="flex z-1 bg-blue-100 py-1 px-2 rounded-lg items-center gap-1 cursor-pointer text-base font-medium text-gray-900 transition-colors hover:text-[#006AFF]"
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
                <ul className="absolute top-9 z-2 h-100 bg-white shadow-lg overscroll-contain overflow-y-auto flex flex-col items-center gap-1">
                  {activeContent.map((dropDown) => (
                    <div className="flex flex-col items-center py-5">
                      <h1 className="text-xl mb-5 font-bold text-gray-700">{dropDown.title}</h1>
                      {dropDown.links.map((link) => (
                        <li className="underline mx-8 text-blue-700 cursor-pointer hover:text-black">
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

      {/* Footer Links */}
      <div className="border-b border-gray-300 px-4 py-7">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-5 gap-y-4">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-700 transition-colors hover:text-[#006AFF] hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {companyLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-700 transition-colors hover:text-[#006AFF] hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#006AFF] hover:underline"
          >
            Do Not Sell or Share My Personal Information
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default LastSection;

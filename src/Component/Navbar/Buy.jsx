
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const homesLinks = [
  "Homes for sale",
  "New construction",
  "Foreclosures",
  "Coming soon",
  "For sale by owner",
  "Recent home sales",
  "Open houses",
  "All homes",
];

const resourceLinks = [
  "Home Buying Guide",
  "Foreclosure center",
  "Real estate app",
  "Down payment assistance",
  "Find a buyer's agent",
];

function Buy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Buy Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="
          flex items-center gap-1
          hover:text-blue-700 cursor-pointer
          bg-blue-100 p-1 rounded-lg
          text-lg font-semibold
          lg:text-sm xl:text-lg
        "
      >
        Buy

        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              fixed top-17 left-23 right-0
              min-h-75 bg-white z-50
              p-8 gap-20
              lg:flex flex-col lg:flex-row
            "
          >
            {/* Homes for Sale */}
            <div className="lg:flex lg:flex-col gap-5 mt-10">
              <p>Homes for sale</p>

              <div className="grid grid-cols-2 gap-5">
                {homesLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="
                      text-blue-600
                      hover:underline
                      decoration-1 decoration-gray-800
                      hover:text-gray-800
                    "
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="border-l border-gray-500 pl-6 flex flex-col gap-5 mt-10">
              <p>Resources</p>

              <div className="flex flex-col gap-5">
                {resourceLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="
                      text-blue-600
                      hover:underline
                      decoration-1 decoration-gray-800
                      hover:text-gray-800
                    "
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Buy;

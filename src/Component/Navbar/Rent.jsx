
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const rentalLinks = [
  "Search apartments for rent",
  "Search houses for rent",
  "Search all rental listings",
  "Browse all rental buildings",
];

const renterTools = [
  "Estimate what you can afford",
  "See your application",
  "Manage your tours",
  "Pay your rent",
  "Build your credit",
  "Get renters insurance",
  "Explore housing voucher programs",
  "Learn more about renting",
];

function Rent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Rent Button */}
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
        Rent

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
              min-h-[300px] bg-white z-50
              p-8 gap-20
              flex
            "
          >
            {/* Rental Listings */}
            <div className="flex flex-col gap-5 mt-10">
              <p>Rental listings</p>

              <div className="grid gap-5">
                {rentalLinks.map((link) => (
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

            {/* Tools for Renters */}
            <div className="
              border-l-[1px] border-gray-500
              pl-6 flex flex-col gap-5 mt-10
            ">
              <p>Tools for renters</p>

              <div className="grid grid-cols-2 gap-5">
                {renterTools.map((link) => (
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

export default Rent;

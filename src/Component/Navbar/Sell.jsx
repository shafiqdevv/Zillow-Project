
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Sell() {
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    "Explore your options",
    "See your home's Zestimate",
    "US housing market",
    "Sellers guide",
  ];

  const sellingOptions = [
    "Find a seller's agent",
    "Post For Sale by Owner",
  ];

  const linkStyle =
    "text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800";

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:text-blue-700 cursor-pointer bg-blue-100 p-1 rounded-lg text-lg font-semibold lg:text-sm xl:text-lg"
      >
        Sell
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed top-17 left-23 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex"
          >
            <div className="flex flex-col gap-5 mt-10">
              <p>Resources</p>

              <div className="grid grid-cols-2 gap-5">
                {resources.map((item) => (
                  <a key={item} className={linkStyle} href="#">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10">
              <p>Selling options</p>

              <div className="flex flex-col gap-5">
                {sellingOptions.map((item) => (
                  <a key={item} className={linkStyle} href="#">
                    {item}
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

export default Sell;

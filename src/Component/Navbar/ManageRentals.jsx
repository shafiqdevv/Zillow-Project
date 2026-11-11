
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ManageRentals() {
  const [isOpen, setIsOpen] = useState(false);

  const managementTasks = [
    "List your property for rent",
    "View your properties",
    "Read your messages",
  ];

  const rentalTools = [
    "Check your property's rental value",
    "Screen renters with applications",
    "Create and manage leases",
    "Collect rent",
    "Learn about renting out your property",
    "Search help center",
    "Explore Zillow Rental Manager",
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
        Manage rentals
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
              <p>Management tasks</p>

              <div className="grid grid-cols-2 gap-5">
                {managementTasks.map((item) => (
                  <a key={item} className={linkStyle} href="#">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10">
              <p>Tools for rental managers</p>

              <div className="grid grid-cols-2 gap-5">
                {rentalTools.map((item) => (
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

export default ManageRentals;

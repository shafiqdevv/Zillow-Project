import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function Rent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <h1 className="hover:text-blue-700 cursor-pointer py-5">
        Rent
      </h1>

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
            className="fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex"
          >
            <div className="flex flex-col gap-5">
              <p>Rental listings</p>

              <div className="grid gap-5">
                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Search apartments for rent
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Search houses for rent
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Search all rental listings
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Browse all rental buildings
                </a>
              </div>
            </div>

            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
              <p>Tools for renters</p>

              <div className="grid grid-cols-2 gap-5">
                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Estimate what you can afford
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  See your application
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Manage your tours
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Pay your rent
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Build your credit
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Get renters insurance
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Explore housing voucher programs
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Learn more about renting
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Rent;
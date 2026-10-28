import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function Sell() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <h1 className="hover:text-blue-700 cursor-pointer py-5">
        Sell
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
              <p>Resources</p>

              <div className="grid grid-cols-2 gap-5">
                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Explore your options
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  See your home's Zestimate
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  US housing market
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Sellers guide
                </a>
              </div>
            </div>

            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
              <p>Selling options</p>

              <div className="flex flex-col gap-5">
                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Find a seller's agent
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Post For Sale by Owner
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sell;
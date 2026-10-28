import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function FindAnAgent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <h1 className="hover:text-blue-700 cursor-pointer py-5">
        Find an agent
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
              <p>Looking for pros?</p>

              <div className="flex flex-col gap-5">
                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Real estate agents
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Home builders
                </a>
              </div>
            </div>

            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
              <p>I'm a pro</p>

              <div className="grid grid-cols-2 gap-5">
                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Agent solutions
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Agent advertising
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Agent resource center
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Creat a free agent account
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Real estate business plan
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Real estate agent scripts
                </a>

                <a
                  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800"
                  href="#"
                >
                  Listing flyer templates
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FindAnAgent;

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FindAnAgent() {
  const [isOpen, setIsOpen] = useState(false);

  const agentLinks = [
    "Agent solutions",
    "Agent advertising",
    "Agent resource center",
    "Create a free agent account",
    "Real estate business plan",
    "Real estate agent scripts",
    "Listing flyer templates",
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
        Find an agent
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
              <p>Looking for pros?</p>

              <div className="flex flex-col gap-5">
                <a className={linkStyle} href="#">
                  Real estate agents
                </a>

                <a className={linkStyle} href="#">
                  Home builders
                </a>
              </div>
            </div>

            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5 mt-10">
              <p>I'm a pro</p>

              <div className="grid grid-cols-2 gap-5">
                {agentLinks.map((item) => (
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

export default FindAnAgent;

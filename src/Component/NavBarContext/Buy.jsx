import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
function Buy() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <h1 className="hover:text-blue-700 cursor-pointer py-5">Buy</h1>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1, y: 0,}}
            exit={{ opacity: 0, y: -20,}}
            transition={{ duration: 0.25, ease: "easeOut",}}
            className="fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20 flex"
          >
            <div className="flex flex-col gap-5">
              <p>Homes for sale</p>
              <div className="grid grid-cols-2 gap-5">
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Homes for sale</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">New construction</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Foreclosures</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Coming soon</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">For sale by owner</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Recent home sales</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Open houses</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">All homes</a>
              </div>
            </div>
            <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
              <p>Resources</p>
              <div className="flex flex-col gap-5">
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Home Buying Guide</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Foreclosure center</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Real estate app</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Down payment assistance</a>
                <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Find a buyer's agent</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Buy;
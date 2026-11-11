
import { Search } from "lucide-react";
import { BsSearchHeartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import {
  RiHome6Fill,
  RiInboxArchiveFill,
} from "react-icons/ri";

import { motion } from "motion/react";

function SideBar() {
  const items = [
    { icon: Search, label: "Search" },
    { icon: BsSearchHeartFill, label: "Updates" },
    { icon: MdFavorite, label: "Saved" },
    { icon: RiHome6Fill, label: "Plan" },
    { icon: RiInboxArchiveFill, label: "Inbox" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex w-full flex-row items-center justify-around border-t border-gray-300 bg-white py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] xl:min-h-screen xl:w-23 xl:flex-col xl:justify-start xl:gap-10 xl:border-r xl:border-t-0 xl:py-5 xl:shadow-none"
    >
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group flex cursor-pointer flex-col items-center gap-1"
          >
            <Icon
              size={25}
              className="text-gray-700 transition-colors duration-200 group-hover:text-blue-700"
            />

            <p className="select-none text-xs text-gray-700 transition-colors group-hover:text-blue-700 xl:text-sm">
              {item.label}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}

export default SideBar;

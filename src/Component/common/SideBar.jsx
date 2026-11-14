
import { Search, House } from "lucide-react";
import { BsSearchHeartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import {
  RiHome6Fill,
  RiInboxArchiveFill,
} from "react-icons/ri";

import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const items = [
    { icon: House, label: "Home", link: "/" },
    { icon: Search, label: "Search", link: "/search" },
    { icon: BsSearchHeartFill, label: "Updates", link: "/updatePage" },
    { icon: MdFavorite, label: "Favorites", link: "/favoritesPage" },
    { icon: RiHome6Fill, label: "Plan", link: "/plan" },
    { icon: RiInboxArchiveFill, label: "Inbox", link: "/inbox" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex w-full flex-row items-center justify-around border-t border-gray-300 bg-white py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] lg:min-h-screen lg:w-23 lg:flex-col lg:justify-start lg:gap-10 lg:border-r lg:border-t-0 lg:py-5 lg:shadow-none"
    >
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <NavLink
            to={item.link}
            key={index}
            end={item.link === "/"}
            className="group flex cursor-pointer flex-col items-center gap-1"
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={25}
                  className={`transition-colors duration-200 sm:size-7 ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 group-hover:text-blue-700"
                  }`}
                />

                <p
                  className={`select-none text-xs transition-colors sm:text-sm ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 group-hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </p>
              </>
            )}
          </NavLink>
        );
      })}
    </motion.div>
  );
}

export default SideBar;

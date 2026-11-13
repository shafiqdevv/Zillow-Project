
// import { useState } from "react";
// import Buy from "./Buy";
// import FindAnAgent from "./FindAnAgent";
// import GetAMortgage from "./GetAMortgage";
// import Rent from "./Rent";
// import Sell from "./Sell";
// import ManageRentals from "./ManageRentals";

// import { motion, AnimatePresence } from "motion/react";
// import { Menu, X, ChevronRight } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const mobileNavigation = {
//   Buy: [
//     {
//       title: "Homes for sale",
//       links: [
//         "Homes for sale",
//         "New construction",
//         "Foreclosures",
//         "Coming soon",
//         "For sale by owner",
//         "Recent home sales",
//         "Open houses",
//         "All homes",
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         "Home Buying Guide",
//         "Foreclosure center",
//         "Real estate app",
//         "Down payment assistance",
//         "Find a buyer's agent",
//       ],
//     },
//   ],

//   Rent: [
//     {
//       title: "Rental listings",
//       links: [
//         "Search apartments for rent",
//         "Search houses for rent",
//         "Search all rental listings",
//         "Browse all rental buildings",
//       ],
//     },
//     {
//       title: "Tools for renters",
//       links: [
//         "Estimate what you can afford",
//         "See your application",
//         "Manage your tours",
//         "Pay your rent",
//         "Build your credit",
//         "Get renters insurance",
//         "Explore housing voucher programs",
//         "Learn more about renting",
//       ],
//     },
//   ],

//   Sell: [
//     {
//       title: "Resources",
//       links: [
//         "Explore your options",
//         "See your home's Zestimate",
//         "US housing market",
//         "Sellers guide",
//       ],
//     },
//     {
//       title: "Selling options",
//       links: [
//         "Find a seller's agent",
//         "Post For Sale by Owner",
//       ],
//     },
//   ],

//   "Get a mortgage": [
//     {
//       title: "Started a loan application?",
//       description:
//         "Pick up where you left off on your Zillow Home Loans dashboard.",
//       links: ["Home loans dashboard"],
//     },
//     {
//       title: "Your mortgage",
//       links: [
//         "Discover Zillow Home Loans",
//         "Calculate your BuyAbility",
//         "Get pre-qualified",
//       ],
//     },
//     {
//       title: "Mortgage tools",
//       links: [
//         "Estimate your mortgage payment",
//         "See current mortgage rates",
//         "Learn about financing a home",
//       ],
//     },
//   ],

//   "Find an agent": [
//     {
//       title: "Looking for pros?",
//       links: [
//         "Real estate agents",
//         "Home builders",
//       ],
//     },
//     {
//       title: "I'm a pro",
//       links: [
//         "Agent solutions",
//         "Agent advertising",
//         "Agent resource center",
//         "Create a free agent account",
//         "Real estate business plan",
//         "Real estate agent scripts",
//         "Listing flyer templates",
//       ],
//     },
//   ],

//   "Manage rentals": [
//     {
//       title: "Management tasks",
//       links: [
//         "List your property for rent",
//         "View your properties",
//         "Read your messages",
//       ],
//     },
//     {
//       title: "Tools for rental managers",
//       links: [
//         "Check your property's rental value",
//         "Screen renters with applications",
//         "Create and manage leases",
//         "Collect rent",
//         "Learn about renting out your property",
//         "Search help center",
//         "Explore Zillow Rental Manager",
//       ],
//     },
//   ],

//   Advertise: [
//     {
//       title: "Advertise with Zillow",
//       links: ["Advertising solutions"],
//     },
//   ],

//   "Get help": [
//     {
//       title: "How can we help?",
//       links: ["Help center", "Contact Zillow"],
//     },
//   ],
// };

// const navigationItems = [
//   "Buy",
//   "Rent",
//   "Sell",
//   "Get a mortgage",
//   "Find an agent",
//   "Manage rentals",
//   "Advertise",
//   "Get help",
// ];

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Buy");

//   const activeContent = mobileNavigation[activeItem];

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="absolute top-0 left-0 w-full z-50 lg:relative"
//     >
//       {/* Main Navbar */}
//       <div
//         className="flex relative h-20 lg:h-23 px-4 md:px-8 xl:pl-23 xl:pr-5 lg:pl-20 lg:pr-2 justify-between items-center border-b-0 lg:border-b lg:border-gray-300 bg-transparent lg:bg-white"
//       >
//         {/* Desktop Left Navigation */}
//         <div className="hidden lg:flex gap-4 lg:gap-3 xl:gap-3 items-center">
//           <Buy />
//           <Rent />
//           <Sell />
//           <GetAMortgage />
//           <FindAnAgent />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="lg:hidden cursor-pointer text-white lg:text-gray-900"
//           aria-label={
//             menuOpen
//               ? "Close navigation menu"
//               : "Open navigation menu"
//           }
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={27} color="red"/> : <Menu size={27} color="red"/>}
//         </button>

//         {/* Logo */}
//         <div>
//           <img
//             src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
//             alt="Zillow"
//             className="w-24 md:w-30 brightness-0 invert lg:brightness-100 lg:invert-0 lg:w-30 xl:w-30"
//           />
//         </div>

//         {/* Desktop Right Navigation */}
//         <div className="hidden lg:flex gap-4 lg:gap-3 xl:gap-3 items-center">
//           <ManageRentals />

//           <a
//             href="#"
//             className="hover:text-blue-700 cursor-pointer text-lg font-semibold bg-blue-100 p-1 rounded-lg lg:text-sm xl:text-lg"
//           >
//             Advertise
//           </a>

//           <a
//             href="#"
//             className="hover:text-blue-700 cursor-pointer text-lg font-semibold bg-blue-100 p-1 rounded-lg lg:text-sm xl:text-lg"
//           >
//             Get help
//           </a>

//           <NavLink to={"/login"} className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold cursor-pointer hover:bg-blue-800">
//             Sign in
//           </NavLink>
//         </div>

//         {/* Mobile Sign In */}
//         <NavLink to={"/login"} className="lg:hidden bg-white text-blue-700 px-5 py-3 rounded-2xl text-sm font-bold">
//           Sign in
//         </NavLink>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{
//               opacity: 1,
//               height: "calc(100dvh - 5rem)",
//             }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{
//               duration: 0.3,
//               ease: "easeInOut",
//             }}
//             className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200 overflow-hidden"
//           >
//             <div className="flex h-full">

//               {/* Left Navigation */}
//               <div className="w-[40%] sm:w-[35%] shrink-0 border-r border-gray-300 bg-gray-50 overflow-y-auto py-5 px-2 sm:px-4">
//                 <div className="flex flex-col gap-2">
//                   {navigationItems.map((item) => (
//                     <button
//                       key={item}
//                       onClick={() => setActiveItem(item)}
//                       className={`flex items-center justify-between gap-1 w-full text-left px-2 sm:px-3 py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
//                         activeItem === item
//                           ? "bg-blue-100 text-blue-700"
//                           : "text-gray-800 hover:bg-gray-200"
//                       }`}
//                     >
//                       <span>{item}</span>
//                       <ChevronRight
//                         size={17}
//                         className="shrink-0"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Right Content */}
//               <div className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeItem}
//                     initial={{ opacity: 0, x: 15 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="flex flex-col gap-7"
//                   >
//                     <h2 className="text-xl font-bold text-gray-900">
//                       {activeItem}
//                     </h2>

//                     {activeContent.map((section, index) => (
//                       <div
//                         key={section.title}
//                         className={`flex flex-col gap-4 ${
//                           index !== 0
//                             ? "border-t border-gray-300 pt-5"
//                             : ""
//                         }`}
//                       >
//                         <h3 className="text-sm sm:text-base font-semibold text-gray-900">
//                           {section.title}
//                         </h3>

//                         {section.description && (
//                           <p className="text-sm text-gray-600 leading-relaxed">
//                             {section.description}
//                           </p>
//                         )}

//                         <div className="flex flex-col gap-4">
//                           {section.links.map((link) => (
//                             <a
//                               key={link}
//                               href="#"
//                               onClick={closeMenu}
//                               className="text-blue-600 text-sm sm:text-base hover:text-gray-900 hover:underline decoration-1 underline-offset-4"
//                             >
//                               {link}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// export default NavBar;




import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

// import NavbarItems from "./NavbarItems";
import {
  mobileNavigation,
  navigationItems,
} from "./NavbarData";
import NavbarItems from "./NabvarItem";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Buy");

  const activeContent = mobileNavigation[activeItem];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-0 left-0 w-full z-50 lg:relative"
    >
      {/* Main Navbar */}

      <div
        className="flex relative h-20 lg:h-23 px-4 md:px-8 xl:pl-23 xl:pr-5 lg:pl-20 lg:pr-2 justify-between items-center border-b-0 lg:border-b lg:border-gray-300 bg-transparent lg:bg-white"
      >
        {/* Desktop Left Navigation */}

        <div className="hidden lg:flex gap-4 lg:gap-3 xl:gap-3 items-center">
          <NavbarItems title="Buy" />
          <NavbarItems title="Rent" />
          <NavbarItems title="Sell" />
          <NavbarItems title="Get a mortgage" />
          <NavbarItems title="Find an agent" />
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden cursor-pointer text-white lg:text-gray-900"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={27} color="red" />
          ) : (
            <Menu size={27} color="red" />
          )}
        </button>

        {/* Logo */}

        <div>
          <img
            src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
            alt="Zillow"
            className="w-24 md:w-30 brightness-0 invert lg:brightness-100 lg:invert-0 lg:w-30 xl:w-30"
          />
        </div>

        {/* Desktop Right Navigation */}

        <div className="hidden lg:flex gap-4 lg:gap-3 xl:gap-3 items-center">
          <NavbarItems title="Manage rentals" />

          <a
            href="#"
            className="hover:text-blue-700 cursor-pointer text-lg font-semibold bg-blue-100 p-1 rounded-lg lg:text-sm xl:text-lg"
          >
            Advertise
          </a>

          <a
            href="#"
            className="hover:text-blue-700 cursor-pointer text-lg font-semibold bg-blue-100 p-1 rounded-lg lg:text-sm xl:text-lg"
          >
            Get help
          </a>

          <NavLink
            to={"/login"}
            className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold cursor-pointer hover:bg-blue-800"
          >
            Sign in
          </NavLink>
        </div>

        {/* Mobile Sign In */}

        <NavLink
          to={"/login"}
          className="lg:hidden bg-white text-blue-700 px-5 py-3 rounded-2xl text-sm font-bold"
        >
          Sign in
        </NavLink>
      </div>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "calc(100dvh - 5rem)",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200 overflow-hidden"
          >
            <div className="flex h-full">

              {/* Left Navigation */}

              <div className="w-[40%] sm:w-[35%] shrink-0 border-r border-gray-300 bg-gray-50 overflow-y-auto py-5 px-2 sm:px-4">
                <div className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveItem(item)}
                      className={`flex items-center justify-between gap-1 w-full text-left px-2 sm:px-3 py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
                        activeItem === item
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      <span>{item}</span>

                      <ChevronRight
                        size={17}
                        className="shrink-0"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content */}

              <div className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-7"
                  >
                    <h2 className="text-xl font-bold text-gray-900">
                      {activeItem}
                    </h2>

                    {activeContent.map((section, index) => (
                      <div
                        key={section.title}
                        className={`flex flex-col gap-4 ${
                          index !== 0
                            ? "border-t border-gray-300 pt-5"
                            : ""
                        }`}
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                          {section.title}
                        </h3>

                        {section.description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {section.description}
                          </p>
                        )}

                        <div className="flex flex-col gap-4">
                          {section.links.map((link) => (
                            <a
                              key={link}
                              href="#"
                              onClick={closeMenu}
                              className="text-blue-600 text-sm sm:text-base hover:text-gray-900 hover:underline decoration-1 underline-offset-4"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default NavBar;

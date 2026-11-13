
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { navbarData } from "./NavbarData";

function NavbarItems({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const item = navbarData[title];

  if (!item) return null;

  const linkStyle =
    "text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800";

  return (
    <div
      className={item.wrapperClass || ""}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Navigation Button */}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={item.ariaExpanded ? isOpen : undefined}
        className={item.buttonClass}
      >
        {item.button}

        <ChevronDown
          size={item.iconSize}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: item.animationY,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: item.animationY,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={item.dropdownClass}
          >
            {item.sections.map((section) => (
              <div
                key={section.title}
                className={section.sectionClass}
              >
                <p>{section.title}</p>

                {section.description && (
                  <p className={section.descriptionClass}>
                    {section.description}
                  </p>
                )}

                <div className={section.contentClass}>
                  {section.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className={linkStyle}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavbarItems;

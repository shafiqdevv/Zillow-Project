
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Directory Data
const directoryData = [
  {
    id: 1,
    title: "Real Estate Agents",
    items: [
      "Chicago Real Estate Agents",
      "Cicero Real Estate Agents",
      "Stickney Real Estate Agents",
      "Berwyn Real Estate Agents",
      "Forestview Real Estate Agents",
      "Oak Park Real Estate Agents",
      "Riverside Real Estate Agents",
      "Forest Park Real Estate Agents",
      "Lyons Real Estate Agents",
      "North Riverside Real Estate Agents",
    ],
  },
  {
    id: 2,
    title: "Mortgage Lenders",
    items: [
      "Chicago Mortgage Lenders",
      "Cicero Mortgage Lenders",
      "Stickney Mortgage Lenders",
      "Berwyn Mortgage Lenders",
      "Forestview Mortgage Lenders",
      "Oak Park Mortgage Lenders",
      "Riverside Mortgage Lenders",
      "Forest Park Mortgage Lenders",
      "Lyons Mortgage Lenders",
      "North Riverside Mortgage Lenders",
    ],
  },
  {
    id: 3,
    title: "Home Builders",
    items: [
      "Chicago Home Builders",
      "Cicero Home Builders",
      "Stickney Home Builders",
      "Berwyn Home Builders",
      "Forestview Home Builders",
      "Oak Park Home Builders",
      "Riverside Home Builders",
      "Forest Park Home Builders",
      "Lyons Home Builders",
      "North Riverside Home Builders",
    ],
  },
];


// Reusable Directory Column
function DirectoryColumn({ title, items }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded
    ? items
    : items.slice(0, 5);

  return (
    <div className="min-w-0">

      {/* Column Title */}
      <h3 className="mb-3 text-base font-bold text-gray-900">
        {title}
      </h3>

      {/* Links */}
      <div className="flex flex-col items-start gap-3">

        {visibleItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-sm text-gray-700 transition-colors hover:text-[#006AFF] hover:underline sm:text-base"
          >
            {item}
          </a>
        ))}

      </div>

      {/* Show More / Show Less */}
      {items.length > 5 && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="mt-4 inline-flex items-center gap-2 font-semibold text-[#174EA6] transition-colors hover:text-blue-700"
        >
          {isExpanded ? (
            <>
              <Minus size={19} strokeWidth={2.5} />
              <span>Show less</span>
            </>
          ) : (
            <>
              <Plus size={19} strokeWidth={2.5} />
              <span>Show more</span>
            </>
          )}
        </button>
      )}

    </div>
  );
}


// Main Component
function AgentDirectoryLinks() {
  return (
    <section className="w-full bg-[#F1F1F5] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">

      <div className="mx-auto grid max-w-[1075px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

        {directoryData.map((column) => (
          <DirectoryColumn
            key={column.id}
            title={column.title}
            items={column.items}
          />
        ))}

      </div>

      {/* Bottom Border */}
      <div className="mx-auto mt-8 max-w-[1380px] border-b border-gray-300" />

    </section>
  );
}

export default AgentDirectoryLinks;

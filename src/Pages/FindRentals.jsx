// Shared Listings page for Buy, Rent and Search.
// The mode comes from the URL: /search?type=buy | rent | search

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List as ListIcon, Map as MapIcon } from "lucide-react";

import SearchFilters from "../Component/Listings/SearchFilters";
import MapSection from "../Component/Listings/MapSection";
import ListingsHeader from "../Component/Listings/ListingsHeader";
import PropertyList from "../Component/Listings/PropertyList";
import { buyListings } from "../Component/Listings/buyListings";
import { rentListings } from "../Component/Listings/rentListings";
import {
  formatResultCount,
  getListingMode,
} from "../Component/Listings/listingUtils";

function FindRentals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileView, setMobileView] = useState("list");

  // The URL is the single source of truth for the mode.
  const mode = getListingMode(searchParams.get("type"));
  const listings = mode.listingType === "rent" ? rentListings : buyListings;

  const handleListingTypeChange = (nextListingType) => {
    if (nextListingType === mode.listingType) return;

    const nextType = nextListingType === "rent" ? "rent" : "buy";

    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      next.set("type", nextType);
      return next;
    });
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      {/* Mobile only: the Navbar is transparent and sits on top of the page,
          so this band gives it a background and reserves its height. */}
      <div className="h-20 shrink-0 bg-blue-900 lg:hidden" aria-hidden="true" />

      <SearchFilters
        listingType={mode.listingType}
        onListingTypeChange={handleListingTypeChange}
      />

      <div className="relative flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Map: left on desktop, switchable on mobile */}
        <section
          aria-label="Map"
          className={`${
            mobileView === "map" ? "block" : "hidden"
          } h-[calc(100dvh-14rem)] min-h-72 lg:block lg:h-auto lg:w-[40%] lg:shrink-0 lg:border-r lg:border-gray-300`}
        >
          <MapSection listings={listings} />
        </section>

        {/* Listings: right on desktop, scrolls on its own */}
        <section
          aria-label="Property listings"
          className={`${
            mobileView === "list" ? "block" : "hidden"
          } bg-gray-50 lg:block lg:w-[60%] lg:overflow-y-auto`}
        >
          <div className="px-4 py-5 lg:px-6">
            <ListingsHeader
              title={mode.heading}
              resultCount={formatResultCount(listings.length, mode)}
            />
            <PropertyList listings={listings} />
          </div>
        </section>
      </div>

      {/* Mobile Map / List toggle, above the fixed bottom Sidebar */}
      <button
        type="button"
        onClick={() =>
          setMobileView((view) => (view === "list" ? "map" : "list"))
        }
        className="fixed bottom-24 left-1/2 z-40 flex -translate-x-1/2 cursor-pointer items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-lg lg:hidden"
      >
        {mobileView === "list" ? (
          <>
            <MapIcon size={18} />
            Map
          </>
        ) : (
          <>
            <ListIcon size={18} />
            List
          </>
        )}
      </button>
    </div>
  );
}

export default FindRentals;

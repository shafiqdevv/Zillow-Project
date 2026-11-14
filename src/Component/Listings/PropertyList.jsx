// TEMPORARY (Phase 2): plain rows only, to prove the Buy / Rent data switch.
// PropertyCard and the card grid replace this in Phase 5.

import { formatPrice } from "./listingUtils";

function PropertyList({ listings }) {
  if (listings.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-600">
        No listings found.
      </p>
    );
  }

  return (
    <ul className="grid gap-3">
      {listings.map((listing) => (
        <li
          key={listing.id}
          className="rounded-xl border border-gray-300 bg-white p-4"
        >
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(listing.price, listing.priceFrequency)}
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {listing.beds} bd | {listing.baths} ba |{" "}
            {listing.sqft.toLocaleString("en-US")} sqft | {listing.status}
          </p>
          <p className="mt-1 text-sm text-gray-600">
            {listing.address}, {listing.city}, {listing.state} {listing.zip}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default PropertyList;

// Shared helpers for the Listings page (plain functions, no React).
// Phase 3 will add the filter and sort functions here.

// One entry per URL mode: /search?type=buy | rent | search
const MODES = {
  buy: {
    type: "buy",
    listingType: "sale",
    heading: "Homes for Sale",
    noun: { one: "home", other: "homes" },
    ctaLabel: "Request a tour",
  },
  rent: {
    type: "rent",
    listingType: "rent",
    heading: "Rental Listings",
    noun: { one: "rental", other: "rentals" },
    ctaLabel: "Check availability",
  },
  search: {
    type: "search",
    listingType: "sale",
    heading: "Homes for You",
    noun: { one: "home", other: "homes" },
    ctaLabel: "Request a tour",
  },
};

// A missing or unknown ?type= value falls back to "search".
export function getListingMode(typeParam) {
  const isKnownMode = Object.prototype.hasOwnProperty.call(MODES, typeParam);
  return isKnownMode ? MODES[typeParam] : MODES.search;
}

export function formatResultCount(count, mode) {
  const noun = count === 1 ? mode.noun.one : mode.noun.other;
  return `${count.toLocaleString("en-US")} ${noun} available`;
}

export function formatPrice(price, priceFrequency = "") {
  const amount = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return `${amount}${priceFrequency}`;
}

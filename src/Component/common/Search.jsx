
import { useRef, useState } from "react";
import { SearchIcon, MapPin, LoaderCircle, X } from "lucide-react";
import useClickOutside from "../../Hooks/useClickOutside";

function Search({ size = "large" }) {
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dynamic styles based on size
  const isSmall = size === "small";
  const isMedium = size === "medium";

  const containerStyle = isSmall
    ? "max-w-[380px] mt-2"
    : isMedium
      ? "max-w-[450px] mt-0"
      : "max-w-[520px] mt-8";

  const inputStyle = isSmall
    ? "h-12 px-4 pr-12 text-sm"
    : isMedium
      ? "h-14 px-5 pr-14 text-base"
      : "h-20 px-5 pr-16 text-base sm:text-lg";

  const iconStyle = isSmall ? 20 : isMedium ? 23 : 25;

  // Click outside for closing dropdown
  const dropdownRef = useRef(null);

  function closeDropdown() {
    setIsOpen(false);
  }

  useClickOutside(dropdownRef, closeDropdown);

  // Get current location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Your browser does not support location.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            throw new Error("Location lookup failed");
          }

          const data = await response.json();

          const address =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.suburb ||
            data.display_name;

          setLocation(
            address || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
          );

          setIsOpen(false);
        } catch {
          setError("Could not find your address. Try again.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);

        if (error.code === 1) {
          setError("Please allow location access in your browser.");
        } else {
          setError("Unable to get your current location.");
        }
      }
    );
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative z-20 w-full ${containerStyle}`}
    >
      {/* Search Input */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className={`w-full rounded-xl border border-gray-300 bg-white text-gray-900 shadow-lg outline-none transition-all placeholder:text-gray-500 focus:border-[#006AFF] focus:ring-2 focus:ring-blue-200 ${inputStyle}`}
        />

        {location ? (
          <button
            type="button"
            onClick={() => setLocation("")}
            aria-label="Clear search"
            className="absolute right-5 text-gray-500 hover:text-gray-900"
          >
            <X size={isSmall ? 18 : isMedium ? 20 : 22} />
          </button>
        ) : (
          <SearchIcon
            size={iconStyle}
            className="absolute right-5 text-gray-700"
          />
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
          <button
            type="button"
            onClick={handleCurrentLocation}
            disabled={loading}
            className={`flex w-full items-center text-left transition-colors hover:bg-gray-100 disabled:cursor-wait disabled:opacity-60 ${
              isSmall
                ? "gap-3 px-4 py-3"
                : "gap-4 px-5 py-4"
            }`}
          >
            <div
              className={`flex shrink-0 items-center justify-center rounded-full bg-blue-50 ${
                isSmall
                  ? "h-9 w-9"
                  : isMedium
                    ? "h-10 w-10"
                    : "h-11 w-11"
              }`}
            >
              {loading ? (
                <LoaderCircle
                  size={isSmall ? 19 : isMedium ? 21 : 23}
                  className="animate-spin text-[#006AFF]"
                />
              ) : (
                <MapPin
                  size={isSmall ? 19 : isMedium ? 21 : 23}
                  className="text-[#006AFF]"
                />
              )}
            </div>

            <div>
              <p
                className={`font-semibold text-gray-900 ${
                  isSmall ? "text-sm" : "text-base"
                }`}
              >
                {loading
                  ? "Finding your location..."
                  : "Current location"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Use your current location
              </p>
            </div>
          </button>

          {error && (
            <p className="border-t border-gray-100 px-5 py-3 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;

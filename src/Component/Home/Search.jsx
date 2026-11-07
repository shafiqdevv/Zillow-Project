
import { useEffect, useRef, useState } from "react";
import { SearchIcon, MapPin, LoaderCircle, X } from "lucide-react";

function Search() {
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div ref={searchRef} className="relative mt-8 w-full max-w-[520px]">

      {/* Search Input */}
      <div className="relative flex items-center">

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="h-20 w-full rounded-xl border border-gray-300 bg-white px-5 pr-16 text-base text-gray-900 shadow-lg outline-none transition-all placeholder:text-gray-500 focus:border-[#006AFF] focus:ring-2 focus:ring-blue-200 sm:text-lg"
        />

        {location ? (
          <button
            type="button"
            onClick={() => setLocation("")}
            aria-label="Clear search"
            className="absolute right-5 text-gray-500 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        ) : (
          <SearchIcon
            size={25}
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
            className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-100 disabled:cursor-wait disabled:opacity-60"
          >

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50">
              {loading ? (
                <LoaderCircle
                  size={23}
                  className="animate-spin text-[#006AFF]"
                />
              ) : (
                <MapPin
                  size={23}
                  className="text-[#006AFF]"
                />
              )}
            </div>

            <div>
              <p className="text-base font-semibold text-gray-900">
                {loading ? "Finding your location..." : "Current location"}
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

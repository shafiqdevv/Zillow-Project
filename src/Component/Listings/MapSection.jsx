// TEMPORARY (Phase 2): placeholder panel.
// Phase 4 replaces the inside with the static SVG map. The props stay the
// same, so a real map provider can replace it later without touching the page.

function MapSection({ listings }) {
  return (
    <div className="flex h-full min-h-72 items-center justify-center bg-sky-50 p-6">
      <div className="rounded-xl border-2 border-dashed border-sky-300 px-6 py-8 text-center">
        <p className="font-semibold text-gray-800">Map area</p>
        <p className="mt-1 text-sm text-gray-600">
          {listings.length} listings will appear here as price markers.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Temporary placeholder. The static map is built in Phase 4.
        </p>
      </div>
    </div>
  );
}

export default MapSection;

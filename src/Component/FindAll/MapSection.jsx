
function MapSection() {
  return (
    <div className="flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-sky-50 bg-[url('/map.png')] bg-cover bg-center p-6">
      <div className="rounded-xl border-2 border-dashed border-sky-300 px-6 py-8 text-center">
        <p className="font-semibold text-gray-800">
          Map area
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Listings will appear here as price markers.
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Temporary placeholder. The static map is built in Phase 4.
        </p>
      </div>
    </div>
  );
}

export default MapSection;

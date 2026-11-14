// Phase 2: heading and result count only.
// The sorting dropdown is added in a later phase.

function ListingsHeader({ title, resultCount }) {
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-1 text-sm text-gray-600">{resultCount}</p>
    </div>
  );
}

export default ListingsHeader;

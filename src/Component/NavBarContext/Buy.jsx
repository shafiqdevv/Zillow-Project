function Buy() {
  return (
    <div className="group">
      <h1 className="hover:text-blue-700 cursor-pointer py-5">Buy</h1>
      <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
        <div className="flex flex-col gap-5">
          <p>Homes for sale</p>
          <div className="grid grid-cols-2 gap-5">
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Homes for sale</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">New construction</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Foreclosures</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Coming soon</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">For sale by owner</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Recent home sales</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Open houses</a>
            <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">All homes</a>
          </div>
        </div>
        <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
          <p>Resources</p>
          <div className="flex flex-col gap-5">
            <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Home Buying Guide</a>
            <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Foreclosure center</a>
            <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Real estate app</a>
            <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Down payment assistance</a>
            <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Find a buyer's agent</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buy;
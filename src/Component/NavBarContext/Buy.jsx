function Buy() {
  return (
    <div className="group">
      <h1 className="hover:text-blue-700 cursor-pointer py-5">Buy</h1>
      <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
        <div>
          <p className="font-bold mb-3">Homes for sale</p>
          <div className="grid grid-cols-2 gap-5">
            <a href="#">Homes for sale</a>
            <a href="#">New construction</a>
            <a href="#">Foreclosures</a>
            <a href="#">Coming soon</a>
            <a href="#">For sale by owner</a>
            <a href="#">Recent home sales</a>
            <a href="#">Open houses</a>
            <a href="#">All homes</a>
          </div>
        </div>
        <div>
          <p className="font-bold mb-3">Resources</p>
          <div className="flex flex-col gap-2">
            <a href="#">Home Buying Guide</a>
            <a href="#">Foreclosure center</a>
            <a href="#">Real estate app</a>
            <a href="#">Down payment assistance</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buy;
function Sell(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Sell</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div className="flex flex-col gap-5">
                    <p>Resources</p>
                    <div className="grid grid-cols-2 gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Explore your options</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">See your home's Zestimate</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">US housing market</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Sellers guide</a>
                    </div>
                </div>
                <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
                    <p>Selling options</p>
                    <div className="flex flex-col gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Find a seller's agent</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Post For Sale by Owner</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sell;
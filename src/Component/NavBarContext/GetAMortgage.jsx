function GetAMortgage(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Get a mortgage</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div className="flex flex-col gap-5">
                    <p>Started a loan application?</p>
                    <div className="flex flex-col gap-5">
                        <p className="text-sm">Pick up where you left off on your Zillow Home Loans dashboard.</p>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Home loans dashboard</a>
                    </div>
                </div>
                <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
                    <p>Your mortgage</p>
                    <div className="flex flex-col gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Discover Zillow Home Loans</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Calculate your BuyAbility</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Get pre-qualified</a>
                    </div>
                </div>
                <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
                    <p>Mortgage tools</p>
                    <div className="flex flex-col gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Estimate your mortgage payment</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">See current mortgage rates</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Learn about financing a home</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default GetAMortgage;
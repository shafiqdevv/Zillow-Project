function GetAMortgage(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Get a mortgage</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div>
                    <p>Started a loan application?</p>
                    <div>
                        <p>Pick up where you left off on your Zillow Home Loans dashboard.</p>
                        <a href="#">Home loans dashboard</a>
                    </div>
                </div>
                <div>
                    <p>Your mortgage</p>
                    <div>
                        <a href="#">Discover Zillow Home Loans</a>
                        <a href="#">Calculate your BuyAbility</a>
                        <a href="#">Get pre-qualified</a>
                    </div>
                </div>
                <div>
                    <p>Mortgage tools</p>
                    <div>
                        <a href="#">Estimate your mortgage payment</a>
                        <a href="#">See current mortgage rates</a>
                        <a href="#">Learn about financing a home</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default GetAMortgage;
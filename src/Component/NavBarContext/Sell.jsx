function Sell(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Sell</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div>
                    <p>Resources</p>
                    <div>
                        <a href="#">Explore your options</a>
                        <a href="#">See your home's Zestimate</a>
                        <a href="#">US housing market</a>
                        <a href="#">Sellers guide</a>
                    </div>
                </div>
                <div>
                    <p>Selling options</p>
                    <div>
                        <a href="#">Find a seller's agent</a>
                        <a href="#">Post For Sale by Owner</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sell;
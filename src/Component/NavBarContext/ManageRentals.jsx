function ManageRentals(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Manage rentals</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div>
                    <p>Management tasks</p>
                    <div>
                        <a href="#">List your property for rent</a>
                        <a href="#">View your properties</a>
                        <a href="#">Read your messages</a>
                    </div>
                </div>
                <div>
                    <p>Tools for rental managers</p>
                    <div>
                        <a href="#">Check your property's rental value</a>
                        <a href="#">Screen renters with applications</a>
                        <a href="#">Create and manage leases</a>
                        <a href="#">Collect rent</a>
                        <a href="#">Learn about renting out your property</a>
                        <a href="#">Search help center</a>
                        <a href="#">Explore Zillow Rental Manager</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageRentals;
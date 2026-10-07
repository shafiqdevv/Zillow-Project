function ManageRentals(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Manage rentals</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div className="flex flex-col gap-5">
                    <p>Management tasks</p>
                    <div className="grid grid-cols-2 gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">List your property for rent</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">View your properties</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Read your messages</a>
                    </div>
                </div>
                <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
                    <p>Tools for rental managers</p>
                    <div className="grid grid-cols-2 gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Check your property's rental value</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Screen renters with applications</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Create and manage leases</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Collect rent</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Learn about renting out your property</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Search help center</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Explore Zillow Rental Manager</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageRentals;
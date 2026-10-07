function Rent(){
   return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Rent</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div className="flex flex-col gap-5">
                    <p>Rental listings</p>
                    <div className="grid gap-5">
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Search apartments for rent</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Search houses for rent</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Search all rental listings</a>
                        <a className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Browse all rental buildings</a>
                    </div>
                </div>
                <div className="border-l-[1px] border-gray-500 pl-6 flex flex-col gap-5">
                    <p>Tools for renters</p>
                    <div className="grid grid-cols-2 gap-5">
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Estimate what you can afford</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">See your application</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Manage your tours</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Pay your rent</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Build your credit</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Get renters insurance</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Explore housing voucher programs</a>
                        <a  className="text-blue-600 hover:underline decoration-1 decoration-gray-800 hover:text-gray-800" href="#">Learn more about renting</a>
                    </div>
                </div>
            </div>
        </div>
   )
}
export default Rent;
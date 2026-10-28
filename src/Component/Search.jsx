import { SearchIcon } from "lucide-react";

function Search(){
    return(
        <div className="relative flex items-center mt-5 w-115">
            <input type="text" className="bg-white w-115 px-5 py-5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="Enter an address, neighborhood, city, or ZIP code"/>
            <SearchIcon className="absolute left-9/10"/>
        </div>
    )
}
export default Search;
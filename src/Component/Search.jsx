import { SearchIcon } from "lucide-react";

function Search(){
    return(
        <div className="relative flex items-center mt-5 w-115">
            <input type="text" className="bg-white w-115 px-5 py-5 rounded-xl" placeholder="Enter an address, neighborhood, city, or ZIP code"/>
            <SearchIcon className="absolute left-9/10"/>
        </div>
    )
}
export default Search;
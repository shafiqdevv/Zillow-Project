import { SiZilch } from "react-icons/si";
import Buy from "./Buy";
import FindAnAgent from "./FindAnAgent";
import GetAMortgage from "./GetAMortgage";
import Rent from "./Rent";
import Sell from "./Sell";
import ManageRentals from "./ManageRentals";

function NavBar() {
  return (
    <div className="relative">
      
      <div className="flex h-16 px-20 justify-between items-center border-b border-gray-400">

        {/* left */}
        <div className="flex gap-4">
          <Buy />
          <Rent />
          <Sell />
          <GetAMortgage />
          <FindAnAgent />
        </div>

        {/* center */}
        <div className="flex">
          <SiZilch size={30} className="text-blue-800" />
          <p className="font-bold text-2xl">Zillow</p>
        </div>

        {/* right */}
        <div className="flex gap-4 items-center">
          <ManageRentals />

          <a href="#" className="hover:text-blue-700 cursor-pointer">
            Advertise
          </a>

          <a href="#" className="hover:text-blue-700 cursor-pointer">
            Get help
          </a>

          <button className="bg-blue-700 text-white px-4 py-[5px] rounded-xl text-sm font-bold cursor-pointer">
            Sign in
          </button>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
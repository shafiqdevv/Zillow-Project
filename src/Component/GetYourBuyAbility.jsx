
import { useState } from "react";
import PopUp from "./Home/PopUp";

function GetYourBuyAbility() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="w-full lg:col-span-5">
        <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:p-6">

          {/* Logo */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Zillow{" "}
              <span className="text-[#006AFF]">Home Loans</span>
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Your home buying power at a glance.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-xl bg-[#f5f8fc] p-3 sm:p-4">
              <p className="text-[11px] font-medium text-gray-500 sm:text-xs">
                Target home price
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:mt-2 sm:text-2xl">
                $--
              </h3>
            </div>

            <div className="rounded-xl bg-[#f5f8fc] p-3 sm:p-4">
              <p className="text-[11px] font-medium text-gray-500 sm:text-xs">
                Max home price
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:mt-2 sm:text-2xl">
                $--
              </h3>
            </div>

            <div className="rounded-xl bg-[#f5f8fc] p-3 sm:p-4">
              <p className="text-[11px] font-medium text-gray-500 sm:text-xs">
                Target payment
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:mt-2 sm:text-2xl">
                $--/mo
              </h3>
            </div>

            <div className="rounded-xl bg-[#f5f8fc] p-3 sm:p-4">
              <p className="text-[11px] font-medium text-gray-500 sm:text-xs">
                Your est. rate
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:mt-2 sm:text-2xl">
                --%
              </h3>
            </div>

            <div className="col-span-2 rounded-xl bg-[#f5f8fc] p-3 sm:p-4">
              <p className="text-[11px] font-medium text-gray-500 sm:text-xs">
                APR
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:mt-2 sm:text-2xl">
                --%
              </h3>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="mt-4 h-12 w-full cursor-pointer rounded-lg bg-[#006AFF] px-4 text-base font-semibold text-white transition-colors hover:bg-blue-800 sm:mt-6 sm:h-14 sm:text-lg"
          >
            Get your BuyAbility
          </button>

          <p className="mt-2 text-center text-[11px] leading-4 text-gray-500 sm:mt-3 sm:text-xs sm:leading-5">
            Explore your buying power and discover homes that fit your budget.
          </p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <PopUp onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}

export default GetYourBuyAbility;

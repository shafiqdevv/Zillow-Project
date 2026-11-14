import {
  Home,
  DollarSign,
  Percent,
  Calculator,
  ArrowUpRight,
} from "lucide-react";

export default function HomeLoans() {
  const loanDetails = [
    {
      title: "Target home price",
      value: "$350,000",
      icon: <Home size={18} />,
    },
    {
      title: "Maximum home price",
      value: "$425,000",
      icon: <DollarSign size={18} />,
    },
    {
      title: "Target monthly payment",
      value: "$2,450",
      icon: <Calculator size={18} />,
    },
    {
      title: "Estimated interest rate",
      value: "6.25%",
      icon: <Percent size={18} />,
    },
  ];

  return (
    <section className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      {/* Left Card */}
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:col-span-5">

            {/* Logo */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900">
                Zillow <span className="text-[#006AFF]">Home Loans</span>
              </h3>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Target home price
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  $--
                </h3>
              </div>

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Max home price
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  $--
                </h3>
              </div>

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Target payment
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  $--/mo
                </h3>
              </div>

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Your est. rate
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  --%
                </h3>
              </div>

              <div className="col-span-2 rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  APR
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  --%
                </h3>
              </div>

            </div>

            {/* Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="mt-5 w-full rounded-lg bg-blue-700 px-5 h-15 font-semibold text-white text-xl transition-colors hover:bg-blue-700 cursor-pointer"
            >
              Get your BuyAbility
            </button>

          </div>
    </section>
  );
}


// Header
//       <div className="flex items-center justify-between gap-3">
//         <div>
//           <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
//             Zillow Home Loans
//           </h2>

//           <p className="mt-1 text-sm text-gray-600">
//             Get an idea of what you can afford.
//           </p>
//         </div>

//         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0647D9]">
//           <Home size={21} />
//         </div>
//       </div>

//       {/* Loan Information */}
//       <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
//         {loanDetails.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-lg border border-gray-200 p-3"
//           >
//             <div className="flex items-center gap-2 text-gray-500">
//               {item.icon}

//               <span className="text-xs font-medium">
//                 {item.title}
//               </span>
//             </div>

//             <p className="mt-3 text-xl font-bold text-gray-900">
//               {item.value}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* APR */}
//       <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 p-3">
//         <div>
//           <p className="text-sm font-semibold text-gray-800">
//             Estimated APR
//           </p>

//           <p className="mt-1 text-xs text-gray-500">
//             Annual percentage rate
//           </p>
//         </div>

//         <span className="text-lg font-bold text-gray-900">
//           6.45%
//         </span>
//       </div>

//       {/* CTA */}
//       <button
//         type="button"
//         className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0647D9] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
//       >
//         Explore your options
//         <ArrowUpRight size={17} />
//       </button>

//       <p className="mt-3 text-[11px] leading-relaxed text-gray-400">
//         These figures are illustrative estimates, not a loan offer or
//         pre-approval. Actual rates and payments depend on your financial
//         situation and loan terms.
//       </p>
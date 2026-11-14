// import { useState } from "react";
// import {
//   MapPin,
//   Search,
//   TrendingUp,
//   Clock,
//   Home,
//   BarChart3,
//   ChevronDown,
// } from "lucide-react";

// export default function FinancialSnapshot() {
//   const [location, setLocation] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");

//   const stats = [
//     {
//       title: "Market index",
//       value: "72",
//       description: "Buyer's market",
//       icon: <BarChart3 size={20} />,
//     },
//     {
//       title: "1-year price forecast",
//       value: "+2.4%",
//       description: "Expected price change",
//       icon: <TrendingUp size={20} />,
//     },
//     {
//       title: "Median days to pending",
//       value: "24",
//       description: "Days on market",
//       icon: <Clock size={20} />,
//     },
//     {
//       title: "New listings",
//       value: "1,248",
//       description: "In the last 30 days",
//       icon: <Home size={20} />,
//     },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (location.trim()) {
//       setSelectedLocation(location.trim());
//     }
//   };

//   return (
//     <section className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-5">

//       {/* Header */}
//       <div className="flex items-center justify-between gap-2">
//         <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
//           Financial snapshot
//         </h2>

//         <button className="flex items-center gap-1 text-xs font-semibold text-[#0647D9] hover:underline">
//           Learn more
//           <ChevronDown size={14} />
//         </button>
//       </div>

//       <p className="mt-2 text-sm text-gray-600">
//         Get a better understanding of your local housing market.
//       </p>

//       {/* Location Search */}
//       <form onSubmit={handleSearch} className="mt-5">
//         <label className="mb-2 block text-sm font-semibold text-gray-800">
//           Add a location
//         </label>

//         <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-3 focus-within:border-[#0647D9]">
//           <MapPin size={18} className="shrink-0 text-gray-500" />

//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             placeholder="City, neighborhood, or ZIP code"
//             className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
//           />

//           <button
//             type="submit"
//             aria-label="Search location"
//             className="text-[#0647D9] hover:text-blue-800"
//           >
//             <Search size={19} />
//           </button>
//         </div>
//       </form>

//       {/* Selected Location */}
//       {selectedLocation && (
//         <div className="mt-3 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-[#0647D9]">
//           <MapPin size={15} />
//           Showing sample data for {selectedLocation}
//         </div>
//       )}

//       {/* Market Insights */}
//       <div className="mt-6">
//         <div className="flex items-center justify-between">
//           <h3 className="text-base font-bold text-gray-900">
//             Market insights
//           </h3>

//           <span className="text-xs text-gray-500">
//             Last 30 days
//           </span>
//         </div>

//         <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="rounded-lg border border-gray-200 p-3 transition-shadow hover:shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-xs font-medium text-gray-500">
//                   {stat.title}
//                 </span>

//                 <span className="text-[#0647D9]">
//                   {stat.icon}
//                 </span>
//               </div>

//               <p className="mt-3 text-2xl font-bold text-gray-900">
//                 {stat.value}
//               </p>

//               <p className="mt-1 text-xs text-gray-500">
//                 {stat.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>

//       {/* Active Listings */}
//       <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 p-3">
//         <div>
//           <p className="text-sm font-semibold text-gray-800">
//             Active listings for sale
//           </p>

//           <p className="mt-1 text-xs text-gray-500">
//             Homes currently available
//           </p>
//         </div>

//         <span className="text-lg font-bold text-gray-900">
//           3,582
//         </span>
//       </div>

//       <p className="mt-4 text-[11px] leading-relaxed text-gray-400">
//         The information displayed is sample data for demonstration purposes
//         and does not represent live housing market statistics.
//       </p>

//     </section>
//   );
// }



export default function FinancialSnapshot() {
  const marketStats = [
    {
      value: "N/A",
      label: "1-year price forecast",
    },
    {
      value: "N/A",
      label: "Median days to pending",
    },
    {
      value: "N/A",
      label: "New listings in the last 30 days",
    },
    {
      value: "N/A",
      label: "Active listings for sale",
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* Section Title */}
      <h2 className="mb-5 text-2xl font-bold text-black sm:text-3xl">
        Financial snapshot
      </h2>

      {/* Main Card */}
      <div className="w-full rounded-2xl border border-[#D1D1D8] p-4 sm:p-5">
        {/* Market Insights */}
        <h3 className="mb-6 text-xl font-bold text-black sm:text-3xl">
          Market insights for -----
        </h3>

        {/* Market Index */}
        <div className="rounded-2xl border border-[#D1D1D8] px-5 py-5">
          <h4 className="text-lg font-semibold text-black sm:text-xl">
            Neutral market
          </h4>

          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-black">
              ---
            </span>
            <span className="ml-1 text-lg text-[#315B91]">
              /100
            </span>
          </div>

          <p className="mt-2 text-base text-black sm:text-lg">
            Market index
          </p>

          {/* Market Indicator */}
          <div className="relative mt-6">
            <div className="flex h-[11px] w-full overflow-hidden rounded-full">
              <div className="w-1/5 bg-[#70DF88]" />
              <div className="w-1/5 bg-[#36C99A]" />
              <div className="w-1/5 bg-[#20A99A]" />
              <div className="w-1/5 bg-[#126D63]" />
              <div className="w-1/5 bg-[#003F37]" />
            </div>

            {/* Indicator */}
            <div className="absolute left-1/2 top-[-6px] h-[23px] w-[6px] -translate-x-1/2 rounded-sm border-2 border-[#222222] bg-white" />
          </div>

          {/* Market Labels */}
          <div className="mt-3 flex items-center justify-between text-sm text-black sm:text-lg">
            <span>Buyers market</span>
            <span>Sellers market</span>
          </div>
        </div>

        {/* Market Statistics */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {marketStats.map((stat, index) => (
            <div
              key={index}
              className="flex min-h-20 flex-col justify-center rounded-2xl bg-[#EEEEF0] px-5"
            >
              <h4 className="text-2xl font-bold text-black sm:text-[27px]">
                {stat.value}
              </h4>

              <p className="text-base leading-snug text-black sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Add Location */}
        <button
          type="button"
          className="mt-5 flex min-h-13 w-full items-center justify-center rounded-2xl border border-[#0055FF] px-4 text-lg font-bold text-[#0055FF] transition-colors hover:bg-blue-50 sm:text-xl"
        >
          Add location
        </button>
      </div>
    </section>
  );
}

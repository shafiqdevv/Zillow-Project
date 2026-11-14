// import {
//   Users,
//   UserRound,
//   ArrowRight,
//   Plus,
//   Star,
// } from "lucide-react";

// export default function BuildYourTeam() {
//   return (
//     <section className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
//       {/* Header */}
//       <div className="flex items-center gap-3">
//         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0647D9]">
//           <Users size={21} />
//         </div>

//         <div>
//           <h2 className="text-lg font-bold text-gray-900">
//             Build your team
//           </h2>

//           <p className="mt-1 text-xs text-gray-500">
//             Get expert help along the way.
//           </p>
//         </div>
//       </div>

//       {/* Agent Card */}
//       <div className="mt-5 rounded-lg border border-gray-200 p-4">
//         <div className="flex items-center gap-3">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
//             <UserRound size={25} />
//           </div>

//           <div className="min-w-0">
//             <h3 className="text-sm font-bold text-gray-900">
//               Find a buyer's agent
//             </h3>

//             <p className="mt-1 text-xs text-gray-500">
//               Get help finding your dream home.
//             </p>
//           </div>
//         </div>

//         <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
//           <Star size={14} className="fill-yellow-400 text-yellow-400" />
//           <span>Connect with experienced local agents</span>
//         </div>

//         <button
//           type="button"
//           className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#0647D9] px-4 py-2.5 text-sm font-semibold text-[#0647D9] transition-colors hover:bg-blue-50"
//         >
//           Find an agent
//           <ArrowRight size={16} />
//         </button>
//       </div>

//       {/* Add Team Member */}
//       <button
//         type="button"
//         className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100"
//       >
//         <Plus size={17} />
//         Add someone to your team
//       </button>
//     </section>
//   );
// }


import { UserRound } from "lucide-react";

export default function BuildYourTeam() {
  return (
    <section className="w-full">
      <h2 className="mb-3 text-xl font-bold text-black">
        Build your team
      </h2>

      <div className="rounded-xl border border-[#D1D1D8] p-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#071B70] text-[#66D9FF]">
          <UserRound size={20} fill="currentColor" />
        </div>

        <h3 className="mt-3 text-base font-bold text-black">
          Choose your agent
        </h3>

        <p className="mt-1 text-sm leading-[1.5] text-[#515B70]">
          An agent guides you through pricing, offers, negotiations, and more.
          Explore agents and pick someone you trust to advise you.
        </p>

        <button
          type="button"
          className="mt-4 flex h-8 w-full items-center justify-center rounded-lg border border-[#A5A8B5] text-xs font-semibold text-black transition-colors hover:bg-gray-50"
        >
          Find an agent
        </button>
      </div>
    </section>
  );
}

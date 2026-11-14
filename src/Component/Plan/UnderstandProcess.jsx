// import {
//   BookOpen,
//   Home,
//   KeyRound,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// export default function UnderstandProcess() {
//   const resources = [
//     {
//       title: "Renting vs. buying",
//       description: "Compare the costs and benefits of each option.",
//       icon: <Home size={20} />,
//     },
//     {
//       title: "Know before you buy",
//       description: "Learn what to consider before purchasing a home.",
//       icon: <BookOpen size={20} />,
//     },
//     {
//       title: "How to buy a home",
//       description: "Explore the steps of the home-buying process.",
//       icon: <KeyRound size={20} />,
//     },
//   ];

//   return (
//     <section className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
//       {/* Header */}
//       <div className="flex items-center gap-3">
//         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0647D9]">
//           <BookOpen size={21} />
//         </div>

//         <div>
//           <h2 className="text-lg font-bold text-gray-900">
//             Understand the process
//           </h2>

//           <p className="mt-1 text-xs text-gray-500">
//             Helpful resources for your home journey.
//           </p>
//         </div>
//       </div>

//       {/* Resources */}
//       <div className="mt-5 divide-y divide-gray-200">
//         {resources.map((resource, index) => (
//           <button
//             key={index}
//             type="button"
//             className="group flex w-full items-center gap-3 py-4 text-left first:pt-0 last:pb-0"
//           >
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-600 transition-colors group-hover:bg-blue-50 group-hover:text-[#0647D9]">
//               {resource.icon}
//             </div>

//             <div className="min-w-0 flex-1">
//               <h3 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#0647D9]">
//                 {resource.title}
//               </h3>

//               <p className="mt-1 text-xs leading-relaxed text-gray-500">
//                 {resource.description}
//               </p>
//             </div>

//             <ChevronRight
//               size={18}
//               className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0647D9]"
//             />
//           </button>
//         ))}
//       </div>

//       {/* More Resources */}
//       <button
//         type="button"
//         className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
//       >
//         Explore all resources
//         <ArrowRight size={16} />
//       </button>
//     </section>
//   );
// }



import { Building2, House, Lightbulb } from "lucide-react";

export default function UnderstandProcess() {
  const resources = [
    {
      title: "Renting vs. Buying",
      description:
        "How to weigh your options based on what matters most.",
      icon: <Building2 size={29} fill="currentColor" strokeWidth={2.5} />,
    },
    {
      title: "Know before you buy",
      description:
        "Readiness is a mix of finances, timing, and lifestyle.",
      icon: <House size={29} fill="currentColor" strokeWidth={2.5} />,
    },
    {
      title: "How to buy a home",
      description:
        "A simple overview, from checking finances to closing.",
      icon: <Lightbulb size={30} fill="currentColor" strokeWidth={2.5} />,
    },
  ];

  return (
    <section className="w-full">
      <h2 className="mb-3 text-xl font-bold leading-tight text-black">
        Understand the process
      </h2>

      <div className="flex flex-col gap-[9px]">
        {resources.map((resource, index) => (
          <article
            key={index}
            className="min-h-[155px] rounded-[10px] border border-[#D1D1D8] p-3"
          >
            <div className="flex h-8 items-center text-[#5200A5]">
              {resource.icon}
            </div>

            <h3 className="mt-3 text-[15px] font-bold leading-5 text-black">
              {resource.title}
            </h3>

            <p className="mt-1 text-[13px] leading-[19px] text-[#515B70]">
              {resource.description}
            </p>

            <button
              type="button"
              className="mt-2 text-[13px] font-semibold text-[#0055FF] hover:underline"
            >
              Learn more
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

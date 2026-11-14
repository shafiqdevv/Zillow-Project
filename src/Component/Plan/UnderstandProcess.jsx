
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
              className="mt-2 text-[13px] font-semibold text-[#0055FF] hover:underline cursor-pointer"
            >
              Learn more
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

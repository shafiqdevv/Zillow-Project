const sections = [
  {
    title: "Buy a home",
    description:
      "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
    button: "Find a local agent",
    image:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/55/2025/04/homepage-spot-agent-lg.webp",
    navLink: "/findALocalAgent",
  },
  {
    title: "Rent a home",
    description:
      "We are creating a seamless online experience — from shopping on the largest rental network, to applying to paying.",
    button: "Find rentals",
    image:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/55/2025/04/homepage-spot-rent-lg.webp",
    navLink: "/findRentals",
  },
  {
    title: "Sell a home",
    description:
      "No matter what path you take to sell your home, we can help you navigate a successful sale.",
    button: "See your options",
    image:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/55/2025/04/homepage-spot-sell-lg.webp",
    navLink: "/seeYourOption",
  },
];
import { NavLink } from "react-router-dom";
function Section3() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl border border-gray-400 bg-white px-6 py-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl sm:px-7"
          >
            {/* Image */}
            <div className="mb-5 flex h-36 w-full items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="h-24 w-24 rounded-full bg-[#f5f8fc]" />
              )}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
              {item.description}
            </p>

            {/* Button */}
            <NavLink to={item.navLink}
              type="button"
              className="mt-7 rounded-xl border-1 border-[#006AFF] px-6 py-3 text-sm font-bold text-[#006AFF] transition-colors duration-300 hover:bg-blue-100 cursor-pointer"
            >
              {item.button}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;


import {
  FaSignHanging,
  FaHouse,
  FaBuilding,
} from "react-icons/fa6";

const audienceStats = [
  {
    id: 1,
    icon: FaSignHanging,
    title: "41% to buy or sell",
    description:
      "Nearly 41% of people who visited Zillow and/or Trulia in the past 12 months are planning to buy and/or sell a home in the next 12 months.",
  },
  {
    id: 2,
    icon: FaHouse,
    title: "194 million",
    description:
      "More than 194 million average monthly unique users visited Zillow Group brands’ mobile apps and websites in Q2 2019.",
  },
  {
    id: 3,
    icon: FaBuilding,
    title: "Most visited rental network",
    description:
      "Zillow Rentals is the most visited rental network.",
  },
];

function AudienceSection() {
  return (
    <section className="w-full bg-[#071f66] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-[1250px]">

        {/* Heading */}
        <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Zillow Group Audience
        </h2>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12">

          {audienceStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >

                {/* Icon */}
                <div className="flex h-40 items-center justify-center sm:h-44">
                  <Icon className="text-[125px] text-[#0875ff] sm:text-[145px]" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-extrabold leading-snug sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-[380px] text-base leading-[1.65] text-white sm:text-lg">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Source */}
        <p className="mx-auto mt-20 max-w-[1000px] text-center text-[10px] leading-relaxed text-white sm:text-xs">
          Source: 41% stat: Zillow Group Tracking Survey, Q2 2019.
          194 million stat: Google Analytics and Adobe Analytics.
          Rental network claim: Comscore Media Metrix® Multi-Platform,
          Key Measures, Custom-defined list including: Zillow Rentals,
          Apartments.com Network, RentPath Network, Rent.com & Homes.com
          Network, Total Visits, July 2020, United States. Zillow Rentals
          is the deduplicated reach of Zillow.com Rentals, Trulia.com
          Rentals and HotPads.com.
        </p>

      </div>
    </section>
  );
}

export default AudienceSection;

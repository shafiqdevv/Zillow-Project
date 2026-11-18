
import { Star, Phone, Award } from "lucide-react";

// Reusable Agent Card
function AgentCard({ agent }) {
  return (
    <div className="flex min-w-0 flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:p-5">

      {/* Agent Image */}
      <div className="relative mx-auto shrink-0 sm:mx-0">
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-3xl font-bold text-gray-400 sm:h-32 sm:w-32">
          {agent.initials}
        </div>

        {/* Team Badge */}
        {agent.badge && (
          <div className="absolute -left-2 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#063B50] text-[9px] font-bold text-white shadow">
            {agent.badge}
          </div>
        )}

        {/* Top Agent */}
        {agent.topAgent && (
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[9px] font-bold shadow-md">
            <Award size={15} className="text-blue-600" />
            <span>Top Agent</span>
          </div>
        )}
      </div>

      {/* Agent Information */}
      <div className="min-w-0 flex-1">

        {/* Name and Rating */}
        <div className="flex flex-wrap items-start justify-between gap-2">

          <div className="min-w-0">
            <span className="mb-1 inline-block rounded-sm bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700">
              TEAM
            </span>

            <h3 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
              {agent.name}
            </h3>

            <p className="truncate text-sm text-gray-600">
              {agent.company}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-sm">
            <span className="font-bold text-gray-900">
              {agent.rating}
            </span>

            <Star size={15} fill="#006AFF" className="text-[#006AFF]" />

            <span className="text-gray-500">
              ({agent.reviews})
            </span>
          </div>
        </div>

        {/* Agent Statistics */}
        <div className="mt-3 space-y-1 text-sm">

          <p className="text-gray-600">
            <strong className="text-gray-900">{agent.priceRange}</strong>
            {" "}team price range
          </p>

          <p className="text-gray-600">
            <strong className="text-gray-900">{agent.sales}</strong>
            {" "}team sales last 12 months
          </p>

          <p className="text-gray-600">
            <strong className="text-gray-900">{agent.totalSales}</strong>
            {" "}team sales in {agent.city}
          </p>

        </div>
      </div>
    </div>
  );
}


// Get Help Card
function GetHelpCard() {
  return (
    <div className="flex min-h-[185px] items-center gap-5 rounded-md bg-[#F0F9FF] p-6 sm:p-8">

      <Phone
        size={34}
        fill="#174EA6"
        className="shrink-0 text-[#174EA6]"
      />

      <div>
        <h3 className="text-lg font-bold text-gray-900">
          Get help finding an agent
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-gray-700">
          We'll pair you with a Zillow Premier Agent who has the inside scoop on your market.
        </p>

        <button className="mt-3 font-semibold text-[#174EA6] hover:underline">
          Connect with a local agent
        </button>
      </div>

    </div>
  );
}


// Main Component
function AgentListings() {

  // Temporary structure - We will move this to a separate data file later.
  const agents = [
    {
      id: 1,
      name: "Matt Laricy",
      company: "Americorp Real Estate",
      rating: "5.0",
      reviews: "2,037",
      priceRange: "$43K - $4.3M",
      sales: "565",
      totalSales: "5,924",
      city: "Chicago",
      initials: "ML",
      badge: "LARICY",
      topAgent: true,
    },
    {
      id: 2,
      name: "Patrick Shino",
      company: "FULTON GRACE REALTY",
      rating: "5.0",
      reviews: "1,330",
      priceRange: "$115K - $2.7M",
      sales: "142",
      totalSales: "664",
      city: "Chicago",
      initials: "PS",
      badge: "",
      topAgent: false,
    },
    {
      id: 3,
      name: "Sam B Shaffer",
      company: "Chicago Properties",
      rating: "5.0",
      reviews: "897",
      priceRange: "$130K - $5.7M",
      sales: "106",
      totalSales: "2,041",
      city: "Chicago",
      initials: "SS",
      badge: "CHI",
      topAgent: true,
    },
    {
      id: 4,
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred LLC",
      rating: "5.0",
      reviews: "939",
      priceRange: "$68K - $3.1M",
      sales: "746",
      totalSales: "3,396",
      city: "Chicago",
      initials: "VP",
      badge: "V",
      topAgent: true,
    },
    {
      id: 5,
      name: "Bari Levine Bruszer",
      company: "Refine Residential",
      rating: "5.0",
      reviews: "576",
      priceRange: "$114K - $4.3M",
      sales: "119",
      totalSales: "2,055",
      city: "Chicago",
      initials: "BL",
      badge: "",
      topAgent: true,
    },
  ];

  return (
    <section className="w-full bg-white px-4 pb-12 pt-8 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mx-auto mb-8 max-w-3xl text-center">

        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Real Estate Agents in Chicago, IL
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          With over a million agents from all the top brokerages, a local agent knows your market and can guide you through the process from start to finish
        </p>

      </div>

      {/* Agents Grid */}
      <div className="mx-auto grid max-w-[1075px] grid-cols-1 gap-5 md:grid-cols-2">

        {agents.map((agent, index) => (
          <div key={agent.id}>
            <AgentCard agent={agent} />
          </div>
        )).reduce((result, card, index) => {
          result.push(card);

          // Insert Get Help Card after the second agent
          if (index === 1) {
            result.push(
              <div key="get-help">
                <GetHelpCard />
              </div>
            );
          }

          return result;
        }, [])}

      </div>

      {/* View More */}
      <div className="mt-10 flex justify-center">
        <button className="rounded-md border border-[#006AFF] px-5 py-2 text-sm font-semibold text-[#006AFF] transition hover:bg-blue-50">
          View more
        </button>
      </div>

    </section>
  );
}

export default AgentListings;

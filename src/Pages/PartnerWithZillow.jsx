
import Footer from "../Component/common/Footer";
import AudienceSection from "../Component/PartnerWithZillow/AudienceSection";

const industries = [
  {
    id: "agent",
    title: "I'm an agent or broker",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900",
  },
  {
    id: "property-manager",
    title: "I'm a property manager",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900",
  },
  {
    id: "landlord",
    title: "I'm a landlord",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900",
  },
  {
    id: "lender",
    title: "I'm a lender or loan officer",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900",
  },
  {
    id: "builder",
    title: "I'm a builder",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900",
  },
  {
    id: "advertiser",
    title: "I am a brand or local advertiser",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },
];

function PartnerWithZillow({ onSelect }) {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-10">

      {/* Header */}
      <header className="mx-auto mb-16 max-w-5xl text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-[50px]">
          Partner with Zillow to Grow Your Business
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg">
          Reach millions of buyers, sellers and renters on the
          largest real estate network on the web.
        </p>

        <div className="mx-auto mt-8 h-[3px] w-36 bg-gray-300" />

        <h2 className="mt-9 text-xl font-extrabold text-[#171717] sm:text-2xl">
          Select your industry to get started
        </h2>
      </header>

      {/* Industry Cards */}
      <section className="mx-auto grid max-w-[1380px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {industries.map((industry) => (
          <article
            key={industry.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl"
          >
            {/* Image */}
            <div className="h-[210px] w-full overflow-hidden sm:h-[220px]">
              <img
                src={industry.image}
                alt={industry.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            {/* Content */}
            <div className="flex min-h-[260px] flex-1 flex-col items-center justify-between px-5 py-10 sm:px-7">

              <h3 className="text-center text-xl font-extrabold leading-snug text-[#171717] sm:text-2xl">
                {industry.title}
              </h3>

              <button
                type="button"
                onClick={() => onSelect?.(industry.id)}
                className="mt-10 w-full max-w-[260px] rounded-xl bg-[#0047e8] px-6 py-4 text-base font-bold text-white transition-colors duration-200 hover:bg-[#0035b5] active:scale-[0.98]"
              >
                Get started
              </button>

            </div>
          </article>
        ))}

      </section>

      {/* Audience Section */}
      <div className="-mx-4 mt-20 sm:-mx-6 lg:-mx-10">
        <AudienceSection />
      </div>
      {/* Footer Section */}
      <div className="-mx-4 mt-20 sm:-mx-6 lg:-mx-10">
        <Footer/>
      </div>

    </main>
  );
}

export default PartnerWithZillow;

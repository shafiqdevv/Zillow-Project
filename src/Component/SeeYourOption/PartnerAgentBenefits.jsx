
import { ArrowRight, CheckCircle2, Sparkles, Users } from "lucide-react";

const agentBenefits = [
  {
    id: 1,
    icon: Sparkles,
    title: "Sell for more with Showcase",
    description: (
      <>
        Select partner agents offer{" "}
        <a
          href="#showcase"
          className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
        >
          Showcase
        </a>{" "}
        — a premium listing experience with 3D tours and interactive
        floor plans — at no extra cost. Showcase listings sell for $7k
        more on average.
      </>
    ),
    image:
      "https://delivery.digitalassets.zillowgroup.com/api/public/content/Sell-for-more-Illustration2x_CMS_Large.png?v=9dc1d40b",
    imageAlt: "Showcase listing illustration",
  },
  {
    id: 2,
    icon: Users,
    title: "Maximize your home's visibility",
    description: (
      <>
        Zillow helps you{" "}
        <a
          href="#sell-home"
          className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
        >
          sell your home
        </a>{" "}
        with partner agents to reach a large audience of buyers
        through public listings.
      </>
    ),
    image:
      "https://delivery.digitalassets.zillowgroup.com/api/public/content/Maximize-your-homeIllustration2x_CMS_Large.png?v=6a1f4b96",
    imageAlt: "Home visibility illustration",
  },
];

function PartnerAgentBenefits() {
  return (
    <section className="bg-[#147568] px-10 py-5 rounded-lg lg:mx-5">
      <div className="mx-auto max-w-[1300px]">

        {/* Section Header */}
        <header className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Sell with a{" "}
            <span className="text-[#91ED69]">
              Zillow partner agent
            </span>
          </h2>
        </header>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:gap-5">

          {agentBenefits.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-4 py-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >

              {/* Image */}
              <div className="flex h-[190px] w-full shrink-0 items-center justify-center sm:h-[205px]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-40 w-40 object-contain transition-transform duration-500 hover:scale-105 sm:h-44 sm:w-44"
                />
              </div>

              {/* Card Content */}
              <div className="flex w-full flex-1 flex-col items-center justify-center">
                <h3 className="text-xl font-extrabold leading-snug text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[560px] text-base text-gray-700 sm:text-">
                  {item.description}
                </p>
              </div>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-5 max-w-4xl text-center sm:mt-10">

          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#91ED69]">
            <CheckCircle2 size={27} />
          </div>

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Find the right selling option for your home
          </h3>

          <p className="mx-auto mt-2 max-w-3xl text-base text-white">
            Answer a few questions to connect with a Zillow partner
            agent who offers Showcase or explore other selling options
            — all in 3 minutes with no commitment.
          </p>

          <a
            href="#get-started"
            className="mt-5 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#147568] transition-all duration-300 hover:-translate-y-1 hover:bg-[#91ED69] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get started
            <ArrowRight size={20} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default PartnerAgentBenefits;

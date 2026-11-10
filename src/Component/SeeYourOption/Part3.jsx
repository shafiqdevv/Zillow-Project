
import {
  MoveRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const cashOfferBenefits = [
  {
    id: 1,
    icon: CheckCircle2,
    text: "Get an all-cash offer in select markets through our trusted partner, Opendoor.",
  },
  {
    id: 2,
    icon: Wrench,
    text: "Sell your home as-is and avoid the hassle of showings and repairs.",
  },
  {
    id: 3,
    icon: Clock,
    text: "Sell on your timeline and choose your preferred closing day.",
  },
];

function CashOfferSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <header className="mb-10 max-w-2xl sm:mb-14">
          <span className="text-sm font-bold uppercase tracking-wider text-[#006AFF]">
            Find your selling path
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore more selling options
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Sell your home your way. Choose the path that fits your
            needs, timeline, and goals.
          </p>
        </header>

        {/* Cash Offer Content */}
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-[#f7f9fc] lg:grid-cols-2">

          {/* Text Content */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#006AFF]">
              <ShieldCheck size={17} />
              A flexible way to sell
            </span>

            <h3 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Get a{" "}
              <span className="text-[#006AFF]">
                cash offer
              </span>
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore an alternative way to sell your home with a
              cash offer from a trusted partner.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-6">

              {cashOfferBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.id}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#006AFF]">
                      <Icon size={19} />
                    </div>

                    <p className="text-sm leading-7 text-gray-700 sm:text-base">
                      {item.text}
                    </p>
                  </li>
                );
              })}

            </ul>

            {/* Additional Information */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-900">
                Take about 3 minutes to check your eligibility.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                No commitment required.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#cash-offer"
              className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-[#006AFF] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006AFF] sm:text-base"
            >
              Get a cash offer
              <MoveRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Image */}
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-full">

            <img
              src="/CashOfferSection.jpg"
              alt="Beautiful residential home available for a cash offer"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
              <p className="text-sm font-bold text-gray-900">
                A simpler selling experience
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
                Explore a selling option designed around your timeline.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CashOfferSection;

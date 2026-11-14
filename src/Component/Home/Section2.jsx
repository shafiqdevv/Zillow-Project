
import GetYourBuyAbility from "../GetYourBuyAbility/GetYourBuyAbility";

const images = [
  {
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/2017_ZillowExteriors_218-1.jpg",
    alt: "Modern house exterior",
  },
  {
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/GettyImages-472069091-Edit.jpg",
    alt: "Beautiful home",
  },
  {
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/shutterstock_529108441.jpg",
    alt: "Residential property",
  },
];

function Section2() {
  return (
    <section className="overflow-hidden bg-[#f5f8fc] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-[#006AFF]">
            Zillow BuyAbility
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Find homes you can afford with{" "}
            <span className="text-[#006AFF]">
              BuyAbility.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover your buying power and find a home that fits your budget.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Left Card */}
          <GetYourBuyAbility />

          {/* Right Image Gallery */}
          <div className="min-w-0 lg:col-span-7">
            <h3 className="mb-5 text-lg font-bold text-gray-900 sm:text-xl">
              Discover homes within your budget
            </h3>

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[60%] lg:w-[75%] xl:w-[65%]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-72 lg:h-80"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section2;

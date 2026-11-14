
function Why() {
  const features = [
    {
      image:
        "https://delivery.digitallibrary.zillowgroup.com/public/clipboard-light_svg_Original.svg",
      title: "Confidence with no credit impact",
      description: (
        <>
          Our Verified Pre-approval will have <strong>no impact on your credit score</strong>,
          so you can gain clarity on what you qualify for and start shopping
          with confidence.
        </>
      ),
    },
    {
      image:
        "https://delivery.digitallibrary.zillowgroup.com/public/calendar-clock-light_svg_Original.svg",
      title: "Step-by-step guidance",
      description:
        "We guide every customer step-by-step through the mortgage process — what to do, what to expect, and what comes next — from start to finish.",
    },
    {
      image:
        "https://delivery.digitallibrary.zillowgroup.com/public/calculator-light_svg_Original.svg",
      title: "Loan options for your budget",
      description:
        "We offer a variety of loan options — Conventional, FHA, VA, ARM, Jumbo — and down payment options as low as 3% or even 0% for VA loans.",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#006AFF]">
            Why Zillow Home Loans
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why choose Zillow Home Loans?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Get the support, flexibility, and confidence you need to make
            your homeownership journey easier.
          </p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-7 flex items-center justify-center rounded-2xl">
                <img
                  src={feature.image}
                  alt=""
                  className="h-40 w-40 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                {feature.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Why;


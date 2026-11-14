
const articles = [
  {
    image: "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/resources-article-1%402x.jpg", // Add image src here
    title: "Pre-qualified vs. pre-approved: What’s the difference?",
    link: "#",
  },
  {
    image: "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/resources-article-2%402x.jpg", // Add image src here
    title: "How your credit score is calculated",
    link: "#",
  },
  {
    image: "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/resources-article-3%402x.jpg", // Add image src here
    title: "How are mortgage rates determined?",
    link: "#",
  },
];

function LearnMore() {
  return (
    <section className="w-full bg-[#14766B] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
            Learn more about home financing
          </h2>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {articles.map((article, index) => (
            <article
              key={index}
              className="flex min-h-[420px] flex-col rounded-2xl bg-white p-5 sm:min-h-[440px] sm:p-6"
            >

              {/* Image */}
              <div className="h-[200px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[220px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold leading-snug text-gray-950 sm:text-xl">
                {article.title}
              </h3>

              {/* Read Article */}
              <a
                href={article.link}
                className="mt-auto inline-block w-fit pt-8 text-base font-bold text-[#003B95] underline decoration-1 underline-offset-2 transition-colors duration-200 hover:text-[#006AFF] sm:text-lg"
              >
                Read article
              </a>

            </article>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-sm font-semibold leading-7 text-white sm:text-base">
            Looking for additional mortgage resources? Visit our{" "}
            <a
              href="#"
              className="font-bold underline underline-offset-2 hover:text-blue-100"
            >
              Learning Center
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default LearnMore;

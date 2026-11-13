
import { ArrowUpRight, Clock3, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const articles = [
  {
    id: 1,
    readTime: "8 min read",
    title: "14 tips for selling your home fast and for more money",
    image: "/SellingResourcesSection1.jpg",
    href: "#selling-tips",
    category: "Selling Tips",
  },
  {
    id: 2,
    readTime: "6 min read",
    title: "How to choose the right real estate agent",
    image: "/SellingResourcesSection1.jpg",
    href: "#choose-agent",
    category: "Real Estate Agents",
  },
  {
    id: 3,
    readTime: "15 min read",
    title: "Steps to selling a house",
    image: "/SellingResourcesSection1.jpg",
    href: "#selling-process",
    category: "Selling Guide",
  },
  {
    id: 4,
    readTime: "7 min read",
    title: "When is the best time to sell a house?",
    image: "/SellingResourcesSection1.jpg",
    href: "#best-time-to-sell",
    category: "Market Insights",
  },
];

function SellingResourcesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-10 sm:px-10 md:px-25 lg:px-30">

      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col gap-4 sm:mb-12"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-blue-600">
          <BookOpen size={18} />
          Selling Resources
        </span>

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Go-to resources for a successful sale
        </h2>

        <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Get practical guides and strategies for every step of your
          selling process.
        </p>
      </motion.header>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Article Image */}
            <a
              href={article.href}
              aria-label={`Read ${article.title}`}
              className="relative block aspect-4/3 overflow-hidden bg-gray-100"
            >
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                {article.category}
              </span>
            </a>

            {/* Article Content */}
            <div className="flex flex-1 flex-col p-5">
              <p className="mb-3 flex items-center gap-2 text-sm text-gray-500 border border-gray-500 w-30 h-8 justify-center rounded-full">
                <Clock3 size={15} />
                {article.readTime}
              </p>

              <h3 className="mb-5 text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-blue-600">
                {article.title}
              </h3>

              <a
                href={article.href}
                className="mt-auto inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-800"
              >
                Read article
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      <footer className="m-5">
        <p className="text-center">As you take the steps to sell your home, learn what to expect with our
          <span> </span>
          <a href="" className="underline text-blue-700 text-lg">Sellers Guide</a>
        </p>
      </footer>
    </section>
  );
}

export default SellingResourcesSection;

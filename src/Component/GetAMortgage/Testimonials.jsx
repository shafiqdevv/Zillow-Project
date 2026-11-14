
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ==========================================
// TESTIMONIAL DATA
// ==========================================

const testimonials = [
  {
    type: "text",
    color: "#6500B8",
    quoteColor: "#D99AFF",
    quote:
      "As a first time home buyer, my [Zillow Home Loans] loan officer made me feel at ease and welcomed all questions I had with so much patience.",
    name: "Michelle",
    location: "Arizona",
  },
  {
    type: "image",
    src: "/images/testimonial-1.jpg",
    alt: "Happy Zillow Home Loans customer",
  },
  {
    type: "text",
    color: "#14766B",
    quoteColor: "#91F078",
    quote:
      "My [Zillow Home Loans] loan officer was incredibly professional, knowledgeable, and genuinely committed to helping me find the best financial solution.",
    name: "Ruslan",
    location: "New Jersey",
  },
  {
    type: "image",
    src: "/images/testimonial-2.jpg",
    alt: "Zillow Home Loans customer",
  },
  {
    type: "text",
    color: "#E76B45",
    quoteColor: "#FFE0A8",
    quote:
      "The entire mortgage process was smooth and easy. I received excellent guidance every step of the way.",
    name: "Customer",
    location: "California",
  },
  {
    type: "image",
    src: "/images/testimonial-3.jpg",
    alt: "Happy homeowner",
  },
];

// ==========================================
// TESTIMONIAL CARD
// ==========================================

function TestimonialCard({ item }) {
  if (item.type === "image") {
    return (
      <div className="h-full w-full overflow-hidden rounded-[22px]">
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-full w-full flex-col justify-between rounded-[22px] p-7 text-white sm:p-8 lg:p-10"
      style={{ backgroundColor: item.color }}
    >
      {/* Quote Icon */}
      <div
        className="text-7xl font-black leading-[0.7]"
        style={{ color: item.quoteColor }}
        aria-hidden="true"
      >
        “
      </div>

      {/* Testimonial */}
      <h3 className="my-6 text-lg font-bold leading-snug sm:text-xl lg:text-[22px]">
        {item.quote}
      </h3>

      {/* Customer Info */}
      <p className="text-sm font-medium text-white/90 sm:text-base">
        {item.name} <span className="mx-1">|</span> {item.location}
      </p>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

function Testimonials() {
  const containerRef = useRef(null);
  const firstCardRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDistance, setSlideDistance] = useState(0);

  const maxIndex = testimonials.length - 1;

  // Calculate card width + gap responsively
  useEffect(() => {
    const updateDistance = () => {
      if (!firstCardRef.current) return;

      const cardWidth = firstCardRef.current.getBoundingClientRect().width;
      const styles = window.getComputedStyle(firstCardRef.current.parentElement);
      const gap = parseFloat(styles.columnGap) || 18;

      setSlideDistance(cardWidth + gap);
    };

    updateDistance();

    const observer = new ResizeObserver(updateDistance);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (firstCardRef.current) {
      observer.observe(firstCardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-[42px]">
              Buyers like you{" "}
              <span className="mx-1 inline-block text-red-500">❤️</span>{" "}
              Zillow Home Loans
            </h2>

            <p className="mt-4 text-base text-gray-800 sm:text-lg">
              Here's how happy homeowners made home a reality with our loan officers.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex shrink-0 items-center gap-3">

            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-white"
            >
              <ChevronLeft size={25} strokeWidth={2} />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === maxIndex}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-950 transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-white"
            >
              <ChevronRight size={25} strokeWidth={2} />
            </button>

          </div>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden"
        >
          <motion.div
            className="flex gap-[18px]"
            animate={{
              x: -(activeIndex * slideDistance),
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 22,
              mass: 0.8,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                ref={index === 0 ? firstCardRef : null}
                className="h-[380px] w-[82vw] max-w-[446px] shrink-0 sm:h-[400px] sm:w-[42vw] lg:h-[438px] lg:w-[31.5vw]"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

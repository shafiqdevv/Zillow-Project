
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
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2025/05/youngwoman_flowers.svg",
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
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2025/05/manwithwife_zhlphase2.png",
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
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2025/05/coupleoustidehouse.svg",
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
          loading="lazy"
          draggable="false"
          className="h-full w-full select-none object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-full w-full flex-col justify-between rounded-[22px] p-7 text-white sm:p-8"
      style={{ backgroundColor: item.color }}
    >
      {/* Quote Icon */}
      <div
        className="text-6xl font-black leading-[0.7] sm:text-7xl"
        style={{ color: item.quoteColor }}
        aria-hidden="true"
      >
        “
      </div>

      {/* Testimonial */}
      <h3 className="my-5 text-base font-bold leading-snug sm:text-lg">
        {item.quote}
      </h3>

      {/* Customer Info */}
      <p className="text-sm font-bold text-white/90">
        {item.name} <span className="mx-1">|</span> {item.location}
      </p>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

function Testimonials() {
  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragData = useRef({
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const maxIndex = testimonials.length - 1;

  // ==========================================
  // UPDATE ACTIVE SLIDE
  // ==========================================

  const updateActiveIndex = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".testimonial-card");
    if (!card) return;

    const styles = window.getComputedStyle(card.parentElement);
    const gap = parseFloat(styles.columnGap) || 18;

    const distance = card.offsetWidth + gap;

    const index = Math.round(slider.scrollLeft / distance);

    setActiveIndex(Math.min(index, maxIndex));
  };

  // ==========================================
  // MOUSE WHEEL SCROLL
  // ==========================================

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    };

    slider.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // ==========================================
  // MOUSE DRAG
  // ==========================================

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;

    const slider = sliderRef.current;
    if (!slider) return;

    dragData.current = {
      startX: e.clientX,
      scrollLeft: slider.scrollLeft,
      moved: false,
    };

    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const walk = e.clientX - dragData.current.startX;

    if (Math.abs(walk) > 5) {
      dragData.current.moved = true;
    }

    slider.scrollLeft = dragData.current.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    updateActiveIndex();
  };

  // ==========================================
  // NAVIGATION
  // ==========================================

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".testimonial-card");
    if (!card) return;

    const styles = window.getComputedStyle(card.parentElement);
    const gap = parseFloat(styles.columnGap) || 18;

    const distance = card.offsetWidth + gap;

    const nextIndex = Math.max(
      0,
      Math.min(activeIndex + direction, maxIndex)
    );

    slider.scrollTo({
      left: nextIndex * distance,
      behavior: "smooth",
    });
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Buyers like you{" "}
              <span className="mx-1 inline-block text-red-500">❤️</span>{" "}
              Zillow Home Loans
            </h2>

            <p className="mt-3 text-sm font-medium text-gray-800 sm:text-base">
              Here's how happy homeowners made home a reality with our loan officers.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex shrink-0 items-center gap-2">

            <button
              onClick={() => scrollSlider(-1)}
              aria-label="Previous testimonials"
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200
                ${
                  activeIndex === 0
                    ? "border-gray-300 text-gray-400"
                    : "border-gray-500 text-gray-950 hover:bg-gray-100"
                }`}
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <button
              onClick={() => scrollSlider(1)}
              aria-label="Next testimonials"
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200
                ${
                  activeIndex === maxIndex
                    ? "border-gray-300 text-gray-400"
                    : "border-gray-500 text-gray-950 hover:bg-gray-100"
                }`}
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>

          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={updateActiveIndex}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex w-full overflow-x-auto overflow-y-hidden scrollbar-hide`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <motion.div
            className="mx-auto flex w-max gap-[18px]"
            initial={false}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="testimonial-card h-70 w-[82vw] max-w-80 shrink-0"
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

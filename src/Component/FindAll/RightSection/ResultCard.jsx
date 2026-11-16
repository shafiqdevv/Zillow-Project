import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ResultCard({ images = [], propertyType, isNew }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-full overflow-hidden rounded-xl border border-gray-200 bg-blue-50 z-1">
      {/* Image Section */}
      <div className="group relative h-[220px] w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
          pagination={{ clickable: true }}
          className="result-swiper h-full w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Favorite */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute left-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-black/20 text-white backdrop-blur-sm"
        >
          <FaHeart
            size={17}
            className={isFavorite ? "text-blue-500" : "text-white"}
          />
        </button>

        {/* Labels */}
        <div className="absolute right-3 top-3 z-20 flex gap-2">
          <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold">
            {propertyType}
          </span>

          {isNew && (
            <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold">
              New
            </span>
          )}
        </div>

        {/* Previous */}
        <button
          ref={prevRef}
          className="absolute left-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md group-hover:flex"
        >
          <FaChevronLeft size={13} />
        </button>

        {/* Next */}
        <button
          ref={nextRef}
          className="absolute right-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md group-hover:flex"
        >
          <FaChevronRight size={13} />
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full p-4">
        <strong>$1,595</strong>
      </div>
    </div>
  );
}

export default ResultCard;

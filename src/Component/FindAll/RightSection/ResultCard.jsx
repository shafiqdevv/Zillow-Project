
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import {
  FaHeart,
  FaRegHeart,
  FaEllipsisH,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ResultCard({
  images = [],
  price,
  originalPrice,
  discount,
  address,
  city,
  state,
  zipCode,
  propertyType,
  beds,
  baths,
  sqft,
  amenities = [],
  availableDate,
  listedAgo,
  isNew,
  isFeatured,
  petPolicy,
  leaseDuration,
  offerLabel,
  onCheckAvailability,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const validImages = images.filter(
    (image) => image && !image.includes("/.jpg")
  );

  const formatPrice = (value) =>
    value == null
      ? ""
      : `$${Number(value).toLocaleString("en-US")}`;

  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">

      {/* Image Section */}
      <div className="relative h-[210px] w-full overflow-hidden">

        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="result-swiper h-full w-full"
        >
          {validImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${propertyType || "Property"} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}

          {/* Previous Button */}
          <button
            className="swiper-button-prev-custom absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-md transition-all duration-200 hover:bg-white group-hover:opacity-100"
            aria-label="Previous image"
            type="button"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            className="swiper-button-next-custom absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-md transition-all duration-200 hover:bg-white group-hover:opacity-100"
            aria-label="Next image"
            type="button"
          >
            ❯
          </button>
        </Swiper>

        {/* Top Badges */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5">

          {propertyType && (
            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-gray-800 shadow-sm">
              {propertyType}
            </span>
          )}

          {(offerLabel || isNew) && (
            <span className="rounded-full bg-blue-700 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
              {offerLabel || "New Listing"}
            </span>
          )}

        </div>

        {/* Favorite */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Toggle favorite"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/40"
        >
          {isFavorite ? (
            <FaHeart size={25} className="text-red-500" />
          ) : (
            <FaRegHeart size={27} />
          )}
        </button>

        {/* Featured Badge */}
        {isFeatured && (
          <span className="absolute bottom-3 left-3 z-10 rounded-md bg-white/95 px-2 py-1 text-xs font-bold text-gray-800 shadow">
            Featured
          </span>
        )}

      </div>

      {/* Content Section */}
      <div className="p-3.5">

        {/* Price + More */}
        <div className="flex items-center justify-between gap-2">

          <div className="flex flex-wrap items-center gap-2">

            <strong className="text-[22px] font-extrabold tracking-tight text-gray-950">
              {formatPrice(price)}
              {price != null && "+"}
            </strong>

            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}

            <span className="text-xs text-gray-600">
              Fees may apply
            </span>

          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            aria-label="More property details"
            className="shrink-0 rounded-full p-2 text-blue-700 transition hover:bg-blue-50"
          >
            <FaEllipsisH size={19} />
          </button>

        </div>

        {/* Discount */}
        {discount > 0 && (
          <p className="mt-1 text-xs font-semibold text-green-700">
            {discount}% discount
          </p>
        )}

        {/* Address */}
        <div className="mt-1 truncate text-sm font-medium text-gray-600">
          {address}, {city}, {state} {zipCode}
        </div>

        {/* Property Features */}
        <div className="mt-3 flex flex-wrap gap-2">

          {beds != null && (
            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-800">
              {beds} bd
            </span>
          )}

          {baths != null && (
            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-800">
              {baths} ba
            </span>
          )}

          {sqft != null && (
            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-800">
              {sqft.toLocaleString("en-US")} sqft
            </span>
          )}

        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5 truncate text-xs text-gray-700">

            <span className="font-bold">
              {amenities[0]}
            </span>

            {amenities.length > 1 && (
              <>
                <span className="text-gray-400">•</span>
                <span className="truncate">
                  {amenities.length - 1} more amenities
                </span>
              </>
            )}

          </div>
        )}

        {/* Additional Details */}
        {showMore && (
          <div className="mt-3 space-y-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-700">

            {availableDate && (
              <p>
                <strong>Available:</strong> {availableDate}
              </p>
            )}

            {listedAgo && (
              <p>
                <strong>Listed:</strong> {listedAgo}
              </p>
            )}

            {petPolicy && (
              <p>
                <strong>Pet Policy:</strong> {petPolicy}
              </p>
            )}

            {leaseDuration && (
              <p>
                <strong>Lease:</strong> {leaseDuration}
              </p>
            )}

          </div>
        )}

        {/* Availability */}
        <button
          onClick={() => onCheckAvailability?.()}
          className="mt-3 w-full rounded-xl bg-blue-700 py-3 text-sm font-bold text-white transition duration-200 hover:bg-blue-800 active:scale-[0.98]"
        >
          Check availability
        </button>

      </div>
    </div>
  );
}

export default ResultCard;
